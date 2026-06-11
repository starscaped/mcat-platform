/* =========================================================
   Standalone single-page controller.
   Hash router: #home #practice #analytics #data #exam/<id>
   ========================================================= */
(function () {
  const VIEWS = ["home", "practice", "analytics", "data"];

  function showView(name) {
    // exam is a special full-screen overlay
    const examEl = document.getElementById("view-exam");
    if (name === "exam") {
      document.body.classList.add("exam-open");
      examEl.classList.add("active");
      return;
    }
    document.body.classList.remove("exam-open");
    examEl.classList.remove("active");
    EXAM_RUNNER.stop();

    VIEWS.forEach(function (v) {
      document.getElementById("view-" + v).classList.toggle("active", v === name);
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-page") === name);
    });
    window.scrollTo(0, 0);

    if (name === "home") initHome();
    else if (name === "practice") initPractice();
    else if (name === "analytics") initAnalytics();
    else if (name === "data") initData();
  }

  function route() {
    const hash = (location.hash || "#home").slice(1);
    if (hash.indexOf("exam/") === 0) {
      const id = decodeURIComponent(hash.slice(5));
      EXAM_RUNNER.start(id);
      showView("exam");
      return;
    }
    const name = VIEWS.indexOf(hash) >= 0 ? hash : "home";
    showView(name);
  }
  window.addEventListener("hashchange", route);

  /* ---------------- HOME ---------------- */
  function initHome() {
    const today = MCAT.Store.todaysAttempts();
    const t = MCAT.Store.totals(today);
    const overall = MCAT.Store.totals();
    document.getElementById("todayStats").innerHTML =
      '<div><div class="txt-muted" style="font-size:13px;">Passages today</div>' +
        '<div style="font-size:30px;font-weight:800;">' + t.attempts + '</div></div>' +
      '<div><div class="txt-muted" style="font-size:13px;">Today\'s accuracy</div>' +
        '<div style="font-size:30px;font-weight:800;color:' + (t.answered ? 'var(--green)' : 'var(--muted)') + ';">' +
          (t.answered ? t.accuracy + '%' : '—') + '</div>' +
        '<div class="txt-muted" style="font-size:12px;">' + t.correct + '/' + (t.answered || 0) + ' correct</div></div>' +
      '<div><div class="txt-muted" style="font-size:13px;">All-time questions answered</div>' +
        '<div style="font-size:30px;font-weight:800;">' + overall.answered + '</div>' +
        '<div class="txt-muted" style="font-size:12px;">' + overall.accuracy + '% accurate overall</div></div>';
  }

  /* ---------------- PRACTICE ---------------- */
  let practiceSubj = "All";
  function initPractice() {
    const passages = MCAT.getPassages();
    const subjects = ["All"].concat(Array.from(new Set(passages.map(function (p) { return p.subject; }))).sort());
    const segEl = document.getElementById("subjFilter");
    segEl.innerHTML = subjects.map(function (s) {
      return '<button data-s="' + s + '" class="' + (s === practiceSubj ? 'active' : '') + '">' + s + '</button>';
    }).join("");
    segEl.querySelectorAll("button").forEach(function (b) {
      b.onclick = function () {
        practiceSubj = b.getAttribute("data-s");
        segEl.querySelectorAll("button").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        renderPracticeList();
      };
    });
    renderPracticeList();
  }
  function renderPracticeList() {
    const passages = MCAT.getPassages();
    const data = MCAT.Store.getData();
    const attempted = {};
    data.attempts.forEach(function (a) { attempted[a.passageId] = (attempted[a.passageId] || 0) + 1; });
    const list = document.getElementById("passageList");
    const shown = passages.filter(function (p) { return practiceSubj === "All" || p.subject === practiceSubj; });
    if (!shown.length) {
      list.innerHTML = '<div class="card"><div class="empty"><div class="icon">📭</div><p>No passages in this subject yet.</p></div></div>';
      return;
    }
    list.innerHTML = shown.map(function (p) {
      const diffClass = (p.difficulty || "").toLowerCase();
      const done = attempted[p.id];
      const dot = done
        ? '<span class="status-dot dot-done"></span>Attempted ' + done + '×'
        : '<span class="status-dot dot-new"></span>Not attempted';
      const qids = p.questions.map(function (q) { return q.qid; }).filter(Boolean);
      let qidLabel = "";
      if (qids.length === 1) qidLabel = "QID " + qids[0];
      else if (qids.length > 1) qidLabel = "QID " + qids[0] + "\u2013" + qids[qids.length - 1];
      return '<div class="plist-row"><div class="pmeta">' +
        '<div class="ptitle">' + p.title + (qidLabel ? ' <span class="qid-tag">' + qidLabel + '</span>' : '') + '</div>' +
        '<div class="psub">' + p.subject + ' &middot; ' + p.system +
          ' &nbsp;<span class="pill ' + diffClass + '">' + p.difficulty + '</span>' +
          ' &nbsp;&middot;&nbsp; <span style="font-size:12px;">' + dot + '</span></div></div>' +
        '<span class="badge-q">' + p.questions.length + ' questions</span>' +
        '<a class="btn btn-primary btn-sm" href="#exam/' + encodeURIComponent(p.id) + '">Start</a></div>';
    }).join("");
  }

  /* ---------------- ANALYTICS ---------------- */
  let anRange = "all", anStart = null, anEnd = null, anWired = false;
  function isoDay(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function anAttempts() {
    const S = MCAT.Store, all = S.getData().attempts;
    if (anRange === "all") return all;
    if (anRange === "today") { const t = isoDay(new Date()); return S.filterByDate(t, t, all); }
    if (anRange === "week") { const e = new Date(), s = new Date(); s.setDate(s.getDate() - 6); return S.filterByDate(isoDay(s), isoDay(e), all); }
    if (anRange === "custom") return S.filterByDate(anStart || null, anEnd || null, all);
    return all;
  }
  function initAnalytics() {
    if (!anWired) {
      anWired = true;
      document.querySelectorAll("#rangeSeg button").forEach(function (b) {
        b.onclick = function () {
          anRange = b.getAttribute("data-r");
          document.querySelectorAll("#rangeSeg button").forEach(function (x) { x.classList.remove("active"); });
          b.classList.add("active");
          document.getElementById("customRange").style.display = (anRange === "custom") ? "flex" : "none";
          renderAnalytics();
        };
      });
      document.getElementById("startDate").onchange = function () { anStart = this.value; if (anRange === "custom") renderAnalytics(); };
      document.getElementById("endDate").onchange = function () { anEnd = this.value; if (anRange === "custom") renderAnalytics(); };
      document.getElementById("resetBtn").onclick = function () {
        if (confirm("Reset ALL of your saved progress? This cannot be undone (consider exporting a save file first in the Data tab).")) {
          MCAT.Store.resetAll(); MCAT.UI.toast("Progress reset."); renderAnalytics();
        }
      };
    }
    renderAnalytics();
  }
  function row(k, v, cls) { return '<div class="stat-row"><span class="k">' + k + '</span><span class="v ' + (cls || "") + '">' + v + '</span></div>'; }
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
    if (kind === "Difficulty") {
      groups = MCAT.DIFFICULTIES.map(function (d) {
        return groups.find(function (g) { return g.key === d; }) ||
          { key: d, correct: 0, incorrect: 0, omitted: 0, total: 0, answered: 0, accuracy: 0 };
      });
    } else {
      groups = groups.slice().sort(function (a, b) { return b.answered - a.answered || a.key.localeCompare(b.key); });
    }
    if (!groups.length) { tbody.innerHTML = '<tr><td colspan="4" class="txt-muted">No data yet.</td></tr>'; return; }
    tbody.innerHTML = groups.map(function (g) {
      const incPct = g.total ? Math.round((g.incorrect / g.total) * 100) : 0;
      const omPct = g.total ? Math.round((g.omitted / g.total) * 100) : 0;
      const corPct = g.answered ? g.accuracy : 0;
      return '<tr><td><b>' + g.key + '</b><div class="sub-line">' + g.correct + "/" + g.total + ' questions</div></td>' +
        '<td class="txt-green">' + corPct + '% (' + g.correct + ')</td>' +
        '<td class="txt-red">' + incPct + '% (' + g.incorrect + ')</td>' +
        '<td class="txt-muted">' + omPct + '% (' + g.omitted + ')</td></tr>';
    }).join("");
  }
  function renderActivity(attempts) {
    const tbody = document.getElementById("activityRows");
    const list = attempts.slice().sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
    if (!list.length) {
      tbody.innerHTML = '<tr><td colspan="6"><div class="empty"><div class="icon">🗒️</div><p>No activity in this range yet. <a href="#practice">Start a passage →</a></p></div></td></tr>';
      return;
    }
    tbody.innerHTML = list.map(function (a) {
      const answered = (a.correct || 0) + (a.incorrect || 0);
      const acc = answered ? Math.round((a.correct / answered) * 100) : 0;
      const diffClass = (a.difficulty || "").toLowerCase();
      return '<tr><td><b>' + a.title + '</b><div class="sub-line">' + (a.subject || "") + " · " + (a.system || "") + '</div></td>' +
        '<td><span class="pill ' + diffClass + '">' + (a.difficulty || "—") + '</span></td>' +
        '<td class="txt-green">' + (a.correct || 0) + '</td>' +
        '<td class="txt-red">' + (a.incorrect || 0) + '</td>' +
        '<td><b>' + acc + '%</b></td>' +
        '<td class="txt-muted">' + MCAT.UI.fmtDuration(a.durationSec || 0) + '<div class="sub-line">' + MCAT.UI.fmtDate(a.date) + '</div></td></tr>';
    }).join("");
  }
  function renderAnalytics() {
    const S = MCAT.Store;
    const attempts = anAttempts();
    const t = S.totals(attempts);
    document.getElementById("lineChart").innerHTML = MCAT.Charts.line(S.dailyAccuracy(attempts));
    document.getElementById("scoreDonut").innerHTML =
      MCAT.Charts.donut(t.accuracy, "#1c7a32") +
      '<div class="label"><div class="big">' + (t.answered ? t.accuracy + "%" : "—") + '</div><div class="small">Accurate</div></div>';
    document.getElementById("scoreList").innerHTML =
      row("Correct", t.correct, "txt-green") + row("Incorrect", t.incorrect, "txt-red") +
      row("Omitted", t.omitted, "txt-muted") + row("Questions answered", t.answered, "");
    document.getElementById("usageDonut").innerHTML =
      MCAT.Charts.donut(t.completion, "#5b6cf0") +
      '<div class="label"><div class="big">' + t.completion + '%</div><div class="small">Complete</div></div>';
    document.getElementById("usageList").innerHTML =
      row("Passages attempted", t.attempts, "") + row("Questions seen", t.total, "") + row("Questions answered", t.answered, "");
    const topics = S.byTopic(attempts).filter(function (g) { return g.answered > 0; });
    topics.sort(function (a, b) { return b.accuracy - a.accuracy || b.answered - a.answered; });
    renderTopics("strongTopics", topics.slice(0, 4), "No graded topics yet.");
    const weak = topics.slice().sort(function (a, b) { return a.accuracy - b.accuracy || b.answered - a.answered; });
    renderTopics("weakTopics", weak.slice(0, 4), "No graded topics yet.");
    renderBreakdown("subjectRows", S.bySubject(attempts), "Subject");
    renderBreakdown("difficultyRows", S.byDifficulty(attempts), "Difficulty");
    renderActivity(attempts);
  }

  /* ---------------- DATA ---------------- */
  let dataWired = false;
  function initData() {
    refreshData();
    if (dataWired) return;
    dataWired = true;
    document.getElementById("exportBtn").onclick = function () {
      const blob = new Blob([MCAT.Store.exportData()], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "medprep-mcat-save-" + new Date().toISOString().slice(0, 10) + ".json";
      document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
      MCAT.UI.toast("Save file downloaded.");
    };
    document.getElementById("importBtn").onclick = function () {
      const fileInput = document.getElementById("importFile");
      const msg = document.getElementById("importMsg");
      const f = fileInput.files[0];
      if (!f) { msg.innerHTML = '<span class="txt-red">Choose a file first.</span>'; return; }
      const reader = new FileReader();
      reader.onload = function () {
        try {
          MCAT.Store.replaceData(JSON.parse(reader.result));
          msg.innerHTML = '<span class="txt-green">✓ Data restored successfully.</span>';
          MCAT.UI.toast("Data restored."); refreshData();
        } catch (e) { msg.innerHTML = '<span class="txt-red">✗ Could not read that file: ' + e.message + '</span>'; }
      };
      reader.onerror = function () { msg.innerHTML = '<span class="txt-red">✗ Failed to read file.</span>'; };
      reader.readAsText(f);
    };
    document.getElementById("wipeBtn").onclick = function () {
      if (confirm("Permanently erase all saved progress in this browser?")) {
        MCAT.Store.resetAll(); MCAT.UI.toast("All data erased."); refreshData();
      }
    };
    document.getElementById("copyBtn").onclick = function () {
      navigator.clipboard.writeText(MCAT.Store.exportData()).then(
        function () { MCAT.UI.toast("Copied to clipboard."); },
        function () { MCAT.UI.toast("Copy failed — select the text manually."); });
    };
  }
  function refreshData() {
    const d = MCAT.Store.getData();
    const t = MCAT.Store.totals();
    const warnEl = document.getElementById("storageWarn");
    if (warnEl) {
      warnEl.style.display = MCAT.storagePersistent() ? "none" : "block";
    }
    document.getElementById("exportStats").innerHTML =
      '<div class="stat-row"><span class="k">Passages attempted</span><span class="v">' + d.attempts.length + '</span></div>' +
      '<div class="stat-row"><span class="k">Questions answered</span><span class="v">' + t.answered + '</span></div>' +
      '<div class="stat-row"><span class="k">Overall accuracy</span><span class="v">' + t.accuracy + '%</span></div>';
    document.getElementById("rawData").textContent = MCAT.Store.exportData();
  }

  /* ---------------- EXAM RUNNER ---------------- */
  const EXAM_RUNNER = (function () {
    let QUESTIONS = [], passage = null, cur = 0, revealed = false, tool = null, recorded = false, state = [];
    let TOTAL = 0, secs = 0, elapsed = 0, timerStopped = true, timerId = null;

    function fmtTime(t) { const m = Math.floor(t / 60), s = t % 60; return m + ":" + String(s).padStart(2, "0"); }

    function start(pid) {
      passage = MCAT.getPassage(pid);
      const pane = document.getElementById("questionPane");
      if (!passage) {
        document.getElementById("examTitle").textContent = "Passage not found";
        pane.innerHTML = '<p>That passage does not exist. <a href="#practice">Back to Practice</a></p>';
        return;
      }
      QUESTIONS = passage.questions.map(function (q) {
        return { qid: q.qid, stem: q.stem, preopts: q.preopts || "",
          opts: q.options.map(function (o) { return { L: o.L, text: o.text, pct: o.pct, correct: !!o.correct }; }),
          stat: q.stat || "", expl: q.explanationHtml || "", eo: q.eo || "" };
      });
      cur = 0; revealed = false; tool = null; recorded = false;
      state = QUESTIONS.map(function () { return { selected: null, flagged: false, struck: {} }; });
      document.body.classList.remove("revealed");
      const sb = document.getElementById("solBtn"); sb.classList.remove("on"); sb.textContent = "Show Solution";
      document.getElementById("tHL").classList.remove("active");
      document.getElementById("tST").classList.remove("active");

      document.getElementById("examTitle").textContent = passage.title;
      document.getElementById("examSubject").textContent = passage.subject + " · " + passage.system;
      document.getElementById("itemTotal").textContent = QUESTIONS.length;
      document.getElementById("passageBody").innerHTML = passage.passageHtml;
      document.getElementById("passageHeading").textContent = "Passage 1 (Questions 1\u2013" + QUESTIONS.length + ")";

      TOTAL = (passage.estMinutes || Math.ceil(QUESTIONS.length * 1.5)) * 60;
      secs = TOTAL; elapsed = 0; timerStopped = false;
      if (timerId) clearInterval(timerId);
      timerId = setInterval(tick, 1000);
      document.getElementById("clock").textContent = "00:" + String(Math.floor(secs / 60)).padStart(2, "0") + ":" + String(secs % 60).padStart(2, "0");
      render();
    }

    function stop() {
      timerStopped = true;
      if (timerId) { clearInterval(timerId); timerId = null; }
      document.getElementById("overlay").classList.remove("show");
      document.getElementById("resOverlay").classList.remove("show");
    }

    function tick() {
      if (timerStopped) return;
      if (secs <= 0) { openResults(); return; }
      secs--; elapsed++;
      document.getElementById("clock").textContent = "00:" + String(Math.floor(secs / 60)).padStart(2, "0") + ":" + String(secs % 60).padStart(2, "0");
    }

    function render() {
      const q = QUESTIONS[cur], s = state[cur];
      let opts = "";
      q.opts.forEach(function (o) {
        const isSel = s.selected === o.L;
        opts += '<li class="choice' + (isSel ? " selected" : "") + (o.correct ? " correct-ans" : "") +
          ((isSel && !o.correct) ? " wrong-pick" : "") + (s.struck[o.L] ? " struck" : "") +
          '" data-l="' + o.L + '" onclick="EXAM.clickChoice(\'' + o.L + '\')">' +
          '<span class="radio"></span><span class="ltr">' + o.L + '.</span>' +
          '<span class="txt">' + o.text +
            '<span class="choice-tag correct">\u2713 Correct Answer</span>' +
            '<span class="choice-tag wrong">\u2717 Your Answer</span></span>' +
          '<span class="pct">' + o.pct + '</span></li>';
      });
      const correctL = q.opts.find(function (o) { return o.correct; }).L;
      const expl = '<div class="explanation"><div class="answer-banner"><span>Correct Answer: ' + correctL +
        '</span><span class="qid">QID ' + q.qid + '</span></div>' +
        '<div class="stat-line">' + q.stat + '</div><div class="expl-h">Explanation</div>' + q.expl +
        '<div class="edu-obj"><b>Educational objective:</b> ' + q.eo + '</div></div>';
      document.getElementById("questionPane").innerHTML =
        '<div class="q-stem">' + (cur + 1) + '. ' + q.stem + '</div>' + (q.preopts || "") +
        '<ul class="choices">' + opts + '</ul>' + expl;
      document.getElementById("itemNow").textContent = cur + 1;
      document.getElementById("prevBtn").disabled = (cur === 0);
      const nb = document.getElementById("nextBtn"); nb.disabled = false;
      nb.innerHTML = (cur === QUESTIONS.length - 1) ? "End Section \u25B6" : "Next \u25B6";
      const fb = document.getElementById("flagBtn");
      fb.classList.toggle("flagged", s.flagged);
      document.getElementById("flagTxt").textContent = s.flagged ? "Flagged for Review" : "Flag for Review";
    }

    function clickChoice(L) {
      const s = state[cur];
      if (tool === "st") { s.struck[L] = !s.struck[L]; render(); return; }
      if (revealed) return;
      s.selected = L; render();
    }
    function go(d) { const n = cur + d; if (n < 0 || n >= QUESTIONS.length) return; cur = n; render(); }
    function onNext() { if (cur === QUESTIONS.length - 1) { openResults(); return; } go(1); }
    function toggleFlag() { state[cur].flagged = !state[cur].flagged; render(); }
    function toggleReveal() {
      revealed = !revealed; document.body.classList.toggle("revealed", revealed);
      const b = document.getElementById("solBtn"); b.classList.toggle("on", revealed);
      b.textContent = revealed ? "Hide Solution" : "Show Solution";
    }
    function setTool(t) {
      tool = (tool === t) ? null : t;
      document.getElementById("tHL").classList.toggle("active", tool === "hl");
      document.getElementById("tST").classList.toggle("active", tool === "st");
    }

    function buildNavTable() {
      let rows = "";
      QUESTIONS.forEach(function (q, i) {
        const st = state[i];
        const dot = st.selected ? '<span class="status-dot dot-ans"></span>Answered' : '<span class="status-dot dot-inc"></span>Incomplete';
        rows += '<tr class="clickable ' + (i === cur ? "current" : "") + '" onclick="EXAM.jump(' + i + ')">' +
          '<td>Question ' + (i + 1) + '</td><td>' + dot + '</td><td>' + (st.flagged ? '<span class="flag-mini">\u2691</span>' : "") + '</td></tr>';
      });
      return '<table class="navtbl"><thead><tr><th>Item</th><th>Status</th><th>Flag</th></tr></thead><tbody>' + rows + '</tbody></table>';
    }
    function openModal(kind) {
      document.getElementById("modalTitle").textContent = (kind === "review") ? "Review Screen" : "Navigation";
      const body = document.getElementById("modalBody");
      body.innerHTML = (kind === "review")
        ? '<div style="padding:12px 14px;border-bottom:1px solid #dde1e4;font-size:13px;color:#444;">Review your answers below. Click any item to return to it.</div>' + buildNavTable()
        : buildNavTable();
      document.getElementById("overlay").classList.add("show");
    }
    function closeModal() { document.getElementById("overlay").classList.remove("show"); }
    function jump(i) { cur = i; closeModal(); render(); }

    function computeResult() {
      let correct = 0, incorrect = 0, omitted = 0;
      const answers = QUESTIONS.map(function (q, i) {
        const picked = state[i].selected;
        const correctL = q.opts.find(function (o) { return o.correct; }).L;
        const isCorrect = picked === correctL;
        if (!picked) omitted++; else if (isCorrect) correct++; else incorrect++;
        return { qid: q.qid, picked: picked, correctL: correctL, isCorrect: isCorrect };
      });
      return { correct: correct, incorrect: incorrect, omitted: omitted, answers: answers };
    }
    function recordAttempt(r) {
      if (recorded) return; recorded = true;
      MCAT.Store.recordAttempt({
        passageId: passage.id, title: passage.title, subject: passage.subject,
        system: passage.system, difficulty: passage.difficulty, durationSec: elapsed,
        total: QUESTIONS.length, correct: r.correct, incorrect: r.incorrect, omitted: r.omitted, answers: r.answers
      });
    }
    function openResults() {
      timerStopped = true;
      const r = computeResult(); recordAttempt(r);
      let rows = "";
      QUESTIONS.forEach(function (q, i) {
        const a = r.answers[i];
        let cell;
        if (!a.picked) cell = '<span class="res-skip">Omitted</span>';
        else if (a.isCorrect) cell = '<span class="res-correct">\u2713 Correct</span>';
        else cell = '<span class="res-wrong">\u2717 Incorrect</span>';
        const optPct = q.opts.find(function (o) { return o.correct; }).pct;
        rows += '<tr class="clickable" onclick="EXAM.reviewJump(' + i + ')">' +
          '<td>Question ' + (i + 1) + '</td><td>' + (a.picked || "&mdash;") + '</td><td>' + a.correctL + '</td>' +
          '<td>' + cell + '</td><td>' + optPct + '</td></tr>';
      });
      document.getElementById("resRows").innerHTML = rows;
      document.getElementById("scoreBig").textContent = r.correct + " / " + QUESTIONS.length;
      document.getElementById("scoreSub").textContent = "You answered " + r.correct + " of " + QUESTIONS.length + " correctly" + (r.omitted ? " (" + r.omitted + " omitted)" : "");
      document.getElementById("timeUsed").textContent = fmtTime(elapsed);
      document.getElementById("numCorrect").textContent = r.correct;
      document.getElementById("numWrong").textContent = r.incorrect + r.omitted;
      document.getElementById("resOverlay").classList.add("show");
    }
    function closeResults() { document.getElementById("resOverlay").classList.remove("show"); }
    function reviewSolutions() { closeResults(); if (!revealed) toggleReveal(); cur = 0; render(); }
    function reviewJump(i) { closeResults(); if (!revealed) toggleReveal(); cur = i; render(); }

    return {
      start: start, stop: stop, clickChoice: clickChoice, go: go, onNext: onNext,
      toggleFlag: toggleFlag, toggleReveal: toggleReveal, setTool: setTool,
      openModal: openModal, closeModal: closeModal, jump: jump,
      openResults: openResults, closeResults: closeResults,
      reviewSolutions: reviewSolutions, reviewJump: reviewJump
    };
  })();
  window.EXAM = EXAM_RUNNER;

  // highlight tool (works only inside exam panes)
  document.addEventListener("mouseup", function () {
    if (window.EXAM && document.getElementById("view-exam").classList.contains("active")) {
      // tool state lives inside the runner; emulate via the active class on the button
      if (!document.getElementById("tHL").classList.contains("active")) return;
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) return;
      const range = sel.getRangeAt(0);
      let el = range.commonAncestorContainer;
      el = el.nodeType === 3 ? el.parentElement : el;
      if (!el || !el.closest || !el.closest(".pane")) return;
      try { const span = document.createElement("span"); span.className = "hl"; span.appendChild(range.extractContents()); range.insertNode(span); sel.removeAllRanges(); } catch (e) {}
    }
  });

  // keyboard shortcuts (only in exam view)
  document.addEventListener("keydown", function (e) {
    if (!e.altKey || !document.getElementById("view-exam").classList.contains("active")) return;
    const k = e.key.toLowerCase();
    if (k === "n") { e.preventDefault(); EXAM.onNext(); }
    else if (k === "p") { e.preventDefault(); EXAM.go(-1); }
    else if (k === "f") { e.preventDefault(); EXAM.toggleFlag(); }
    else if (k === "h") { e.preventDefault(); EXAM.setTool("hl"); }
    else if (k === "s") { e.preventDefault(); EXAM.setTool("st"); }
    else if (k === "v") { e.preventDefault(); EXAM.openModal("nav"); }
    else if (k === "c") { e.preventDefault(); EXAM.closeModal(); }
  });

  // boot
  route();
})();
