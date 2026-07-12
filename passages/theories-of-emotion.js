window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["theories-of-emotion"] = {
  id: "theories-of-emotion",
  title: "Neurobiology and Theories of Emotion",
  subject: "Behavioral Sciences",
  system: "Motivation, Emotion, Attitudes, Personality, and Stress",
  difficulty: "Moderate",
  estMinutes: 3,
  passageHtml: `
    <p>Prominent theories of emotion have long held that alterations in one's internal physiological state are necessary for the experience of emotion. Interoception involves both the unconscious and conscious perception of one's internal physiological state. The insula (or insular cortex), located deep within the lateral fissure on both sides of the brain, appears to be largely responsible for interoception. Studies suggest that the posterior insula (PI) is involved with processing homeostatic afferent information such as pain, temperature, hunger, thirst, and the impulse to breathe. In contrast, the anterior insula (AI) appears to process information regarding emotional awareness, the conscious experience of emotion.</p>
    <p>A recent study evaluated AI activity using functional magnetic resonance imaging (fMRI). Using fMRI, the participants' brain activity was monitored during two different tasks: an emotion-eliciting task and an interoceptive task.</p>
    <p><strong>Task 1:</strong> Participants watched 10 short videos of people recalling personal events that were either negative (eg, surviving a mass shooting attack) or positive (eg, seeing a loved one after a year apart). After each video, participants rated their reactions on a Likert scale from 1 (no emotional reaction) to 10 (extreme emotional reaction).</p>
    <p><strong>Task 2:</strong> Participants were instructed to monitor their own heart rate and press a button each time they felt their heartbeat. Participants' heart rates were externally monitored to gauge the accuracy of their responses.</p>
    <p><strong>Results:</strong> Neuroimaging results suggested that both tasks elicited activity in the AI. Furthermore, there was a high degree of overlap in the activity of the right AI and surrounding limbic and paralimbic brain regions at both the individual and group levels.</p>
  `,
  questions: [
    {
      qid: "400082",
      stem: "The assertion at the beginning of the first paragraph is referring to which of the following theories of emotion?",
      preopts: `<div class="roman">I. James-Lange<br>II. Schachter-Singer<br>III. Cannon-Bard</div>`,
      options: [
        { L: "A", text: "I only", pct: "27%", correct: false },
        { L: "B", text: "III only", pct: "5%", correct: false },
        { L: "C", text: "I and II only", pct: "55%", correct: true },
        { L: "D", text: "II and III only", pct: "10%", correct: false }
      ],
      stat: "55% answered correctly",
      explanationHtml: `
        <p>Theories of emotion attempt to explain why emotions exist and how they are generated and experienced. There are several major theories of emotion, including the James-Lange, Schachter-Singer, and Cannon-Bard theories.</p>
        <p><strong>(Number I)</strong> The <strong>James-Lange theory</strong> suggests that the <strong>physiological response</strong> elicited by a stimulus <strong>produces emotion</strong>. For example, if an individual sees a wolf approaching (stimulus), the corresponding increased heart rate (physiological reaction) triggers the brain to experience fear (emotion).</p>
        <p><strong>(Number II)</strong> The <strong>Schachter-Singer theory</strong> (ie, two-factor theory) is similar to the James-Lange theory except for an additional component: <strong>cognitive interpretation</strong> of the physiological response. The Schachter-Singer theory addresses the major limitation of the James-Lange theory, which is the fact that most emotions correspond with nearly identical physiological responses. In other words, anger, fear, and excitement might all produce similar elevations in heart rate, but the experience of each emotion is quite different because emotion is the result of two factors: physiological arousal and cognitive interpretation of the situation.</p>
        <p>The first paragraph states that prominent theories of emotion have long held that alterations in one's internal physiological state are <strong>necessary</strong> for the experience of emotion. The James-Lange and Schachter-Singer theories of emotion both suggest that physiological responses cause (or are necessary for) emotional responses.</p>
        <p><strong>(Number III)</strong> The <strong>Cannon-Bard theory</strong> suggests that physiological and emotional responses occur <strong>simultaneously</strong> and <strong>independently</strong>. If the physiological reaction (increased heart rate) and emotion (fear) occur at the same time, physiological responses would not be <em>necessary</em> for the experience of emotion.</p>
      `,
      eo: "The James-Lange theory proposes that physiological reactions produce emotion. The Schachter-Singer theory proposes that both a physiological response and cognitive interpretation are required for emotion. The Cannon-Bard theory proposes that physiological and emotional reactions occur independently and simultaneously."
    },
    {
      qid: "400083",
      stem: "If subjects from around the world were shown photographs of participants' faces during Task 1 and asked to identify the participants' facial expressions, on which of the following facial expressions would the subjects most likely agree?",
      preopts: "",
      options: [
        { L: "A", text: "Disgust", pct: "68%", correct: true },
        { L: "B", text: "Worry", pct: "9%", correct: false },
        { L: "C", text: "Jealousy", pct: "1%", correct: false },
        { L: "D", text: "Excitement", pct: "20%", correct: false }
      ],
      stat: "69% answered correctly",
      explanationHtml: `
        <p><strong>Universal emotions</strong> are defined as those that are <strong>expressed and detected by everyone</strong>, regardless of culture or nationality. According to this theory, the universal emotions are <strong>happiness, sadness, fear, anger, disgust, and surprise</strong>.</p>
        <p>Universal emotions are rapid responses that do not require high-level cognition or long-term decision making. For example, a rotting animal carcass naturally elicits disgust. Facial expressions are unique to each emotion (eg, nose wrinkled and upper lip raised in disgust), and many studies have demonstrated that people across cultures can correctly identify the facial expressions associated with the universal emotions.</p>
        <p>Therefore, subjects from around the world, regardless of differences in their cultures, would <em>most likely</em> agree on a photograph of a participant expressing the universal emotion of disgust.</p>
        <p><strong>(Choices B, C, and D)</strong> Although universal emotions do not involve much cognition, humans also experience more sophisticated emotions (eg, worry, jealousy, excitement) that may not be expressed the same way across all cultures. Subjects from around the world would more likely agree on the facial expression of a universal emotion rather than expressions of these more complex and culturally dependent emotions.</p>
      `,
      eo: "The universal emotions are happiness, sadness, fear, anger, disgust, and surprise. Universal emotions do not require a high level of cognition. Facial expressions unique to each universal emotion are easily recognized by everyone regardless of culture."
    }
  ]
};
