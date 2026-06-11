/* ============================================================
   PASSAGE DATA FILE
   ------------------------------------------------------------
   To add a new passage, copy this file, give it a unique `id`,
   fill in the fields, and register it in js/passages-index.js.

   Schema:
   {
     id:        unique string (used in URLs and save data)
     title:     short display title
     subject:   one of the MCAT subjects (see js/constants.js SUBJECTS)
     system:    topic/system label (free text, used in topic analytics)
     difficulty:"Easy" | "Moderate" | "Hard"
     estMinutes:integer (used for the section timer; ~1.5 min/question)
     passageHtml: HTML string for the left pane (images allowed)
     questions: [
       {
         qid:     unique string
         stem:    HTML string
         preopts: optional HTML (e.g. roman-numeral list) shown above choices
         options: [ {L:"A", text:"...", pct:"62%", correct:true|false}, ... ]
         stat:    e.g. "62% answered correctly"
         explanationHtml: HTML string (images allowed)
         eo:      educational objective (plain/HTML string)
       }
     ]
   }
   ============================================================ */
window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["trypanosoma"] = {
  id: "trypanosoma",
  title: "Trypanosoma brucei Cell Cycle",
  subject: "Biology",
  system: "Reproduction",
  difficulty: "Moderate",
  estMinutes: 6,
  passageHtml: `
    <p><em>Trypanosoma brucei</em> is a eukaryotic parasite that causes sleeping sickness in Sub-Saharan Africa. The cell cycle of <em>T.&nbsp;brucei</em> differs from that of higher eukaryotes. For example, during mitosis the nuclear envelope remains intact and the chromatin does not condense; therefore, sister chromatids separate in their uncondensed form. In addition, the nucleus divides before cell division, and the cell divides along the longitudinal axis (Figure&nbsp;1).</p>
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;Mitosis in <em>T. brucei</em></p>
    <p class="figwrap"><img src="images/figure1_mitosis.png" alt="Figure 1: Mitosis in T. brucei"></p>
    <p>A culture of <em>T.&nbsp;brucei</em> was arrested in the S phase of the cell cycle by overnight incubation with the reversible inhibitor hydroxyurea. The cells were then washed, and their progression through the cell cycle was monitored by flow cytometry and microscopy (Figure&nbsp;2A). After washing, a subset of the culture was exposed to the drug VX-680, which arrests cells upon completion of metaphase, and the progression of this subset through the cell cycle was measured (Figure&nbsp;2B).</p>
    <p class="figcap"><b>Figure 2</b>&nbsp;&nbsp;Percentages of a population of <em>T. brucei</em> cells in each phase of the cell cycle, measured at different time points in the absence (A) and presence (B) of VX-680</p>
    <p class="figwrap"><img src="images/figure2_cellcycle_phases.png" alt="Figure 2: cell cycle phase percentages, panels A and B"></p>
  `,
  questions: [
    {
      qid: "402404",
      stem: "<em>T. brucei</em> cells and higher eukaryotes are similar in that they both undergo:",
      preopts: '<div class="roman">I. Interphase<br>II. Prophase<br>III. Cytokinesis</div>',
      options: [
        { L: "A", text: "I only", pct: "10%", correct: false },
        { L: "B", text: "I and II only", pct: "12%", correct: false },
        { L: "C", text: "I and III only", pct: "62%", correct: true },
        { L: "D", text: "I, II, and III", pct: "14%", correct: false }
      ],
      stat: "62% answered correctly",
      explanationHtml: `
        <p>The cell cycle is broadly divided into two phases: <strong>interphase</strong> and the <strong>mitotic (M) phase</strong>.</p>
        <p><strong>Interphase</strong> consists of two gap phases (G1 and G2) separated by a synthesis (S) phase. During G1, cells grow, produce organelles, and assemble molecular machinery. In the S phase that follows, DNA is replicated. Cells then enter G2, during which cells continue to grow.</p>
        <p><strong>M phase</strong> consists of mitosis and cytokinesis. During mitosis (which consists of prophase, metaphase, anaphase, and telophase), identical sets of chromosomes are segregated into two nuclei. Afterward, the cell membrane divides to allow the formation of two daughter cells (ie, cytokinesis).</p>
        <p>The passage states that <em>T. brucei</em> cells were arrested in S phase. Because S phase is a part of interphase, <em>T. brucei</em> cells undergo interphase; Figure 2A shows that all three stages of interphase (ie, G1, S, G2) occur in <em>T. brucei</em> (<strong>Number I</strong>). In addition, Figure 1 shows that in M phase, <em>T. brucei</em> cells undergo cytokinesis longitudinally, along the longest axis (<strong>Number III</strong>).</p>
        <p><strong>(Number II)</strong> During prophase, the first phase of mitosis in many eukaryotes, chromatin condenses into distinct chromosomes and the nuclear envelope disintegrates. However, according to the passage the chromatin in <em>T. brucei</em> cells does not condense, and the nuclear envelope remains intact throughout mitosis. Therefore, unlike higher eukaryotes, <em>T. brucei</em> cells do not undergo prophase.</p>
        <p class="figwrap"><img src="images/q402404_explanation_synchronization.png" alt="Cell synchronization with hydroxyurea"></p>`,
      eo: "The cell cycle consists of interphase (ie, G1, S, G2) and the mitotic (M) phase. In M phase, chromosomes are segregated into two nuclei. During the first part of M phase in higher eukaryotes (ie, prophase), chromatin condenses into chromosomes and the nuclear envelope disintegrates, allowing the cell to progress into the remaining parts of M phase (ie, metaphase, anaphase, telophase). Cytokinesis, or the division of the cell membrane, then yields two daughter cells."
    },
    {
      qid: "402405",
      stem: "Why were <em>T. brucei</em> cells incubated with hydroxyurea overnight and washed afterward?",
      preopts: "",
      options: [
        { L: "A", text: "To ensure that most cells are in the same phase of the cell cycle at each time point measured after washing", pct: "74%", correct: true },
        { L: "B", text: "To determine how inhibition of DNA synthesis affects the progression of the cell cycle", pct: "17%", correct: false },
        { L: "C", text: "To limit the size of the T. brucei cells prior to their entrance into mitosis", pct: "3%", correct: false },
        { L: "D", text: "To promote synthesis of the proteins needed for entry into mitosis", pct: "4%", correct: false }
      ],
      stat: "74% answered correctly",
      explanationHtml: `
        <p>The cell cycle consists of several distinct phases, and a randomly selected population of cells most likely contains a subset of cells in each phase at any given time. As one subset of cells exits a phase, another subset progresses into that phase. The overall effect is that the total number of cells in each phase is approximately constant over time, making it difficult to monitor progress through the cycle. For this reason, cell cycle studies are often carried out in cell populations that have been <strong>synchronized</strong> (ie, experimentally brought to the same stage of the cell cycle).</p>
        <p>A population of cells may be synchronized by incubation with a chemical that reversibly blocks a cell cycle process, arresting cells in the corresponding phase. After all cells have been arrested, the chemical is washed away and the cells reenter the cycle together. The passage states that a DNA replication inhibitor (ie, hydroxyurea) was used to arrest <em>T. brucei</em> cells in S phase, after which these cells were washed to remove the inhibitor and cell cycle progression after release was monitored. The purpose of this protocol was to ensure that most cells (though not necessarily all cells) were in the same phase at each time point measured, as shown in Figure 2A.</p>
        <p><strong>(Choice B)</strong> Although the DNA replication inhibitor arrests cells in S phase by inhibiting DNA synthesis, the purpose of using this inhibitor was to synchronize <em>T. brucei</em> cells, not to observe the effect of inhibiting DNA synthesis on cell cycle progression.</p>
        <p><strong>(Choice C)</strong> Because cell growth occurs during G1 and G2 (but not S) phase, the DNA replication inhibitor is unlikely to alter the size of cells because it arrests cells only in S phase.</p>
        <p><strong>(Choice D)</strong> Promoting synthesis of the proteins needed for entry into mitosis (eg, cyclins) would most likely increase, not arrest, the rate of progression through the cell cycle. The DNA replication inhibitor arrests the cells in S phase.</p>
        <p class="figwrap"><img src="images/q402405_explanation_prophase.png" alt="Prophase in typical eukaryotes vs T. brucei"></p>`,
      eo: "A random population of cells likely contains some cells in each phase of the cell cycle. Study of their progress through the cell cycle requires that these cells first be brought to the same phase of the cell cycle (ie, synchronized). These synchronized cells can then be monitored when they are released and progress through the cell cycle together."
    },
    {
      qid: "402406",
      stem: "Based on Figure 2A, approximately how long is one full cell cycle for <em>T. brucei</em> in the absence of VX-680?",
      preopts: "",
      options: [
        { L: "A", text: "4 hours", pct: "22%", correct: false },
        { L: "B", text: "6 hours", pct: "25%", correct: false },
        { L: "C", text: "8 hours", pct: "44%", correct: true },
        { L: "D", text: "10 hours", pct: "7%", correct: false }
      ],
      stat: "44% answered correctly",
      explanationHtml: `
        <p>The cell cycle consists of a set of distinct phases (ie, G1, S, G2, M) through which a cell progresses as it grows and divides. To complete one cycle, a cell starting in any phase must pass through all other phases and return to the phase in which it began. For example, a cell in G1 must pass through S, G2, and M, then return to G1 to complete the cycle. Similarly, a cell starting in S phase must pass through G2, M, and G1, and then return to S phase. A full cycle takes the same amount of time regardless of which phase is used as the starting point.</p>
        <p>Figure 2A shows the percentages of a population of <em>T. brucei</em> cells in each phase of the cell cycle in the absence of VX-680. The majority of <em>T. brucei</em> cells were in S phase when the experiment began, and they returned to S phase 8 hours later after passing through G2, M, and G1. Similarly, most of the cells were in G2 at the 2-hour mark and returned to G2 at the 10-hour mark, for a total of 8 hours (10 &minus; 2 = 8). Therefore, the graph shows that it takes approximately 8 hours for <em>T. brucei</em> cells to complete one full cell cycle.</p>
        <p><strong>(Choice A)</strong> At 4 hours after the experiment began, the majority of cells were in M phase. Because <em>T. brucei</em> cells started in S phase, they need to return to S phase to complete a full cycle.</p>
        <p><strong>(Choice B)</strong> At 6 hours, the majority of cells were in G1 phase. They need to return to S phase to complete a full cycle.</p>
        <p><strong>(Choice D)</strong> The length of the experiment was 10 hours, but <em>T. brucei</em> completed the cell cycle in 8 hours.</p>
        <p class="figwrap"><img src="images/q402406_explanation_8hour_cycle.png" alt="Annotated Figure 2A showing 8-hour full cycle"></p>`,
      eo: "To complete one full cell cycle, a cell starting in any given phase must pass through all the other phases and return to the initial phase."
    },
    {
      qid: "402407",
      stem: "Based on the passage, VX-680 most likely directly inhibits:",
      preopts: "",
      options: [
        { L: "A", text: "synthesis of transcription factors.", pct: "7%", correct: false },
        { L: "B", text: "replication of the cell's genome.", pct: "15%", correct: false },
        { L: "C", text: "chromosome alignment on the metaphase plate.", pct: "16%", correct: false },
        { L: "D", text: "migration of sister chromatids to opposite poles of the cell.", pct: "60%", correct: true }
      ],
      stat: "60% answered correctly",
      explanationHtml: `
        <p>In most eukaryotes, mitosis consists of four phases:</p>
        <ul class="dash">
          <li><strong>Prophase</strong>, in which the nuclear envelope disintegrates and chromatin condenses. <em>(Note: This phase does not occur in T. brucei.)</em></li>
          <li><strong>Metaphase</strong>, in which chromosomes align on the metaphase plate. In this phase, the chromosomes become attached to spindle fibers.</li>
          <li><strong>Anaphase</strong>, in which the spindle fibers shorten, causing sister chromatids to separate and migrate toward opposite poles of the cell.</li>
          <li><strong>Telophase</strong>, in which a nuclear envelope reforms around each set of sister chromatids and the chromatin returns to its uncondensed form. <em>(This phase does not occur in T. brucei because the nuclear envelope never disintegrates and chromatin does not condense, so the reverse processes cannot happen either.)</em></li>
        </ul>
        <p>The passage states that the drug VX-680 arrests cells upon completion of metaphase (as opposed to hydroxyurea, which arrests cells in S phase). Figure 2B confirms this result by showing that in the presence of VX-680, <em>T. brucei</em> are able to begin the mitotic (M) phase but cannot complete it, so they do not progress back to G1. Therefore, with VX-680 treatment, <em>T. brucei</em> cells complete metaphase but fail to enter anaphase. Because sister chromatids migrate toward opposite poles of the cell in anaphase, VX-680 most likely prevents anaphase by inhibiting this migration.</p>
        <p><strong>(Choice A)</strong> Transcription factors regulate gene expression by promoting or repressing RNA synthesis. These factors are synthesized primarily during interphase and are unlikely to be inhibited by VX-680, which interferes with M phase.</p>
        <p><strong>(Choice B)</strong> Genome replication occurs during S phase of the cell cycle. Figure 2B shows that in the presence of VX-680, cells are able to complete S phase and enter G2, but then become stuck in M phase after many hours. Therefore, VX-680 does not inhibit chromosome replication.</p>
        <p><strong>(Choice C)</strong> Chromosomes align in the center of the cell during metaphase. The passage states that VX-680 arrests cells after metaphase is complete, so alignment of chromosomes in the center of the cell is not inhibited.</p>
        <p class="figwrap"><img src="images/q402407_explanation_vx680.png" alt="Untreated vs VX-680-treated cells: anaphase blocked"></p>`,
      eo: "Mitosis typically consists of four phases: Prophase, in which the nuclear envelope disintegrates and chromatin condenses; metaphase, in which chromosomes align on the metaphase plate; anaphase, in which sister chromatids migrate toward opposite poles of the cell; and telophase, in which nuclear envelopes reform and chromatin reverts to its uncondensed form."
    }
  ]
};
