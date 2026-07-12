/* Registry of all passages available in the question bank.
   To add a passage:
     1. Create passages/<id>.js (copy passages/trypanosoma.js).
     2. Add its id to PASSAGE_ORDER below.
     
   This file now automatically injects the script tags for you. */
window.MCAT = window.MCAT || {};

MCAT.PASSAGE_ORDER = [
  "trypanosoma",
  "neurulation",
  "porcine-oocyte",
  "endometriosis",
  "discrete-reproduction",
  "scuba-diving",
  "method-of-loci",
  "health-disparities",
  "snare-proteins",
  "suicide-sociology",
  "theories-of-emotion",
  "poverty-sociology",
  "hif1-gut-barrier",
  "color-perception",
  "receptive-language",
  "lucid-dreaming",
  "glymphatic-system",
  "sleep-needs-lifespan",
  "sleep-memory-consolidation",
  "eating-disorders-males",
  "nuclear-medicine-fission",
  "frap-hmg-mobility",
  "tlr4-mutation-mice",
  "cardiovascular-hemodynamics",
  "mri-contrast-gadolinium",
  "psychophysiology-distraction",
  "bicarbonate-buffer-gas"
];

// Dynamically inject the script tags synchronously into the document loading stream
MCAT.PASSAGE_ORDER.forEach(function (id) {
  document.write('<script src="passages/' + id + '.js"></script>');
});

// Convenience accessor: array of passage objects in display order.
MCAT.getPassages = function () {
  return MCAT.PASSAGE_ORDER
    .map(function (id) { return (window.PASSAGES || {})[id]; })
    .filter(Boolean);
};

MCAT.getPassage = function (id) {
  return (window.PASSAGES || {})[id] || null;
};