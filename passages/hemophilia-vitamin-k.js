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
         eo:     educational objective (plain/HTML string)
       }
     ]
   }
   =============================================================*/

window.PASSAGES = window.PASSAGES || {};

window.PASSAGES["hemophilia-vitamin-k"] = {

  id: "hemophilia-vitamin-k",
  title: "Hemophilia B &amp; Vitamin K",
  subject: "Organic Chemistry",
  system: "Introduction to Organic Chemistry",
  difficulty: "Moderate",
  estMinutes: 3,

  passageHtml: `
    <p>Hemophilia B is a blood clotting disorder caused by a factor IX (FIX) deficiency. FIX is a 57-kDa, vitamin K-dependent protease that activates factor X, leading to the conversion of prothrombin to thrombin for propagation of the clotting cascade. FIX catalyzes the interconversion of three forms of vitamin K, as shown in Figure 1.</p>
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;Oxidation of vitamin K</p>
    <p class="figwrap"><img src="images/hem_fig1_vitamin_k.png" alt="Figure 1: Vitamin K oxidation pathway"></p>
    <p>During Reaction 1, the side chain of an amino acid residue in FIX is carboxylated, resulting in the structure shown in Figure 2.</p>
    <p class="figcap"><b>Figure 2</b>&nbsp;&nbsp;Structure of a carboxylated amino acid residue in FIX</p>
    <p class="figwrap"><img src="images/hem_fig2_carboxylated_aa.png" alt="Figure 2: Carboxylated amino acid structure"></p>
    <p>To further analyze the γ-carboxyglutamic acid-rich domain of FIX, an analogous synthetic peptide composed of matching residues 1 through 49 on FIX was evaluated by proton nuclear magnetic resonance (<sup>1</sup>H NMR) spectroscopy. Analysis of the proton chemical shift before the addition of metal ions suggested that the synthetic peptide contained normal structural elements. When calcium ions were added, the height of a peak at approximately 1 ppm was significantly diminished and a new peak appeared farther downfield.</p>
    <p>The synthetic peptide analog was then placed in solution with vitamin K hydroquinone and cofactors required for vitamin K oxidation. The three forms of vitamin K were collected and evaluated under high-performance liquid chromatography (HPLC) using hexane as the mobile phase. The results are shown in Figure 3.</p>
    <p class="figcap"><b>Figure 3</b>&nbsp;&nbsp;Results of HPLC separation</p>
    <p class="figwrap"><img src="images/hem_fig3_hplc.png" alt="Figure 3: HPLC separation results"></p>
  `,

  questions: [
    {
      qid: "400105",
      stem: "In the oxidation of vitamin K hydroquinone to vitamin K 2,3-epoxide, hydroxyl groups are converted to carbonyls. Compared to the carbon-oxygen bonds of the hydroxyl groups, the carbonyl carbon-oxygen bonds are characterized by:",
      preopts: "",
      options: [
        { L: "A", text: "decreased overall bond strength.", pct: "4%", correct: false },
        { L: "B", text: "longer total bond length.", pct: "2%", correct: false },
        { L: "C", text: "side-to-side overlap of p orbitals.", pct: "91%", correct: true },
        { L: "D", text: "increased bond rotation.", pct: "1%", correct: false }
      ],
      stat: "91% answered correctly",
      explanationHtml: `
        <p>A sigma bond is a covalent bond formed by direct end-to-end overlap of hybridized atomic orbitals such as sp, sp<sup>2</sup>, or sp<sup>3</sup> orbitals. (Note that the exception is hydrogen, whose atomic orbital is s.) In contrast, a pi bond is a covalent bond created by side-to-side overlap of nonhybridized p orbitals. A double bond contains one sigma bond and one pi bond, and a triple bond consists of one sigma bond and two pi bonds.</p>
        <p>During Reaction 1, two hydroxyl groups (C–OH) are converted to carbonyl groups (C=O). Each of the original single C-O bonds consisted of one sigma bond between two atoms whereas the newly created C=O double bonds contain a sigma bond and a pi bond. The pi bond is made from side-to-side overlap of p orbitals and is found in the carbonyl but not the hydroxyl group.</p>
        <p>(Choices A and B) A pi bond alone is weaker than a sigma bond, but a double bond such as that found in a carbonyl consists of both a sigma bond and a pi bond. As such, the double bond of the carbonyl is stronger than the single bond of the hydroxyl group. Bond length is inversely proportional to bond strength and therefore the double bond of the carbonyl has a shorter total bond length than the C-O bond of the hydroxyl group.</p>
        <p>(Choice D) Atoms bonded by only a sigma bond can freely rotate around the bond. The addition of pi bonds inhibits rotation and introduces molecular rigidity.</p>
        <p class="figwrap"><img src="images/q400105_explanation_bonds.png" alt="Bond explanation figure"></p>`,
      eo: "A pi bond is created by side-by-side overlap of p orbitals whereas a sigma bond is formed by direct end-to-end overlap of atomic orbitals. A single bond contains one sigma bond; a double bond contains one pi bond and one sigma bond. A triple bond contains two pi bonds and one sigma bond."
    },
    {
      qid: "400106",
      stem: "In Reaction 1, what hybridization state changes do the methylated carbon atom in the ringed structure of vitamin K hydroquinone and the oxygen atom involved in epoxide formation undergo?",
      preopts: "",
      options: [
        { L: "A", text: "sp<sup>2</sup> to sp<sup>3</sup> for the methylated carbon and sp<sup>2</sup> to sp<sup>3</sup> for the oxygen atom", pct: "60%", correct: true },
        { L: "B", text: "sp<sup>2</sup> to sp<sup>3</sup> for the methylated carbon and sp to sp<sup>2</sup> for the oxygen atom", pct: "19%", correct: false },
        { L: "C", text: "sp<sup>2</sup> to sp<sup>3</sup> for the methylated carbon and sp<sup>2</sup> to sp<sup>2</sup> for the oxygen atom", pct: "18%", correct: false },
        { L: "D", text: "sp to sp<sup>2</sup> for the methylated carbon and sp<sup>2</sup> to sp<sup>3</sup> for the oxygen atom", pct: "2%", correct: false }
      ],
      stat: "60% answered correctly",
      explanationHtml: `
        <p>Hybrid orbital theory is used to explain molecular geometry and the bonding of atomic orbitals into molecular orbitals. It states that the electrons not involved in pi bonds (p orbitals) are fused into mixed hybrid orbitals, or electron domains. Hybrid orbitals average the characteristics of s and p orbitals and lead to orbitals with equivalent energy and shape.</p>
        <p>To determine atomic hybridization, count the number of electron domains by adding up the number of lone electron pairs and sigma bonds involving the atom of interest. (Recall that double and triple bonds both include one sigma bond.) The resulting number corresponds to the number of hybrid orbitals. The sum of s and p superscripts on the hybrid name should match this number: sp<sup>3</sup>-, sp<sup>2</sup>-, and sp-hybridized atoms have four, three, and two electron domains, respectively. The superscript of 1 is implied when none is present.</p>
        <p>The methylated carbon atom on vitamin K hydroquinone has three sigma bonds (sp<sup>2</sup>) and becomes sp<sup>3</sup> with four sigma bonds when the epoxide is formed. The oxygen atom (from O<sub>2</sub>) has one sigma bond and two lone pairs of electrons (sp<sup>2</sup>). The epoxide oxygen atom on vitamin K 2,3-epoxide has two sigma bonds and two lone pairs of electrons (sp<sup>3</sup>).</p>
        <p>(Choice B) The oxygen atom (O<sub>2</sub>) is sp<sup>2</sup> hybridized rather than sp because it has one sigma bond and two lone pairs.</p>
        <p>(Choice C) The oxygen atom changes hybridization states, going from sp<sup>2</sup> to sp<sup>3</sup>.</p>
        <p>(Choice D) The methylated carbon atom in vitamin K hydroquinone is sp<sup>2</sup> hybridized because it has three sigma bonds rather than two sigma bonds (sp). This carbon atom becomes sp<sup>3</sup> when the epoxide forms because it now has four sigma bonds.</p>`,
      eo: "Hybrid orbital theory combines bound atomic orbitals into mixed hybrid orbitals of equivalent energy and shape. To determine an atom's hybridization, count the number of lone electron pairs and sigma bonds. The resulting number corresponds with the number of hybrid orbitals or electron domains."
    }
  ]
};
