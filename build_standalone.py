#!/usr/bin/env python3
"""
Bundle the multi-file MedPrep MCAT platform into a single self-contained
standalone.html: all CSS/JS combined inline, all images embedded as data URIs,
and a tiny hash-based router that swaps between Home / Practice / Exam /
Analytics / Data views (since a single file can't navigate between pages).
"""
import base64
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))


def read(p):
    with open(os.path.join(ROOT, p), encoding="utf-8") as f:
        return f.read()


def img_data_uri(path):
    with open(os.path.join(ROOT, path), "rb") as f:
        b = base64.b64encode(f.read()).decode()
    return "data:image/png;base64," + b


def js_safe(js):
    """Neutralize any literal </script> inside inlined JS so it can't close
    the surrounding <script> tag in the bundled HTML."""
    return js.replace("</script", "<\\/script")


# ---- 1. Inline images into the passage JS ----
# Replace src="images/xxx.png" -> src="<data uri>"
def inline_images_in_js(js):
    def repl(m):
        rel = m.group(1)
        if rel.startswith("images/"):
            try:
                return 'src="' + img_data_uri(rel) + '"'
            except FileNotFoundError:
                return m.group(0)
        return m.group(0)
    return re.sub(r'src="(images/[^"]+)"', repl, js)


# Inline every registered passage file (images -> data URIs).
PASSAGE_FILES = [
    "passages/trypanosoma.js",
    "passages/neurulation.js",
    "passages/porcine-oocyte.js",
    "passages/endometriosis.js",
    "passages/discrete-reproduction.js",
]
passage_js = "\n".join(inline_images_in_js(read(pf)) for pf in PASSAGE_FILES)
# (js_safe applied after definition below)

# ---- 2. Gather CSS ----
app_css = read("css/app.css")
exam_css = read("css/exam.css")

# Scope exam.css under a wrapper so it only applies to the exam view, and so its
# global resets (* { box-sizing } etc.) don't fight the app shell. We prefix every
# selector with #view-exam. Simpler + robust: wrap rules.
def scope_css(css, prefix):
    out = []
    # naive but effective scoping: prepend prefix to each selector group,
    # skipping @-rules and keyframes blocks.
    i = 0
    depth = 0
    buf = ""
    # We'll process top-level rules only.
    tokens = re.split(r'(\{|\})', css)
    # Reconstruct with selector prefixing at depth 0.
    result = ""
    pending_selector = ""
    level = 0
    for tok in tokens:
        if tok == "{":
            if level == 0:
                sel = pending_selector.strip()
                if sel.startswith("@"):
                    result += sel + " {"
                else:
                    parts = [s.strip() for s in sel.split(",") if s.strip()]
                    scoped = []
                    for p in parts:
                        # don't scope html/body/* resets to the body; map them to the wrapper
                        if p in ("*", "html", "body", "#app"):
                            scoped.append(prefix)
                        elif p.startswith(("html", "body")):
                            scoped.append(prefix + " " + re.sub(r'^(html|body)\s*', '', p))
                        else:
                            scoped.append(prefix + " " + p)
                    result += ", ".join(scoped) + " {"
                pending_selector = ""
            else:
                result += pending_selector + "{"
                pending_selector = ""
            level += 1
        elif tok == "}":
            level -= 1
            result += pending_selector + "}"
            pending_selector = ""
        else:
            pending_selector += tok
    return result


exam_css_scoped = scope_css(exam_css, "#view-exam")

# ---- 3. Gather JS (order matters) ----
constants_js = js_safe(read("js/constants.js"))
store_js = js_safe(read("js/store.js"))
ui_js = js_safe(read("js/ui.js"))
charts_js = js_safe(read("js/charts.js"))
index_js = js_safe(read("js/passages-index.js"))

# ---- 4. Build standalone HTML ----
HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MedPrep MCAT — Practice Platform (Standalone)</title>
<style>
__APP_CSS__

/* ===== scoped exam interface ===== */
#view-exam { position: fixed; inset: 0; z-index: 100; background: #6f7d8c; display: none; }
#view-exam.active { display: block; }
__EXAM_CSS__

/* view switching for the app shell */
.view { display: none; }
.view.active { display: block; }
body.exam-open .app-shell { display: none; }
</style>
</head>
<body>
<div class="app-shell">
  <!-- NAV -->
  <nav class="nav">
    <div class="nav-inner">
      <a class="brand" href="#home"><span class="logo">M<small>P</small></span> MedPrep</a>
      <div class="nav-links">
        <a href="#home" data-page="home">Home</a>
        <a href="#practice" data-page="practice">Practice</a>
        <a href="#analytics" data-page="analytics">Analytics</a>
        <a href="#data" data-page="data">Data</a>
      </div>
      <div class="nav-spacer"></div>
    </div>
  </nav>

  <!-- ============ HOME ============ -->
  <div id="view-home" class="view container">
    <section class="hero">
      <h1>Master the MCAT, one passage at a time.</h1>
      <p>Realistic exam-interface practice passages, detailed solutions, and analytics that
         track your accuracy over time — all stored privately in your browser.</p>
      <a class="btn btn-primary" href="#practice">Start Practicing →</a>
      <a class="btn btn-ghost" href="#analytics" style="margin-left:10px;">View Analytics</a>
    </section>
    <div class="card" style="margin-bottom:28px;">
      <h2>Today at a glance</h2>
      <div class="grid cols-3" id="todayStats"></div>
    </div>
    <div class="grid cols-3">
      <a class="feature" href="#practice">
        <div class="ficon" style="background:#e6f1f4;color:var(--teal);">📝</div>
        <h3>Practice</h3>
        <p>Work through full passages in a realistic Pearson-style test interface with highlight,
           strikethrough, flagging, and a timer. Review detailed solutions afterward.</p>
        <div class="arrow">Browse passages →</div>
      </a>
      <a class="feature" href="#analytics">
        <div class="ficon" style="background:#eef0ff;color:var(--accent);">📊</div>
        <h3>Analytics</h3>
        <p>See your daily accuracy, a score donut, and breakdowns by subject, topic, and
           difficulty — plus your strongest and weakest areas over time.</p>
        <div class="arrow">Open dashboard →</div>
      </a>
      <a class="feature" href="#data">
        <div class="ficon" style="background:#fff3da;color:#9a7400;">💾</div>
        <h3>Data</h3>
        <p>Your progress lives in this browser. Download a save file to back it up, then
           upload it later — on any device — to pick up right where you left off.</p>
        <div class="arrow">Manage your data →</div>
      </a>
    </div>
  </div>

  <!-- ============ PRACTICE ============ -->
  <div id="view-practice" class="view container">
    <h1 class="page-title">Practice Passages</h1>
    <p class="page-sub">Choose a passage to begin. Each runs in a realistic exam interface.</p>
    <div class="toolbar-row"><div class="seg" id="subjFilter"></div></div>
    <div id="passageList"></div>
  </div>

  <!-- ============ ANALYTICS ============ -->
  <div id="view-analytics" class="view container">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div>
        <h1 class="page-title">Your MCAT Progress</h1>
        <p class="page-sub">Tracked from your completed passages. Data stays in this browser.</p>
      </div>
      <button class="btn btn-danger btn-sm" id="resetBtn">Reset All</button>
    </div>
    <div class="card" style="margin-bottom:18px;">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:10px;">
        <h2 style="margin:0;">Daily Accuracy</h2>
        <div class="toolbar-row" style="margin:0;">
          <div class="seg" id="rangeSeg">
            <button data-r="today">Today</button>
            <button data-r="week">Last Week</button>
            <button data-r="all" class="active">All</button>
            <button data-r="custom">Custom</button>
          </div>
          <div id="customRange" style="display:none;gap:8px;">
            <input type="date" class="date-field" id="startDate">
            <span style="align-self:center;color:var(--muted);">→</span>
            <input type="date" class="date-field" id="endDate">
          </div>
        </div>
      </div>
      <div id="lineChart"></div>
    </div>
    <div class="grid cols-2" style="margin-bottom:18px;">
      <div class="card"><h2>Your Score</h2>
        <div class="donut-wrap"><div class="donut" id="scoreDonut"></div><div style="flex:1;" id="scoreList"></div></div></div>
      <div class="card"><h2>Your Usage</h2>
        <div class="donut-wrap"><div class="donut" id="usageDonut"></div><div style="flex:1;" id="usageList"></div></div></div>
    </div>
    <div class="grid cols-2" style="margin-bottom:18px;">
      <div class="card"><h2>Strongest Topics</h2><div id="strongTopics"></div></div>
      <div class="card"><h2>Weakest Topics</h2><div id="weakTopics"></div></div>
    </div>
    <div class="card" style="margin-bottom:18px;">
      <h2>Your Breakdown by Subject</h2>
      <table class="tbl"><thead><tr><th>Subject</th><th>Correct</th><th>Incorrect</th><th>Incomplete</th></tr></thead>
        <tbody id="subjectRows"></tbody></table>
    </div>
    <div class="card" style="margin-bottom:18px;">
      <h2>Your Breakdown by Difficulty</h2>
      <table class="tbl"><thead><tr><th>Difficulty Range</th><th>Correct</th><th>Incorrect</th><th>Incomplete</th></tr></thead>
        <tbody id="difficultyRows"></tbody></table>
    </div>
    <div class="card">
      <h2>Your Previous Activity</h2>
      <table class="tbl"><thead><tr><th>Passage</th><th>Difficulty</th><th>Correct</th><th>Incorrect</th><th>Accuracy</th><th>Time / Date</th></tr></thead>
        <tbody id="activityRows"></tbody></table>
    </div>
  </div>

  <!-- ============ DATA ============ -->
  <div id="view-data" class="view container">
    <h1 class="page-title">Your Data</h1>
    <p class="page-sub">Your progress is stored privately in this browser (no account, no server).
       Back it up to a file, then restore it later or on another device.</p>
    <div id="storageWarn" style="display:none;background:#fff7e0;border:1px solid #e0c277;color:#7a5b00;border-radius:10px;padding:12px 16px;margin-bottom:18px;font-size:14px;">
      <b>Heads up:</b> this browser isn't letting the app save automatically (private mode, or this exact file context).
      Your progress will be lost when you close the tab unless you <b>download a save file</b> below and re-import it next time.
    </div>
    <div class="grid cols-2">
      <div class="card">
        <div class="ficon" style="width:46px;height:46px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:22px;background:#e6f1f4;color:var(--teal);margin-bottom:12px;">⬇️</div>
        <h2>Download save file</h2>
        <p class="txt-muted" style="font-size:14px;">Saves all your attempts and stats to a <code>.json</code> file you can keep as a backup.</p>
        <div id="exportStats" style="margin:14px 0;"></div>
        <button class="btn btn-primary" id="exportBtn">Download Save File</button>
      </div>
      <div class="card">
        <div class="ficon" style="width:46px;height:46px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:22px;background:#fff3da;color:#9a7400;margin-bottom:12px;">⬆️</div>
        <h2>Restore from save file</h2>
        <p class="txt-muted" style="font-size:14px;">Upload a previously downloaded save file. This <b>replaces</b> the data currently in this browser.</p>
        <input type="file" id="importFile" accept="application/json,.json" style="margin:14px 0;display:block;">
        <button class="btn btn-ghost" id="importBtn">Restore Data</button>
        <div id="importMsg" style="margin-top:12px;font-size:13px;"></div>
      </div>
    </div>
    <div class="card" style="margin-top:18px;border-color:#f3d6d6;">
      <h2 class="txt-red">Danger zone</h2>
      <p class="txt-muted" style="font-size:14px;">Permanently delete all saved progress in this browser. Consider downloading a save file first.</p>
      <button class="btn btn-danger" id="wipeBtn">Erase All Data</button>
    </div>
    <div class="card" style="margin-top:18px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <h2 style="margin:0;">Raw save data</h2>
        <button class="btn btn-ghost btn-sm" id="copyBtn">Copy JSON</button>
      </div>
      <pre id="rawData" style="background:#0f1722;color:#cfe3ee;padding:16px;border-radius:10px;overflow:auto;max-height:320px;font-size:12px;line-height:1.5;margin-top:14px;"></pre>
    </div>
  </div>
</div><!-- /app-shell -->

<!-- ============ EXAM (full-screen overlay) ============ -->
<div id="view-exam">
  <div id="app">
    <div class="top-header">
      <span class="left"><span id="examTitle">Passage</span></span>
      <span class="mid" id="examSubject"></span>
      <span class="right">
        <a class="exit" href="#practice" title="Exit to passage list">&#10005; Exit</a>
        <span class="timer">Time Remaining&nbsp; <span id="clock">00:00:00</span></span>
      </span>
    </div>
    <div class="toolbar">
      <div class="item-counter">Item <span id="itemNow">1</span> of <span id="itemTotal">0</span></div>
      <div class="tools">
        <button class="tool-btn" id="tHL" onclick="EXAM.setTool('hl')" title="Highlight (Alt+H)">
          <span class="ic">&#128396;</span><span>Highlight</span></button>
        <button class="tool-btn" id="tST" onclick="EXAM.setTool('st')" title="Strikethrough (Alt+S)">
          <span class="ic" style="text-decoration:line-through;">A</span><span>Strikethrough</span></button>
      </div>
      <div class="spacer"></div>
      <button class="solution-toggle" id="solBtn" onclick="EXAM.toggleReveal()">Show Solution</button>
    </div>
    <div class="panes">
      <div class="pane left">
        <div class="passage-title" id="passageHeading">Passage 1</div>
        <div id="passageBody"></div>
      </div>
      <div class="pane right" id="questionPane"></div>
    </div>
    <div class="bottom-bar">
      <div class="bl">
        <button class="flag-btn" id="flagBtn" onclick="EXAM.toggleFlag()">
          <span class="flag">&#9873;</span><span id="flagTxt">Flag for Review</span></button>
      </div>
      <div class="br">
        <button class="nav-btn secondary" onclick="EXAM.openModal('nav')">Navigation</button>
        <button class="nav-btn secondary" onclick="EXAM.openModal('review')">Review</button>
        <button class="nav-btn" id="prevBtn" onclick="EXAM.go(-1)">&#9664; Previous</button>
        <button class="nav-btn" id="nextBtn" onclick="EXAM.onNext()">Next &#9654;</button>
      </div>
    </div>
  </div>
  <div class="overlay" id="overlay" onclick="if(event.target===this)EXAM.closeModal()">
    <div class="modal">
      <div class="modal-head"><span id="modalTitle">Navigation</span><button onclick="EXAM.closeModal()">&times;</button></div>
      <div class="modal-body" id="modalBody"></div>
    </div>
  </div>
  <div class="overlay" id="resOverlay" onclick="if(event.target===this)EXAM.closeResults()">
    <div class="modal results">
      <div class="modal-head"><span>Section Results</span><button onclick="EXAM.closeResults()">&times;</button></div>
      <div class="score-hero">
        <div class="score-big" id="scoreBig">0 / 0</div>
        <div class="score-sub" id="scoreSub"></div>
        <div class="score-meta">
          <div>Time used<b id="timeUsed">0:00</b></div>
          <div>Correct<b id="numCorrect" style="color:#1c7a32;">0</b></div>
          <div>Incorrect<b id="numWrong" style="color:#b3232b;">0</b></div>
        </div>
      </div>
      <div class="modal-body">
        <table class="restbl"><thead>
          <tr><th>Item</th><th>Your answer</th><th>Correct</th><th>Result</th><th>% correct</th></tr>
        </thead><tbody id="resRows"></tbody></table>
      </div>
      <div class="modal-foot">
        <a class="nav-btn secondary" href="#analytics" onclick="EXAM.closeResults()">View Analytics</a>
        <div class="right">
          <a class="nav-btn secondary" href="#practice" onclick="EXAM.closeResults()">Back to Passages</a>
          <button class="nav-btn" onclick="EXAM.reviewSolutions()">Review Solutions &#9654;</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
/* ===== constants ===== */
__CONSTANTS_JS__
/* ===== store ===== */
__STORE_JS__
/* ===== ui helpers ===== */
__UI_JS__
/* ===== charts ===== */
__CHARTS_JS__
/* ===== passage data (images inlined) ===== */
__PASSAGE_JS__
/* ===== passages index ===== */
__INDEX_JS__
</script>

<script>
__APP_JS__
</script>
</body>
</html>
"""

# apply js_safe to passage + app JS now that the helper exists
passage_js = js_safe(passage_js)

# ---- 5. App controller JS (router + per-view init, adapted from page scripts) ----
APP_JS = js_safe(read("standalone_app.js"))

out = (HTML
       .replace("__APP_CSS__", app_css)
       .replace("__EXAM_CSS__", exam_css_scoped)
       .replace("__CONSTANTS_JS__", constants_js)
       .replace("__STORE_JS__", store_js)
       .replace("__UI_JS__", ui_js)
       .replace("__CHARTS_JS__", charts_js)
       .replace("__PASSAGE_JS__", passage_js)
       .replace("__INDEX_JS__", index_js)
       .replace("__APP_JS__", APP_JS))

with open(os.path.join(ROOT, "standalone.html"), "w", encoding="utf-8") as f:
    f.write(out)

print("Wrote standalone.html:", len(out), "bytes")
