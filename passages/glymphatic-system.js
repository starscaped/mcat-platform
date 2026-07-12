window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["glymphatic-system"] = {
  id: "glymphatic-system",
  title: "The Glymphatic System and Waste Clearance",
  subject: "Biology",
  system: "Endocrine and Nervous Systems",
  difficulty: "Moderate",
  estMinutes: 8,
  passageHtml: `
    <p>At the blood-brain barrier, the cerebrospinal fluid (CSF) is separated from lymphatic circulation by epithelial cells bound by tight junctions. Within the central nervous system (CNS), CSF surrounds and protects the brain and spinal cord and is believed to function in waste clearance for the CNS analogous to the role of the lymphatic system within the body.</p>
    <p>This waste clearance system has been dubbed the "glymphatic system." Although the mechanism of clearance is largely unknown, specialized glial cells known as astrocytes appear to modify the interstitial volume between neurons. Increasing interstitial volume is thought to allow for greater CSF flow, which increases the efficiency of neurotoxic clearance. Waste products removed from the brain include metabolic products such as ammonia and harmful compounds such as amyloid proteins.</p>
    <p>Recent advances in imaging technology suggest that interstitial clearance may be greatest during a specific stage of non-rapid eye movement sleep characterized by less frequent brain waves as measured by electroencephalography (EEG). To test this hypothesis, researchers indirectly studied changes in interstitial volume by measuring the contribution of CSF to brain interstitial fluid (ISF) via injection of a fluorescent tracer molecule into the CSF of animal models. They measured the percent contribution of CSF to brain ISF during the first hour of sleep and again during the first hour of wakefulness (Figure 1).</p>
    <p><strong>Figure 1</strong> Percent contribution of CSF to brain ISF during sleep and wakefulness</p>
  `,
  questions: [
    {
      qid: "400154",
      stem: "Given the role of the glymphatic system outlined in the passage, chronic sleep deprivation might contribute to the development of which of the following disease states?",
      preopts: "",
      options: [
        { L: "A", text: "Alzheimer's disease", pct: "76%", correct: true },
        { L: "B", text: "Multiple sclerosis", pct: "7%", correct: false },
        { L: "C", text: "Huntington's disease", pct: "5%", correct: false },
        { L: "D", text: "Central nervous system tumor", pct: "9%", correct: false }
      ],
      stat: "76% answered correctly",
      explanationHtml: `
        <p><strong>Alzheimer's disease</strong> is a progressive neurodegenerative brain disease characterized by the presence of <strong>plaques composed of beta amyloid proteins</strong> and <strong>neurofibrillary tangles composed of tau proteins</strong>. The presence of these amyloid beta plaques and neurofibrillary tangles are toxic to neurons and lead to cell death.</p>
        <p>The passage states that the glymphatic system is responsible for removing harmful compounds like amyloid proteins from the brain. This occurs due to the action of astrocytes, which increase the interstitial volume between neurons and is thought to allow for greater CSF flow and more efficient clearance of harmful compounds. Figure 1 demonstrates that the percent contribution of CSF to brain ISF is <i>greater</i> during sleep than during wakefulness, suggesting that <i>more</i> of these harmful compounds are cleared during sleep. Because of this, chronic sleep deprivation could lead to a buildup of harmful compounds such as amyloid and tau proteins and contribute to the development of Alzheimer's disease.</p>
        <p>Based on the information given in the passage, chronic sleep deprivation and reduced clearance of harmful compounds would be less likely to contribute to the development of the other options.</p>
        <p><strong>(Choice B)</strong> Multiple sclerosis is a neurodegenerative disease in which immune cells attack the myelin sheaths surrounding axons in the central nervous system (CNS).</p>
        <p><strong>(Choice C)</strong> Huntington's disease is an autosomal dominant genetic neurodegenerative disease in which neuronal loss occurs in extensive regions of the brain, including the basal ganglia.</p>
        <p><strong>(Choice D)</strong> CNS tumors are a result of cancer, or uncontrolled cell proliferation.</p>
      `,
      eo: "Alzheimer's disease is a progressive neurodegenerative brain disease characterized by the presence of plaques composed largely of amyloid beta proteins and neurofibrillary tangles composed of tau proteins."
    },
    {
      qid: "400155",
      stem: "Which of the following is true regarding the organization of neuronal tracts in the spinal cord?",
      preopts: "",
      options: [
        { L: "A", text: "Afferent neuronal fibers carry motor commands from the brain to the body through tracts in the spinal gray matter.", pct: "5%", correct: false },
        { L: "B", text: "Afferent neuronal fibers carry sensory information from the body to the brain through tracts in the spinal gray matter.", pct: "33%", correct: false },
        { L: "C", text: "Efferent neuronal fibers carry motor commands from the brain to the body through tracts in the spinal white matter.", pct: "55%", correct: true },
        { L: "D", text: "Efferent neuronal fibers carry sensory information from the body to the brain through tracts in the spinal white matter.", pct: "4%", correct: false }
      ],
      stat: "55% answered correctly",
      explanationHtml: `
        <p>The <strong>central nervous system</strong> (CNS), including the brain and spinal cord, is composed of <strong>white matter and gray matter</strong>. Located in the center of the spinal cord, <strong>gray matter</strong> is composed of unmyelinated neuronal <strong>cell bodies and dendrites</strong>. In the periphery of the spinal cord, <strong>white matter</strong> is composed of myelinated and unmyelinated <strong>axons</strong> that allow for long-distance communication between neurons.</p>
        <p>White matter consists of afferent and efferent axons. In the CNS, groups of axons are known as <strong>tracts</strong>:</p>
        <ul>
          <li><strong>Afferent</strong> (ascending) axonal tracts carry <strong>sensory information</strong> from the body to the brain in the dorsal and lateral columns of the spinal cord.</li>
          <li><strong>Efferent</strong> (descending) axonal tracts carry <strong>motor commands</strong> from the brain to the body in the ventral and lateral columns of the spinal cord.</li>
        </ul>
        <p>Therefore, in the spinal cord, efferent neuronal fibers carry motor commands from the brain to the body through tracts in the <strong>spinal white matter</strong>.</p>
        <p><strong>(Choice A)</strong> Afferent neuronal fibers carry sensory information (not motor commands) from the body to the brain, not vice versa.</p>
        <p><strong>(Choice B)</strong> Although afferent neuronal fibers do carry sensory information from the body to the brain, this information is carried through tracts in the spinal white (<i>not gray</i>) matter.</p>
        <p><strong>(Choice D)</strong> Efferent neuronal fibers carry motor commands (not sensory information) from the brain to the body, not vice versa.</p>
      `,
      eo: "In the central nervous system, gray matter is composed of neuronal cell bodies and white matter is composed of axons that allow long-distance communication between neurons. In the white matter of the spinal cord, afferent axons carry sensory information to the brain and efferent axons carry motor commands to the body."
    },
    {
      qid: "400156",
      stem: "Which of the following is true regarding the function of neuroglia in the central and peripheral nervous systems?",
      preopts: "",
      options: [
        { L: "A", text: "Astrocytes are peripheral nervous system cells that regulate neurotransmitter concentrations.", pct: "3%", correct: false },
        { L: "B", text: "Each Schwann cell myelinates multiple axons in the central nervous system.", pct: "6%", correct: false },
        { L: "C", text: "Each oligodendrocyte myelinates a single axon in the peripheral nervous system.", pct: "3%", correct: false },
        { L: "D", text: "Microglia act as the macrophages of the central nervous system and consume waste.", pct: "86%", correct: true }
      ],
      stat: "86% answered correctly",
      explanationHtml: `
        <p>The nervous system is composed of neurons and <strong>glial cells</strong>. Neurons conduct electrical impulses, and glial cells serve a variety of vital <strong>support functions</strong>. For example, <strong>microglia</strong> are the primary immune cells of the central nervous system (CNS) and <strong>act as macrophages</strong> by phagocytizing pathogens, damaged cells, and other <strong>waste materials</strong>. Other glial cells found in the CNS include:</p>
        <ul>
          <li><strong>Oligodendrocytes</strong> form myelin sheaths around axons to reduce ion leakage, decrease capacitance, and increase the speed of action potential propagation along the axon (Choice C).</li>
          <li><strong>Astrocytes</strong> make extensive contact with blood vessels and regulate blood flow in coordination with synaptic activity and chemical changes. Astrocytes are important for maintaining the chemical homeostasis of the interstitial space, including regulation of fluid and ion balance, pH, and neurotransmitter concentrations (Choice A).</li>
          <li><strong>Ependymal cells</strong> are epithelial cells that line the compartments of the CNS and secrete CSF.</li>
        </ul>
        <p>Glial cells in the <strong>peripheral nervous system</strong> include:</p>
        <ul>
          <li><strong>Schwann cells</strong> wrap the axons of some neurons with myelin to increase conduction speed (Choice B).</li>
          <li><strong>Satellite cells</strong> provide structural support and supply nutrients to neuron cell bodies in sensory, sympathetic, and parasympathetic ganglia.</li>
        </ul>
      `,
      eo: "Glial cells are the support cells of the nervous system. The peripheral nervous system contains satellite cells (support) and Schwann cells (myelination). The central nervous system contains oligodendrocytes (myelination), astrocytes (support, blood-brain barrier, interstitial space), microglia (macrophages), and ependymal cells (CSF, compartments)."
    },
    {
      qid: "400157",
      stem: "Which of the following sequences accurately describes the pathway of communication between a presynaptic neuron and a postsynaptic neuron?",
      preopts: "",
      options: [
        { L: "A", text: "Axon, soma, dendrite, synapse", pct: "12%", correct: false },
        { L: "B", text: "Axon, synapse, dendrite, soma", pct: "60%", correct: true },
        { L: "C", text: "Dendrite, axon, soma, synapse", pct: "13%", correct: false },
        { L: "D", text: "Synapse, soma, axon, dendrite", pct: "12%", correct: false }
      ],
      stat: "59% answered correctly",
      explanationHtml: `
        <p>Neurons are cells that receive, integrate, and transmit information in the nervous system. Communication between neurons involves an electrochemical process in which electrical signals are converted to chemical signals (and vice versa) as they travel from the presynaptic to postsynaptic neuron.</p>
        <p>An electric signal in the <strong>presynaptic neuron</strong> travels down a thin fiber called an <strong>axon</strong> that conducts the signal to the axon terminals. From there, chemical messengers called neurotransmitters are released into the <strong>synaptic cleft (synapse)</strong>, the region between the axon terminals and the dendrites of the next neuron (<strong>postsynaptic neuron</strong>). Neurotransmitters bind to receptors on the <strong>dendrites</strong> of the postsynaptic neuron, altering the electric potential of the cell. Lastly, the change in electric potential spreads to the <strong>cell body (soma)</strong>.</p>
        <p>The information transmitted from a presynaptic neuron to a postsynaptic neuron can have either an excitatory or inhibitory effect, increasing or decreasing the likelihood of the signal being transmitted, respectively. If the summed excitatory and inhibitory signals from presynaptic neurons exceed a certain threshold in the postsynaptic neuron, the electrical signal is transmitted down the axon and the cycle continues as this neuron (now the presynaptic neuron) communicates with the next neuron.</p>
      `,
      eo: "The electrical signal from the axon of the presynaptic neuron is converted to the release of neurotransmitters into the synaptic cleft between neurons. Neurotransmitters then bind to receptors on postsynaptic dendrites, changing the electric potential of the cell."
    },
    {
      qid: "400158",
      stem: "A patient ingests a pharmaceutical compound immediately prior to sleep that is relatively small and lipophilic (similar in structure to a steroid hormone). During the hours following ingestion, the drug concentration in the brain will:",
      preopts: "",
      options: [
        { L: "A", text: "increase less rapidly as interstitial volume increases.", pct: "51%", correct: true },
        { L: "B", text: "increase more rapidly as interstitial volume increases.", pct: "26%", correct: false },
        { L: "C", text: "increase independently of interstitial volume changes.", pct: "7%", correct: false },
        { L: "D", text: "remain zero regardless of interstitial volume.", pct: "14%", correct: false }
      ],
      stat: "50% answered correctly",
      explanationHtml: `
        <p>The <strong>blood-brain barrier</strong> is composed of endothelial cells held together by tight junctions, which help to <strong>regulate transport</strong> between the blood and CSF. Substances can pass through the barrier by several mechanisms, depending on size and polarity:</p>
        <ul>
          <li>The paracellular transport of small hydrophilic molecules is limited by the presence of tight junctions.</li>
          <li>The <strong>transcellular route</strong> refers to the passage of <strong>relatively small, lipophilic molecules</strong> by <strong>passive transport (ie, diffusion)</strong>. Nonpolar gases (eg, CO2, O2) as well as steroid hormones pass easily through endothelial cells, and therefore readily enter the brain through the transcellular route.</li>
          <li>Carrier-mediated transport (ie, facilitated diffusion and active transport) allows for the passage of large or hydrophilic molecules (eg, glucose, amino acids, nucleosides).</li>
          <li>Endocytosis is used to transport molecules in bulk.</li>
        </ul>
        <p>The drug described is relatively small and lipophilic. Therefore, this drug will cross the blood-brain barrier easily and cause the concentration in the CSF to rise during the hours following ingestion. However, the passage states that increased interstitial volume is thought to allow for greater CSF flow and more efficient clearance of compounds (eg, drugs).</p>
        <p>Figure 1 demonstrates that the percent contribution of CSF to brain interstitial fluid is greater during sleep than during wakefulness, suggesting that more of these compounds are cleared during sleep. Therefore, the increased interstitial volume during sleep would <strong>decrease the rate of change</strong> in drug concentration within the CSF. Taken together, this means that during the hours following ingestion (ie, during sleep), the concentration of this drug in the brain will <strong>increase less rapidly as interstitial volume increases</strong>.</p>
        <p><strong>(Choices B and C)</strong> As the passage states, increasing interstitial volume would likely increase clearance of the drug, causing the drug concentration within the brain to increase less rapidly (not more rapidly, or independent of interstitial volume changes).</p>
        <p><strong>(Choice D)</strong> Large, polar, or charged compounds are unable to cross the blood-brain barrier unless linked to a specific carrier protein. However, small hydrophobic compounds can diffuse through epithelial cells. Therefore, the concentration of the drug in the brain will not remain zero.</p>
      `,
      eo: "The blood-brain barrier is composed of endothelial cells held together by tight junctions, which limit paracellular transport. Carrier-mediated transport allows the passage of glucose, amino acids, and nucleosides into the CSF. Small lipophilic molecules pass easily into the CSF through transcellular diffusion."
    },
    {
      qid: "400159",
      stem: "A second study is performed in which the animal models were studied during the first hour of sleep to record CSF contribution to ISF and brain wave frequency, the latter measured by EEG. Which of the following figures illustrates the expected relationship between percent contribution of CSF to brain ISF and brain wave frequency?",
      preopts: "",
      options: [
        { L: "A", text: "Figure A (showing a positive correlation where CSF contribution increases with higher frequency)", pct: "19%", correct: false },
        { L: "B", text: "Figure B (showing a negative correlation where CSF contribution is highest when brain wave frequency is lowest)", pct: "67%", correct: true },
        { L: "C", text: "Figure C (showing a peaked curve where CSF contribution is highest at mid-range frequencies)", pct: "9%", correct: false },
        { L: "D", text: "Figure D (showing a flat line with no significant relationship)", pct: "4%", correct: false }
      ],
      stat: "66% answered correctly",
      explanationHtml: `
        <p>Sleep typically consists of a repetitive series of characteristic stages, with the first few stages involving a progression from higher- to lower-frequency brain waves.</p>
        <p>The passage states that CSF clearance is likely greatest during a sleep stage characterized by less frequent brain wave activity, as measured by EEG. The question asks for the figure illustrating the expected relationship between percent contribution of CSF to brain ISF and brain wave frequency. The data in Figure 1 suggest that CSF contribution to brain ISF is <i>greater</i> during sleep than during wakefulness, at least within the first 60 minutes. Therefore, the graph illustrating that percent contribution of CSF to brain ISF is highest when brain wave frequency is lowest best depicts the expected relationship.</p>
        <p><strong>(Choice A)</strong> This graph illustrates the opposite of the expected relationship between percent contribution of CSF to brain ISF and brain wave frequency.</p>
        <p><strong>(Choice C)</strong> At low brain wave frequencies, the percent contribution of CSF to brain ISF should be high (not low).</p>
        <p><strong>(Choice D)</strong> Given the information in this passage, a relationship is likely between percent contribution of CSF to brain ISF and brain wave frequency.</p>
      `,
      eo: "Brain wave frequencies observed during some sleep stages are lower than brain wave frequencies observed during wakefulness."
    }
  ]
};
