# Prompt: Add MCAT questions from PDFs into the MedPrep platform

You are working inside the **MedPrep MCAT practice platform** — a static (no-build)
HTML/CSS/JS site that also bundles into one `standalone.html`. Your job: take one or
more **UWorld-style question PDFs** and add their passages, questions, explanations,
and figures into the platform so they appear in Practice, run in the exam interface,
and flow into Analytics.

Work autonomously end-to-end. Do not ask me to confirm routine steps; only stop if a
PDF is genuinely unreadable or a question's correct answer is ambiguous.

---

## 0. Project map (read first)

```
mcat-platform/
├── index.html, practice.html, exam.html, analytics.html, data.html
├── build_standalone.py        # bundles everything into standalone.html
├── css/app.css, css/exam.css  # exam pane renders passage/explanation HTML
├── js/
│   ├── constants.js           # MCAT.SUBJECTS, MCAT.DIFFICULTIES
│   ├── passages-index.js      # MCAT.PASSAGE_ORDER  ← register new passages here
│   ├── store.js, charts.js, ui.js, exam.js, analytics.js
├── passages/                  # ONE .js file per passage (the data) ← you add here
│   └── trypanosoma.js         # canonical example + schema comment
└── images/                    # figures referenced by passages ← you add here
```

Each passage file does: `window.PASSAGES["<id>"] = { ...passage object... }`.
`passages/trypanosoma.js` is the **reference implementation** — open it and copy its
exact structure. The data schema is documented in a comment at the top of that file.

---

## 1. Extract each PDF (text, then images)

These PDFs are typically exported from a qbank. Each "question item" spans the passage
page + explanation page(s). A multi-question PDF repeats the same passage before each
question. Some PDFs are **standalone (discrete) questions** with no shared passage.

Use Python with PyMuPDF (`pip install pymupdf Pillow`):

```python
import fitz
doc = fitz.open("FILE.pdf")
for i, p in enumerate(doc):
    print("==== PAGE", i+1, "===="); print(p.get_text())
```

For **each question** capture, verbatim:
- **Stem** (the question text). If it includes a Roman-numeral list (I/II/III), keep it.
- **Options** A–D with their **answer-percentage** (e.g. `[62%]`).
- The **correct answer** (the PDF prints "Correct" + "X% answered correctly"; the
  correct letter is the one whose percentage matches that headline %, and the
  explanation also states "Correct Answer"). Double-check letter vs. percentage.
- The full **Explanation** prose, including every `(Choice X)` rebuttal.
- The **Educational objective** paragraph.
- The **QID** (printed as `QID:NNNNNN`), **Subject**, and **System**.

Watch for `get_text()` truncation on long PDFs — if output is cut, re-extract the
missing page range explicitly (`doc[start:end]`).

### Images / figures
List images per page and keep only meaningful ones (width > ~200 px):

```python
seen=set()
for i,p in enumerate(doc):
    for im in p.get_images(full=True):
        x=im[0]
        if x in seen: continue
        seen.add(x)
        d=doc.extract_image(x)
        if d["width"]>200: print(f"page{i+1} xref{x} {d['width']}x{d['height']} {d['ext']}")
```

- A small (~16×13) image and a ~504×148 JPEG are **watermarks** — IGNORE them.
- An image that repeats on **every** page is usually the **passage figure/table**
  (belongs in `passageHtml`).
- A large image unique to one explanation page is that question's **explanation figure**.
- VISUALLY INSPECT each candidate (open it) before deciding question-figure vs.
  explanation-figure vs. junk. Do not guess from filename/size alone.
- If a figure is actually a simple data **table**, prefer recreating it as an HTML
  `<table class="passage-table">` (crisper than an image). See `porcine-oocyte.js`.

Extract, then **optimize** (cap width 900px, PNG optimize) to keep `standalone.html`
small. Save into `mcat-platform/images/` with descriptive, collision-proof names like
`<shortid>_q<QID>_<topic>.png` (e.g. `pig_q401088_spermatogenesis.png`,
`endo_fig1_vegf.png`):

```python
from PIL import Image
im = Image.open(src).convert("RGB")
if im.width > 900:
    im = im.resize((900, int(im.height*900/im.width)), Image.LANCZOS)
im.save("mcat-platform/images/<name>.png", "PNG", optimize=True)
```

---

## 2. Decide how to group the PDFs into passage files

- **A multi-question PDF that shares one passage** → ONE passage file with that passage
  and all its questions (e.g. `endometriosis.js`, 6 questions).
- **Standalone/discrete questions** (no shared passage) → group several into ONE
  "Discrete Questions: <theme>" set. Use a short intro paragraph as `passageHtml`
  explaining the questions are independent. See `discrete-reproduction.js`.
- Pick a unique kebab-case `id` for each new file (used in URLs + save data). It must
  not collide with existing ids in `passages-index.js`.

---

## 3. Create the passage data file

Copy `passages/trypanosoma.js` to `passages/<id>.js` and fill it in. Object fields:

```js
window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["<id>"] = {
  id: "<id>",
  title: "Short Display Title",
  subject: "Biology",              // MUST be one of MCAT.SUBJECTS in js/constants.js
  system: "Reproduction",          // the PDF's "System:" value (used in topic analytics)
  difficulty: "Moderate",          // "Easy" | "Moderate" | "Hard" (see note below)
  estMinutes: 9,                   // section timer; use ~1.5 min × number of questions
  passageHtml: `...HTML...`,       // passage prose + any passage figure/table
  questions: [
    {
      qid: "NNNNNN",
      stem: "Question text (HTML ok).",
      preopts: "",                 // optional HTML shown above choices, e.g. a roman list
      options: [
        { L: "A", text: "...", pct: "10%", correct: false },
        { L: "B", text: "...", pct: "12%", correct: false },
        { L: "C", text: "...", pct: "62%", correct: true  },  // exactly ONE correct
        { L: "D", text: "...", pct: "14%", correct: false }
      ],
      stat: "62% answered correctly",
      explanationHtml: `...HTML, including (Choice X) rebuttals + any figure...`,
      eo: "Educational objective text."
    }
    // ...more questions
  ]
};
```

### Authoring rules (follow exactly)
- **Exactly one** option per question has `correct: true`. Verify it matches the PDF.
- Keep stems/explanations faithful to the PDF; you may lightly trim redundant phrasing
  but never change meaning, the correct answer, or the percentages.
- HTML conventions used by this platform (match the existing files):
  - Italics: `<em>...</em>` (e.g. species names, "in vitro").
  - Bold emphasis / labels: `<strong>...</strong>`.
  - Bulleted lists: `<ul class="dash"><li>...</li></ul>`.
  - Roman-numeral option lists go in `preopts`:
    `<div class="roman">I. ...<br>II. ...<br>III. ...</div>`.
  - Figures: `<p class="figwrap"><img src="images/<name>.png" alt="..."></p>`.
  - Figure/table caption line: `<p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;...</p>`.
  - Data tables: `<table class="passage-table"><thead>...</thead><tbody>...</tbody></table>`.
- **Escape special chars as HTML entities** inside the template strings: use
  `&minus;` (−), `&ndash;` (–), `&deg;` (°), `&beta;` (β), `&lt;`/`&gt;`,
  `&amp;` for a literal `&` (e.g. titles like "Endometriosis &amp; VEGF").
  Do NOT paste raw non-ASCII that could corrupt; entities are safest.
- **CRITICAL — never put a literal `</script>` anywhere** in the file (even in a
  comment). The bundler escapes it, but avoid it to be safe. Writing
  `<script>` examples? Write them as text, not the closing form.
- `images/...` paths are **relative** (no leading slash) so they work on Vercel,
  `file://`, and when inlined into the standalone build.
- Place the question's explanation figure inside `explanationHtml` near the relevant
  paragraph; place the passage's shared figure/table inside `passageHtml`.

### Difficulty
The PDF doesn't state difficulty. Infer it: a reasonable proxy is the "% answered
correctly" of the hardest questions — mostly ≥70% → "Easy"-ish, mixed/40–70% →
"Moderate", several <50% or a long experimental passage → "Hard". Use judgment;
when unsure use "Moderate".

---

## 4. Register the passage

In `js/passages-index.js`, append each new `id` to `MCAT.PASSAGE_ORDER` (order =
display order in Practice):

```js
MCAT.PASSAGE_ORDER = [
  "trypanosoma", "neurulation", /* ...existing... */, "<your-new-id>"
];
```

Then add a `<script>` tag for each new passage file in **index.html**, **practice.html**,
and **exam.html**, placed **after** the last existing `passages/*.js` tag and **before**
`js/passages-index.js`. Pattern (anchor on the last existing passage script):

```html
<script src="passages/<existing-last>.js"></script>
<script src="passages/<your-new-id>.js"></script>   <!-- add this line -->
<script src="js/passages-index.js"></script>
```

(analytics.html and data.html do NOT load passages — leave them alone.)

---

## 5. Update the standalone bundler

In `build_standalone.py`, add each new file path to the `PASSAGE_FILES` list (this
inlines its images as data URIs into `standalone.html`):

```python
PASSAGE_FILES = [
    "passages/trypanosoma.js",
    # ...existing...
    "passages/<your-new-id>.js",
]
```

---

## 6. Build + validate (must pass before you finish)

Run from `mcat-platform/`:

1. **Syntax-check every new/edited JS file**
   ```bash
   for f in passages/*.js js/*.js; do node --check "$f" || echo "FAIL $f"; done
   ```

2. **Rebuild the standalone** and confirm script tags stay balanced (a stray
   `</script>` would unbalance them):
   ```bash
   python3 build_standalone.py
   python3 - <<'PY'
   import re,subprocess
   h=open('standalone.html').read()
   o=[m.start() for m in re.finditer(r'<script>',h)]; c=[m.start() for m in re.finditer(r'</script>',h)]
   assert len(o)==len(c)==2, f"unbalanced script tags: {len(o)} open / {len(c)} close"
   for i,s in enumerate(o):
       e=min(x for x in c if x>s); open(f'/tmp/b{i}.js','w').write(h[s+8:e])
       r=subprocess.run(['node','--check',f'/tmp/b{i}.js'],capture_output=True,text=True)
       print('block',i,'OK' if r.returncode==0 else 'FAIL '+r.stderr[:200])
   print('inlined images:', h.count('data:image/png;base64'))
   PY
   ```

3. **Headless end-to-end test** of the standalone (no browser needed beyond `node` + `jsdom`). Install jsdom (`npm install jsdom --no-save`)
   and run a script that: loads `standalone.html` from `file://`, opens `#practice`,
   then for each new passage opens `#exam/<id>`, answers every question with its
   `.correct-ans` option, opens results, and asserts the score equals the number of
   questions. Example:

   ```js
   const { JSDOM } = require('jsdom');
   (async () => {
     const errs = [];
     const dom = await JSDOM.fromFile('mcat-platform/standalone.html', {
       url: 'file:///x/standalone.html', runScripts: 'dangerously',
       resources: 'usable', pretendToBeVisual: true,
       beforeParse(w){ w.confirm=()=>1; w.alert=()=>{}; w.URL.createObjectURL=()=>'blob:x';
         w.URL.revokeObjectURL=()=>{}; w.addEventListener('error',e=>errs.push(e.message)); }
     });
     await new Promise(r=>setTimeout(r,800));
     const w=dom.window, d=w.document;
     console.log('load errors:', errs.length?errs:'none');
     for (const id of ['<your-new-id>', /* ...all new ids... */]) {
       w.location.hash='#exam/'+id; w.dispatchEvent(new w.Event('hashchange'));
       await new Promise(r=>setTimeout(r,200));
       const n=+d.getElementById('itemTotal').textContent;
       for (let i=0;i<n;i++){
         const correct=[...d.querySelectorAll('#questionPane .choice')]
           .find(c=>c.classList.contains('correct-ans'));
         w.EXAM.clickChoice(correct.getAttribute('data-l'));
         if(i<n-1) w.EXAM.go(1);
       }
       w.EXAM.openResults(); await new Promise(r=>setTimeout(r,50));
       console.log(id, 'score', d.getElementById('scoreBig').textContent, '(expect', n+'/'+n+')');
       w.EXAM.closeResults();
     }
     process.exit(0);
   })();
   ```

   PASS criteria: `load errors: none`; every new passage shows in Practice with a
   "QID …" tag; each exam loads with the right question count and a filled passage
   pane; answering all correct gives a perfect score; and the analytics
   `#analytics` view shows the new attempts. (Note: jsdom blocks `localStorage` on
   `file://` — the app falls back to in-memory storage, which is expected and fine
   for the test. Ignore the harmless `Not implemented: scrollTo` warning.)

4. (Optional) Spot-check the multi-file site by serving it
   (`python3 -m http.server` in `mcat-platform/`) and loading
   `exam.html?passage=<id>` — allow ~2s for the passage scripts to load.

---

## 7. Cleanup + report

- Delete any temporary extraction folders/scripts and the `node_modules` you created
  for testing (they are not part of the deployable site).
- Keep: the new `passages/*.js`, the new `images/*.png`, and the edits to
  `passages-index.js`, the three HTML files, and `build_standalone.py`, plus the
  rebuilt `standalone.html`.
- Report a summary: for each PDF → which passage id it became, number of questions,
  QID range, difficulty, and how many figures were added. State the new platform
  totals (passages, questions) and that all validations passed.

---

## Common pitfalls (avoid these)

- ❌ Forgetting to add the `<script>` tag in all THREE of index/practice/exam.html →
  passage won't appear or exam 404s.
- ❌ Forgetting `build_standalone.py`'s `PASSAGE_FILES` → standalone is missing the
  new passage or its images.
- ❌ A literal `</script>` in a JS comment/string → breaks the standalone page.
- ❌ Raw non-ASCII (−, –, °, β, ≤) pasted into strings → use HTML entities.
- ❌ Absolute image paths (`/images/...`) → use relative (`images/...`).
- ❌ Marking the wrong option `correct: true` → always cross-check the letter against
  the "X% answered correctly" headline AND the "Correct Answer" line in the explanation.
- ❌ Including the watermark images (small 16×13 PNG, 504×148 JPEG).
- ❌ Subject not in `MCAT.SUBJECTS` → it still works but analytics buckets it oddly;
  use an exact match from `js/constants.js`.
