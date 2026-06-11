/* Discrete (standalone) questions — Reproduction & Cell Biology
   (QID 401266, 401267, 401275, 401277)
   These are freestanding questions with no shared passage. They are grouped
   into one "set" so they fit the platform's passage/question structure; the
   left pane simply explains that each question is independent.
   Schema documented in passages/trypanosoma.js */
window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["discrete-reproduction"] = {
  id: "discrete-reproduction",
  title: "Discrete Questions: Reproduction & Cell Biology",
  subject: "Biology",
  system: "Reproduction",
  difficulty: "Moderate",
  estMinutes: 6,
  passageHtml: `
    <p><b>Discrete question set</b></p>
    <p>The following questions are <em>independent</em> of one another and are not based on a shared passage. Each question stands alone &mdash; read each one and select the best answer. Use <b>Show Solution</b> (or finish the section) to review the full explanation for each.</p>
    <p class="txt-note">Topics covered: the cell cycle and anticancer targets, intracellular transport by motor proteins, gamete ploidy and production, and ectopic implantation.</p>
  `,
  questions: [
    {
      qid: "401266",
      stem: "A subset of aggressive cancers has a relatively high growth rate, leading to the formation of large tumors. An effective drug against fast-growing tumors would most likely NOT target which stage of the cell cycle?",
      preopts: "",
      options: [
        { L: "A", text: "G0", pct: "83%", correct: true },
        { L: "B", text: "G2", pct: "6%", correct: false },
        { L: "C", text: "G2/M checkpoint", pct: "6%", correct: false },
        { L: "D", text: "G1/S checkpoint", pct: "4%", correct: false }
      ],
      stat: "83% answered correctly",
      explanationHtml: `
        <p>The mechanism by which cells duplicate their content and divide is controlled by "checkpoints" (restriction points) within the cell cycle.</p>
        <p>Many cancers arise from the accumulation of multiple genetic defects that allow uncontrollable cell division without the normal rate of apoptosis. According to the question, a subset of aggressive cancers can cause the growth of large tumors, masses of abnormal cells. Because the cells within these tumors are actively dividing, it can be assumed that the majority of the cells are in interphase and <strong>not</strong> arrested in G0. Therefore, to treat these aggressive cancers, clinicians may use anticancer drugs that try to destroy actively dividing cells (phases G1 to M) and not those in G0.</p>
        <p><strong>(Choice B)</strong> Cell growth, protein synthesis, and DNA damage repair occur in preparation for mitosis during the G2 phase of actively dividing cells. Cancer cells divide at higher rates than normal cells and cycle through G2 frequently. Therefore, anticancer drugs that target G2 can decrease the number of cell divisions.</p>
        <p><strong>(Choices C and D)</strong> Control of cellular division occurs at checkpoints within the cell cycle. At the G1/S phase transition, the cell commits to undergoing a division cycle, whereas the G2/M phase transition acts as a quality-control step. Checkpoints are regulated primarily by cyclins and cyclin-dependent kinases. Anticancer drugs often target these checkpoints due to their regulatory roles on the cell cycle.</p>`,
      eo: "Most cells in the human body are arrested in G0. However, cellular transition into G1 prepares a cell for division and DNA synthesis (S phase). In the G2 phase, DNA is checked for errors and the cell ensures sufficient organelles and cytoplasm are available for cell division. Subsequently, the cell divides in the M phase via mitosis and cytokinesis. Compounds that inhibit cell division typically target the cell cycle in phases G1 to M."
    },
    {
      qid: "401267",
      stem: "In a neuron, mitochondrial biogenesis is believed to occur primarily in the cell body, but mitochondria are often positioned at the presynaptic terminal, a distal site with high metabolic demand. Given this information, which molecular mechanism is most likely responsible for mitochondrial transport from the cell body to the presynaptic terminal?",
      preopts: "",
      options: [
        { L: "A", text: "Kinesin motors transport mitochondria along microtubules", pct: "55%", correct: true },
        { L: "B", text: "Kinesin motors transport mitochondria along microfilaments", pct: "18%", correct: false },
        { L: "C", text: "Dynein motors transport mitochondria along microfilaments", pct: "7%", correct: false },
        { L: "D", text: "Dynein motors transport mitochondria along microtubules", pct: "18%", correct: false }
      ],
      stat: "54% answered correctly",
      explanationHtml: `
        <p>A eukaryotic cell's cytoskeleton is an intracellular scaffolding (network) of fibers interspersed throughout the cytoplasm. The cytoskeleton is composed of three types of fibers: microfilaments, intermediate filaments, and microtubules. Together, these fibers organize cellular components, support cellular motility (eg, cell movement, intracellular transport), and give the cell its shape.</p>
        <p>Microtubules are structural cytoplasmic filaments composed of tubulin subunits. These filaments serve as tracks for intracellular transport of organelles and vesicles. The movement of intracellular cargo along microtubules is mediated by two motor proteins:</p>
        <ul class="dash">
          <li><strong>Kinesin:</strong> Moves intracellular cargo along microtubules in anterograde axonal transport (ie, away from the nucleus and toward distal sites).</li>
          <li><strong>Dynein:</strong> Participates in retrograde axonal transport of intracellular cargo (ie, from distal sites toward the nucleus) <strong>(Choice D)</strong>.</li>
        </ul>
        <p>According to the question, mitochondria are transported from the cell body toward the presynaptic terminal. Because mitochondria are being transferred from the nucleus and toward the synaptic terminal, this anterograde transport is most likely being performed by kinesin motors moving along the microtubules.</p>
        <p><strong>(Choices B and C)</strong> Movement along actin microfilaments occurs via myosin motors (not kinesin or dynein). The primary functions of myosin movement along microfilaments are cellular locomotion, cellular division, and muscle contractions.</p>`,
      eo: "The intracellular scaffolding of a eukaryotic cell is composed of three families of protein filaments: microfilaments, intermediate filaments, and microtubules. Intracellular transport of cargo is mediated primarily by two microtubular motor proteins (kinesin and dynein). Kinesin mediates anterograde transport (away from the nucleus) whereas dynein mediates retrograde transport (toward the nucleus)."
    },
    {
      qid: "401275",
      stem: "Human sperm and oocytes are substantially different in all of the following aspects EXCEPT:",
      preopts: "",
      options: [
        { L: "A", text: "cell volume.", pct: "4%", correct: false },
        { L: "B", text: "maturation stage at birth.", pct: "8%", correct: false },
        { L: "C", text: "the number of nuclear chromosomes contributed to a zygote.", pct: "75%", correct: true },
        { L: "D", text: "the rate at which they are produced.", pct: "11%", correct: false }
      ],
      stat: "76% answered correctly",
      explanationHtml: `
        <p>Ploidy is defined as the number of homologous chromosome sets in the nucleus of a cell. In the human body, with the exception of sperm and egg cells, nucleated cells are diploid and known as somatic cells. Somatic cells have 46 individual chromosomes that appear as 23 pairs. Each somatic cell has two sets/copies (2n) of each chromosome.</p>
        <p>In contrast, a mature egg and sperm are both haploid (1n), meaning that each contains 22 (unpaired) autosomes and 1 sex chromosome, resulting in 23 chromosomes. During fertilization, the egg and sperm form a zygote with a nucleus containing the full complement of 46 chromosomes. Accordingly, egg and sperm cells are <strong>similar</strong> in ploidy because they both are haploid cells and contribute the same number of nuclear chromosomes to a zygote.</p>
        <p><strong>(Choice A)</strong> Sperm are the smallest cells in the human body and mostly contain a nucleus, an acrosome, mitochondria, and a negligible amount of cytoplasm. In contrast, eggs are the largest human cells and have organelles and a large amount of cytoplasm.</p>
        <p><strong>(Choice B)</strong> The testes of newborn boys contain only immature germ cells (spermatogonia) that have not progressed beyond the mitotic stages; these begin meiosis at puberty. In contrast, newborn girls have primary oocytes that are arrested at prophase of meiosis I until ovulatory cycles begin at puberty.</p>
        <p><strong>(Choice D)</strong> In the adult male, millions of sperm cells are produced daily after puberty. However, females are born with their full complement of oocytes, and only a few mature during each menstrual cycle (~every 28 days).</p>`,
      eo: "Egg and sperm cells are haploid cells that contribute an equal number of chromosomes to a zygote during fertilization."
    },
    {
      qid: "401277",
      stem: "Which of the following would most likely cause an embryo to implant in a location other than the uterine lining?",
      preopts: "",
      options: [
        { L: "A", text: "Reduced number of fallopian cilia", pct: "63%", correct: true },
        { L: "B", text: "Surge in luteinizing hormone prior to ovulation", pct: "9%", correct: false },
        { L: "C", text: "Incomplete gastrulation", pct: "10%", correct: false },
        { L: "D", text: "Rupture of follicle from the ovary", pct: "15%", correct: false }
      ],
      stat: "64% answered correctly",
      explanationHtml: `
        <p>Oogenesis is the process by which females produce eggs. All of a woman's developing eggs (oocytes) are produced during fetal development. At birth, their maturation is arrested in prophase I; these arrested eggs are known as primary oocytes. At puberty, the menstrual cycle begins, and each month a single primary oocyte develops into a secondary oocyte by continuing meiosis up to metaphase II.</p>
        <p>During the follicular phase of the cycle, the follicle (oocyte plus supporting granulosa cells) matures until it bulges at the outer wall of the ovary. Maturation and growth of the follicle is driven by the release of follicle-stimulating hormone (FSH) from the anterior pituitary. A subsequent release of luteinizing hormone (LH) stimulates follicle rupture and the release of the secondary oocyte near the opening of the fallopian tube (ovulation).</p>
        <p>Fertilization becomes possible after the released secondary oocyte has been drawn into the fallopian tube. It is normal for fertilization to occur in the fallopian tube prior to implantation within the uterus. Typically, small hair-like structures within the fallopian tube called fallopian cilia help propel the fertilized oocyte toward the uterus for implantation. However, with a reduced number of fallopian cilia, improper implantation of the fertilized egg can occur outside the uterus (ectopic pregnancy).</p>
        <p><strong>(Choices B and D)</strong> A surge in LH and follicular rupture from the ovary are necessary steps for ovulation. Because these steps must happen before fertilization can occur, they would not be the cause of embryonic attachment outside the uterus.</p>
        <p><strong>(Choice C)</strong> Gastrulation is a post-implantation process by which a developing embryo progresses from the blastula stage to the tri-layered gastrula stage. Because this occurs post-implantation, abnormal gastrulation would not cause implantation outside the uterus.</p>`,
      eo: "After fertilization, fallopian cilia help propel the fertilized oocyte toward the uterus for implantation. An inadequate number of cilia in the fallopian tube can cause implantation of the fertilized egg outside the uterus (ectopic pregnancy)."
    }
  ]
};
