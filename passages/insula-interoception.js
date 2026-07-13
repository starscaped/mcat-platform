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

window.PASSAGES["insula-interoception"] = {

  id: "insula-interoception",
  title: "Insula &amp; Interoception",
  subject: "Behavioral Sciences",
  system: "Learning, Memory, and Cognition",
  difficulty: "Moderate",
  estMinutes: 3,

  passageHtml: `
    <p>Prominent theories of emotion have long held that alterations in one's internal physiological state are necessary for the experience of emotion. Interoception involves both the unconscious and conscious perception of one's internal physiological state. The insula (or insular cortex), located deep within the lateral fissure on both sides of the brain, appears to be largely responsible for interoception. Studies suggest that the posterior insula (PI) is involved with processing homeostatic afferent information such as pain, temperature, hunger, thirst, and the impulse to breathe. In contrast, the anterior insula (AI) appears to process information regarding emotional awareness, the conscious experience of emotion.</p>
    <p>A recent study evaluated AI activity using functional magnetic resonance imaging (fMRI). Using fMRI, the participants were presented with images designed to elicit emotions (eg, fearful faces, pleasant scenes). The researchers found that AI activity increased when participants reported experiencing emotions. Furthermore, the degree of AI activation correlated with the intensity of the emotional experience reported by the participants.</p>
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;Insula location and function</p>
    <p class="figwrap"><img src="images/insula_fig1_brain_scan.png" alt="Figure 1: Insula location in the brain"></p>
  `,

  questions: [
    {
      qid: "400082",
      stem: "Based on the passage, which of the following functions is most likely associated with the posterior insula?",
      preopts: "",
      options: [
        { L: "A", text: "Experiencing fear when viewing a threatening stimulus", pct: "15%", correct: false },
        { L: "B", text: "Detecting changes in body temperature", pct: "72%", correct: true },
        { L: "C", text: "Recognizing facial expressions of emotion", pct: "8%", correct: false },
        { L: "D", text: "Forming emotional memories", pct: "4%", correct: false }
      ],
      stat: "72% answered correctly",
      explanationHtml: `
        <p>The passage states that the posterior insula (PI) is involved with processing homeostatic afferent information such as pain, temperature, hunger, thirst, and the impulse to breathe. These are all examples of basic physiological states that the body needs to monitor and regulate to maintain homeostasis.</p>
        <p>Detecting changes in body temperature is a homeostatic function that helps the body maintain its internal temperature within a narrow range. This type of interoceptive information would be processed by the posterior insula.</p>
        <p><strong>(Choice A)</strong> Experiencing fear when viewing a threatening stimulus involves emotional awareness, which the passage associates with the anterior insula (AI), not the posterior insula.</p>
        <p><strong>(Choice C)</strong> Recognizing facial expressions of emotion involves processing external social cues, not internal physiological states. This is not a function of the insula.</p>
        <p><strong>(Choice D)</strong> Forming emotional memories involves multiple brain regions including the amygdala and hippocampus. While the insula may contribute to emotional processing, memory formation is not its primary function as described in the passage.</p>`,
      eo: "The posterior insula processes homeostatic afferent information including pain, temperature, hunger, thirst, and respiratory drive. The anterior insula processes emotional awareness and the conscious experience of emotion."
    },
    {
      qid: "400083",
      stem: "The study described in the passage provides evidence for which theory of emotion?",
      preopts: "",
      options: [
        { L: "A", text: "James-Lange theory", pct: "35%", correct: true },
        { L: "B", text: "Cannon-Bard theory", pct: "28%", correct: false },
        { L: "C", text: "Schachter-Singer theory", pct: "18%", correct: false },
        { L: "D", text: "Common sense theory", pct: "8%", correct: false }
      ],
      stat: "35% answered correctly",
      explanationHtml: `
        <p>The study found that anterior insula (AI) activity increased when participants reported experiencing emotions, and the degree of AI activation correlated with the intensity of the emotional experience. The anterior insula is responsible for emotional awareness and the conscious experience of emotion.</p>
        <p>This finding supports the James-Lange theory of emotion, which proposes that physiological arousal precedes and causes the experience of emotion. According to this theory, we experience emotion because we perceive our body's physiological responses to stimuli. The insula's role in interoception (perceiving internal physiological states) and its correlation with emotional experience aligns with the James-Lange view that awareness of physiological changes is necessary for emotional experience.</p>
        <p><strong>(Choice B)</strong> The Cannon-Bard theory proposes that physiological arousal and emotional experience occur simultaneously and independently. The study's finding that AI activity correlates with emotional intensity suggests these processes are linked, not independent.</p>
        <p><strong>(Choice C)</strong> The Schachter-Singer theory emphasizes cognitive appraisal as necessary for emotion. While cognitive interpretation may play a role, the study focused on the correlation between insula activity (physiological awareness) and emotional intensity.</p>
        <p><strong>(Choice D)</strong> The common sense theory proposes that emotional experience causes physiological arousal. The study does not support this causal direction.</p>
        <p class="figwrap"><img src="images/q400083_explanation_insula.png" alt="Universal emotions: happiness, sadness, fear, anger, disgust, surprise"></p>`,
      eo: "The James-Lange theory proposes that physiological arousal precedes and causes emotional experience. The insula's role in interoception and its correlation with emotional intensity supports this theory."
    }
  ]
};
