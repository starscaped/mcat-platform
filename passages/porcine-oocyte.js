/* Passage: Porcine Oocyte Competence & Fertilization (QID 401087-401091)
   Schema documented in passages/trypanosoma.js */
window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["porcine-oocyte"] = {
  id: "porcine-oocyte",
  title: "Porcine Oocyte Competence & Fertilization",
  subject: "Biology",
  system: "Reproduction",
  difficulty: "Hard",
  estMinutes: 8,
  passageHtml: `
    <p>Domestic pigs have been used as valuable preclinical models for scientific research due to their numerous anatomical, developmental, and physiological similarities to humans. For example, oogenesis and embryonic development in pigs are remarkably similar to the human processes and have facilitated the study of impaired fertilization due to decreased oocyte competence (quality).</p>
    <p>Researchers have hypothesized that early termination of embryo development can arise from low mitochondrial DNA (mtDNA) copy number. Because mtDNA replication and reduction events have been extensively mapped in pigs, oocytes and sperm were isolated from their respective porcine gonads to test this hypothesis.</p>
    <p><b>Experiment 1</b></p>
    <p>To evaluate the developmental competence of porcine oocytes, researchers first measured the activity of glucose-6-phosphate dehydrogenase (G6PD), an enzyme that is downregulated as the oocyte matures. The oocytes were stained with Brilliant Cresyl Blue (BCB), a nontoxic blue dye that is converted to a colorless compound by G6PD. After 90 minutes of staining, oocytes were divided into two groups: one containing oocytes with colorless cytoplasm (BCB&minus;) and the other containing oocytes with blue cytoplasm (BCB+). Gene expression profiles were compared to evaluate the number of oocytes in the BCB+ and BCB&minus; groups that had developed to metaphase II.</p>
    <p><b>Experiment 2</b></p>
    <p>BCB+ and BCB&minus; oocytes underwent in vitro fertilization (IVF), intracytoplasmic sperm injection (ICSI), or supplementation with homogeneous mitochondria and then ICSI (mICSI). During IVF, an isolated oocyte was placed in a well plate and incubated with sperm at 39&nbsp;&deg;C for 4 hours. In ICSI, a single sperm was selected and injected directly into the oocyte.</p>
    <p class="figcap"><b>Table 1</b>&nbsp;&nbsp;Developmental Rates for BCB+ and BCB&minus; Oocytes Subjected to IVF, ICSI, or mICSI</p>
    <table class="passage-table">
      <thead><tr><th></th><th>Fertilization</th><th>Total oocytes</th><th>Oocytes fertilized (%)</th><th>Zygotes progressed to blastocyst stage (%)</th></tr></thead>
      <tbody>
        <tr><td rowspan="3"><b>BCB+</b></td><td>IVF</td><td>300</td><td>65.2</td><td>30.1</td></tr>
        <tr><td>ICSI</td><td>320</td><td>76.8</td><td>34.2</td></tr>
        <tr><td>mICSI</td><td>268</td><td>61.5</td><td>35.6</td></tr>
        <tr><td rowspan="3"><b>BCB&minus;</b></td><td>IVF</td><td>350</td><td>46.1</td><td>11.4</td></tr>
        <tr><td>ICSI</td><td>315</td><td>55.9</td><td>17.8</td></tr>
        <tr><td>mICSI</td><td>228</td><td>54.6</td><td>35.7</td></tr>
      </tbody>
    </table>
  `,
  questions: [
    {
      qid: "401087",
      stem: "All the following findings in sperm would cause lower fertilization rates in IVF EXCEPT:",
      preopts: "",
      options: [
        { L: "A", text: "defects in microtubule structure.", pct: "13%", correct: false },
        { L: "B", text: "mitochondrial deficiency.", pct: "18%", correct: false },
        { L: "C", text: "cytoplasmic reduction.", pct: "58%", correct: true },
        { L: "D", text: "misfolded acrosomal enzymes.", pct: "9%", correct: false }
      ],
      stat: "58% answered correctly",
      explanationHtml: `
        <p>A human sperm cell is divided into three segments: a head, a midpiece, and a tail (flagellum).</p>
        <ul class="dash">
          <li>The <strong>head</strong> contains an acrosome and the nucleus. The acrosome is a flattened structure that encapsulates the tip of the nucleus and is rich in specialized lysosome-like enzymes for piercing the outer shell of an oocyte during fertilization.</li>
          <li>The <strong>midpiece</strong> section is packed with mitochondria, essential organelles that produce the ATP required for flagellum-driven sperm motility. This section also contains a pair of central microtubules that are anchored to the cytoskeleton and extend down the length of the flagellum (tail region).</li>
          <li>The <strong>tail</strong>, or flagellum, is a singular elongated structure specialized for wavelike movements to propel sperm through a fluid environment. Flagellum-driven motility is derived from the action of ATP-dependent motor proteins that act on the central microtubules.</li>
        </ul>
        <p class="figwrap"><img src="images/pig_q401087_sperm.png" alt="Structure of a human sperm cell: head, midpiece, tail"></p>
        <p>This question specifies that in vitro fertilization (IVF) was used to introduce sperm cells into BCB&minus; and BCB+ oocytes. Unlike ICSI experiments that directly inject sperm into oocytes, IVF involves introducing numerous sperm into a dish (ie, in vitro) containing an oocyte. The sperm used with IVF must still maintain an intact structure with mitochondria, microtubules, and an acrosome to migrate through the media and pierce the oocyte shell to fertilize the egg. However, fully developed sperm generally have little to nonexistent cytoplasm; therefore, reporting that the cytoplasm is reduced in sperm used for IVF would be a normal finding that is unlikely to impact fertilization rate.</p>
        <p><strong>(Choice A)</strong> Microtubule dysfunction would likely result in failure of the sperm cell's flagellum. Lacking a functional flagellum would impair IVF because the sperm cell still must be able to swim to the oocyte to fertilize it.</p>
        <p><strong>(Choice B)</strong> Mitochondria, the powerhouses of the cell, produce the majority of ATP used to propel the sperm cell to the oocyte. If the sperm cells used in IVF had a mitochondrial deficiency, they would not have sufficient energy (ATP) to swim to the oocyte, resulting in lower fertilization rates.</p>
        <p><strong>(Choice D)</strong> Even fully motile sperm cells will remain trapped outside the oocyte if they lack the necessary acrosomal enzymes to break through the oocyte surface (ie, the corona radiata cells and zona pellucida). Therefore, misfolding of acrosomal enzymes would present a major barrier to successful fertilization in IVF.</p>`,
      eo: "A human sperm cell is composed of a head (containing the acrosome and nucleus), a midpiece (containing mitochondria that generate the ATP required for flagellum-driven sperm motility), and a tail (the flagellum necessary for motility through a fluid environment)."
    },
    {
      qid: "401088",
      stem: "If a man and a woman are having difficulty conceiving a child and decide to undergo ICSI treatment using their own gametes, which of the following represents the proper developmental pathway of the sperm cell selected to fertilize the egg during this procedure?",
      preopts: "",
      options: [
        { L: "A", text: "Spermatogonium, spermatocyte, spermatid, spermatozoon", pct: "44%", correct: true },
        { L: "B", text: "Spermatogonium, spermatid, spermatozoon, spermatocyte", pct: "27%", correct: false },
        { L: "C", text: "Spermatocyte, spermatogonium, spermatozoon, spermatid", pct: "18%", correct: false },
        { L: "D", text: "Spermatocyte, spermatid, spermatozoon, spermatogonium", pct: "9%", correct: false }
      ],
      stat: "43% answered correctly",
      explanationHtml: `
        <p>The gonads are anatomical structures that produce gametes (ie, reproductive cells). Spermatogenesis, a hormone-driven process in which male gametes (sperm) are produced, occurs in the seminiferous tubules of the testes (ie, the male gonads). The outer fibrous capsule of the testes encloses the seminiferous tubules, which are coiled and divided into numerous compartments. A cross-section of these tubules shows that they contain developing sperm cells and "nurse cells" known as Sertoli cells, which provide nourishment to sperm and regulate their development. In addition, the interstitial tissue of a seminiferous tubule houses Leydig cells, which secrete testosterone in response to the release of luteinizing hormone from the anterior pituitary and stimulate sperm cell differentiation.</p>
        <p>Spermatogonia are stem cells that undergo cell division to become mature sperm and appear near the basement membrane of the seminiferous tubule. Spermatogonia first divide by mitosis to yield two daughter cells: one remains as a spermatogonia stem cell to maintain the line and the other differentiates into a spermatocyte upon beginning meiosis I. Spermatocytes subsequently become spermatids upon completion of meiosis II. Spermatids then become spermatozoa (mature sperm) through the loss of most of their cytoplasm, acrosome formation around the nucleus, mitochondrial concentration around the midpiece, and development of a tail (flagellum). At this point, the spermatozoa that result are small, nonmotile gametes that bear little resemblance to the original spermatogonia. As sperm develop, they are transferred from the basement membrane and released into the lumen of the seminiferous tubules. Following this, sperm exit the testes and are carried to the epididymis, where they become motile and are stored.</p>
        <p class="figwrap"><img src="images/pig_q401088_spermatogenesis.png" alt="Spermatogenesis in the seminiferous tubule"></p>
        <p>In the given scenario, the man and the woman want to use their own gametes and undergo ICSI. For the man to produce his own gametes (ie, sperm), the expected developmental pathway of the man's sperm would be: spermatogonium, spermatocyte, spermatid, spermatozoon.</p>
        <p><strong>(Choices B, C, and D)</strong> These choices depict an incorrectly ordered developmental pathway.</p>`,
      eo: "Spermatogenesis is a process that occurs in the seminiferous tubules of the testes in which male gametes (sperm) are produced. Spermatogonia undergo meiotic division and become spermatocytes, which then become spermatids when meiosis is completed. Spermatids then mature into spermatozoa (mature sperm) through a series of morphological changes."
    },
    {
      qid: "401089",
      stem: "What conclusions can be made about the production of blastocysts by the fertilization methods shown in Table 1?",
      preopts: "",
      options: [
        { L: "A", text: "ICSI is a less effective fertilization method than IVF.", pct: "2%", correct: false },
        { L: "B", text: "ICSI allows mitochondria to be more readily incorporated into the blastocysts than IVF.", pct: "11%", correct: false },
        { L: "C", text: "Blastocysts generated by IVF are more likely to become inviable.", pct: "11%", correct: false },
        { L: "D", text: "mICSI is a more successful technique than IVF or ICSI in the BCB&minus; group.", pct: "76%", correct: true }
      ],
      stat: "76% answered correctly",
      explanationHtml: `
        <p>In this experiment, oocytes with colorless cytoplasm (BCB&minus;) were separated from oocytes with blue cytoplasm (BCB+). Both groups of oocytes were subjected to three different fertilization techniques: IVF (live sperm cells were added to a dish containing an oocyte), ICSI (sperm cells were injected into the oocytes directly), and mICSI (oocytes were supplemented with mitochondria and then underwent ICSI).</p>
        <p>The researchers then measured the success of the fertilization techniques used for each oocyte group by assessing zygote to blastocyst progression. In Table 1, the column showing oocytes fertilized indicates the percentage of oocytes in each trial that were successfully fertilized. The column indicating which zygotes progressed to the blastocyst stage gives the percentage of oocytes that were successfully fertilized and progressed to the blastocyst stage, a measure of early zygote development.</p>
        <p class="figwrap"><img src="images/pig_q401089_blastocyst.png" alt="Zygote cleavage to blastocyst"></p>
        <p>In the BCB&minus; group, only ~11% and ~18% of oocytes fertilized by IVF and ICSI made it to the blastocyst stage, respectively. However, once BCB&minus; oocytes were supplemented with mitochondria during mICSI, the fertilization rate increased to ~36%. These results signify that mICSI yields higher rates of zygote development than either IVF or ICSI in the BCB&minus; oocytes group.</p>
        <p><strong>(Choice A)</strong> ICSI is more effective than IVF because it has higher percentages of fertilization success and blastocyst development in both BCB+ and BCB&minus; groups.</p>
        <p><strong>(Choice B)</strong> Oocytes (not blastocysts) were supplemented with mitochondria prior to ICSI, not IVF. The passage makes no mention of mitochondrial incorporation in combination with IVF treatment.</p>
        <p><strong>(Choice C)</strong> The passage provides no information on the fate of blastocysts that continue development. Therefore, the data do not support any statement about the viability of blastocysts produced after fertilization.</p>`,
      eo: "Following fertilization, the mammalian zygote undergoes cleavage (ie, successive mitotic cell divisions) and forms the blastocyst, a hollow ball of cells that implants into the uterine wall."
    },
    {
      qid: "401090",
      stem: "The results of Experiment 1 indicate that the oocytes stained blue are:",
      preopts: "",
      options: [
        { L: "A", text: "competent with high G6PD activity.", pct: "13%", correct: false },
        { L: "B", text: "competent with low G6PD activity.", pct: "62%", correct: true },
        { L: "C", text: "noncompetent with high G6PD activity.", pct: "12%", correct: false },
        { L: "D", text: "noncompetent with low G6PD activity.", pct: "11%", correct: false }
      ],
      stat: "62% answered correctly",
      explanationHtml: `
        <p>In Experiment 1, oocytes selected from porcine ovaries were initially stained with Brilliant Cresyl Blue (BCB) dye to measure the activity of the enzyme G6PD. Based on the passage, G6PD converts BCB to a colorless compound and is downregulated as the oocyte matures. Staining with BCB provides a viable mechanism of separating immature noncompetent oocytes from mature competent ones that will likely be selected, as these are more likely to result in viable progeny on fertilization.</p>
        <p class="figwrap"><img src="images/pig_q401090_bcb.png" alt="BCB staining of competent vs noncompetent oocytes"></p>
        <p>Consequently, mature (competent) oocytes would show a blue cytoplasm because G6PD activity would be low and the enzyme would not be sufficiently active to convert BCB to a clear compound. In contrast, an immature (noncompetent) oocyte would experience high levels of G6PD activity, and when stained with BCB would show a colorless cytoplasm because G6PD would convert BCB to a clear compound.</p>
        <p><strong>(Choices A and C)</strong> An oocyte with a clear (not blue) cytoplasm indicates high G6PD activity, which results from conversion of BCB to a clear compound and reveals an immature and noncompetent oocyte.</p>
        <p><strong>(Choice D)</strong> Oocytes with blue cytoplasm are most likely competent (mature) with low G6PD activity.</p>`,
      eo: "Oocytes can be competent or noncompetent based on their maturation status. Oocytes that are competent are mature and most likely result in viable progeny after being fertilized."
    },
    {
      qid: "401091",
      stem: "Which of the following statements best describes a BCB+ oocyte that is arrested in metaphase II?",
      preopts: "",
      options: [
        { L: "A", text: "It cannot continue to anaphase II without fertilization.", pct: "60%", correct: true },
        { L: "B", text: "It cannot complete meiosis without losing the first polar body.", pct: "14%", correct: false },
        { L: "C", text: "It is unable to be penetrated by sperm.", pct: "12%", correct: false },
        { L: "D", text: "It is no longer susceptible to nondisjunction.", pct: "11%", correct: false }
      ],
      stat: "60% answered correctly",
      explanationHtml: `
        <p>Female gametogenesis (oogenesis) is a hormone-driven process that occurs in the female gonads (ie, the ovaries) and involves mitosis and two meiotic divisions. Oogenesis begins in utero at approximately 4 weeks gestation. In the female embryo, oogonia (germ cells) are diploid stem cells that first multiply quickly via mitosis and become primary oocytes. The primary oocytes then commence the first meiotic division but become arrested at prophase I. From infancy to puberty, the ovaries are functionally inactive, and the primary oocytes remain stalled in prophase I of meiosis. The chromosome pairs are arranged in a tetrad during this phase, and their proximity allows for genetic recombination.</p>
        <p class="figwrap"><img src="images/pig_q401091_oogenesis.png" alt="Oogenesis: primary oocyte arrested in prophase I, secondary oocyte arrested in metaphase II"></p>
        <p>At puberty, ovulatory cycles begin and the female is capable of reproduction. During each menstrual cycle, stimulation by follicle-stimulating hormone (FSH) followed by a surge in luteinizing hormone (LH) causes some primary oocytes to resume meiosis I. The last stage of meiosis I (telophase I) in a primary oocyte yields two unevenly divided haploid cells. One cell is the secondary oocyte, which has almost all the cytoplasm of the primary oocyte; the other is the first polar body <strong>(Choice B)</strong>, which is smaller and does not develop into a mature oocyte. The secondary oocyte begins meiosis II but halts in metaphase II, and the polar body degenerates.</p>
        <p>The secondary oocyte remains frozen in metaphase II until fertilization occurs, at which point it completes its second meiotic division (telophase II) to an ootid and second polar body. The zygote that results from fertilization is diploid due to genetic contribution from both the ovum and sperm nuclei.</p>
        <p>In the given scenario, a BCB+ porcine oocyte is similar to that of humans. The metaphase II arrest of the BCB+ oocyte is the typical stage at which an oocyte can be fertilized by a spermatozoon <strong>(Choice C)</strong>, and this completes the second meiotic division. Therefore, the oocyte cannot continue to anaphase II without fertilization.</p>
        <p><strong>(Choice D)</strong> Nondisjunction can occur during anaphase of either meiosis I or meiosis II, and results from the failure of one or more pairs of either homologous chromosomes (meiosis I) or sister chromatids (meiosis II) to separate. Although homologous chromosomes have already segregated during anaphase I, nondisjunction of sister chromatids can still occur during anaphase II after fertilization.</p>`,
      eo: "Primary oocytes are present in female embryos and remain arrested in prophase I of meiosis from birth to puberty. During puberty, normal menstrual cycle hormones stimulate some primary oocytes to resume differentiating into a secondary oocyte. However, prior to fertilization secondary oocytes are arrested in metaphase II of meiosis."
    }
  ]
};
