/* Exam runner: loads a passage from ?passage=<id>, runs the Pearson-style
   interface, records the attempt to MCAT.Store on completion. */
(function () {
  // ---- load passage ----
  const params = new URLSearchParams(location.search);
  const pid = params.get("passage");
  const passage = MCAT.getPassage(pid);
  if (!passage) {
    document.body.innerHTML =
      '<div style="padding:40px;font-family:Arial;color:#fff;background:#6f7d8c;height:100vh;">' +
      '<h2>Passage not found.</h2><p><a style="color:#cfeaf2;" href="practice.html">&larr; Back to Practice</a></p></div>';
    return;
  }

  const QUESTIONS = passage.questions.map(function (q) {
    return {
      qid: q.qid,
      stem: q.stem,
      preopts: q.preopts || "",
      opts: q.options.map(function (o) { return { L: o.L, text: o.text, pct: o.pct, correct: !!o.correct }; }),
      stat: q.stat || "",
      expl: q.explanationHtml || "",
      eo: q.eo || ""
    };
  });

  // ---- state ----
  let cur = 0;
  let revealed = false;
  let tool = null;
  let recorded = false;
  const state = QUESTIONS.map(function () { return { selected: null, flagged: false, struck: {} }; });

  // Timing & per-question duration tracking state
  let elapsed = 0;
  let timerStopped = false;
  let lastTimeSnapshot = 0;
  const questionTimes = QUESTIONS.map(function () { return 0; });

  // Record elapsed duration on current question when leaving or submitting
  function recordTimeSpent() {
    const delta = elapsed - lastTimeSnapshot;
    if (delta > 0 && cur >= 0 && cur < questionTimes.length) {
      questionTimes[cur] += delta;
    }
    lastTimeSnapshot = elapsed;
  }

  // ---- header / passage ----
  document.getElementById("examTitle").textContent = passage.title;
  document.getElementById("examSubject").textContent =
    passage.subject + " · " + passage.system;
  document.getElementById("itemTotal").textContent = QUESTIONS.length;
  document.getElementById("passageBody").innerHTML = passage.passageHtml;
  document.getElementById("passageHeading").textContent =
    "Passage 1 (Questions 1\u2013" + QUESTIONS.length + ")";

  // ---- render ----
  function renderQuestion() {
    const q = QUESTIONS[cur];
    const s = state[cur];
    let opts = "";
    q.opts.forEach(function (o) {
      const isSel = s.selected === o.L;
      const sel = isSel ? " selected" : "";
      const corr = o.correct ? " correct-ans" : "";
      const wrong = (isSel && !o.correct) ? " wrong-pick" : "";
      const struck = s.struck[o.L] ? " struck" : "";
      opts +=
        '<li class="choice' + sel + corr + wrong + struck + '" data-l="' + o.L + '" onclick="EXAM.clickChoice(\'' + o.L + '\')">' +
          '<span class="radio"></span>' +
          '<span class="ltr">' + o.L + '.</span>' +
          '<span class="txt">' + o.text +
            '<span class="choice-tag correct">\u2713 Correct Answer</span>' +
            '<span class="choice-tag wrong">\u2717 Your Answer</span>' +
          '</span>' +
          '<span class="pct">' + o.pct + '</span>' +
        '</li>';
    });

    const correctL = q.opts.find(function (o) { return o.correct; }).L;
    const expl =
      '<div class="explanation">' +
        '<div class="answer-banner"><span>Correct Answer: ' + correctL + '</span>' +
          '<span class="qid">QID ' + q.qid + '</span></div>' +
        '<div class="stat-line">' + q.stat + '</div>' +
        '<div class="expl-h">Explanation</div>' + q.expl +
        '<div class="edu-obj"><b>Educational objective:</b> ' + q.eo + '</div>' +
      '</div>';

    document.getElementById("questionPane").innerHTML =
      '<div class="q-stem">' + (cur + 1) + '. ' + q.stem + '</div>' +
      (q.preopts || "") +
      '<ul class="choices">' + opts + '</ul>' + expl;

    document.getElementById("itemNow").textContent = cur + 1;
    document.getElementById("prevBtn").disabled = (cur === 0);
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.disabled = false;
    nextBtn.innerHTML = (cur === QUESTIONS.length - 1) ? "End Section \u25B6" : "Next \u25B6";

    const fb = document.getElementById("flagBtn");
    fb.classList.toggle("flagged", s.flagged);
    document.getElementById("flagTxt").textContent = s.flagged ? "Flagged for Review" : "Flag for Review";
  }

  function clickChoice(L) {
    const s = state[cur];
    if (tool === "st") { s.struck[L] = !s.struck[L]; renderQuestion(); return; }
    if (revealed) return;
    s.selected = L;
    renderQuestion();
  }

  function go(d) {
    const n = cur + d;
    if (n < 0 || n >= QUESTIONS.length) return;
    recordTimeSpent(); // Record elapsed time before navigating away
    cur = n; 
    renderQuestion();
  }
  function onNext() {
    if (cur === QUESTIONS.length - 1) { openResults(); return; }
    go(1);
  }

  function toggleFlag() { state[cur].flagged = !state[cur].flagged; renderQuestion(); }

  function toggleReveal() {
    revealed = !revealed;
    document.body.classList.toggle("revealed", revealed);
    const b = document.getElementById("solBtn");
    b.classList.toggle("on", revealed);
    b.textContent = revealed ? "Hide Solution" : "Show Solution";
  }

  function setTool(t) {
    tool = (tool === t) ? null : t;
    document.getElementById("tHL").classList.toggle("active", tool === "hl");
    document.getElementById("tST").classList.toggle("active", tool === "st");
  }
  document.addEventListener("mouseup", function () {
    if (tool !== "hl") return;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const range = sel.getRangeAt(0);
    const within = function (node) {
      let el = node.nodeType === 3 ? node.parentElement : node;
      return el && el.closest && el.closest(".pane");
    };
    if (!within(range.commonAncestorContainer)) return;
    try {
      const span = document.createElement("span");
      span.className = "hl";
      span.appendChild(range.extractContents());
      range.insertNode(span);
      sel.removeAllRanges();
    } catch (e) {}
  });

  // ---- navigator / review modal ----
  function buildNavTable() {
    let rows = "";
    QUESTIONS.forEach(function (q, i) {
      const st = state[i];
      const statusDot = st.selected
        ? '<span class="status-dot dot-ans"></span>Answered'
        : '<span class="status-dot dot-inc"></span>Incomplete';
      const flag = st.flagged ? '<span class="flag-mini">\u2691</span>' : "";
      rows += '<tr class="clickable ' + (i === cur ? "current" : "") + '" onclick="EXAM.jump(' + i + ')">' +
        '<td>Question ' + (i + 1) + '</td><td>' + statusDot + '</td><td>' + flag + '</td></tr>';
    });
    return '<table class="navtbl"><thead><tr><th>Item</th><th>Status</th><th>Flag</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }
  function openModal(kind) {
    const ov = document.getElementById("overlay");
    document.getElementById("modalTitle").textContent = (kind === "review") ? "Review Screen" : "Navigation";
    const body = document.getElementById("modalBody");
    if (kind === "review") {
      body.innerHTML = '<div style="padding:12px 14px;border-bottom:1px solid #dde1e4;font-size:13px;color:#444;">' +
        'Review your answers below. Click any item to return to it.</div>' + buildNavTable();
    } else {
      body.innerHTML = buildNavTable();
    }
    ov.classList.add("show");
  }
  function closeModal() { document.getElementById("overlay").classList.remove("show"); }
  function jump(i) { 
    recordTimeSpent(); // Record elapsed time before jumping
    cur = i; 
    closeModal(); 
    renderQuestion(); 
  }

  // ---- timer (stopwatch mode) ----
  function tick() {
    if (timerStopped) return;
    elapsed++;
    
    const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");
    const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
    const s = String(elapsed % 60).padStart(2, "0");
    
    document.getElementById("clock").textContent = h + ":" + m + ":" + s;
  }

  // Automatically start counting on page load
  setInterval(tick, 1000);

  // Formatting utility for the results summary screen
  function fmtTime(t) { 
    const m = Math.floor(t / 60); 
    const s = t % 60; 
    return m + ":" + String(s).padStart(2, "0"); 
  }

  // Toggle function for the start/pause button
  function toggleStopwatch() {
    timerStopped = !timerStopped;
    const btn = document.getElementById("timerToggleBtn");
    if (btn) {
      btn.textContent = timerStopped ? "Start" : "Pause";
    }
  }

  // Expose toggle function globally so the button in HTML can trigger it
  window.toggleStopwatch = toggleStopwatch;

  // ---- results + record attempt ----
  function computeResult() {
    let correct = 0, incorrect = 0, omitted = 0;
    const answers = QUESTIONS.map(function (q, i) {
      const picked = state[i].selected;
      const correctL = q.opts.find(function (o) { return o.correct; }).L;
      const isCorrect = picked === correctL;
      if (!picked) omitted++;
      else if (isCorrect) correct++;
      else incorrect++;
      return { qid: q.qid, picked: picked, correctL: correctL, isCorrect: isCorrect };
    });
    return { correct: correct, incorrect: incorrect, omitted: omitted, answers: answers };
  }

  function recordAttempt(result) {
    if (recorded) return;
    recorded = true;
    MCAT.Store.recordAttempt({
      passageId: passage.id,
      title: passage.title,
      subject: passage.subject,
      system: passage.system,
      difficulty: passage.difficulty,
      durationSec: elapsed,
      total: QUESTIONS.length,
      correct: result.correct,
      incorrect: result.incorrect,
      omitted: result.omitted,
      answers: result.answers,
      questionTimes: questionTimes // Saves array of seconds spent on each question
    });
  }

  function openResults() {
    recordTimeSpent(); // Record final active question's elapsed time before closing
    timerStopped = true;
    const r = computeResult();
    recordAttempt(r);

    let rows = "";
    QUESTIONS.forEach(function (q, i) {
      const a = r.answers[i];
      let resCell;
      if (!a.picked) resCell = '<span class="res-skip">Omitted</span>';
      else if (a.isCorrect) resCell = '<span class="res-correct">\u2713 Correct</span>';
      else resCell = '<span class="res-wrong">\u2717 Incorrect</span>';
      const optPct = q.opts.find(function (o) { return o.correct; }).pct;
      rows += '<tr class="clickable" onclick="EXAM.reviewJump(' + i + ')">' +
        '<td>Question ' + (i + 1) + '</td>' +
        '<td>' + (a.picked || "&mdash;") + '</td>' +
        '<td>' + a.correctL + '</td>' +
        '<td>' + resCell + '</td>' +
        '<td>' + optPct + '</td></tr>';
    });
    document.getElementById("resRows").innerHTML = rows;
    document.getElementById("scoreBig").textContent = r.correct + " / " + QUESTIONS.length;
    document.getElementById("scoreSub").textContent =
      "You answered " + r.correct + " of " + QUESTIONS.length + " correctly" +
      (r.omitted ? " (" + r.omitted + " omitted)" : "");
    document.getElementById("timeUsed").textContent = fmtTime(elapsed);
    document.getElementById("numCorrect").textContent = r.correct;
    document.getElementById("numWrong").textContent = r.incorrect + r.omitted;
    document.getElementById("resOverlay").classList.add("show");
  }
  function closeResults() { document.getElementById("resOverlay").classList.remove("show"); }

  function reviewSolutions() { closeResults(); if (!revealed) toggleReveal(); cur = 0; renderQuestion(); }
  function reviewJump(i) { closeResults(); if (!revealed) toggleReveal(); cur = i; renderQuestion(); }

  // ---- keyboard ----
  document.addEventListener("keydown", function (e) {
    if (!e.altKey) return;
    const k = e.key.toLowerCase();
    if (k === "n") { e.preventDefault(); onNext(); }
    else if (k === "p") { e.preventDefault(); go(-1); }
    else if (k === "f") { e.preventDefault(); toggleFlag(); }
    else if (k === "h") { e.preventDefault(); setTool("hl"); }
    else if (k === "s") { e.preventDefault(); setTool("st"); }
    else if (k === "v") { e.preventDefault(); openModal("nav"); }
    else if (k === "c") { e.preventDefault(); closeModal(); }
  });

  // expose for inline handlers
  window.EXAM = {
    clickChoice: clickChoice, go: go, onNext: onNext, toggleFlag: toggleFlag,
    toggleReveal: toggleReveal, setTool: setTool, openModal: openModal,
    closeModal: closeModal, jump: jump, openResults: openResults,
    closeResults: closeResults, reviewSolutions: reviewSolutions, reviewJump: reviewJump
  };

  renderQuestion();
})();