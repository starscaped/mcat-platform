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
  "snare-complex", // SNARE complex vesicle fusion passage
  "method-of-loci", // Depression & Method of Loci passage
  "health-disparities", // Health disparities in minorities passage
  "photorefraction", // Photorefraction & vision correction passage
  "suicide-factors", // Suicide risk factors and anomie passage
  "insula-interoception", // Insula and interoception passage
  "poverty-inequality", // Poverty, inequality, and health passage
  "hif-intestinal-barrier", // HIF-1 and intestinal barrier function passage
  "hemophilia-vitamin-k" // Hemophilia B and vitamin K passage
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