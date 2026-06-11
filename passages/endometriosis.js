/* Passage: Endometriosis & VEGF (QID 401718-401723)
   Schema documented in passages/trypanosoma.js */
window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["endometriosis"] = {
  id: "endometriosis",
  title: "Endometriosis & VEGF Signaling",
  subject: "Biology",
  system: "Reproduction",
  difficulty: "Moderate",
  estMinutes: 9,
  passageHtml: `
    <p>Endometriosis is a chronic, treatable, and incurable disease of the female reproductive tract associated with infertility and pelvic pain in women of reproductive age. The endometrium, a layer of epithelial tissue that grows and sheds during the menstrual cycle, normally makes up the interior lining of the uterus. In individuals with endometriosis, endometrial-like tissue is also found ectopically (outside the uterine cavity).</p>
    <p>The mechanism by which ectopic endometrial tissue successfully implants and further develops outside the uterine cavity is thought to be dependent on signaling molecules that promote the local formation of blood vessels. One of these signaling molecules is vascular endothelial growth factor (VEGF), a protein that is normally synthesized and secreted by various tissues in response to reduced oxygen levels. Because VEGF is thought to be implicated in ectopic endometrial tissue growth, researchers hypothesized that the abdominal and pelvic structures of women with endometriosis would contain higher levels of VEGF compared to women without endometriosis.</p>
    <p>In an experiment, women ages 25&ndash;40 were divided into groups based on endometriosis disease status. Individuals on any type of medication were excluded from the study. During a minimally invasive procedure, samples of peritoneal fluid were taken from healthy subjects (n = 19) and from subjects diagnosed with endometriosis (n = 30). An enzyme-linked immunosorbent assay (ELISA) was used to characterize the concentration of VEGF protein present within these samples.</p>
    <p>In a separate procedure that took place four days after the peritoneal fluid collection, uterine endometrial samples were obtained from all subjects and visualized under a microscope to determine the menstrual cycle phase of each participant. Figure 1 shows the level of VEGF in the abdominal fluid categorized by disease status and menstrual cycle phase observed under the microscope for the patient.</p>
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;VEGF concentration in sampled peritoneal fluid (Note: * = p &lt; 0.05; Proliferative phase = stage immediately preceding ovulation; Secretory phase = stage immediately following ovulation)</p>
    <p class="figwrap"><img src="images/endo_fig1_vegf.png" alt="Figure 1: VEGF concentration by disease status and menstrual cycle phase"></p>
  `,
  questions: [
    {
      qid: "401718",
      stem: "Which of the following changes to the experimental design would improve the accuracy of the results shown in Figure 1?",
      preopts: "",
      options: [
        { L: "A", text: "Decrease time elapsed between peritoneal fluid and endometrial tissue collection", pct: "63%", correct: true },
        { L: "B", text: "Obtain multiple samples from the same individual to increase the sample size", pct: "28%", correct: false },
        { L: "C", text: "Decrease the number of individuals in the study", pct: "3%", correct: false },
        { L: "D", text: "Allow individuals on medications to participate in the study", pct: "6%", correct: false }
      ],
      stat: "64% answered correctly",
      explanationHtml: `
        <p>Figure 1 shows the relationship between menstrual cycle phase (observed under the microscope four days later on day 5) and peritoneal fluid vascular endothelial growth factor (VEGF) concentration (collected on day 1) in subjects with and without endometriosis. To generate this data, the passage states that the researchers microscopically examined the endometrial tissue sample from each participant to determine whether that participant's peritoneal fluid sample was obtained during the proliferative (pre-ovulatory) or secretory (post-ovulatory) phase of their menstrual cycle.</p>
        <p>However, according to the passage these two procedures (peritoneal fluid sampling and endometrial tissue sampling) took place within five days of each other. Due to the substantial amount of time elapsed between the two procedures, peritoneal fluid and endometrial tissue sampling may have occurred during different phases of the menstrual cycle for some participants. This could lead researchers to incorrectly classify the menstrual cycle phase during which the peritoneal fluid was obtained. To eliminate this source of error, researchers should decrease the time elapsed between peritoneal fluid and endometrial tissue collection, thereby increasing the likelihood that the endometrial tissue is representative of the menstrual cycle phase during which the peritoneal fluid was collected.</p>
        <p class="figwrap"><img src="images/endo_q401718_design.png" alt="Experimental timeline: peritoneal fluid vs endometrial tissue sampling"></p>
        <p><strong>(Choice B)</strong> Provided that the sample is randomly selected, a large sample size would increase the validity of experimental results by increasing the likelihood that the sample is representative of the population under study. However, collecting multiple samples from a single individual is not a valid way to increase sample size. In these cases, the samples are not independent of each other and will yield skewed and invalid results that are not representative of the relevant population.</p>
        <p><strong>(Choice C)</strong> The larger the sample size, the less likely the data will be skewed by an individual outlier and the more likely the results will be representative of the population under study. Therefore, decreasing the number of participants in the study would decrease the accuracy and validity of the results.</p>
        <p><strong>(Choice D)</strong> To accurately test if changes in an independent variable affect the dependent variable, all other factors should remain unchanged or controlled. Medication is a confounding variable that could influence menstrual cycle and/or VEGF concentration and should be excluded from the experiment.</p>`,
      eo: "When collecting data or samples from participants in a study, researchers should assess whether the time at which these data/samples are collected could impact the validity of the experiment and then adjust their experimental design to compensate."
    },
    {
      qid: "401719",
      stem: "A scientist proposed that ectopic endometrial cells contain extra copies of the VEGF gene. Given this information, which of the following techniques can be used to analyze relative VEGF gene count?",
      preopts: '<div class="roman">I. DNA sequencing<br>II. Northern blot<br>III. Southern blot</div>',
      options: [
        { L: "A", text: "I only", pct: "11%", correct: false },
        { L: "B", text: "II only", pct: "8%", correct: false },
        { L: "C", text: "I and III only", pct: "72%", correct: true },
        { L: "D", text: "II and III only", pct: "8%", correct: false }
      ],
      stat: "72% answered correctly",
      explanationHtml: `
        <p>The pathogenesis of a disease may include de novo mutations, such as gene duplication events, leading to multiple copies of a gene (eg, VEGF) in diseased tissue relative to healthy tissue. DNA sequencing and Southern blotting can be used to assess gene count because each technique directly analyzes DNA.</p>
        <ul class="dash">
          <li><strong>DNA sequencing</strong> determines the nucleotide sequence of DNA molecules. DNA sequencing of whole genomes may therefore be used to precisely quantify the copies of the VEGF gene present within a given tissue and compare that number to healthy controls <strong>(Number I)</strong>.</li>
          <li><strong>Southern blot</strong> detects a particular sequence of DNA &mdash; <em>can</em> determine relative gene count <strong>(Number III)</strong>.</li>
          <li><strong>Northern blot</strong> detects a particular sequence of RNA &mdash; <em>cannot</em> determine relative gene count.</li>
        </ul>
        <p>Southern blotting is used to detect and measure DNA concentration within cell or tissue samples: (1) DNA is isolated and cut into fragments by restriction enzymes; (2) fragments are separated by size via gel electrophoresis and denatured; (3) fragments are transferred to a blotting membrane and immobilized; (4) the membrane is incubated with a single-stranded DNA probe complementary to the sequence of interest, which hybridizes if present; (5) the sample is washed to remove unbound probes; (6) a visual signal indicates hybridization occurred. Based on the intensity of the visual signal, Southern blotting may be used to determine the relative VEGF gene count between tissues <strong>(Number III)</strong>.</p>
        <p><strong>(Number II)</strong> The northern blot resembles the Southern blot but detects RNA, not DNA. Because mRNA is the product of DNA transcription, northern blots assess gene expression within a tissue. However, the level of mRNA expression may vary greatly depending on factors other than gene quantity (eg, transcription factor activity, chromatin structure). Therefore, mRNA levels do not directly correspond to gene count, and northern blotting could not be used to determine whether ectopic endometrial cells contain extra copies of the VEGF gene.</p>`,
      eo: "DNA sequencing and Southern blotting are DNA assays that may be used to assess the relative quantity of genes between tissue types. Northern blotting is an RNA assay used to assess gene expression in different tissues."
    },
    {
      qid: "401720",
      stem: "Progesterone concentration is generally lowest in the proliferative phase and highest in the secretory phase of the menstrual cycle. The investigators conclude that VEGF concentrations within peritoneal fluid may be inversely correlated with serum levels of progesterone. Do the data support this conclusion?",
      preopts: "",
      options: [
        { L: "A", text: "No, peritoneal VEGF concentration is lower during the secretory phase of the menstrual cycle.", pct: "8%", correct: false },
        { L: "B", text: "No, serum levels of progesterone are consistently elevated in women with endometriosis.", pct: "3%", correct: false },
        { L: "C", text: "Yes, peritoneal VEGF concentration is higher during the proliferative phase of the menstrual cycle.", pct: "84%", correct: true },
        { L: "D", text: "Yes, women with endometriosis have consistently elevated peritoneal VEGF concentration.", pct: "3%", correct: false }
      ],
      stat: "83% answered correctly",
      explanationHtml: `
        <p>The rise and fall of the female sex hormones estrogen and progesterone are an important driver of the menstrual cycle, the cyclical changes in ovarian and uterine function that promote pregnancy. For example, serum progesterone levels rise substantially following ovulation. This progesterone is secreted by the corpus luteum (the portion of the ovarian follicle remaining in the ovary after ovulation) and maintains the uterine lining, which at this point in the cycle has thickened in preparation for the implantation of an embryo. If pregnancy does not occur, the corpus luteum degenerates and progesterone levels fall as a new cycle begins.</p>
        <p class="figwrap"><img src="images/endo_q401720_menstrual.png" alt="Hormone levels across the menstrual cycle"></p>
        <p>An inverse correlation between two variables is observed when the value of one variable decreases as the value of the other increases. In both the healthy participants and those with endometriosis, vascular endothelial growth factor (VEGF) concentrations were higher during the pre-ovulatory proliferative phase (when progesterone concentration is lowest). Likewise, VEGF concentrations were lower during the post-ovulatory secretory phase (when progesterone concentration is highest). These findings support the conclusion that peritoneal VEGF concentration and serum level of progesterone are inversely correlated.</p>
        <p><strong>(Choice A)</strong> According to Figure 1, VEGF concentration is lower during the secretory phase in both groups. Because serum progesterone is highest in the secretory phase, this actually supports the conclusion that there may be an inverse relationship.</p>
        <p><strong>(Choice B)</strong> No information regarding the serum levels of progesterone in healthy individuals versus patients with endometriosis was collected during this experiment.</p>
        <p><strong>(Choice D)</strong> Peritoneal VEGF concentration was elevated in women with endometriosis, relative to healthy women, only during the proliferative phase. If VEGF were elevated regardless of cycle phase (and thus regardless of progesterone), this would suggest there is no relationship between VEGF and progesterone.</p>`,
      eo: "Changes in the serum levels of estrogen and progesterone cause the physiological changes associated with the menstrual cycle, the female reproductive cycle that repeats every 24-36 days."
    },
    {
      qid: "401721",
      stem: "Surgical removal of the ovaries is one treatment for endometriosis. Complete removal of the ovaries would most likely result in which of the following?",
      preopts: "",
      options: [
        { L: "A", text: "Significant increase in bone mass", pct: "8%", correct: false },
        { L: "B", text: "Degeneration of breast tissue", pct: "72%", correct: true },
        { L: "C", text: "Severe immune system impairment", pct: "8%", correct: false },
        { L: "D", text: "Increased frequency of menstruation", pct: "10%", correct: false }
      ],
      stat: "73% answered correctly",
      explanationHtml: `
        <p>Female sexual development and reproductive function are mediated in large part by the female sex hormones estrogen and progesterone, which are synthesized and secreted by the ovaries (the female gonads). Puberty, the period of adolescent sexual development (approximately ages 10&ndash;14), is characterized in females by ovarian secretion of estrogen and progesterone to promote the following:</p>
        <ul class="dash">
          <li>Growth and maturation of female sexual organs (eg, fallopian tubes, uterus)</li>
          <li>Development of sex-specific traits (eg, breast development, widening of pelvis)</li>
          <li>Initiation of the menstrual cycle through stimulation of oogenesis and ovulation</li>
        </ul>
        <p class="figwrap"><img src="images/endo_q401721_ovaries.png" alt="Effects of ovarian hormones"></p>
        <p>Surgical removal of the ovaries in women of reproductive age mimics the withdrawal of female sex hormones normally associated with menopause, the cessation of menstrual cycles that occurs around age 50. During menopause, production of estrogen and progesterone within the ovaries declines substantially, leading to numerous physiological changes. For example, the vaginal epithelium dehydrates, changes in mood may occur, and the reproductive organs and breasts shrink (atrophy). Accordingly, these menopausal symptoms may occur in patients whose ovaries are removed for medical reasons (eg, endometriosis).</p>
        <p><strong>(Choice A)</strong> Bone is continuously resorbed by osteoclasts and rebuilt by osteoblasts. Female sex hormones maintain bone mass by balancing these activities. Withdrawal of female sex hormones (eg, due to ovary removal, menopause) leads to greater osteoclast than osteoblast activity, diminishing bone mass (not increasing it).</p>
        <p><strong>(Choice C)</strong> Although ovarian function is thought to contribute to the generally greater robustness of female immune responses, surgical removal of the ovaries would not be expected to have a severe effect on infection risk.</p>
        <p><strong>(Choice D)</strong> Female sex hormones maintain regular menstrual cycles. After removal of the ovaries, menstrual cycles will eventually stop (ie, premature menopause), not increase in frequency.</p>`,
      eo: "The ovaries are female reproductive organs that contain oocytes and secrete female sex hormones (ie, estrogen, progesterone). These hormones influence female reproductive function and are directly responsible for the development and maintenance of female sex characteristics."
    },
    {
      qid: "401722",
      stem: "Patients with endometriosis might experience infertility due to deposits of ectopic endometrial tissue in any of the following structures EXCEPT:",
      preopts: "",
      options: [
        { L: "A", text: "the urethra.", pct: "77%", correct: true },
        { L: "B", text: "the vaginal canal.", pct: "10%", correct: false },
        { L: "C", text: "the fallopian tubes.", pct: "5%", correct: false },
        { L: "D", text: "the ovaries.", pct: "6%", correct: false }
      ],
      stat: "77% answered correctly",
      explanationHtml: `
        <p>The female reproductive organs are the sex-specific structures that enable the conception and delivery of an infant. Impaired function within any of the female reproductive organs may result in infertility, the inability to become pregnant.</p>
        <p class="figwrap"><img src="images/endo_q401722_repro_tract.png" alt="Female reproductive tract structures"></p>
        <p>The following are important female reproductive structures that, if affected by endometrial implants, may lead to infertility:</p>
        <ul class="dash">
          <li><strong>Vagina:</strong> The sexual organ through which sperm enters the uterus. Endometrial implants within the vagina may impair the passage of sperm and decrease the likelihood that an ovulated oocyte will be fertilized <strong>(Choice B)</strong>.</li>
          <li><strong>Ovaries:</strong> The female gonads that produce gametes and secrete female sex hormones. Endometrial implants attached to the ovary may cause infertility by impairing follicular maturation or ovulation <strong>(Choice D)</strong>.</li>
          <li><strong>Fallopian tubes:</strong> Duct structures lined with motile cilia that transfer the ovulated oocyte from the abdominal cavity toward the uterus; they are also the primary site of fertilization. Endometrial implants that block or impair the fallopian tubes would prevent a fertilized oocyte from reaching the uterus <strong>(Choice C)</strong>.</li>
          <li><strong>Cervix:</strong> The barrier separating the vagina and uterus. Endometrial implants that block the cervical canal may impair the passage of sperm.</li>
        </ul>
        <p><strong>(Choice A)</strong> The urethra is the canal through which urine exits the body from the bladder. Endometrial implants affecting the urethra would impair urinary function, not fertility/reproduction.</p>`,
      eo: "The female reproductive tract consists of the ovaries, fallopian tubes, uterus, cervix, and vagina. Each of these tissues performs specialized functions that enable pregnancy and delivery."
    },
    {
      qid: "401723",
      stem: "VEGF signaling also leads to the dilation of existing blood vessels. One function of vasodilation is to:",
      preopts: "",
      options: [
        { L: "A", text: "increase body temperature in cold environments.", pct: "11%", correct: false },
        { L: "B", text: "increase blood flow to the intestines following a meal.", pct: "70%", correct: true },
        { L: "C", text: "decrease blood flow to the kidneys during dehydration.", pct: "8%", correct: false },
        { L: "D", text: "maintain blood pressure following an episode of fluid loss.", pct: "9%", correct: false }
      ],
      stat: "71% answered correctly",
      explanationHtml: `
        <p>Blood vessels are tubular channels that transport blood throughout the body. Many vessels are surrounded by smooth muscle, which contracts to facilitate narrowing or relaxes to promote widening of the blood vessels in response to neural and hormonal inputs.</p>
        <p>Narrowing of the blood vessels (decreased diameter) is known as <strong>vasoconstriction</strong>. Vasoconstriction reduces blood vessel volume, resulting in increased blood pressure (BP). Consequently, vasoconstriction functions to maintain BP following sudden blood pressure drops (eg, following fluid loss). Vasoconstriction also reduces blood flow and can therefore redirect blood flow to other tissues.</p>
        <p class="figwrap"><img src="images/endo_q401723_vasodilation.png" alt="Vasoconstriction vs vasodilation"></p>
        <p>In contrast, widening of the blood vessels (increased diameter) is known as <strong>vasodilation</strong>. Vasodilation increases blood vessel volume and decreases BP. Vasodilation also increases blood flow to promote the delivery of oxygen and nutrients to tissues supplied by that blood vessel. For example, during exercise muscle activity is enabled as blood vessels supplying skeletal muscles dilate. Likewise, digestion is promoted as blood vessels supplying the abdominal organs dilate following a meal.</p>
        <p><strong>(Choice A)</strong> In cold environments, blood vessels supplying the skin vasoconstrict (not dilate) to limit heat loss and increase body temperature.</p>
        <p><strong>(Choice C)</strong> Vasodilation of renal blood vessels would increase (not decrease) blood flow to the kidney, increasing glomerular filtration and worsening dehydration.</p>
        <p><strong>(Choice D)</strong> Vasodilation following fluid loss further decreases BP; vasoconstriction is what maintains BP.</p>`,
      eo: "Vasodilation (blood vessel widening) decreases blood pressure and increases blood flow to the tissues supplied by that blood vessel. Vasoconstriction (blood vessel narrowing) increases blood pressure and decreases blood flow to the tissues supplied by that blood vessel."
    }
  ]
};
