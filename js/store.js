/* ============================================================
   STORE  —  persistence + analytics computation
   ------------------------------------------------------------
   Data model (persisted to localStorage and to the save file):

   {
     version: 1,
     createdAt: ISO string,
     attempts: [
       {
         id:         unique attempt id
         passageId:  string
         title:      passage title (denormalized for history display)
         subject:    string
         system:     string
         difficulty: "Easy"|"Moderate"|"Hard"
         date:       ISO string (when finished)
         durationSec:number  (time spent in the section)
         total:      number of questions
         correct:    number correct
         incorrect:  number answered but wrong
         omitted:    number left blank
         answers: [ { qid, picked|null, correctL, isCorrect } ]
       }, ...
     ]
   }
   ============================================================ */
window.MCAT = window.MCAT || {};

(function () {
  const KEY = MCAT.STORAGE_KEY;

  // Resilient storage: use localStorage when available, otherwise fall back to
  // an in-memory store (e.g. private mode, file:// in some browsers, sandboxed
  // iframes). This guarantees the app never throws on read/write.
  const mem = {};
  let lsOk = false;
  try {
    const k = "__mcat_test__";
    window.localStorage.setItem(k, "1");
    window.localStorage.removeItem(k);
    lsOk = true;
  } catch (e) {
    lsOk = false;
  }
  const storage = {
    getItem: function (k) {
      if (lsOk) { try { return window.localStorage.getItem(k); } catch (e) { lsOk = false; } }
      return (k in mem) ? mem[k] : null;
    },
    setItem: function (k, v) {
      if (lsOk) { try { window.localStorage.setItem(k, v); return; } catch (e) { lsOk = false; } }
      mem[k] = String(v);
    },
    removeItem: function (k) {
      if (lsOk) { try { window.localStorage.removeItem(k); return; } catch (e) { lsOk = false; } }
      delete mem[k];
    }
  };
  MCAT.storagePersistent = function () { return lsOk; };

  function emptyData() {
    return {
      version: MCAT.SAVE_VERSION,
      createdAt: new Date().toISOString(),
      attempts: []
    };
  }

  function load() {
    try {
      const raw = storage.getItem(KEY);
      if (!raw) return emptyData();
      const d = JSON.parse(raw);
      if (!d || typeof d !== "object" || !Array.isArray(d.attempts)) return emptyData();
      return d;
    } catch (e) {
      console.warn("Failed to load save, starting fresh:", e);
      return emptyData();
    }
  }

  function save(data) {
    try {
      storage.setItem(KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error("Failed to save:", e);
      return false;
    }
  }

  function uid() {
    return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  }

  // ---- public API ----
  const Store = {
    getData: load,

    recordAttempt: function (attempt) {
      const data = load();
      attempt.id = attempt.id || uid();
      attempt.date = attempt.date || new Date().toISOString();
      data.attempts.push(attempt);
      save(data);
      return attempt;
    },

    resetAll: function () {
      save(emptyData());
    },

    replaceData: function (data) {
      // validate minimal shape
      if (!data || !Array.isArray(data.attempts)) {
        throw new Error("Invalid save file: missing attempts array.");
      }
      const clean = {
        version: data.version || MCAT.SAVE_VERSION,
        createdAt: data.createdAt || new Date().toISOString(),
        attempts: data.attempts
      };
      save(clean);
      return clean;
    },

    exportData: function () {
      return JSON.stringify(load(), null, 2);
    },

    // -------- analytics --------
    // Returns aggregate totals across (optionally) a filtered attempt set.
    totals: function (attempts) {
      attempts = attempts || load().attempts;
      let correct = 0, incorrect = 0, omitted = 0, total = 0;
      attempts.forEach(function (a) {
        correct += a.correct || 0;
        incorrect += a.incorrect || 0;
        omitted += a.omitted || 0;
        total += a.total || 0;
      });
      const answered = correct + incorrect;
      return {
        attempts: attempts.length,
        total: total,
        correct: correct,
        incorrect: incorrect,
        omitted: omitted,
        answered: answered,
        accuracy: answered ? Math.round((correct / answered) * 100) : 0,
        completion: total ? Math.round((answered / total) * 100) : 0
      };
    },

    // Daily accuracy series: [{date:'YYYY-MM-DD', accuracy, correct, answered}]
    dailyAccuracy: function (attempts) {
      attempts = attempts || load().attempts;
      const byDay = {};
      attempts.forEach(function (a) {
        const day = (a.date || "").slice(0, 10);
        if (!day) return;
        if (!byDay[day]) byDay[day] = { correct: 0, answered: 0 };
        byDay[day].correct += a.correct || 0;
        byDay[day].answered += (a.correct || 0) + (a.incorrect || 0);
      });
      return Object.keys(byDay).sort().map(function (day) {
        const d = byDay[day];
        return {
          date: day,
          correct: d.correct,
          answered: d.answered,
          accuracy: d.answered ? Math.round((d.correct / d.answered) * 100) : 0
        };
      });
    },

    // Breakdown grouped by a key function over attempts.
    breakdownBy: function (keyFn, attempts) {
      attempts = attempts || load().attempts;
      const groups = {};
      attempts.forEach(function (a) {
        const k = keyFn(a);
        if (!groups[k]) groups[k] = { key: k, correct: 0, incorrect: 0, omitted: 0, total: 0 };
        groups[k].correct += a.correct || 0;
        groups[k].incorrect += a.incorrect || 0;
        groups[k].omitted += a.omitted || 0;
        groups[k].total += a.total || 0;
      });
      return Object.values(groups).map(function (g) {
        const answered = g.correct + g.incorrect;
        g.accuracy = answered ? Math.round((g.correct / answered) * 100) : 0;
        g.answered = answered;
        return g;
      });
    },

    bySubject: function (attempts) {
      return Store.breakdownBy(function (a) { return a.subject || "Unknown"; }, attempts);
    },
    byDifficulty: function (attempts) {
      return Store.breakdownBy(function (a) { return a.difficulty || "Unknown"; }, attempts);
    },
    byTopic: function (attempts) {
      return Store.breakdownBy(function (a) { return a.system || a.subject || "Unknown"; }, attempts);
    },

    // Filter attempts by a date range (inclusive). Pass null to skip a bound.
    filterByDate: function (startISO, endISO, attempts) {
      attempts = attempts || load().attempts;
      return attempts.filter(function (a) {
        const d = (a.date || "").slice(0, 10);
        if (startISO && d < startISO) return false;
        if (endISO && d > endISO) return false;
        return true;
      });
    },

    // Attempts that occurred "today" (local date).
    todaysAttempts: function () {
      const today = new Date();
      const iso = today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");
      return load().attempts.filter(function (a) { return (a.date || "").slice(0, 10) === iso; });
    }
  };

  MCAT.Store = Store;
})();
