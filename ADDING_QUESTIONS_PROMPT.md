# Prompt: Add MCAT questions from PDFs into the platform

You are working inside the **uearth practice platofmr** — a static (no-build)
HTML/CSS/JS site. Your job: take one or
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

Extract, then **optimize** (cap width 900px, PNG optimize). Save into `mcat-platform/images/` with descriptive, collision-proof names like
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
- **Standalone/discrete questions** (no shared passage) → group up to 6 questions into ONE
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

---

## 5. Build + validate (must pass before you finish)

Run from `mcat-platform/`:

1. **Syntax-check every new/edited JS file**
   ```bash
   for f in passages/*.js js/*.js; do node --check "$f" || echo "FAIL $f"; done
   ```

2. (Optional) Spot-check the multi-file site by serving it
   (`python3 -m http.server` in `mcat-platform/`) and loading
   `exam.html?passage=<id>` — allow ~2s for the passage scripts to load.

---

## 6. Cleanup + report

- Delete any temporary extraction folders/scripts and the `node_modules` you created
  for testing (they are not part of the deployable site).
- Keep: the new `passages/*.js`, the new `images/*.png`, and the edits to
  `passages-index.js`, the three HTML files.
- Report a summary: for each PDF → which passage id it became, number of questions,
  QID range, difficulty, and how many figures were added. State the new platform
  totals (passages, questions) and that all validations passed.

---

## Common pitfalls (avoid these)


- ❌ A literal `</script>` in a JS comment/string → breaks the standalone page.
- ❌ Raw non-ASCII (−, –, °, β, ≤) pasted into strings → use HTML entities.
- ❌ Absolute image paths (`/images/...`) → use relative (`images/...`).
- ❌ Marking the wrong option `correct: true` → always cross-check the letter against
  the "X% answered correctly" headline AND the "Correct Answer" line in the explanation.
- ❌ Including the watermark images (small 16×13 PNG, 504×148 JPEG).
- ❌ Subject not in `MCAT.SUBJECTS` → it still works but analytics buckets it oddly;
  use an exact match from `js/constants.js`.
