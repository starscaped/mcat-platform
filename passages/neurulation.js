/* Passage: Neurulation & Neural Tube Defects (QID 401047–401052)
   Schema documented in passages/trypanosoma.js */
window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["neurulation"] = {
  id: "neurulation",
  title: "Neurulation & Neural Tube Defects",
  subject: "Biology",
  system: "Reproduction",
  difficulty: "Hard",
  estMinutes: 9,
  passageHtml: `
    <p>Neurulation refers to the early formation of the nervous system in vertebrate embryos. It begins when the notochord, a rodlike mesodermal structure, induces neural tube and neural crest cell formation in a different germ layer called the ectoderm.</p>
    <p>Neural tube defects (NTDs) arise from abnormalities in the development of the neural tube and can range from mild to severe, depending on which portion of the tube is affected. Spina bifida, a form of NTD, is divided into three categories. The most serious subclassification of spina bifida is myelomeningocele, which occurs when the lower spine fails to close and leaves the spinal cord and nerve roots in the lower back damaged and exposed.</p>
    <p>NTDs are thought to be caused in part by folate deficiency. Folate plays a critical role in normal cell division and growth as it is a necessary coenzyme for DNA synthesis and methylation. Mutations in several genes involved in folate metabolism have been associated with an increased risk for NTDs. It has been hypothesized that folate decreases NTD risk by ameliorating oxidative stress, thereby reducing damage to developing cells in the embryo. Certain maternal conditions, such as high blood glucose, increase the risk of NTD development by enhancing embryonic oxidative stress during crucial developmental periods.</p>
    <p>A study was conducted to examine how supplementation with folic acid, the dietary form of folate, affected pregnant women who were identified with preexisting diabetes, pregestational obesity (another risk factor for NTD), or no preexisting conditions (control group). Higher folic acid intake decreased the incidence of embryonic NTDs among pregnant women with diabetes but no significant effect was found for pregnant women who were obese.</p>
  `,
  questions: [
    {
      qid: "401047",
      stem: "Neural crest cells migrate away from the neural tube to give rise to most of the peripheral nervous system. Given this information, would neural crest cells be involved in the pathology of myelomeningocele?",
      preopts: "",
      options: [
        { L: "A", text: "Yes; neural crest cells secrete signals that directly inhibit neural tube closure.", pct: "9%", correct: false },
        { L: "B", text: "Yes; neural crest cells fail to differentiate into the posterior spinal cord.", pct: "20%", correct: false },
        { L: "C", text: "No; neural crest cells continue to differentiate into glial cells of the brain.", pct: "9%", correct: false },
        { L: "D", text: "No; neural crest cells continue to act normally as temporary migratory cells that give rise to other cell types.", pct: "60%", correct: true }
      ],
      stat: "59% answered correctly",
      explanationHtml: `
        <p>Neurulation is the formation of the nervous system in vertebrate organisms. Following gastrulation (formation of the three germ layers), the notochord, a mesodermal cylindrical structure, releases signals promoting the ectoderm above to thicken and form the neural plate. The neural plate folds inward, forming the neural groove, and the edges of the plate (the neural folds) converge to create the neural tube.</p>
        <p class="figwrap"><img src="images/neur_q401047_neurulation.png" alt="Neurulation: neural plate folds to form the neural tube and neural crest cells"></p>
        <p>The neural tube, which is the precursor of the central nervous system (CNS: brain and spinal cord), then pinches off the ectoderm. The remaining sections of the neural folds not included in the neural tube comprise the neural crest. Neural crest cells migrate away from the tube and toward the periphery of the embryo to give rise to most of the peripheral nervous system (PNS). Note that although somatic motor neurons are part of the PNS, their cell bodies originate in the CNS.</p>
        <p>Based on the passage, myelomeningocele is characterized by defective neural tube development. Because the neural crest cells derive from the residual portions of the neural folds that do not contribute to neural tube formation, they are likely not involved in myelomeningocele pathology and continue to act normally as temporary migratory cells that give rise to a diverse lineage of cells.</p>
        <p><strong>(Choice A)</strong> Neural crest cells have no substantial inductive or inhibitory influence on neural tube formation.</p>
        <p><strong>(Choice B)</strong> Neural crest cells are not associated with myelomeningocele pathology (neural tube closure) as they do not contribute to the formation of the brain or spinal cord (ie, CNS).</p>
        <p><strong>(Choice C)</strong> Nervous system cell types are neurons (ie, conduct electrical signals) and glia (ie, support neural function). Astrocytes and oligodendrocytes are CNS glial cells that arise from the neural tube. Oligodendrocytes form an insulating covering (myelin sheath) around neurons, and astrocytes provide neurons with physical support and anchor them to nutrient supply sources. In contrast, neural crest cells give rise to PNS glia: Schwann cells and satellite cells, which are functionally similar to oligodendrocytes and astrocytes, respectively.</p>`,
      eo: "Cell migration in embryogenesis is the movement of cells into their final positions within the embryo. The migratory action of neural crest cells during neurulation, the formation of the nervous system, gives rise to many peripheral nervous system structures. In contrast, the central nervous system is derived from the neural tube."
    },
    {
      qid: "401048",
      stem: "The germ layer that gives rise to the notochord also gives rise to which of the following cell types?",
      preopts: "",
      options: [
        { L: "A", text: "Alveolar cells", pct: "9%", correct: false },
        { L: "B", text: "Osteocytes", pct: "48%", correct: true },
        { L: "C", text: "Melanocytes", pct: "34%", correct: false },
        { L: "D", text: "Islet beta cells", pct: "7%", correct: false }
      ],
      stat: "47% answered correctly",
      explanationHtml: `
        <p>Gastrulation is the process by which the germ layers (endoderm, mesoderm, ectoderm) form in the developing embryo. Following fertilization, the zygote undergoes cleavage (the initial series of mitotic cell divisions) and forms the blastula, a hollow ball of cells that implants into the uterine wall. This initial blastula eventually develops into the blastocyst, which is divided into two layers: the trophoblast (a hollow sphere of cells) and the inner cell mass (a cluster of cells inside the trophoblast).</p>
        <p>The two-layered blastocyst then transforms into a three-layered structure (gastrula) through the process of gastrulation. Gastrulation begins with the formation of the primitive streak (a transient structure that facilitates cell migration) on the bilaminar disk, a double-layered sheet of cells that takes shape in the trophoblast.</p>
        <p>Cells migrate through the primitive streak and the area between the two layers to displace the bottom (hypoblast) layer and form the endoderm. Additional cells migrate through the streak to form the new middle layer (mesoderm). All three germ layers develop into specific structures within the body as follows:</p>
        <ul class="dash">
          <li><strong>Endoderm</strong> (innermost layer) gives rise to accessory digestive organs (eg, liver, pancreas) as well as to the lining (epithelium) of the digestive and respiratory tracts.</li>
          <li><strong>Mesoderm</strong> (middle layer) gives rise to the circulatory system, muscles, bones, and parts of the urinary and reproductive systems.</li>
          <li><strong>Ectoderm</strong> (outermost layer) gives rise to the nervous system (neurulation) and develops into the integumentary system, which includes hair, skin, nails, and the lining of the mouth, nostrils, and anus.</li>
        </ul>
        <p class="figwrap"><img src="images/neur_q401048_germ_layers.png" alt="Germ layer derivatives: ectoderm, mesoderm, endoderm cell types"></p>
        <p>The passage states that the notochord is a mesodermal structure. Of the choices available, only osteocytes (bone cells) are also derived from the mesoderm.</p>
        <p><strong>(Choices A and D)</strong> Alveolar cells are epithelial lung cells, and islet beta cells are pancreatic insulin-secreting cells. Both are derived from the endoderm.</p>
        <p><strong>(Choice C)</strong> Melanocytes are pigment-producing cells in skin, and are derived from the ectoderm.</p>`,
      eo: "The three primary germ layers (endoderm, mesoderm, ectoderm) form during gastrulation. Each gives rise to particular cell types in specific organ systems."
    },
    {
      qid: "401049",
      stem: "Assume that neural stem cells are multipotent. Which of the following best describes this classification of stem cells?",
      preopts: "",
      options: [
        { L: "A", text: "They are able to differentiate into all fetal structures but not placental structures.", pct: "15%", correct: false },
        { L: "B", text: "They are able to differentiate into both placental and fetal structures.", pct: "9%", correct: false },
        { L: "C", text: "They are able to differentiate into specialized cell types of a particular tissue.", pct: "73%", correct: true },
        { L: "D", text: "They are able to differentiate in the zygote but not in the adult organism.", pct: "1%", correct: false }
      ],
      stat: "73% answered correctly",
      explanationHtml: `
        <p>The cells of the human body are derived from the zygote, the single diploid cell formed by the joining of two gametes at fertilization. This cell undergoes a series of mitotic divisions (cleavage) that eventually lead to the development of the fetus.</p>
        <p><strong>Totipotent</strong> stem cells, which are found only in the zygote and in the embryo up to its eight-cell stage, have the greatest potency as they alone can autonomously give rise to an entire organism. Consequently, totipotent cells can differentiate into any cell type from either an embryonic or extraembryonic (placental) lineage <strong>(Choice B)</strong>.</p>
        <p class="figwrap"><img src="images/neur_q401049_potency.png" alt="Potency during development: totipotent, pluripotent, multipotent stem cells"></p>
        <p>Following the eight-cell stage, formation of the blastocyst begins. This hollow structure contains an outer cell layer (trophoblast), which forms the placenta, and an inner cell mass, which forms the embryo. The cells of the inner cell mass are said to be <strong>pluripotent</strong> as they can differentiate into cells of multiple tissues found in the body. Pluripotent cells can give rise to any of the three primary germ layers found in the embryo but not the cells found in placental structures <strong>(Choice A)</strong>. Therefore, pluripotent cells are more specialized (differentiated) than totipotent cells.</p>
        <p>As the ectoderm, mesoderm, and endoderm cell lineages mature and become more specialized, specific resident stem cells are preserved in each developing tissue and function to replace damaged/aged cells throughout the organism's life span. These cells, which are found in both the fetus and the adult, are <strong>multipotent</strong> because they can differentiate into cells with many specialized functions but are limited in that they are "committed" to a specific lineage <strong>(Choice D)</strong>.</p>`,
      eo: "Totipotent stem cells are the least specialized cells and can give rise to both placental and fetal cells. Pluripotent stem cells can give rise to only fetal cells (ie, all cell lineages from the three germ layers). Multipotent cells are able to differentiate only into the specialized cells of certain tissues; these cells are also found in adults."
    },
    {
      qid: "401050",
      stem: "Undifferentiated gastrula cells presumed to give rise to neural tissue were transplanted from a donor frog embryo into a host frog embryo. The cells were transplanted among undifferentiated host gastrula cells presumed to give rise to epidermal tissue. Both host and donor embryos were allowed to develop following the transplant and gave rise to two normal embryos. What was the purpose of this experiment?",
      preopts: "",
      options: [
        { L: "A", text: "To determine which cells in the gastrula ultimately give rise to epidermal tissue", pct: "9%", correct: false },
        { L: "B", text: "To determine if cell specialization is influenced by communication between cells", pct: "56%", correct: true },
        { L: "C", text: "To determine how developmental fates of cells are determined during blastula formation", pct: "18%", correct: false },
        { L: "D", text: "To determine whether cell differentiation could be reversed based on embryonic location", pct: "15%", correct: false }
      ],
      stat: "55% answered correctly",
      explanationHtml: `
        <p>Cell determination (specification of cell fate) and differentiation (acquisition of unique/specialized biochemical and structural cellular characteristics) in the embryo result from the asymmetric segregation of cytoplasmic determinants and from inductive signaling.</p>
        <p>In inductive signaling, an inducer (the signaling cell) releases chemical signals that act on competent neighboring cells (ie, those cells that express the appropriate receptors capable of responding to the signal) by regulating the expression of specific genes. This signaling provides the competent cells with positional and fate-determining information required for proper development.</p>
        <p class="figwrap"><img src="images/neur_q401050_transplant.png" alt="Transplantation of undifferentiated gastrula cells from donor to host embryo"></p>
        <p>In the experiment described, the researchers removed undifferentiated gastrula cells that were presumed to give rise to neural tissue from one embryo (donor) and transplanted them into a different gastrula (host) at a location presumed to give rise to epidermal tissue. The researchers wanted to determine whether the donor neural cells would continue to develop independently into nervous tissue or if they would assume a different tissue type or cell fate due to communication with surrounding cells.</p>
        <p>The transplanted donor cells developed into normal epidermal tissue in the host, suggesting that signals from the surrounding skin-destined cells influenced the fate of the transplanted cells.</p>
        <p><strong>(Choice A)</strong> Based on the description of the experiment, researchers already knew which portion of the undifferentiated gastrula would likely give rise to epidermal tissue because they were able to transplant undifferentiated prospective neural tissue into that area.</p>
        <p><strong>(Choice C)</strong> The entire experiment was conducted after the blastula phase of embryogenesis; therefore, gaining insight about the developmental fates of cells in the blastula was not the purpose of this experiment.</p>
        <p><strong>(Choice D)</strong> The question states that the researchers used undifferentiated cells, which are cells that have not yet acquired any observable changes characteristic of commitment. Undifferentiated cells cannot be used to determine if differentiation can be reversed. To determine if differentiation can be reversed, the researchers would have to assess whether the acquired changes of differentiated cells would revert following transplantation.</p>`,
      eo: "Cell fate is influenced by inductive signaling between cells in the early embryo. In inductive signaling, an inducer (the signaling cell) releases chemical signals that act on competent neighboring cells by regulating the expression of specific genes required for cell determination."
    },
    {
      qid: "401051",
      stem: `In vertebrates, researchers found that the signaling proteins sonic hedgehog (Shh) and bone morphogenic protein (BMP) diffused in the extracellular space in a manner that defined concentration gradients. They also found that these gradients defined specific regions of expression for various genes involved in neural tube development. The results of their investigation are shown in the graph provided.
        <p class="figwrap"><img src="images/neur_q401051_shh_bmp_graph.png" alt="Graph: relative concentration of BMP and Shh along the dorsal-ventral neural tube axis with expressed genes"></p>
        Based on the data, which statement best explains how Shh specifies the dorsal and ventral fates of the developing neural tube?`,
      preopts: "",
      options: [
        { L: "A", text: "Shh influences the expression of genes necessary for cell division.", pct: "24%", correct: false },
        { L: "B", text: "Shh diffuses down its concentration gradient to signal cell differentiation.", pct: "46%", correct: true },
        { L: "C", text: "Shh signals for development of the ventral neural tube only.", pct: "22%", correct: false },
        { L: "D", text: "Shh acts as a receptor for BMP in the developing neural tube.", pct: "6%", correct: false }
      ],
      stat: "47% answered correctly",
      explanationHtml: `
        <p>A morphogen is a signaling molecule that alters cell differentiation in a concentration-dependent manner, and competent cells are cells that express receptors capable of responding to a specific morphogen. Once released into the extracellular space by signaling cells, morphogens diffuse from one region of the embryo to another. This diffusion, in combination with time-dependent morphogen destruction and/or uptake into cells, leads to the formation of a concentration gradient.</p>
        <p>Competent cells closer to the signaling cell releasing the morphogen are exposed to higher morphogen concentration and consequently undergo fate determination and differentiation distinct from competent cells that are farther away (ie, those that are exposed to lower morphogen concentration). Therefore, morphogens are a type of paracrine factor that helps control organ development and body axis formation (eg, anterior-posterior, dorsal-ventral).</p>
        <p class="figwrap"><img src="images/neur_q401051_shh_bmp_expl.png" alt="BMP and Shh opposing gradients defining gene expression along the neural tube"></p>
        <p>The figure shows that the concentrations of sonic hedgehog (Shh) and bone morphogenic protein (BMP) vary along the embryonic dorsal-ventral axis, suggesting that the molecules are produced by different cells and that the molecules are opposing morphogens that determine cell fate based on their relative concentration gradients. In other words, certain combinations of morphogen levels signal for the expression of different genes.</p>
        <p>For example, high BMP/low Shh concentrations result in Pax7 expression to define the dorsal end of the neural tube, and low BMP/high Shh concentrations result in Pax6 expression to define the ventral end. At intermediary (mixed) BMP/Shh concentrations, other genes (Dbx1, Dbx2, Irx3) are activated to induce proper differentiation along the body axis. Thus, depending on concentration, Shh and BMP can signal for both ventral and dorsal differentiation and development <strong>(Choice C)</strong>.</p>
        <p><strong>(Choice A)</strong> No data is provided to indicate if Shh promotes the expression of genes involved in cell division.</p>
        <p><strong>(Choice D)</strong> The question states that both BMP and Shh are signaling proteins, not receptors.</p>`,
      eo: "Morphogens are signaling molecules whose concentration patterns influence cell differentiation. They are released by signaling cells and diffuse outward to alter gene expression in competent cells in a concentration-dependent manner."
    },
    {
      qid: "401052",
      stem: "Compared to newborns without NTDs, a newborn diagnosed with myelomeningocele would most likely have exhibited which of the following during gestation?",
      preopts: "",
      options: [
        { L: "A", text: "Lower frequency of cell damage at critical developmental periods", pct: "2%", correct: false },
        { L: "B", text: "Lower cellular concentrations of free radicals", pct: "3%", correct: false },
        { L: "C", text: "Higher levels of anti-apoptotic transcription factors", pct: "16%", correct: false },
        { L: "D", text: "Higher incidence of apoptosis", pct: "77%", correct: true }
      ],
      stat: "76% answered correctly",
      explanationHtml: `
        <p>During embryogenesis, apoptosis (programmed cell death) is crucial for normal patterning and development. In post-implantation embryos, apoptosis is involved in the control of cell numbers, the eradication of unnecessary structures, the sculpting of essential structures, and the elimination of abnormal, nonfunctional, or misplaced cells. For example, the cells found between fingers in the embryo are removed via apoptosis to sculpt the hand. Abnormal activation of the apoptotic pathway, which can be caused by oxidative stress, results in embryonic anomalies (eg, NTDs).</p>
        <p>Reactive oxygen species (ROS), such as peroxides and superoxide, are naturally generated from cellular reactions involving oxygenase or oxidase enzymes, as well as from reactions that take place in mitochondria (via oxidative phosphorylation) and peroxisomes (via &beta;-oxidation of long-chain fatty acids). ROS contain an unstable number of electrons and can be trapped by antioxidants or converted to less reactive molecules by enzymes with antioxidant activity.</p>
        <p class="figwrap"><img src="images/neur_q401052_apoptosis.png" alt="Apoptosis: cell damage from ROS leads to degradation, fragmentation, and phagocytosis"></p>
        <p>Oxidative stress occurs when ROS levels are excessive, such as when ROS production exceeds the body's natural elimination capabilities. Under such circumstances, ROS react with and damage cellular components. This type of injury can result in abnormally activated apoptosis.</p>
        <p>According to the passage, NTDs can be caused by increased embryonic oxidative stress during crucial developmental periods; therefore, a child born with myelomeningocele, a severe NTD, most likely experienced oxidative stress in utero. Compared to a healthy newborn, a newborn with myelomeningocele likely had a higher incidence of apoptosis induced by oxidative stress during gestation, as well as:</p>
        <ul class="dash">
          <li>Higher frequency of cell damage at critical developmental periods during gestation <strong>(Choice A)</strong>, because exposure to amniotic fluid can trigger the damage to developing cells that the passage states is associated with NTDs</li>
          <li>Higher cellular concentrations of free radicals during gestation <strong>(Choice B)</strong>, as free radicals are the molecular species that cause the oxidative stress thought to contribute to NTDs</li>
          <li>Lower levels of anti-apoptotic transcription factors during gestation <strong>(Choice C)</strong>, because such transcription factors, if present, might translocate to the nucleus and elicit responses suppressing apoptosis</li>
        </ul>`,
      eo: "Apoptosis (programmed cell death) is crucial for normal embryonic patterning and development. Oxidative stress occurs when concentrations of reactive oxygen species are excessive, resulting in cell damage. This damage can result in abnormal apoptosis and congenital malformations."
    }
  ]
};
