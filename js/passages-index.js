/* Registry of all passages available in the question bank.
   To add a passage:
     1. Create passages/<id>.js (copy passages/trypanosoma.js).
     2. Add a <script src="passages/<id>.js"></script> tag in the HTML files
        that need it (practice.html and index.html), BEFORE this file.
     3. Add its id to PASSAGE_ORDER below.

   PASSAGES is populated by each passage file (window.PASSAGES[id] = {...}). */
window.MCAT = window.MCAT || {};

MCAT.PASSAGE_ORDER = [
  "trypanosoma",
  "neurulation",
  "porcine-oocyte",
  "endometriosis",
  "discrete-reproduction"
];

// Convenience accessor: array of passage objects in display order.
MCAT.getPassages = function () {
  return MCAT.PASSAGE_ORDER
    .map(function (id) { return (window.PASSAGES || {})[id]; })
    .filter(Boolean);
};

MCAT.getPassage = function (id) {
  return (window.PASSAGES || {})[id] || null;
};
