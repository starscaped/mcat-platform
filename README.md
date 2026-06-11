# MedPrep — MCAT Practice Platform

A static, zero-build MCAT practice question platform. Deploys to Vercel in one step.

## Features

- **Practice** — full passages in a realistic Pearson/AAMC-style test interface
  (split passage/question panes, highlight, strikethrough, flag-for-review, timer,
  navigator, end-of-section results, and reviewable solutions).
- **Analytics** — Jack Westin–style dashboard built **only from your real attempts**:
  daily-accuracy line chart, score & usage donuts, strongest/weakest topics,
  and breakdowns by subject and difficulty, plus a full activity log. Filter by
  Today / Last Week / All / custom date range.
- **Data** — your progress is stored in the browser (`localStorage`). Download a
  `.json` save file to back it up, then re-upload it later (or on another device)
  to restore everything.

No accounts, no backend, no tracking — all data stays in the user's browser.

## Two ways to use it

1. **Multi-file site** (`index.html`, `practice.html`, …) — the deployable version for Vercel.
2. **Single self-contained file** (`standalone.html`) — everything (CSS, JS, images)
   inlined into one HTML file with a hash-based router. Just **double-click it** to open
   in any browser; no server, no internet, images included. Great for quick testing or
   sharing one file. Rebuild it any time with `python3 build_standalone.py`.

> Note: when opened directly via `file://`, a few browsers block automatic `localStorage`
> saving. The app detects this, falls back to in-memory storage, and shows a banner in the
> **Data** tab reminding you to download a save file. Running via a local server or on
> Vercel avoids this entirely.

## Project structure

```
mcat-platform/
├── index.html          # Home
├── practice.html       # Passage list
├── exam.html           # Exam runner (?passage=<id>)
├── analytics.html      # Analytics dashboard
├── data.html           # Save / load progress
├── vercel.json         # Vercel static config (cleanUrls)
├── css/
│   ├── app.css         # Shared design system
│   └── exam.css        # Pearson-style exam interface
├── js/
│   ├── constants.js    # Subjects, difficulties, storage keys
│   ├── store.js        # Persistence + analytics computations
│   ├── charts.js       # Dependency-free SVG charts
│   ├── ui.js           # Nav highlight, toast, formatters
│   ├── passages-index.js  # Registry of available passages
│   ├── exam.js         # Exam runner logic
│   └── analytics.js    # Analytics page logic
├── passages/
│   └── trypanosoma.js  # Example passage (data file)
└── images/             # Passage / explanation figures
```

## Run locally

It's plain static files, so any static server works:

```bash
cd mcat-platform
python3 -m http.server 8000
# open http://localhost:8000
```

(Opening `index.html` directly via `file://` also works.)

## Deploy to Vercel

1. Install the CLI: `npm i -g vercel`
2. From the `mcat-platform/` directory: `vercel`
   - Framework preset: **Other** (no build step)
   - Output / root directory: the project root (these files)
3. `vercel --prod` to promote to production.

Or push the folder to a Git repo and import it in the Vercel dashboard — it will
deploy as a static site automatically (no build command needed).

## Adding questions from PDFs (automated)

If you want an AI agent to add new question PDFs for you, paste the contents of
**`ADDING_QUESTIONS_PROMPT.md`** into your local agentic AI along with the PDF(s).
It documents the full extraction → data-file → registration → bundle → test workflow.

## Adding a new passage

1. Copy `passages/trypanosoma.js` to `passages/<your-id>.js` and edit the fields
   (see the schema comment at the top of that file). Put any figures in `images/`
   and reference them with relative paths like `images/your-figure.png`.
2. Add a script tag for your new file in **index.html**, **practice.html**, and
   **exam.html**, placed *before* `js/passages-index.js`:
   ```html
   <script src="passages/<your-id>.js"></script>
   ```
3. Add `"<your-id>"` to `MCAT.PASSAGE_ORDER` in `js/passages-index.js`.

The passage will then appear in Practice, and its attempts will flow into Analytics
(bucketed by the `subject`, `system`, and `difficulty` you set).

## Save-file format

The exported file is JSON: `{ version, createdAt, attempts: [...] }`. Each attempt
records the passage, subject/system/difficulty, time spent, per-question results,
and totals. The format version is `MCAT.SAVE_VERSION` in `js/constants.js`.
