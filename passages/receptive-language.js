window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["receptive-language"] = {
  id: "receptive-language",
  title: "Receptive Language Development in Children",
  subject: "Behavioral Sciences",
  system: "Learning, Memory, and Cognition",
  difficulty: "Moderate",
  estMinutes: 7,
  passageHtml: `
    <p>Language is a skill acquired during early childhood that continues to develop for many years. Communication using language involves multiple complex processes, including listening, speaking, comprehension, and cognition. <i>Receptive language</i> ("language input") involves language comprehension, while <i>expressive language</i> ("language output") involves the ability to produce intelligible language. In normally developing children, receptive language emerges first, followed by expressive language.</p>
    <p>To examine how age plays a role in the activation of the neurological networks involved in processing more complex language, researchers used functional magnetic resonance imaging (fMRI) to analyze how the use of receptive language generates metabolic activity in the brains of children. A total of 672 participants were divided into three groups by age: Age 4–6 (n = 219), age 7–9 (n = 224), and age 10–12 (n = 229).</p>
    <p>Participants in each group were asked to listen to pre-recorded stories while undergoing fMRI of the brain to determine if an age-related difference could be found in activated brain tissue volume during the listening task. The recorded fMRI-monitored listening portion of the experiment lasted approximately 5 minutes. Immediately following this listening exercise, fMRI monitoring was discontinued and the children were administered tests to determine comprehension of the material. None of the children had been informed that they would be taking a comprehension test prior to its actual administration.</p>
    <p><strong>Figure 1</strong> fMRI listening task analyzed per age group: (A) comprehension test scores, and (B) brain volume activated (Note: Solid lines represent the mean in each group.)</p>
  `,
  questions: [
    {
      qid: "400118",
      stem: "The observed correlations presented in Figure 1 suggest all of the following EXCEPT:",
      preopts: "",
      options: [
        { L: "A", text: "the age group with the best comprehension also showed the greatest volume of brain activation.", pct: "2%", correct: false },
        { L: "B", text: "younger children were not able to comprehend the stories as effectively as older children.", pct: "11%", correct: false },
        { L: "C", text: "activating a greater volume of the brain resulted in improved reading comprehension.", pct: "78%", correct: true },
        { L: "D", text: "age is positively correlated with volume of brain activation in children listening to stories.", pct: "7%", correct: false }
      ],
      stat: "77% answered correctly",
      explanationHtml: `
        <p>A correlation coefficient (r) describes the linear relationship between two variables. The value of r ranges from −1 to 1 and describes the direction (sign) and strength of an association. The sign of the r-value indicates a positive or negative association, and the closer r is to its margins (−1 or 1), the stronger the relationship.</p>
        <p>As age increases, average comprehension test scores increase (Figure 1A) and average brain volume activity also increases (Figure 1B); therefore, the correlation coefficients for both graphs would be positive. Although both brain volume activation and language comprehension are positively correlated with age, their association with each other was not actually reported, so inferences about the relationship between brain volume activity and comprehension cannot be made.</p>
        <p><strong>Correlation describes relationships; it does not imply causation</strong>. An r-value does not give information about the causal nature of changes in a variable. In this study, researchers did not manipulate the levels of brain activity and then measure the resulting reading comprehension. Therefore, it is not possible to conclude that activating a greater volume of the brain <i>resulted</i> in improved reading comprehension.</p>
        <p><strong>(Choice A)</strong> The oldest age group (10–12 years) demonstrated the best comprehension scores and also showed the greatest volume of brain activation.</p>
        <p><strong>(Choice B)</strong> Figure 1A depicts a positive correlation between age and comprehension, which suggests that younger children were not able to comprehend the stories as effectively as older children.</p>
        <p><strong>(Choice D)</strong> The data presented in Figure 1B show that as age increases, the volume of brain activation also increases, which is a positive correlation.</p>
      `,
      eo: "The correlation coefficient (r) describes a linear relationship between two variables. The r value ranges from −1 to 1 and reflects the strength and direction (positive or negative) of the linear association between these two variables. Correlation does not imply causation."
    },
    {
      qid: "400119",
      stem: "Which of the following explanations for the results shown in Figure 1A most aligns with the learning theory of language development?",
      preopts: "",
      options: [
        { L: "A", text: "The children developed their language skills through exposure to the environment, operant conditioning, and imitation and repetition of language.", pct: "62%", correct: true },
        { L: "B", text: "The children who scored well on comprehension tests have learned that achievement is rewarded, motivating them to think more actively during the listening exercise.", pct: "4%", correct: false },
        { L: "C", text: "Older children's performances on the comprehension task were driven by both biological factors and exposure to social situations.", pct: "14%", correct: false },
        { L: "D", text: "Older children were able to learn the reading material more effectively because they had already passed the critical period of language development.", pct: "17%", correct: false }
      ],
      stat: "63% answered correctly",
      explanationHtml: `
        <p>The <strong>learning theory</strong> of language development (also known as the <strong>behaviorist theory</strong>) is based on the idea that language is an <strong>entirely learned behavior</strong>. This theory suggests that humans are born as "blank slates" and develop language skills through <strong>operant conditioning, imitation, and practice</strong>.</p>
        <p>For example, when infants make vocalizations that sound like "mama," they are rewarded in the form of attention and affection, thereby reinforcing that behavior. When they make other sounds that are not similar to words, they receive no reinforcement.</p>
        <p>Figure 1(A) shows a trend of increased language comprehension with age. The conclusion that children develop language skills through exposure to the environment, operant conditioning, and imitation and repetition of language is most consistent with the learning theory of language development.</p>
        <p><strong>(Choice B)</strong> The children performed the listening task <i>before</i> taking the comprehension test and were unaware they would be taking another test afterward. Therefore, it is impossible to purposefully perform well on the listening task (which came first) based on an expected reward for scoring well on the comprehension task (which came second).</p>
        <p><strong>(Choice C)</strong> The <i>interactionist theory</i> (not the learning theory) suggests that language develops through both biological and social processes. The learning theory proposes that language development is learned (through social interaction) like any other skill and does not take biological factors into consideration.</p>
        <p><strong>(Choice D)</strong> The <i>nativist theory</i> (not the learning theory) emphasizes the importance of language exposure during a critical (time-sensitive) period in early life, after which language development is more difficult.</p>
      `,
      eo: "The learning theory of language development is based on the idea that language is a learned behavior and humans are born as 'blank slates.' It posits that language develops through environmental exposure, operant conditioning (eg, positive reinforcement for certain vocalizations), imitation, and repeated language production."
    },
    {
      qid: "400120",
      stem: "A proponent of the universalism perspective would state that the results in Figure 1B support the belief that:",
      preopts: "",
      options: [
        { L: "A", text: "cognition is influenced by language.", pct: "23%", correct: false },
        { L: "B", text: "cognition is required for language.", pct: "43%", correct: true },
        { L: "C", text: "language and cognition develop via social interaction.", pct: "15%", correct: false },
        { L: "D", text: "language is necessary for cognition.", pct: "17%", correct: false }
      ],
      stat: "43% answered correctly",
      explanationHtml: `
        <p><strong>Cognition</strong> refers to thought-related mental processes (eg, thinking, planning, reasoning) and is believed to be linked to language. There are several major theories that deal with the relationship between language and cognition:</p>
        <ul>
          <li><strong>Cognition shapes language:</strong> These theories assert that cognition either completely controls language (<strong>universalism perspective</strong>) or just influences language (Piagetian perspective).</li>
          <li><strong>Language shapes cognition</strong> (also known as the Sapir-Whorf hypothesis): These theories suggest that language either just influences cognition (linguistic relativity perspective) or completely controls cognition (linguistic determinism perspective).</li>
          <li><strong>Language and thought develop independently and simultaneously:</strong> Vygotsky suggested that social interaction precedes and is necessary for <i>both</i> cognition and language development, which are initially separate but then later merge to generate inner speech (verbal thought).</li>
        </ul>
        <p><strong>Universalism</strong>, the belief that <strong>cognition controls language</strong>, posits that certain cognitive processes are universal, so all human languages also possess certain universals (eg, nouns). Therefore, a universalist would interpret Figure 1B as support for the belief that cognition is <i>required</i> for language development.</p>
        <p><strong>(Choice A)</strong> Linguistic relativity is the less absolute form of the theory that language shapes cognition. It contends that language development influences cognition but does not entirely determine or control it.</p>
        <p><strong>(Choice C)</strong> Vygotsky asserted that cognition and language develop independently but are both influenced by social interaction: Cognition is the product of socialization, and language arises out of a necessity for social communication.</p>
        <p><strong>(Choice D)</strong> Linguistic determinism, the more absolute form of the theory that language shapes cognition, states that language completely controls cognition (ie, what/how we think is a product of language) and that without language there is no thought.</p>
      `,
      eo: "There are several theories regarding the relationship between cognition and language. Some assert that cognition either controls language (universalism) or merely influences it (Piagetism). Others (based on the Sapir-Whorf hypothesis) assert that language either controls cognition (linguistic determinism) or merely influences it (linguistic relativity). Still others suggest that cognition and language initially develop separately but merge later (Vygotsky)."
    },
    {
      qid: "400121",
      stem: "According to Piaget's theory of cognitive development, the children in the group:",
      preopts: "",
      options: [
        { L: "A", text: "age 4–6 are currently unable to think symbolically using language.", pct: "31%", correct: false },
        { L: "B", text: "age 7–9 are currently unable to grasp the concept of conservation.", pct: "7%", correct: false },
        { L: "C", text: "with the best comprehension scores can manipulate concrete concepts mentally.", pct: "56%", correct: true },
        { L: "D", text: "with the poorest comprehension scores have yet to achieve object permanence.", pct: "3%", correct: false }
      ],
      stat: "57% answered correctly",
      explanationHtml: `
        <p>Jean Piaget proposed a theory of cognitive development suggesting that children progress through four distinct, age-related stages:</p>
        <ol>
          <li><strong>Sensorimotor stage (age 0 to ~2):</strong> Infants explore the world using their senses (eg, touch) and motor movements (eg, grabbing). A major developmental milestone of this stage is <strong>object permanence</strong>, the awareness that something still exists even when out of view.</li>
          <li><strong>Preoperational thought stage (age ~2 to ~7):</strong> The ability to use language and pretend play both emerge in children. However, the child is unable to assume the point of view of another person (egocentrism).</li>
          <li><strong>Concrete operations stage (age ~7 to ~11):</strong> Children begin to think logically about concrete events and learn to classify objects into simple categories. A major developmental milestone of this stage is the concept of <strong>conservation</strong>, the understanding that quantity remains the same despite changes in size or shape.</li>
          <li><strong>Formal operations stage (~12+):</strong> Children begin to think about more abstract concepts and principles, such as hypothetical questions with multiple possible outcomes.</li>
        </ol>
        <p>Children with the best comprehension scores in this study were those in the age 10–12 group, who (according to Piaget's theory) should be at either the end of the concrete operations stage or the beginning of the formal operations stage and should already know how to manipulate concrete concepts mentally.</p>
        <p><strong>(Choice A)</strong> Children in the age 4–6 group are in the preoperational stage and are in the process of learning how to think symbolically using language. Children in this stage begin to understand that symbols—particularly language—can be used to represent real things, so they <i>are able</i> to think symbolically using language.</p>
        <p><strong>(Choice B)</strong> Children in the age 7–9 group are in the concrete operations stage. Conservation gradually emerges over time during this stage, with children grasping the simpler conservation principles first (eg, amount) and more complex conservation principles later (eg, volume). Most of the children in the age 7–9 group are probably able to grasp some elements of conservation.</p>
        <p><strong>(Choice D)</strong> Object permanence, which is achieved during the sensorimotor stage (birth to age 2), is the cognitive ability to understand that something still exists even if it is hidden from view. All the subjects in this study, including those in the group with the poorest comprehension scores (age 4–6), have achieved this milestone.</p>
      `,
      eo: "According to Piaget, children progress through four stages of cognitive development based on their approximate age: the sensorimotor stage from birth to age 2 (milestone: object permanence), the preoperational stage from age 2–7 (milestone: language), the concrete operational stage from age 7–12 (milestone: conservation), and the formal operations stage from age 12 to adulthood (milestone: abstract logic/reasoning)."
    },
    {
      qid: "400122",
      stem: "Does the concept of the critical period of language development help explain the differences between the age groups seen in this study?",
      preopts: "",
      options: [
        { L: "A", text: "Yes, because only the youngest age group was still within the critical period of language development", pct: "30%", correct: false },
        { L: "B", text: "No, because all the children studied were likely still within the critical period of language development", pct: "35%", correct: true },
        { L: "C", text: "Yes, because older children demonstrated greater brain volume activation than younger children", pct: "31%", correct: false },
        { L: "D", text: "No, because there does not appear to be a connection between brain volume activation and language comprehension", pct: "2%", correct: false }
      ],
      stat: "35% answered correctly",
      explanationHtml: `
        <p>The concept of the <strong>critical period</strong> of language development suggests that there is a <strong>time-sensitive period</strong> early in life during which <strong>language acquisition is easier</strong> (with proper exposure), as compared to the period afterward, during which language acquisition is much more difficult.</p>
        <p>The <strong>nativist theory</strong> of language development asserts that humans are <strong>biologically programmed</strong> to acquire language and will learn whatever language(s) they are exposed to during the <strong>critical period</strong>. This theory suggests that language acquisition is a universal developmental accomplishment; indeed, certain brain regions involved in language development (eg, Wernicke area) are similar in all humans.</p>
        <p>The concept of the critical period does not help explain the differences between the age groups in this study because the children were age 12 or younger, so they were all likely still within the critical period of language development.</p>
        <p><strong>(Choice A)</strong> All the children studied, not just the youngest age group, were still within the critical period of language development. Therefore, the concept of the critical period does not help to explain the differences between the age groups seen in this study.</p>
        <p><strong>(Choices C and D)</strong> Results <i>do</i> suggest that there is a connection between brain volume activation and language comprehension: older children demonstrated greater brain volume activation and language comprehension than younger children. However, these results are unrelated to the concept of the critical period.</p>
      `,
      eo: "The nativist theory of language development asserts that humans are biologically programmed to acquire language if exposed to it during a critical (time-sensitive) period in early life."
    }
  ]
};
