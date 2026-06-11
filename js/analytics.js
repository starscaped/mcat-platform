(function () {
  const S = MCAT.Store;

  // ---- date range controls ----
  let range = "all";       // 'today' | 'week' | 'all' | 'custom'
  let customStart = null, customEnd = null;

  function isoDay(d) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  function activeAttempts() {
    const all = S.getData().attempts;
    if (range === "all") return all;
    if (range === "today") {
      const t = isoDay(new Date());
      return S.filterByDate(t, t, all);
    }
    if (range === "week") {
      const end = new Date();
      const start = new Date(); start.setDate(start.getDate() - 6);
      return S.filterByDate(isoDay(start), isoDay(end), all);
    }
    if (range === "custom") {
      return S.filterByDate(customStart || null, customEnd || null, all);
    }
    return all;
  }

  function render() {
    const attempts = activeAttempts();
    const t = S.totals(attempts);

    // ---- Daily accuracy chart ----
    const daily = S.dailyAccuracy(attempts);
    document.getElementById("lineChart").innerHTML = MCAT.Charts.line(daily);

    // ---- Score donut ----
    document.getElementById("scoreDonut").innerHTML =
      MCAT.Charts.donut(t.accuracy, "#1c7a32") +
      '<div class="label"><div class="big">' + (t.answered ? t.accuracy + "%" : "—") + '</div><div class="small">Accurate</div></div>';
    document.getElementById("scoreList").innerHTML =
      row("Correct", t.correct, "txt-green") +
      row("Incorrect", t.incorrect, "txt-red") +
      row("Omitted", t.omitted, "txt-muted") +
      row("Questions answered", t.answered, "");

    // ---- Usage donut ----
    document.getElementById("usageDonut").innerHTML =
      MCAT.Charts.donut(t.completion, "#5b6cf0") +
      '<div class="label"><div class="big">' + t.completion + '%</div><div class="small">Complete</div></div>';
    document.getElementById("usageList").innerHTML =
      row("Passages attempted", t.attempts, "") +
      row("Questions seen", t.total, "") +
      row("Questions answered", t.answered, "");

    // ---- Strong / weak topics ----
    const topics = S.byTopic(attempts).filter(function (g) { return g.answered > 0; });
    topics.sort(function (a, b) { return b.accuracy - a.accuracy || b.answered - a.answered; });
    renderTopics("strongTopics", topics.slice(0, 4), "No graded topics yet.");
    const weak = topics.slice().sort(function (a, b) { return a.accuracy - b.accuracy || b.answered - a.answered; });
    renderTopics("weakTopics", weak.slice(0, 4), "No graded topics yet.");

    // ---- Subject breakdown ----
    renderBreakdown("subjectRows", S.bySubject(attempts), "Subject");

    // ---- Difficulty breakdown ----
    renderBreakdown("difficultyRows", S.byDifficulty(attempts), "Difficulty");

    // ---- Previous activity ----
    renderActivity(attempts);
  }

  function row(k, v, cls) {
    return '<div class="stat-row"><span class="k">' + k + '</span><span class="v ' + (cls || "") + '">' + v + '</span></div>';
  }

  function renderTopics(id, list, emptyMsg) {
    const el = document.getElementById(id);
    if (!list.length) { el.innerHTML = '<div class="txt-muted" style="font-size:13px;">' + emptyMsg + '</div>'; return; }
    el.innerHTML = list.map(function (g) {
      return '<div class="topic-item"><div><div class="name">' + g.key + '</div>' +
        '<div class="meta">' + g.correct + "/" + g.answered + ' correct</div></div>' +
        '<div class="acc ' + (g.accuracy >= 70 ? "txt-green" : g.accuracy >= 40 ? "" : "txt-red") + '">' + g.accuracy + '%</div></div>';
    }).join("");
  }

  function renderBreakdown(id, groups, kind) {
    const tbody = document.getElementById(id);
    // For difficulty, keep the canonical order
    if (kind === "Difficulty") {
      const order = { Easy: 0, Moderate: 1, Hard: 2 };
      groups = MCAT.DIFFICULTIES.map(function (d) {
        return groups.find(function (g) { return g.key === d; }) ||
          { key: d, correct: 0, incorrect: 0, omitted: 0, total: 0, answered: 0, accuracy: 0 };
      });
    } else {
      groups = groups.slice().sort(function (a, b) { return b.answered - a.answered || a.key.localeCompare(b.key); });
    }
    if (!groups.length) {
      tbody.innerHTML = '<tr><td colspan="4" class="txt-muted">No data yet.</td></tr>';
      return;
    }
    tbody.innerHTML = groups.map(function (g) {
      const answered = g.answered;
      const incPct = g.total ? Math.round((g.incorrect / g.total) * 100) : 0;
      const omPct = g.total ? Math.round((g.omitted / g.total) * 100) : 0;
      const corPct = answered ? g.accuracy : 0;
      return '<tr>' +
        '<td><b>' + g.key + '</b><div class="sub-line">' + g.correct + "/" + g.total + ' questions</div></td>' +
        '<td class="txt-green">' + corPct + '% (' + g.correct + ')</td>' +
        '<td class="txt-red">' + incPct + '% (' + g.incorrect + ')</td>' +
        '<td class="txt-muted">' + omPct + '% (' + g.omitted + ')</td>' +
        '</tr>';
    }).join("");
  }

  function renderActivity(attempts) {
    const tbody = document.getElementById("activityRows");
    const list = attempts.slice().sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
    if (!list.length) {
      tbody.innerHTML = '<tr><td colspan="6"><div class="empty"><div class="icon">🗒️</div><p>No activity in this range yet. <a href="practice.html">Start a passage →</a></p></div></td></tr>';
      return;
    }
    tbody.innerHTML = list.map(function (a) {
      const answered = (a.correct || 0) + (a.incorrect || 0);
      const acc = answered ? Math.round((a.correct / answered) * 100) : 0;
      const diffClass = (a.difficulty || "").toLowerCase();
      return '<tr>' +
        '<td><b>' + a.title + '</b><div class="sub-line">' + (a.subject || "") + " · " + (a.system || "") + '</div></td>' +
        '<td><span class="pill ' + diffClass + '">' + (a.difficulty || "—") + '</span></td>' +
        '<td class="txt-green">' + (a.correct || 0) + '</td>' +
        '<td class="txt-red">' + (a.incorrect || 0) + '</td>' +
        '<td><b>' + acc + '%</b></td>' +
        '<td class="txt-muted">' + MCAT.UI.fmtDuration(a.durationSec || 0) + '<div class="sub-line">' + MCAT.UI.fmtDate(a.date) + '</div></td>' +
        '</tr>';
    }).join("");
  }

  // ---- wire controls ----
  document.querySelectorAll("#rangeSeg button").forEach(function (b) {
    b.onclick = function () {
      range = b.getAttribute("data-r");
      document.querySelectorAll("#rangeSeg button").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      document.getElementById("customRange").style.display = (range === "custom") ? "flex" : "none";
      render();
    };
  });
  document.getElementById("startDate").onchange = function () { customStart = this.value; if (range === "custom") render(); };
  document.getElementById("endDate").onchange = function () { customEnd = this.value; if (range === "custom") render(); };

  document.getElementById("resetBtn").onclick = function () {
    if (confirm("Reset ALL of your saved progress? This cannot be undone (consider exporting a save file first in the Data tab).")) {
      MCAT.Store.resetAll();
      MCAT.UI.toast("Progress reset.");
      render();
    }
  };

  render();
})();
