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

window.PASSAGES["poverty-inequality"] = {

  id: "poverty-inequality",
  title: "Poverty, Inequality, &amp; Health",
  subject: "Behavioral Sciences",
  system: "Demographics and Social Structure",
  difficulty: "Moderate",
  estMinutes: 5,

  passageHtml: `
    <p>Poverty may be the most foundational risk factor for poor health outcomes. Although poverty thresholds are calculated in a variety of ways, many international organizations define poverty thresholds as 50% of the median household income in a given country. Since the United States Census Bureau first began publishing an official U.S. poverty estimate in the 1960s, the percentage of the population living in poverty has fluctuated between roughly 10% and 15%. Extensive research shows a correlation between social stratification and health outcomes, with better outcomes corresponding to higher strata.</p>
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;Spatial inequality across neighborhoods</p>
    <p class="figwrap"><img src="images/poverty_fig1_stratification.png" alt="Figure 1: Spatial inequality showing low-income, middle-income, and wealthy neighborhoods"></p>
    <p><strong>Concentration of Poverty</strong></p>
    <p>According to U.S. Census Bureau data, roughly 1 in 7 Americans is living in poverty, with almost 14 million residing in &ldquo;high-poverty&rdquo; neighborhoods (40% or more of residents below the federally defined poverty threshold), nearly double the amount since 1990. High-poverty neighborhoods also tend to have the highest rates of violent crime, so living in these neighborhoods poses both immediate (eg, physical assault) and long-term health threats, as living in an unsafe neighborhood acts as a chronic environmental stressor.</p>
    <p><strong>Poverty and Isolation</strong></p>
    <p>Poverty also prevents or limits access to many productive social activities, such as working, buying goods and services, community and political involvement, and engagement with social networks. The most impoverished members of society are often marginalized and may engage with mainstream society very little, if at all.</p>
    <p><strong>Transmission of Poverty</strong></p>
    <p>Poverty is transmitted across generations; numerous studies have found that individuals born into poverty are more likely to raise their own children in poverty. A longitudinal study of 100 households concluded that transmission of poverty occurs because lower-income parents lack economic resources, social connections, and knowledge about the education system, not because they differ from higher-income parents in wanting to help their children succeed. Experts also suggest that the education system perpetuates income disparities; schools in high-income neighborhoods have the most funding, best teachers, and highest graduation rates, whereas schools in low-income neighborhoods face numerous obstacles to obtaining supplies, retaining qualified teachers, and preventing student attrition.</p>
  `,

  questions: [
    {
      qid: "400086",
      stem: "According to the passage, which of the following best explains why individuals born into poverty are likely to remain in poverty?",
      preopts: "",
      options: [
        { L: "A", text: "Lower-income parents have less desire to help their children succeed than higher-income parents.", pct: "4%", correct: false },
        { L: "B", text: "Lower-income parents lack economic resources, social connections, and knowledge about the education system.", pct: "88%", correct: true },
        { L: "C", text: "Individuals in poverty have personality traits that prevent upward mobility.", pct: "3%", correct: false },
        { L: "D", text: "The education system provides equal opportunities to all students regardless of neighborhood.", pct: "4%", correct: false }
      ],
      stat: "88% answered correctly",
      explanationHtml: `
        <p>The passage states that a longitudinal study of 100 households concluded that transmission of poverty occurs because lower-income parents lack economic resources, social connections, and knowledge about the education system, not because they differ from higher-income parents in wanting to help their children succeed.</p>
        <p>This finding suggests that structural factors (lack of resources, networks, and knowledge) rather than individual motivation or desire explain the intergenerational transmission of poverty. Lower-income parents want their children to succeed just as much as higher-income parents, but they lack the capital (economic, social, and cultural) necessary to facilitate upward mobility.</p>
        <p><strong>(Choice A)</strong> The passage explicitly states that lower-income parents do not differ from higher-income parents in wanting to help their children succeed. This choice contradicts the study's findings.</p>
        <p><strong>(Choice C)</strong> The passage does not suggest that personality traits prevent upward mobility. Instead, it emphasizes structural and resource-based explanations.</p>
        <p><strong>(Choice D)</strong> The passage states that schools in high-income neighborhoods have the most funding, best teachers, and highest graduation rates, whereas schools in low-income neighborhoods face numerous obstacles. This indicates that the education system does not provide equal opportunities.</p>`,
      eo: "Poverty transmission occurs because lower-income families lack economic resources, social connections, and knowledge about the education system (cultural capital), not because they lack motivation or desire for their children to succeed."
    },
    {
      qid: "400087",
      stem: "The third paragraph most directly describes the relationship between poverty and:",
      preopts: "",
      options: [
        { L: "A", text: "Social control", pct: "2%", correct: false },
        { L: "B", text: "Social exclusion", pct: "96%", correct: true },
        { L: "C", text: "False consciousness", pct: "1%", correct: false },
        { L: "D", text: "McDonaldization", pct: "1%", correct: false }
      ],
      stat: "96% answered correctly",
      explanationHtml: `
        <p>Social exclusion occurs when individuals are marginalized to the point of being unable to participate in society economically (eg, earning money, purchasing goods/services), socially (eg, interacting with others), and civically (eg, voting). Social exclusion is tied to many circumstances that are stigmatized in society (eg, mental illness, poverty), although it is unclear whether social exclusion is a cause or a result of such factors.</p>
        <p>The third paragraph, which states that poverty prevents or limits access to productive social activities, such as working, buying goods and services, community and political involvement, and engagement with social networks, most directly describes the relationship between poverty and social exclusion.</p>
        <p><strong>(Choice A)</strong> Social control is the exertion of influence by a group (eg, family, society as a whole) to ensure that the behavior of individuals conforms to that of the group. The third paragraph does not describe the relationship between poverty and social control.</p>
        <p><strong>(Choice C)</strong> False consciousness refers to individuals from lower classes adopting the misleading views of the upper class and therefore accepting the status quo (eg, injustice, exploitation). The third paragraph does not describe the relationship between poverty and false consciousness.</p>
        <p><strong>(Choice D)</strong> McDonaldization describes the process by which extreme efficiency and rationalization produce negative consequences in society (eg, reduced quality of products). The third paragraph does not describe the relationship between poverty and McDonaldization.</p>
        <p class="figwrap"><img src="images/q400087_explanation_social_exclusion.png" alt="Social exclusion: inability to participate economically, socially, and civically"></p>`,
      eo: "Social exclusion is the marginalization of individuals so that they are unable to participate in society economically (through earning or spending money), socially (through interaction with others), or civically (through political or other community engagement)."
    },
    {
      qid: "400088",
      stem: "The conclusion drawn from the longitudinal study described in the final paragraph would be best supported by a follow-up study that found a:",
      preopts: "",
      options: [
        { L: "A", text: "Positive correlation between children's educational attainment and their parents' cultural capital.", pct: "82%", correct: true },
        { L: "B", text: "Positive correlation between parents' educational attainment and their desire to help their children succeed.", pct: "4%", correct: false },
        { L: "C", text: "Negative correlation between children's future earnings and their parents' economic capital.", pct: "7%", correct: false },
        { L: "D", text: "Negative correlation between children's future earnings and their parents' desire to help their children succeed.", pct: "5%", correct: false }
      ],
      stat: "82% answered correctly",
      explanationHtml: `
        <p>Social reproduction refers to the fact that successive generations tend to occupy the same social class (eg, children born into lower social class families tend to occupy a lower social class as adults). Social reproduction occurs because social structures (eg, tax laws) maintain and perpetuate social inequality over time.</p>
        <p>The conclusion by the longitudinal study that the social reproduction of poverty occurs because lower-income parents lack economic resources (ie, economic capital), social connections (ie, social capital), and knowledge about the education system (ie, cultural capital) would best be supported by a follow-up study demonstrating a positive correlation between children's educational attainment and their parents' cultural capital.</p>
        <p>If children whose parents have more knowledge about the education system (cultural capital) achieve higher educational attainment, this would support the study's conclusion that lack of cultural capital contributes to poverty transmission.</p>
        <p><strong>(Choice B)</strong> A positive correlation between parents' educational attainment and their desire to help their children succeed undermines the longitudinal study's conclusion that there was no difference in terms of parents wanting to help their children succeed.</p>
        <p><strong>(Choice C)</strong> A negative correlation between children's future earnings and their parents' economic capital (ie, children from low-income families grow up to earn a high income) undermines social reproduction and does not support the longitudinal study's conclusion.</p>
        <p><strong>(Choice D)</strong> A negative correlation between children's future earnings and their parents' desire to help their children succeed (ie, children who earn a high income as adults had parents who had little desire to help them succeed) undermines the longitudinal study's conclusion that there was no difference in terms of parents wanting to help their children succeed.</p>`,
      eo: "Social reproduction occurs when social class remains unchanged from one generation to the next. Children's outcomes are influenced by their parents' economic capital, social capital, and cultural capital (knowledge about systems like education)."
    }
  ]
};
