window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["poverty-sociology"] = {
  id: "poverty-sociology",
  title: "Poverty and Social Stratification",
  subject: "Behavioral Sciences",
  system: "Demographics and Social Structure",
  difficulty: "Moderate",
  estMinutes: 4.5,
  passageHtml: `
    <p>Poverty may be the most foundational risk factor for poor health outcomes. Although poverty thresholds are calculated in a variety of ways, many international organizations define poverty thresholds as 50% of the median household income in a given country. Since the United States Census Bureau first began publishing an official U.S. poverty estimate in the 1960s, the percentage of the population living in poverty has fluctuated between roughly 10% and 15%. Extensive research shows a correlation between social stratification and health outcomes, with better outcomes corresponding to higher strata.</p>
    <p><strong>Concentration of Poverty:</strong> According to U.S. Census Bureau data, roughly 1 in 7 Americans is living in poverty, with almost 14 million residing in &quot;high-poverty&quot; neighborhoods (40% or more of residents below the federally defined poverty threshold), nearly double the amount since 1990. High-poverty neighborhoods also tend to have the highest rates of violent crime, so living in these neighborhoods poses both immediate (eg, physical assault) and long-term health threats, as living in an unsafe neighborhood acts as a chronic environmental stressor.</p>
    <p><strong>Poverty and Isolation:</strong> Poverty also prevents or limits access to many productive social activities, such as working, buying goods and services, community and political involvement, and engagement with social networks. The most impoverished members of society are often marginalized and may engage with mainstream society very little, if at all.</p>
    <p><strong>Transmission of Poverty:</strong> Poverty is transmitted across generations; numerous studies have found that individuals born into poverty are more likely to raise their own children in poverty. A longitudinal study of 100 households concluded that transmission of poverty occurs because lower-income parents lack economic resources, social connections, and knowledge about the education system, not because they differ from higher-income parents in wanting to help their children succeed. Experts also suggest that the education system perpetuates income disparities; schools in high-income neighborhoods have the most funding, best teachers, and highest graduation rates, whereas schools in low-income neighborhoods face numerous obstacles to obtaining supplies, retaining qualified teachers, and preventing student attrition.</p>
  `,
  questions: [
    {
      qid: "400086",
      stem: "Which of the following statements is a situational attribution that is consistent with the information in the passage?",
      preopts: "",
      options: [
        { L: "A", text: "Individuals born into low-income families remain impoverished because they lack motivation.", pct: "3%", correct: false },
        { L: "B", text: "Individuals from low-income neighborhoods drop out of school due to environmental stressors.", pct: "87%", correct: true },
        { L: "C", text: "Individuals who break the cycle of poverty are more resilient than those who remain impoverished.", pct: "2%", correct: false },
        { L: "D", text: "Individuals just above the poverty threshold have significantly better health than those just below it.", pct: "7%", correct: false }
      ],
      stat: "87% answered correctly",
      explanationHtml: `
        <p>To explain behavior (our own or that of others) we make <strong>attributions</strong>, which are:</p>
        <ul class="dash">
          <li><strong>Dispositional / personal:</strong> based on internal characteristics such as motivation, personality, or intelligence.</li>
          <li><strong>Situational / environmental:</strong> based on external factors such as the neighborhood in which one grew up, social resources, or physical environment.</li>
        </ul>
        <p>The statement that individuals from low-income neighborhoods drop out of school due to environmental stressors is a <strong>situational attribution</strong> because it explains behavior based on an external environmental factor rather than an internal trait.</p>
        <p><strong>(Choice A)</strong> The statement that individuals remain impoverished because they lack motivation is a dispositional/personal attribution that blames poverty on internal characteristics of the individual.</p>
        <p><strong>(Choice C)</strong> The statement that individuals who break the cycle of poverty are more resilient is a dispositional/personal attribution because resilience is considered a personal quality/internal trait.</p>
        <p><strong>(Choice D)</strong> While this statement makes a claim consistent with a health gradient, the passage does not compare the health of individuals just above and below the threshold. Furthermore, this statement is a comparison of outcomes, not an attribution of behavior.</p>
      `,
      eo: "Residentially segregated, low-income neighborhoods have more crime, violence, pollution, and other environmental health risk factors (spatial inequality). Attributions are explanations for behavior and can be dispositional/personal (ie, based on internal characteristics) or situational/environmental (ie, based on external factors)."
    },
    {
      qid: "400087",
      stem: "The third paragraph most directly describes the relationship between poverty and:",
      preopts: "",
      options: [
        { L: "A", text: "social control.", pct: "2%", correct: false },
        { L: "B", text: "social exclusion.", pct: "96%", correct: true },
        { L: "C", text: "false consciousness.", pct: "1%", correct: false },
        { L: "D", text: "McDonaldization.", pct: "1%", correct: false }
      ],
      stat: "96% answered correctly",
      explanationHtml: `
        <p><strong>Social exclusion</strong> occurs when individuals are marginalized to the point of being <strong>unable to participate in society</strong>:</p>
        <ul class="dash">
          <li><strong>Economically:</strong> earning money, purchasing goods/services.</li>
          <li><strong>Socially:</strong> limited/no interaction with others in society.</li>
          <li><strong>Civically:</strong> community and political involvement.</li>
        </ul>
        <p>The third paragraph, which states that poverty prevents or limits access to productive social activities, such as working, buying goods and services, community and political involvement, and engagement with social networks, most directly describes the relationship between poverty and social exclusion.</p>
        <p><strong>(Choice A)</strong> Social control is the exertion of influence by a group to ensure that the behavior of individuals conforms to that of the group. The third paragraph does not describe this.</p>
        <p><strong>(Choice C)</strong> False consciousness refers to individuals from lower classes adopting the misleading views of the upper class and therefore accepting the status quo.</p>
        <p><strong>(Choice D)</strong> McDonaldization describes the process by which extreme efficiency and rationalization produce negative consequences in society.</p>
      `,
      eo: "Social exclusion is the marginalization of individuals so that they are unable to participate in society economically (through earning or spending money), socially (through interaction with others), or civically (through political or other community engagement)."
    },
    {
      qid: "400088",
      stem: "The conclusion drawn from the longitudinal study described in the final paragraph would be best supported by a follow-up study that found a:",
      preopts: "",
      options: [
        { L: "A", text: "positive correlation between children's educational attainment and their parents' cultural capital.", pct: "82%", correct: true },
        { L: "B", text: "positive correlation between parents' educational attainment and their desire to help their children succeed.", pct: "4%", correct: false },
        { L: "C", text: "negative correlation between children's future earnings and their parents' economic capital.", pct: "7%", correct: false },
        { L: "D", text: "negative correlation between children's future earnings and their parents' desire to help their children succeed.", pct: "5%", correct: false }
      ],
      stat: "82% answered correctly",
      explanationHtml: `
        <p><strong>Social reproduction</strong> refers to the fact that successive generations tend to occupy the same social class (eg, children born into lower social class families tend to occupy a lower social class as adults). Social reproduction occurs because social structures maintain and perpetuate social inequality over time.</p>
        <p>The longitudinal study concluded that the social reproduction of poverty occurs because lower-income parents lack economic resources (ie, economic capital), social connections (ie, social capital), and knowledge about the education system (ie, cultural capital). Therefore, this conclusion would be best supported by demonstrating a positive correlation between children's educational attainment and their parents' cultural capital (knowledge of the education system).</p>
        <p><strong>(Choice B)</strong> A positive correlation between parents' educational attainment and their desire to help their children succeed would actually <em>undermine</em> the study's conclusion that there was no difference between lower-income and higher-income parents in their desire to help their children succeed.</p>
        <p><strong>(Choice C)</strong> A negative correlation between children's future earnings and their parents' economic capital would mean children from lower-income families grow up to earn high incomes, which <em>undermines</em> the concept of social reproduction of poverty.</p>
        <p><strong>(Choice D)</strong> A negative correlation between children's future earnings and their parents' desire to help would imply children who earn high incomes had parents with little desire to help them succeed, which does not support the longitudinal study's findings.</p>
      `,
      eo: "Social reproduction occurs when social class remains unchanged from one generation to the next (eg, children born into a lower social class tend to occupy a lower social class as adults)."
    }
  ]
};
