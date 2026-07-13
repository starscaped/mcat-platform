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

window.PASSAGES["hif-intestinal-barrier"] = {

  id: "hif-intestinal-barrier",
  title: "HIF-1 &amp; Intestinal Barrier Function",
  subject: "Biology",
  system: "Digestion and Excretion",
  difficulty: "Moderate",
  estMinutes: 8,

  passageHtml: `
    <p>The lumen of the human gut is lined by a monolayer of epithelial cells that acts as a selectively permeable barrier, preventing the passage of harmful intraluminal foreign antigens, flora, and toxins into circulation while allowing digestion and absorption of essential dietary nutrients along with the transfer of electrolytes and water.</p>
    <p>Proteins in the tight junctions of intestinal epithelial cells maintain barrier integrity, but barrier dysfunction occurs when these cells are damaged in the setting of infection, burns, shock, or hypoxia (low oxygen levels). The transcription factor HIF-1, a heterodimer composed of the macromolecules HIF-1α and HIF-1β, regulates the adaptive cellular response to hypoxia.</p>
    <p>Researchers assessed the concentration of HIF-1 heterodimer components in human intestinal Caco-2 cells subjected to hypoxia/reoxygenation (H/R) in vitro. Caco-2 cells, a cell line originally derived from colon cells, were cultured under specific conditions to mimic the functional and morphological phenotype of wild-type enterocytes (ie, the cells lining the small intestine). These cells were prepared and grown as a monolayer on a collagen-coated membrane.</p>
    <p>The monolayer was then cultured in hypoxic conditions and samples exposed to atmospheric oxygen levels (normoxia) for 30, 60, and 120 minutes. Protein levels were quantified using direct enzyme-linked immunosorbent assay (ELISA), in which an antibody linked to a reporter enzyme was used to bind and detect expression of the target molecule (analyte) in a sample. When the colorless substrate of the reporter enzyme was added, the enzyme generated a visible colored product that could be quantified based on color intensity.</p>
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;Concentration of (A) HIF-1α and (B) HIF-1β in Caco-2 cells subjected to H/R (Note: "0 minutes" = cells cultured in hypoxic conditions.)</p>
    <p class="figwrap"><img src="images/hif_fig1_concentration.png" alt="Figure 1: HIF-1α and HIF-1β concentration graphs"></p>
    <p>Emodin, an anthraquinone compound that prevents hypoxia-induced epithelial cell disruption, was used in conjunction with a chemical HIF-1α inhibitor (HIF-1α-I) to treat Caco-2 cells in a separate experiment. Transepithelial electrical resistance (TEER) was assessed as a measure of barrier function, with higher TEER values indicating a more intact epithelial cell barrier. HIF-1α-I was found to block emodin's protective effect on epithelial barrier integrity.</p>
  `,

  questions: [
    {
      qid: "400093",
      stem: "Which of the following statements about HIF-1 is most likely true?<br><br>I. At low oxygen levels, HIF-1 is nonfunctional.<br>II. At low oxygen levels, HIF-1 is functional.<br>III. At atmospheric oxygen levels, HIF-1 concentration is decreased.<br>IV. At atmospheric oxygen levels, HIF-1 concentration is increased.",
      preopts: "",
      options: [
        { L: "A", text: "I and III only", pct: "5%", correct: false },
        { L: "B", text: "I and IV only", pct: "5%", correct: false },
        { L: "C", text: "II and III only", pct: "82%", correct: true },
        { L: "D", text: "II and IV only", pct: "6%", correct: false }
      ],
      stat: "81% answered correctly",
      explanationHtml: `
        <p>The passage states that HIF-1α and HIF-1β comprise the HIF-1 heterodimer, a protein complex composed of two different subunits. Based on the definition, HIF-1 requires assembly of these subunits to function. The graphs in Figure 1 show that both HIF-1α and HIF-1β are expressed and functional at 0, 30, 60, and 120 minutes, suggesting that the HIF-1 dimer can be assembled at all these time points.</p>
        <p>Figure 1A shows that HIF-1α concentration is greatest under hypoxic conditions (low oxygen, time 0). However, when exposed to atmospheric (normal) oxygen concentrations (ie, 30, 60, 120 minutes), HIF-1α is degraded and its levels decrease in a time-dependent manner.</p>
        <p>In contrast, HIF-1β levels are relatively unaffected in both low and atmospheric oxygen concentrations, as shown in Figure 1B. Oxygen exposure promotes degradation of HIF-1α but not HIF-1β. As a result, HIF-1 is able to form and function when exposed to atmospheric oxygen levels, but its concentration would be reduced due to the decreased amount of HIF-1α available to dimerize with an unchanged amount of HIF-1β. Therefore, at low oxygen levels, HIF-1 is functional but at atmospheric oxygen levels, HIF-1 concentration is decreased (Numbers II and III).</p>
        <p>(Numbers I and IV) Although HIF-1 concentration is decreased at atmospheric oxygen levels, it is still functional at both low and atmospheric oxygen levels because the subunits that comprise the dimer are present at all time points assessed.</p>
        <p class="figwrap"><img src="images/q400093_explanation_hif1.png" alt="HIF-1 explanation figure"></p>`,
      eo: "A heterodimer is composed of two different protein subunits, and its assembly and activity are dependent on the expression and proper function of these subunits. Oxygen concentration, among other factors (eg, temperature, pH), has been shown to influence protein expression."
    },
    {
      qid: "400094",
      stem: "Developmental protocols for Caco-2 monolayers involve the use of cells with high proliferation potential that can differentiate in a synchronized manner to form homogenous monolayers. This proliferation of Caco-2 cells is primarily achieved through:",
      preopts: "",
      options: [
        { L: "A", text: "meiosis.", pct: "4%", correct: false },
        { L: "B", text: "fission.", pct: "11%", correct: false },
        { L: "C", text: "completion of the G2 phase of the cell cycle.", pct: "10%", correct: false },
        { L: "D", text: "completion of the M phase of the cell cycle.", pct: "74%", correct: true }
      ],
      stat: "74% answered correctly",
      explanationHtml: `
        <p>Throughout the adult life span, cells capable of continuous division function to replace cells with high turnover rate (eg, endothelial cells lining blood vessels, epithelial cells lining hollow internal organs). In contrast, many cells in adult humans are arrested in the G0 (nondividing) phase of the cell cycle. Although certain cell types remain in this stage and exhibit minimal to nonexistent proliferation capacity (eg, cardiac myocytes, neurons), other cell types can resume the cell cycle and proliferate to replace cells that have been lost due to injury or programmed cell death (ie, apoptosis). Accordingly, homeostatic mechanisms function to maintain a balanced ratio of proliferating to dying cells in human tissues and organs.</p>
        <p>Based on the passage, the researchers used Caco-2 monolayers to carry out their experiments, and under the conditions of the experiment these Caco-2 cells share the same morphology (shape) and function as cells lining the small intestine. In addition, the question states that these cells are highly proliferative. Caco-2 cells are nongametic (somatic) cells; therefore, each parental Caco-2 cell would only be able to proliferate in the manner that a somatic cell can, by completing the M phase (mitosis) of the cell cycle to create two genetically identical daughter cells.</p>
        <p>(Choice A) In eukaryotes, reproductive cells (ie, gametes), not somatic cells, are produced via meiosis, during which a parent cell (2n) divides to produce four genetically distinct daughter cells containing half the original number of chromosomes (1n).</p>
        <p>(Choice B) The cells of multicellular organisms (eg, humans) cannot divide by binary fission. Binary fission is the process by which single-celled organisms, such as bacteria, reproduce asexually. During binary fission, the parental cell doubles in size and then divides into two identical daughter cells.</p>
        <p>(Choice C) Cell growth and repair of DNA replication errors occur during the G2 phase of the cell cycle; cell division does not occur at this stage.</p>
        <p class="figwrap"><img src="images/q400094_explanation_cell_cycle.png" alt="Cell cycle explanation figure"></p>`,
      eo: "In multicellular organisms (eg, eukaryotes), nongametic (somatic) cells can divide and multiply via mitosis whereas gametic (ie, reproductive) cells divide and multiply via meiosis. Biological homeostatic mechanisms function to maintain a balanced ratio of proliferating to dying cells in human tissues."
    },
    {
      qid: "400095",
      stem: "Which of the following best explains why the researchers used ELISA to quantify protein levels?",
      preopts: "",
      options: [
        { L: "A", text: "ELISA allows for the visualization of protein localization within cells.", pct: "8%", correct: false },
        { L: "B", text: "ELISA provides a quantitative measure of specific protein concentration.", pct: "85%", correct: true },
        { L: "C", text: "ELISA separates proteins based on molecular weight.", pct: "3%", correct: false },
        { L: "D", text: "ELISA amplifies protein expression through enzymatic reactions.", pct: "3%", correct: false }
      ],
      stat: "85% answered correctly",
      explanationHtml: `
        <p>The passage states that protein levels were quantified using direct enzyme-linked immunosorbent assay (ELISA), in which an antibody linked to a reporter enzyme was used to bind and detect expression of the target molecule (analyte) in a sample. When the colorless substrate of the reporter enzyme was added, the enzyme generated a visible colored product that could be quantified based on color intensity.</p>
        <p>ELISA provides a quantitative measure of specific protein concentration by using antibodies to bind the target protein and an enzyme-linked reporter to generate a measurable signal. The color intensity is proportional to the amount of protein present, allowing researchers to quantify protein levels accurately.</p>
        <p>(Choice A) ELISA does not visualize protein localization within cells; immunofluorescence or immunohistochemistry techniques are used for that purpose.</p>
        <p>(Choice C) ELISA does not separate proteins based on molecular weight; SDS-PAGE or Western blotting are used for protein separation.</p>
        <p>(Choice D) ELISA does not amplify protein expression; it detects and quantifies existing protein levels.</p>
        <p class="figwrap"><img src="images/q400095_explanation_elisa.png" alt="ELISA explanation figure"></p>`,
      eo: "ELISA (enzyme-linked immunosorbent assay) is a quantitative technique that uses antibodies and enzyme-linked reporters to measure specific protein concentrations. The signal intensity is proportional to the amount of target protein present."
    },
    {
      qid: "400096",
      stem: "Based on the passage, Caco-2 cells are most likely derived from which part of the gastrointestinal tract?",
      preopts: "",
      options: [
        { L: "A", text: "Esophagus", pct: "2%", correct: false },
        { L: "B", text: "Stomach", pct: "5%", correct: false },
        { L: "C", text: "Small intestine", pct: "71%", correct: true },
        { L: "D", text: "Large intestine", pct: "20%", correct: false }
      ],
      stat: "71% answered correctly",
      explanationHtml: `
        <p>The passage states that Caco-2 cells were cultured under specific conditions to mimic the functional and morphological phenotype of wild-type enterocytes (ie, the cells lining the small intestine). Enterocytes are the absorptive cells that line the small intestine and are responsible for nutrient absorption.</p>
        <p>Therefore, Caco-2 cells are derived from the small intestine, as they are used to model the cells lining the small intestine in experimental conditions.</p>
        <p>(Choice A) The esophagus is lined by stratified squamous epithelium, not enterocytes.</p>
        <p>(Choice B) The stomach is lined by gastric epithelial cells, not enterocytes.</p>
        <p>(Choice D) The large intestine contains colonocytes, which are different from the enterocytes found in the small intestine.</p>
        <p class="figwrap"><img src="images/q400096_explanation_teer.png" alt="Large intestine anatomy"></p>`,
      eo: "Enterocytes are the absorptive epithelial cells that line the small intestine. Caco-2 cells are a cell line derived from colon cells but are cultured to mimic the phenotype of small intestinal enterocytes."
    },
    {
      qid: "400097",
      stem: "Which of the following graphs best represents the TEER values for Caco-2 cells under the experimental conditions described in the passage?",
      preopts: "",
      options: [
        { L: "A", text: '<img src="images/q400097_choiceA.png" alt="Choice A: TEER bar chart" style="max-width:100%">', pct: "80%", correct: true },
        { L: "B", text: '<img src="images/q400097_choiceB.png" alt="Choice B: TEER bar chart" style="max-width:100%">', pct: "8%", correct: false },
        { L: "C", text: '<img src="images/q400097_choiceC.png" alt="Choice C: TEER bar chart" style="max-width:100%">', pct: "4%", correct: false },
        { L: "D", text: '<img src="images/q400097_choiceD.png" alt="Choice D: TEER bar chart" style="max-width:100%">', pct: "6%", correct: false }
      ],
      stat: "79% answered correctly",
      explanationHtml: `
        <p>The control cells in this experiment were cultured under normal oxygen conditions, and therefore should have an intact epithelial barrier and high TEER, which the passage states is a measure of proper barrier function. Because hypoxia damages the epithelial barrier, cells cultured under low oxygen conditions should have a decreased TEER compared to controls, signifying compromised barrier integrity.</p>
        <p>According to the passage, emodin prevents the epithelial damage induced by hypoxia. As a result, cells grown in hypoxic conditions that were treated with emodin should have a TEER value comparable to the control cells. The passage also states that a chemical inhibitor of HIF-1α (ie, HIF-1α-I) was found to block emodin's protective effect on epithelial barrier integrity, suggesting that HIF-1α is essential or permissive for emodin's protective effects. Therefore, cells grown in hypoxic conditions that were treated with both emodin and HIF-1α-I should have a low TEER compared to the control cells.</p>
        <p>(Choice B) This graph shows a reverse finding of the true experimental result.</p>
        <p>(Choice C) Cells cultured in hypoxic conditions should have a low TEER, but this graph shows a high TEER in these cells. It also shows the reverse of the expected results for hypoxic cells treated with emodin and for hypoxic cells treated with both emodin and HIF-1α-I.</p>
        <p>(Choice D) Cells cultured with HIF-1α-I and emodin in hypoxic conditions (ie, hypoxia + emodin + inhibitor) should have a low TEER. However, this graph shows a high TEER under these conditions.</p>`,
      eo: "Inhibitors prevent chemical reactions, block gene/protein expression, or reduce the activity of a particular substance (eg, enzyme, reactant). Transcription factors can be inhibited by certain drugs or substances."
    }
  ]
};
