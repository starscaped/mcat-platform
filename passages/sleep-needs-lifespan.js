window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["sleep-needs-lifespan"] = {
  id: "sleep-needs-lifespan",
  title: "Sleep Needs and DEC2 Mutation",
  subject: "Behavioral Sciences",
  system: "Sensation, Perception, and Consciousness",
  difficulty: "Moderate",
  estMinutes: 8,
  passageHtml: `
    <p>Across the lifespan, mental and physical health depends on adequate sleep. Extensive research suggests that sleep needs and characteristics change throughout an individual's life (Figure 1).</p>
    <p><strong>Figure 1</strong> Average hours of rapid eye movement (REM) and non-REM sleep for different age groups across the lifespan</p>
    <p>Chronic sleep deprivation acts as a physiological stressor and can have a multitude of short- and long-term negative health consequences. Studies show that over 30% of adults get less than the recommended minimum of 7 hours of sleep per night, putting them at greater risk for metabolic disorders (eg, obesity, diabetes), cardiovascular disease (eg, high blood pressure, stroke), and emotional disorders (eg, anxiety, depression). Sleep deprivation is also associated with impaired cognitive functioning, decreased work performance, and an increased risk of accidents.</p>
    <p>However, the guideline that adults sleep at least 7 hours per night does not account for the considerable variation in individual sleep needs. Research suggests that some individuals, known as "long sleepers," require an average daily sleep duration of more than 9 hours, while "short sleepers" require an average daily sleep duration of less than 6 hours. One study found that biological night duration (established by one's circadian pacemaker or "master clock") appears to be a few hours shorter for short sleepers as compared to long sleepers. Other studies suggest that short sleepers regularly sleep less than 7 hours without any apparent negative consequences due to one or more genetic mutations, such as a mutation on the <i>DEC2</i> gene (also known as <i>BHLHE41</i>), which codes for a transcription factor involved in regulating circadian rhythms.</p>
  `,
  questions: [
    {
      qid: "400160",
      stem: "For the study comparing long sleepers to short sleepers described in the final paragraph, researchers were LEAST likely to have measured which of the following biomarkers?",
      preopts: "",
      options: [
        { L: "A", text: "Core body temperature", pct: "17%", correct: false },
        { L: "B", text: "Melatonin", pct: "2%", correct: false },
        { L: "C", text: "Oxytocin", pct: "74%", correct: true },
        { L: "D", text: "Cortisol", pct: "5%", correct: false }
      ],
      stat: "75% answered correctly",
      explanationHtml: `
        <p><strong>Circadian rhythms</strong>, which are regulated endogenously by a circadian pacemaker (master clock), are <strong>cycles in physiological activity</strong> (eg, hormone release) that occur over <strong>24-hour intervals</strong>. Most circadian rhythms occur in accordance with the timing of the sleep/wake cycle because they are synchronized through the synthesis and secretion of melatonin from the pineal gland, a light-dependent process.</p>
        <p>A biomarker is a measurable indicator of a biological phenomenon. To compare differences in the circadian clocks of long sleepers and short sleepers, researchers must measure biomarkers that generally follow a 24-hour cycle of activity, such as:</p>
        <ul>
          <li><strong>Core body temperature</strong>, which fluctuates between 38°C (in the daytime) and 36°C (just before waking)</li>
          <li><strong>Plasma melatonin level</strong>, which peaks during sleep but remains relatively low during waking hours</li>
          <li><strong>Cortisol</strong>, which under normal conditions peaks immediately after waking and is lowest just before sleep</li>
        </ul>
        <p><strong>Oxytocin</strong>, a hormone produced by the hypothalamus and released by the pituitary gland, is involved in <strong>pair bonding, reproductive behavior, labor, and lactation</strong>. Oxytocin release is <i>not</i> strongly associated with the sleep/wake cycle, so researchers would be <i>least likely</i> to have used this biomarker as a measure of circadian rhythms.</p>
        <p><strong>(Choices A, B, and D)</strong> Core body temperature, melatonin, and cortisol are three biomarkers that researchers would have potentially measured to compare the circadian clocks of long sleepers to those of short sleepers.</p>
      `,
      eo: "Melatonin, a hormone released from the pineal gland when light levels are low, synchronizes the internal circadian clock according to daylight. The circadian clock regulates circadian rhythms (physiological processes fluctuating around a 24-hour cycle), including core body temperature and plasma cortisol levels."
    },
    {
      qid: "400161",
      stem: "Based on the description in the passage, should an individual who is a \"short sleeper\" be diagnosed with a sleep-wake disorder?",
      preopts: "",
      options: [
        { L: "A", text: "Yes, because sleeping less than average is considered a sleep disturbance", pct: "1%", correct: false },
        { L: "B", text: "Yes, because diurnal circadian rhythms are affected", pct: "3%", correct: false },
        { L: "C", text: "No, because daytime functioning is not impaired", pct: "83%", correct: true },
        { L: "D", text: "No, because the causes of sleep-wake disorders are psychological, not genetic", pct: "11%", correct: false }
      ],
      stat: "84% answered correctly",
      explanationHtml: `
        <p><strong>Sleep-wake disorders</strong> include conditions marked by <strong>disturbed sleep</strong> causing <strong>distress and/or impaired functioning</strong>. Sleep-wake disorders fall broadly into two categories: parasomnias and dyssomnias.</p>
        <ul>
          <li><strong>Parasomnias</strong> are more common in children and involve <strong>abnormal function of the nervous system during sleep</strong>, while falling asleep, or when rousing from sleep. Common examples include somnambulism (sleepwalking) and night terrors.</li>
          <li><strong>Dyssomnias</strong> are more common in adults and involve interference with the <strong>quality or timing of sleep</strong>, such as difficulty falling or remaining asleep, or periods of excessive sleepiness during waking hours. Common examples include insomnia, sleep apnea, and narcolepsy.</li>
        </ul>
        <p>Individuals with the "short sleeper" phenotype require less than 6 hours of sleep daily on average and appear to be able to regularly sleep less than 7 hours without negative consequences. Because "short sleepers" <strong>do not experience distress or impaired functioning</strong>, they should not be diagnosed with a sleep-wake disorder.</p>
        <p><strong>(Choices A and B)</strong> While the "short sleeper" phenotype may include sleeping less than average and having shorter-than-average diurnal circadian rhythms, this should not be considered a sleep-wake disorder because individuals with the mutation do not experience distress or impaired functioning.</p>
        <p><strong>(Choice D)</strong> Sleep-wake disorders can arise from causes that are psychological (eg, stress, clinical depression), physical (eg, poorly managed pain), or genetic (eg, gene mutations).</p>
      `,
      eo: "Sleep-wake disorders cause disturbed sleep, distress, and impaired functioning. Parasomnias are characterized by abnormal nervous system function during sleep and are more prevalent during childhood. Dyssomnias interfere with the quality or timing of sleep and are more prevalent in adulthood."
    },
    {
      qid: "400162",
      stem: "In which region of the brain would a lesion most likely disrupt the sleep/wake cycle?",
      preopts: "",
      options: [
        { L: "A", text: "Anterior pituitary", pct: "11%", correct: false },
        { L: "B", text: "Posterior pituitary", pct: "8%", correct: false },
        { L: "C", text: "Hypothalamus", pct: "68%", correct: true },
        { L: "D", text: "Hippocampus", pct: "12%", correct: false }
      ],
      stat: "68% answered correctly",
      explanationHtml: `
        <p>The <strong>hypothalamus</strong> is centrally located in the brain and is the command center for the endocrine system, which produces hormones that regulate a number of the body's functions, such as growth, metabolism, blood pressure, core body temperature, appetite, and sleep.</p>
        <p>The hypothalamus has several nuclei (collections of neuronal cell bodies) that have specialized functions; one of these nuclei is the <strong>suprachiasmatic nucleus (SCN)</strong>, which regulates the circadian pacemaker that controls circadian rhythms.</p>
        <p>Photoreceptors in the retina project information about light levels to the SCN. When light levels are high, the SCN <i>downregulates melatonin production</i> by the pineal gland. When light levels are low, the SCN <i>upregulates melatonin production</i> by the pineal gland. This clock mechanism helps maintain sleep patterns and other 24-hour circadian cycles.</p>
        <p><strong>(Choices A and B)</strong> The pituitary sits below and is attached to the hypothalamus via the pituitary stalk. The anterior pituitary synthesizes and secretes many hormones (eg, follicle-stimulating hormone, growth hormone). The posterior pituitary, made of axonal projections from the hypothalamus, secretes oxytocin and vasopressin.</p>
        <p><strong>(Choice D)</strong> The hippocampus is a brain structure located within the middle temporal lobe and is associated with the formation and storage of memory.</p>
      `,
      eo: "Light levels impact neurons in the suprachiasmatic nucleus of the hypothalamus, which regulates melatonin release that establishes the body's 24-hour cycle (circadian clock)."
    },
    {
      qid: "400163",
      stem: "According to Figure 1, the time in one's life when sleep contains the largest proportion of REM sleep best corresponds to which of the following?",
      preopts: "",
      options: [
        { L: "A", text: "Piaget's sensorimotor stage", pct: "91%", correct: true },
        { L: "B", text: "Erikson's initiative vs. guilt stage", pct: "2%", correct: false },
        { L: "C", text: "Mead's play stage", pct: "3%", correct: false },
        { L: "D", text: "Kohlberg's instrumental relativist orientation stage", pct: "2%", correct: false }
      ],
      stat: "91% answered correctly",
      explanationHtml: `
        <p>Figure 1 shows the average hours spent awake and in REM and NREM sleep over the human lifespan. The total amount of time spent sleeping and the proportion of REM and NREM sleep varies with age.</p>
        <p><strong>Newborns sleep the most</strong> (approximately 16 hours a day on average) and have the <strong>greatest proportion of REM to NREM sleep</strong> compared to other age groups. This is thought to aid the rapid neurological development seen during this period.</p>
        <p>The period in one's life during which sleep contains the largest proportion of REM sleep (about half) best corresponds with <strong>Piaget's sensorimotor stage</strong>, which occurs during infancy and involves exploring the world mostly through sensations and motor movements.</p>
        <p><strong>(Choice B)</strong> Erikson's initiative vs. guilt stage corresponds to ages 3-6, the period when children spend roughly one-quarter of their sleep time in REM.</p>
        <p><strong>(Choice C)</strong> Mead's play stage corresponds with preschool age, when children spend roughly one-quarter of their sleep time in REM.</p>
        <p><strong>(Choice D)</strong> Kohlberg's instrumental relativist orientation stage is typical of preschool age through adolescence.</p>
      `,
      eo: "The total amount of time spent sleeping and the amount of time spent in REM and NREM sleep varies with age. Newborns spend the most time sleeping and have the greatest proportion of REM to NREM sleep."
    },
    {
      qid: "400164",
      stem: "Chronic sleep deprivation is expected to have which of the following effects on the body?",
      preopts: "",
      options: [
        { L: "A", text: "Increased activation of the parasympathetic nervous system and decreased function of the reproductive system", pct: "3%", correct: false },
        { L: "B", text: "Increased activation of the sympathetic nervous system and decreased function of the immune system", pct: "80%", correct: true },
        { L: "C", text: "Increased activation of the parasympathetic nervous system and increased stimulation of the cardiovascular system", pct: "12%", correct: false },
        { L: "D", text: "Increased activation of the sympathetic nervous system and increased stimulation of the digestive system", pct: "3%", correct: false }
      ],
      stat: "81% answered correctly",
      explanationHtml: `
        <p>The autonomic nervous system, comprising the sympathetic and parasympathetic branches, regulates largely unconscious physiological processes that help the body prepare for stressors (sympathetic branch) and return to homeostasis (parasympathetic branch).</p>
        <p>Activated by stress, the <strong>sympathetic nervous system</strong> coordinates the <strong>"fight-or-flight"</strong> response, involving the release of stress hormones such as epinephrine, norepinephrine, and glucocorticoids (eg, cortisol) from the adrenal glands.</p>
        <p>The stress response results in blood being <i>redistributed to necessary organs</i> (eg, brain, skeletal muscle tissue) and <i>away from organs</i> that are not immediately needed, such as those of the <strong>reproductive, immune, and digestive systems</strong>. Heart rate and respiration rate increase and glucose is released to prepare the body for action.</p>
        <p>Chronic sleep deprivation, which acts as a physiological stressor, would activate the sympathetic nervous system, resulting in fatigue, anxiety, cardiovascular disease, and a decrease in reproductive and immune function.</p>
        <p><strong>(Choices A and C)</strong> Chronic stress due to sleep deprivation results in <i>decreased</i> activation of the parasympathetic nervous system.</p>
        <p><strong>(Choice D)</strong> Chronic stress due to sleep deprivation results in increased activation of the sympathetic nervous system but is associated with the <i>inhibition</i> of digestive function.</p>
      `,
      eo: "The autonomic nervous system comprises the sympathetic nervous system, which coordinates the 'fight-or-flight' response in the presence of stress, and the parasympathetic nervous system, which helps the body return to homeostasis. Chronic sympathetic activation can compromise reproductive and immune functioning."
    },
    {
      qid: "400165",
      stem: "What type of study design is most appropriate to investigate whether the number of hours slept per night predicts the number of health care provider visits for those with and without the DEC2 gene mutation?",
      preopts: "",
      options: [
        { L: "A", text: "Ethnographic study", pct: "2%", correct: false },
        { L: "B", text: "Cross-sectional study", pct: "24%", correct: false },
        { L: "C", text: "Observational longitudinal study", pct: "65%", correct: true },
        { L: "D", text: "Randomized controlled trial", pct: "7%", correct: false }
      ],
      stat: "65% answered correctly",
      explanationHtml: `
        <p><strong>Longitudinal studies</strong> involve collecting data over a period of time. Longitudinal studies, which can be either experimental or observational, are useful for measuring how <strong>variables change over time</strong>.</p>
        <p>If a researcher wants to investigate whether the number of hours slept per night predicts the number of health care provider visits over time, the researcher would need to collect data over a period of time (ie, longitudinally). More specifically, the researcher would perform an <strong>observational longitudinal study</strong>. Observational studies are conducted when it is unethical or unfeasible to manipulate a variable of interest (such as a genetic mutation in humans).</p>
        <p><strong>(Choice A)</strong> Ethnographic studies use observation and interview to qualitatively study people within their own communities. An investigation of health care provider visits is more quantitative in nature, so an ethnographic design is not appropriate.</p>
        <p><strong>(Choice B)</strong> A cross-sectional study is an observational study that measures a variable in a population at one time point. Because this example requires measuring variables over time, this would not be appropriate.</p>
        <p><strong>(Choice D)</strong> A randomized controlled trial randomly sorts subjects into treatment and control groups. In this example, researchers cannot manipulate a <i>DEC2</i> gene mutation in humans, so it is not possible to assign people randomly.</p>
      `,
      eo: "A longitudinal study is used to investigate a variable of interest within a sample population over a period of time. An observational longitudinal study is performed when it is unethical or unfeasible to manipulate the variable of interest."
    }
  ]
};
