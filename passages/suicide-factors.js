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

window.PASSAGES["suicide-factors"] = {

  id: "suicide-factors",
  title: "Suicide Risk Factors &amp; Anomie",
  subject: "Behavioral Sciences",
  system: "Identity and Social Interaction",
  difficulty: "Moderate",
  estMinutes: 3,

  passageHtml: `
    <p>Suicide is one of the leading causes of death in the United States. Suicide risk is associated with a variety of factors. Personal factors include childhood abuse, certain personality traits (eg, impulsiveness, aggression), and history of mental illness. Over 90% of people who attempt suicide meet diagnostic criteria for at least one psychological disorder, and suicide risk increases as the number of co-occurring disorders increases. Diagnosis severity also matters: studies suggest that individuals are at greatest risk of attempting suicide while inpatient at or newly discharged from a psychiatric hospital.</p>
    <p>Social factors also play a role in suicide. Sociologist &Eacute;mile Durkheim argued that embeddedness in society is a key feature in determining the likelihood of an individual committing suicide. Specifically, the more people that depend on an individual financially, emotionally, or physically, the less likely that individual is to commit suicide. Studies suggest that suicide is also linked to religious affiliation and income level. Religious groups that place more value on community events, church attendance, and collective solidarity tend to have lower rates of suicide among members, whereas more affluent individuals are more likely to commit suicide.</p>
    <p>Economic trends have also been linked to suicide. One study retrospectively analyzed the relationship between the U.S. economy and suicide rates. It found that the overall suicide rate tends to rise during economic recessions and drop during economic expansions (Figure 1).</p>
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;U.S. suicide rates compared to economic trends</p>
    <p class="figwrap"><img src="images/suicide_fig1_economic_trends.png" alt="Figure 1: US suicide rates and economic trends"></p>
    <p>Further analysis of suicide data suggests that for every individual who successfully commits suicide, approximately 25 individuals are unsuccessful in such attempts, costing the United States billions of dollars annually in both lost wages and treatment expense. Although white, middle-aged men are the most likely cohort to successfully commit suicide, women attempt suicide three times more often than men.</p>
  `,

  questions: [
    {
      qid: "400080",
      stem: "Which of the following is NOT supported by the passage?",
      preopts: "",
      options: [
        { L: "A", text: '<img src="images/q400080_choiceA.png" alt="Choice A: Positive correlation between socioeconomic status and suicide attempts" style="max-width:100%">', pct: "10%", correct: false },
        { L: "B", text: '<img src="images/q400080_choiceB.png" alt="Choice B: Positive correlation between religiosity and suicide attempts" style="max-width:100%">', pct: "74%", correct: true },
        { L: "C", text: '<img src="images/q400080_choiceC.png" alt="Choice C: Negative correlation between economic prosperity and suicide attempts" style="max-width:100%">', pct: "8%", correct: false },
        { L: "D", text: '<img src="images/q400080_choiceD.png" alt="Choice D: Negative correlation between time from psychiatric discharge and suicide attempts" style="max-width:100%">', pct: "6%", correct: false }
      ],
      stat: "74% answered correctly",
      explanationHtml: `
        <p>In sociology, there is a distinction between religiosity and religious affiliation. Religiosity refers to the extent to which a given religious doctrine is incorporated into all aspects of an individual's life (eg, beliefs, behaviors, identity). Also referred to as religiousness, religiosity is the degree to which a person internalizes a religion.</p>
        <p>For example, those who consider themselves Catholic and have a high degree of religiosity also demonstrate beliefs and behaviors that align with Catholicism, and &ldquo;being Catholic&rdquo; is an important part of their identity.</p>
        <p>Religious affiliation describes an individual identifying with a religious group (eg, Catholics, Jews, Muslims). Just because individuals identify with a religious group does not necessarily mean that they live their lives according to the principles or customs of that religion. For example, many people consider themselves Catholic but do not attend church often or at all.</p>
        <p>The second paragraph suggests that religious affiliation is linked to suicide: religious groups that place more value on people actively participating in the faith (religiosity) tend to have lower rates of suicide among members. This is presumably due to members feeling a greater sense of embeddedness within their religious community. Therefore, as religiosity increases, suicide attempts should decrease (not increase), reflecting a negative correlation.</p>
        <p><strong>(Choice A)</strong> According to paragraph 2, there is a positive correlation between socioeconomic status (in particular, income) and the likelihood of committing suicide.</p>
        <p><strong>(Choice C)</strong> Figure 1 indicates that suicide rates increase in a society during economic downturns and decrease during periods of economic prosperity. In other words, there is a negative correlation between suicide attempts and improvements in the economy.</p>
        <p><strong>(Choice D)</strong> According to paragraph 1, individuals are at the greatest risk of attempting suicide during or just after an inpatient stay at a psychiatric hospital. Therefore, there is a negative correlation between suicide attempts and time from psychiatric hospital discharge.</p>`,
      eo: "Religious affiliation describes an individual identifying with a religious group, whereas religiosity (or religiousness) is the degree to which an individual internalizes that religion, as demonstrated by the individual's beliefs, behaviors, and identity."
    },
    {
      qid: "400081",
      stem: "Anomie refers to a state of normlessness in society. Which of the following best describes anomie?",
      preopts: "",
      options: [
        { L: "A", text: "A process by which societies rationalize and standardize their institutions", pct: "5%", correct: false },
        { L: "B", text: "A condition where traditional norms and values are undermined without being replaced", pct: "85%", correct: true },
        { L: "C", text: "A state of extreme social cohesion and collective consciousness", pct: "4%", correct: false },
        { L: "D", text: "A process of rapid social mobility across class boundaries", pct: "4%", correct: false }
      ],
      stat: "85% answered correctly",
      explanationHtml: `
        <p>Anomie is a state of normlessness in society. When the norms and values of a society are undermined and have yet to be replaced, the social system reaches the condition of anomie. Individuals in an anomic society lack the guidance and purpose that society usually provides; as a result, they may feel less tied to society, aimless, or alienated.</p>
        <p>Anomie variously impacts individuals within society based on which norms are undermined and how. For example, during the Industrial Revolution, many individuals who moved to cities (a new way of life) experienced anomie, but those who remained in the countryside were less likely to be affected because the norms governing life prior to the Industrial Revolution were still in effect.</p>
        <p><strong>(Choice A)</strong> The process by which societies rationalize and standardize their institutions is known as McDonaldization, not anomie.</p>
        <p><strong>(Choice C)</strong> Extreme social cohesion and collective consciousness represent the opposite of anomie. Anomie occurs when social bonds and shared norms break down.</p>
        <p><strong>(Choice D)</strong> Rapid social mobility across class boundaries is not anomie. While anomie can occur during periods of rapid social change, it specifically refers to the breakdown of norms and values.</p>`,
      eo: "Anomie is a state of normlessness in society. When the norms and values of a society are undermined and have yet to be replaced, the social system reaches the condition of anomie. Individuals in an anomic society lack the guidance and purpose that society usually provides."
    }
  ]
};
