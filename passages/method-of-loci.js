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

window.PASSAGES["method-of-loci"] = {

  id: "method-of-loci",
  title: "Depression &amp; the Method of Loci",
  subject: "Behavioral Sciences",
  system: "Learning, Memory, and Cognition",
  difficulty: "Moderate",
  estMinutes: 6,

  passageHtml: `
    <p>Research suggests that individuals with depression experience dysfunctions in their autobiographical memory. For example, negative autobiographical memories are more easily recalled than positive memories, and memories encoded while experiencing a positive mood are more difficult to access while depressed. In individuals with depression, rumination (repetitive negative thoughts) can also impede autobiographical memory retrieval.</p>
    <p>Studies have demonstrated that the Method of Loci (MoL), a mnemonic strategy that pairs items to be remembered with well-known visuospatial locations (loci), effectively improves retention and recall over time. Given this previous research, experimenters hypothesized that training individuals with depression in the MoL technique would improve sustained retrieval of their positive autobiographical memories. For this study, 125 individuals between ages 25 and 45 with a current diagnosis of depression were recruited (individuals with co-occurring psychological diagnoses were excluded). Phase 1 screened participants for normal memory function. Participants were given a list of 25 three-letter nonsense words to memorize (eg, LAR, PAS, FUV), and recall was tested immediately (no delay), and again after 20 minutes, one hour, nine hours, 24 hours, 48 hours, and 72 hours. Those participants who demonstrated normal memory function (n = 122) were then randomly assigned to the MoL group (n = 61) or the control group (n = 61) for the next phase.</p>
    <p>During phase 2, the MoL group was trained to associate features of a positive autobiographical memory (eg, a marriage proposal) with a well-known route (eg, the route from home to work). All salient details of the positive memory were mentally associated with loci. For example, one participant paired the restaurant table where he proposed to his wife with a fire hydrant he passes on his way to work. The control group was not trained using any specific technique. Both groups mentally rehearsed their chosen memory every day for one week. After one week, both groups performed equally well at recalling their selected positive memory. However, when a surprise recollection memory test was performed a month later, the MoL group performed at levels comparable to their first recollection test, while the control group exhibited significantly reduced recollection.</p>
  `,

  questions: [
    {
      qid: "400014",
      stem: "This study found that the method of loci (MoL) technique improved:",
      preopts: "",
      options: [
        { L: "A", text: "retrieval of an episodic memory.", pct: "74%", correct: true },
        { L: "B", text: "retrieval of a semantic memory.", pct: "12%", correct: false },
        { L: "C", text: "encoding of an episodic memory.", pct: "8%", correct: false },
        { L: "D", text: "encoding of a semantic memory.", pct: "3%", correct: false }
      ],
      stat: "74% answered correctly",
      explanationHtml: `
        <p>Memory consists of encoding, transferring information into the brain; storage, retention of information; and retrieval, accessing stored information. Failure can occur during any of these processes.</p>
        <p>Mnemonics are strategies that aid memory. For example, reciting the alphabet in tune with a song helps toddlers learn their ABCs, whereas the acronym OIL RIG (&ldquo;Oxidation Is Losing, Reduction Is Gaining&rdquo;) helps chemistry students remember which molecule or atom loses or gains electrons in an oxidation-reduction reaction.</p>
        <p>Autobiographical memories are also known as episodic memory, a type of explicit/declarative long-term memory of events one personally experienced (eg, one's own marriage proposal). In this study, the method of loci (MoL) mnemonic technique was used to help individuals with depression retrieve (access) positive autobiographical (episodic) memories by pairing the major features of the memory with loci along a well-known route.</p>
        <p><strong>(Choice B)</strong> Semantic memory, the other type of explicit/declarative long-term memory, includes memory of factual information (eg, humans are mammals). The MoL was used to help participants remember positive events they had personally experienced (episodic memory), not factual information (semantic memory).</p>
        <p><strong>(Choices C and D)</strong> The MoL assisted participants in accessing (retrieval of) previously stored episodic information, not inputting (encoding) new information.</p>
        <p class="figwrap"><img src="images/q400014_explanation_memory_processes.png" alt="Memory processes: encoding, storage, retrieval"></p>`,
      eo: "The basic memory processes are encoding (inputting information), storage (retaining), and retrieval (accessing). Mnemonic techniques are strategies that aid memory."
    },
    {
      qid: "400015",
      stem: "This study assessed which of the following independent variables?",
      preopts: "",
      options: [
        { L: "A", text: "MoL versus no specific technique", pct: "88%", correct: true },
        { L: "B", text: "Depression versus no depression", pct: "2%", correct: false },
        { L: "C", text: "One-week recall versus one-month recall", pct: "6%", correct: false },
        { L: "D", text: "Phase 1 recall versus phase 2 recall", pct: "2%", correct: false }
      ],
      stat: "88% answered correctly",
      explanationHtml: `
        <p>In an experiment, the independent variable is manipulated/controlled by the experimenter to determine if changes impact the dependent variable, which is the outcome. Changes in the dependent variable determine whether the research hypothesis was confirmed.</p>
        <p>In this study, the researchers hypothesized that the method of loci (MoL) mnemonic technique would improve long-term access to a positive autobiographical memory for participants with depression. Therefore, the independent variable was group assignment, which determined whether one was taught the MoL (experimental group) or not (control group). In other words, MoL versus no specific technique was the independent variable in this study.</p>
        <p><strong>(Choice B)</strong> Because all participants in this study met diagnostic criteria for depression, it would not be possible for the researchers to compare results for participants with and without depression.</p>
        <p><strong>(Choice C)</strong> Memory recall, both at one week and one month, was the outcome of interest, or the dependent (not independent) variable.</p>
        <p><strong>(Choice D)</strong> Phase 1 was a memory screening assessment used to identify potential participants who did not exhibit typical memory function. The researchers did not compare recall from phase 1 and phase 2.</p>`,
      eo: "In scientific experiments, independent variables are manipulated by the researcher and dependent variables are the outcomes (effects). Changes to the dependent variable are assumed to be caused by the independent variable."
    },
    {
      qid: "400016",
      stem: "Based on the study design, which of the following symptoms should NOT be present in any of the participants in this study?",
      preopts: "",
      options: [
        { L: "A", text: "Hopelessness", pct: "1%", correct: false },
        { L: "B", text: "Sleep disturbances", pct: "6%", correct: false },
        { L: "C", text: "Mania", pct: "89%", correct: true },
        { L: "D", text: "Lack of pleasure", pct: "2%", correct: false }
      ],
      stat: "90% answered correctly",
      explanationHtml: `
        <p><strong>Symptoms of depression</strong></p>
        <ul class="dash">
          <li>Feelings of sadness, hopelessness, or emptiness</li>
          <li>Lack of interest or pleasure</li>
          <li>Changes in appetite (eating more or less)</li>
          <li>Changes in sleep (sleeping more or less)</li>
          <li>Fatigue</li>
          <li>Low self-worth or guilt</li>
          <li>Cognitive difficulties</li>
          <li>Thoughts about death or suicidal ideation</li>
        </ul>
        <p>Depression is characterized by feelings of sadness, hopelessness, or emptiness; lack of interest in previously enjoyed activities; lack of pleasure (anhedonia); changes in appetite (eating more or less); changes in sleep (sleeping more or less); fatigue; low self-worth or guilt; cognitive difficulties (problems with concentration, memory, decision making); and/or thoughts about death or suicidal ideation.</p>
        <p>Mania, which is indicative of bipolar disorder, is characterized by increased energy or agitation, as well as flight of ideas (rapid thoughts), feelings of grandiosity, reduced need for sleep, distractibility, and/or impulsive or reckless behaviors (eg, extreme spending). Most people with bipolar disorder also experience depressive episodes, so researchers would want to screen potential participants for symptoms of mania.</p>
        <p>For this study, because individuals with any other co-occurring psychological diagnoses were excluded, mania (which indicates bipolar disorder) should not have been present in any of the study participants.</p>
        <p><strong>(Choices A, B, and D)</strong> Helplessness, sleep disturbances (sleeping more or less than usual), and anhedonia (a lack of pleasure in activities previously enjoyed) are all symptoms of depression and therefore may have been present in individuals participating in this study.</p>
        <p class="figwrap"><img src="images/q400016_explanation_depression_symptoms.png" alt="Study design flowchart: MoL vs control group, independent and dependent variables"></p>`,
      eo: "Depression is characterized by feelings of sadness, hopelessness, or emptiness; lack of interest in previously enjoyed activities; lack of pleasure (anhedonia); changes in appetite (eating more or less); changes in sleep (sleeping more or less); fatigue; low self-worth or guilt; cognitive difficulties (problems with concentration, memory, decision making); and/or thoughts about death or suicidal ideation."
    },
    {
      qid: "400017",
      stem: "Which of the following best explains the memory dysfunction described in the first paragraph? For individuals with depression, retrieval of memories encoded while experiencing a positive mood appears to be impeded by:",
      preopts: "",
      options: [
        { L: "A", text: "primacy effects.", pct: "3%", correct: false },
        { L: "B", text: "role-playing effects.", pct: "1%", correct: false },
        { L: "C", text: "practice effects.", pct: "2%", correct: false },
        { L: "D", text: "state-dependent effects.", pct: "93%", correct: true }
      ],
      stat: "92% answered correctly",
      explanationHtml: `
        <p>Memory retrieval can be aided by internal (eg, emotional state) or external (eg, sights, smells) cues.</p>
        <p>Context-dependent effects are external cues that aid retrieval. For example, if an individual encodes a memory at the library, that memory is easier to recall (ie, retrieve) at the library than in class. State-dependent effects are internal cues that aid retrieval. For example, if an individual encodes a memory while happy, that memory is easier to retrieve during a later happy mood than when sad.</p>
        <p>State-dependent memory effects best explain why individuals who are currently depressed (experiencing a negative mood) find it more difficult to retrieve happy memories, which were encoded during a positive mood.</p>
        <p><strong>(Choice A)</strong> When a list of items is presented serially (one at a time), it is typically easier to recall items from the beginning (primacy effect) and end (recency effect) of the list; together, these are known as serial position effects. The primacy effect does not explain the memory dysfunctions described in the first paragraph.</p>
        <p><strong>(Choice B)</strong> Role-playing effects occur when individuals take on attitudes that align with social roles they are playing; for example, a student pretending to be a prison guard might start to believe that &ldquo;prisoners deserve punishment.&rdquo; Role-playing effects do not explain the memory dysfunctions described in the first paragraph.</p>
        <p><strong>(Choice C)</strong> Practice effects describe the performance gains that occur when an individual takes an assessment more than once, due to increased familiarity and comfort with the material and testing format. Practice effects do not explain the memory dysfunctions described in the first paragraph.</p>
        <p class="figwrap"><img src="images/q400017_explanation_state_dependent_memory.png" alt="State-dependent vs. context-dependent memory effects"></p>`,
      eo: "Memory retrieval can be aided by cues that are internal (eg, emotional state) or external (eg, sights, sounds). State-dependent memory effects occur when it is easier to retrieve a memory while in the same mood as when the memory was encoded. Context-dependent memory effects occur when it is easier to retrieve a memory while in the same physical environment as when the memory was encoded."
    }
  ]
};
