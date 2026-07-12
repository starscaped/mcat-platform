window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["health-disparities"] = {
  id: "health-disparities",
  title: "Socioethnic Health Disparities",
  subject: "Behavioral Sciences",
  system: "Demographics and Social Structure",
  difficulty: "Moderate",
  estMinutes: 9,
  passageHtml: `
    <p>Both institutional and interpersonal factors contribute to persistent disparities in health outcomes for minorities in the U.S. In Study 1, researchers sought to categorize the major factors contributing to the disparity by surveying 2,000 African American and 3,000 Hispanic residents in a major metropolitan city. Of those surveyed, 64% met federal guidelines for living at or below the poverty threshold even though 90% of those surveyed were employed. When asked, &quot;What prevents you from going to the doctor?&quot; the most common responses were financial considerations (92%), inability to get time off from work for appointments (85%), lack of transportation (52%), difficulty communicating with the health care provider (51%), and fear/distrust of the health care system (48%).</p>
    <p>Interpersonally, patients tend to fare better when their physician is of their same racial or ethnic background. Study 2 observed all Hispanic patients (n = 110) who visited a clinic in an urban lower-income community over one week. Patients met with either a Hispanic physician (n = 43) or a white, non-Hispanic physician (n = 67). The Hispanic physician saw the patients who visited the clinic on Monday or Tuesday, and the white, non-Hispanic physician saw the patients who visited the clinic on Wednesday, Thursday, or Friday. Both physicians were men who spoke Spanish fluently, had been working at the clinic for 8&ndash;10 years, and were unaware of the study's purpose beforehand. This study collected data on the duration of the face-to-face appointment time with the physician, medication adherence one month after the appointment, and the number of symptoms disclosed to the physician by the patient. Ninety-eight of the patients were already on medication or were prescribed new medication at the time of their appointment, and patients were contacted one month later for assessment of adherence. The results of this study are shown in Figure 1.</p>
    
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;Study 2 outcomes by patient-physician ethnic concordance vs. discordance</p>
    <table class="passage-table">
      <thead>
        <tr>
          <th>Outcome Measure</th>
          <th>Ethnic Discordance (n = 67)</th>
          <th>Ethnic Concordance (n = 43)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Average appointment time</strong> (minutes)</td>
          <td>14</td>
          <td>27</td>
        </tr>
        <tr>
          <td><strong>Medication adherence</strong> (%)</td>
          <td>30%</td>
          <td>48%</td>
        </tr>
        <tr>
          <td><strong>Average symptoms disclosed</strong> (number)</td>
          <td>1.1</td>
          <td>9.2</td>
        </tr>
      </tbody>
    </table>
  `,
  questions: [
    {
      qid: "400058",
      stem: "Racial or ethnic discordance between patient and physician may result in increased distrust by the patient because the physician is a member of:",
      preopts: "",
      options: [
        { L: "A", text: "a primary group.", pct: "2%", correct: false },
        { L: "B", text: "a reference group.", pct: "2%", correct: false },
        { L: "C", text: "a secondary group.", pct: "6%", correct: false },
        { L: "D", text: "an out-group.", pct: "87%", correct: true }
      ],
      stat: "87% answered correctly",
      explanationHtml: `
        <p>In sociology, <strong>in-groups</strong> are those groups to which individuals <strong>feel they belong</strong>, whereas <strong>out-groups</strong> are groups to which individuals <strong>do not feel they belong</strong>. In-groups and out-groups can be defined according to race, gender, religion, age, socioeconomic background, or other criteria.</p>
        <p>People tend to view members of their own in-group more favorably or feel more comfortable when interacting with these members. Alternatively, people tend to view members of the out-group less favorably. In this example, an individual who identifies as Hispanic may view other Hispanic individuals (eg, the Hispanic physician) as trustworthy in-group members and non-Hispanic individuals (eg, the non-Hispanic physician) as untrustworthy out-group members.</p>
        <p><strong>(Choice A)</strong> Primary groups contain members united by an emotional bond. These groups are smaller, more intimate, and form for the sake of interaction (eg, family, close friends).</p>
        <p><strong>(Choice B)</strong> Reference groups are comparison groups to which an individual compares self (eg, an aspiring medical student comparing their MCAT score to accepted students).</p>
        <p><strong>(Choice C)</strong> Secondary groups contain members united for a common purpose, are usually larger, more impersonal, and formed for utilitarian reasons (eg, classmates, coworkers).</p>
      `,
      eo: "In-groups are groups to which an individual identifies and belongs, whereas out-groups are groups to which an individual does not identify or belong. Individuals are more likely to distrust out-group members or view them unfavorably."
    },
    {
      qid: "400059",
      stem: "Which of the following concepts LEAST helps to explain the results of Study 1?",
      preopts: "",
      options: [
        { L: "A", text: "Accessibility disparities", pct: "2%", correct: false },
        { L: "B", text: "Institutional discrimination", pct: "5%", correct: false },
        { L: "C", text: "Meritocracy", pct: "90%", correct: true },
        { L: "D", text: "Relative poverty", pct: "2%", correct: false }
      ],
      stat: "90% answered correctly",
      explanationHtml: `
        <p>The goal of Study 1 was to determine factors underlying health care disparities in African American and Hispanic populations, which included financial considerations, work requirements, lack of transportation, and issues with the physician and/or health care system (eg, difficulty communicating, fear, distrust).</p>
        <p>Many factors contribute to health care disparities, including relative poverty, accessibility issues, and institutional discrimination. Therefore, accessibility disparities, institutional discrimination, and relative poverty are all concepts that <em>do</em> help explain the results of Study 1.</p>
        <p><strong>Meritocracy</strong>, a system in which individual status is based entirely on hard work and ability, <strong>least helps</strong> to explain the results of Study 1. The U.S. is a class system (not a meritocracy), where an individual's status is partly earned through effort/ability and partly determined by the social class into which one is born.</p>
        <p><strong>(Choice A)</strong> Financial limitations, inability to get time off work, lack of transportation, and difficulty communicating with health care providers are examples of accessibility disparities.</p>
        <p><strong>(Choice B)</strong> Communication barriers and fear/distrust of the health care system may be attributed to institutional discrimination: the unfair or unjust treatment of a social group by an institution (eg, the health care system) or by society as a whole.</p>
        <p><strong>(Choice D)</strong> Individuals meeting criteria for relative poverty do not have enough money or resources compared to other members of a society and are unable to meet the standards of living, including routine medical care.</p>
      `,
      eo: "Many factors contribute to health care disparities, including relative poverty, accessibility issues (eg, difficulty communicating, lack of transportation), and institutional discrimination (unjust treatment of a social group)."
    },
    {
      qid: "400060",
      stem: "Most of the participants in Study 1 live in lower-income neighborhoods. Which of the following is NOT a factor in the physical environment that helps explain disparities in health outcomes for these individuals?",
      preopts: "",
      options: [
        { L: "A", text: "Ambient stress", pct: "5%", correct: false },
        { L: "B", text: "Environmental injustice", pct: "3%", correct: false },
        { L: "C", text: "McDonaldization", pct: "89%", correct: true },
        { L: "D", text: "Residential segregation", pct: "1%", correct: false }
      ],
      stat: "89% answered correctly",
      explanationHtml: `
        <p>Factors in the <strong>physical environment</strong> that can impact health include all of the things that an individual might come into physical contact with, particularly at home and at work. For example:</p>
        <ul class="dash">
          <li><strong>Ambient stressors</strong> include anything in the environment that causes a physiologically or psychologically negative reaction such as noise, pollution, bad smells, and flashing lights. Ambient stressors can promote chronically elevated cortisol levels, which have been correlated to poorer health <strong>(Choice A)</strong>.</li>
          <li><strong>Environmental injustice</strong> occurs when lower-income areas are subjected to more environmental risk factors (eg, increased pollution, toxic waste, high-voltage power lines) that negatively impact health <strong>(Choice B)</strong>.</li>
          <li><strong>Residential segregation</strong> occurs when social groups are separated into different neighborhoods, often along racial and ethnic lines. Racial/ethnic residential segregation can impact health outcomes through a geographically unequal distribution of health-compromising factors <strong>(Choice D)</strong>.</li>
        </ul>
        <p><strong>McDonaldization</strong> (a <em>social process</em>, not a physical environment factor) describes when rationalization, the replacement of traditional practices with predictable, logical rules, is valued as the main tenet of society. First used extensively in assembly lines to standardize industrial processes, rationalization was later adopted by fast food restaurants to ensure that all franchises produced similar products, hence the origin of the term &quot;McDonaldization.&quot;</p>
      `,
      eo: "Physical environment factors contributing to health disparities include anything individuals come into contact with that can negatively impact their health, such as ambient stressors (eg, pollution). Environmental injustice and residential segregation both help explain why lower-income groups are disproportionately exposed to environmental health risks."
    },
    {
      qid: "400061",
      stem: "Based on the description of Study 2, which of the following statements identifies a potential methodological error of the study's design?",
      preopts: "",
      options: [
        { L: "A", text: "The physicians were unaware of the study's purpose, which may have resulted in experimenter bias.", pct: "4%", correct: false },
        { L: "B", text: "The physicians were unaware of the study's purpose, which may have resulted in question-order bias.", pct: "6%", correct: false },
        { L: "C", text: "The subjects were not randomly chosen, which may have resulted in sampling bias.", pct: "82%", correct: true },
        { L: "D", text: "The subjects were not randomly chosen, which may have resulted in social desirability bias.", pct: "6%", correct: false }
      ],
      stat: "82% answered correctly",
      explanationHtml: `
        <p>Bias in scientific research occurs when something systematically influences the data. Although many types exist, bias generally falls into one of two categories: bias on the part of the study (eg, experimenter, question-order, sampling) or bias on the part of the subject (eg, social desirability).</p>
        <p><strong>Sampling bias</strong> occurs when <strong>nonrandom subject selection</strong> produces a sample that inaccurately reflects the population from which it was drawn. Random sampling is intended to ensure that anyone in the population is equally likely to be included in the study. A sample that differs from the population of interest will result in conclusions that may not be relevant to the population.</p>
        <p>For Study 2, the subjects were chosen nonrandomly (eg, all Hispanic patients who visited the clinic during a one-week time frame were included in the study), so this sample may differ from the larger population in ways that could impact the study outcomes.</p>
        <p><strong>(Choice A)</strong> Experimenter bias occurs when the study researchers influence the results, often leading to results that confirm expectations. Experimenter bias would not have resulted from the physicians being unaware of the study's purpose.</p>
        <p><strong>(Choice B)</strong> Question-order bias results from the placement of survey or questionnaire questions, the order of which can potentially impact the results.</p>
        <p><strong>(Choice D)</strong> Social desirability bias describes the tendency of research subjects to respond to questions in a way that makes them look better in the eyes of the experimenter. Social desirability bias would not have resulted from a lack of random assignment of subjects.</p>
      `,
      eo: "Sampling bias occurs when certain individuals in a population have a greater chance of being selected for a study than other individuals, producing a sample that inaccurately reflects the population from which it was drawn. Random sampling of study subjects helps reduce sampling bias."
    },
    {
      qid: "400062",
      stem: "Benzodiazepines, often used to treat anxiety, can have adverse and harmful effects when taken for an extended period. Suppose the Hispanic physician in Study 2 has a patient who asks for a refill of her benzodiazepine prescription. He wants to help his patient with her anxiety, but he is also concerned about the extended use of this drug. This scenario best illustrates:",
      preopts: "",
      options: [
        { L: "A", text: "role conflict.", pct: "21%", correct: false },
        { L: "B", text: "role exit.", pct: "2%", correct: false },
        { L: "C", text: "role strain.", pct: "75%", correct: true },
        { L: "D", text: "role taking.", pct: "2%", correct: false }
      ],
      stat: "75% answered correctly",
      explanationHtml: `
        <p><strong>Role strain</strong> occurs when <strong>competing expectations for a single role</strong> cause discomfort or stress. In the physician's role as a doctor, he is expected to help his patient with her symptoms, and he must also consider the potential negative consequences of any drug he prescribes. The stress caused by these competing expectations for <em>one role</em> best illustrates role strain.</p>
        <p><strong>(Choice A)</strong> Role strain is different from role conflict, which occurs when expectations of <strong>different roles</strong> compete in ways that cause stress. For example, if the doctor is also a husband and father, expectations for his role as doctor (eg, working on weekends) may conflict with expectations for his role as parent.</p>
        <p><strong>(Choice B)</strong> Role exit occurs when an individual moves from one role to another, leaving behind the social expectations and characteristics of the original role (eg, when graduating from medical school and becoming a doctor, the individual exits the role of medical student).</p>
        <p><strong>(Choice D)</strong> Role taking, also known as social perspective taking, occurs when individuals act out or take on the roles of others. Role taking does not apply to this scenario.</p>
      `,
      eo: "Role strain occurs when different expectations for a single social role compete in a way that causes tension. Role strain is distinct from role conflict, which occurs when expectations from multiple different roles compete with one another."
    },
    {
      qid: "400063",
      stem: "Which of the following sociological processes best accounts for the persistent disparities in health outcomes for the subjects in Study 1 and Study 2?",
      preopts: "",
      options: [
        { L: "A", text: "Sick role theory", pct: "1%", correct: false },
        { L: "B", text: "Medicalization", pct: "1%", correct: false },
        { L: "C", text: "Socioeconomic gradient in health", pct: "89%", correct: true },
        { L: "D", text: "Social exchange theory", pct: "7%", correct: false }
      ],
      stat: "89% answered correctly",
      explanationHtml: `
        <p>The <strong>socioeconomic gradient in health</strong> is the <strong>positive correlation</strong> between <strong>socioeconomic status (SES) and health outcomes</strong>: Individuals with lower SES tend to have worse health outcomes than those with higher SES, on average.</p>
        <p>Disparities related to SES, including lower income, poorer education, unsafe living environments, increased drug use, unemployment, lack of exercise, and limited access to nutritious food, are thought to contribute to this gradient.</p>
        <p>Both Study 1 and Study 2 investigated disparities in health outcomes for minorities, and the subjects in both studies were of lower SES. Therefore, the socioeconomic gradient in health is the sociological process that <em>best</em> accounts for the persistent disparities in health outcomes for the subjects in Study 1 and Study 2.</p>
        <p><strong>(Choice A)</strong> Sick role theory suggests that illness, as a form of social deviance, includes certain rights (eg, exemption from work) and obligations (eg, seeking medical attention). Sick role theory does not address or explain why there are persistent disparities in health outcomes for certain populations.</p>
        <p><strong>(Choice B)</strong> Medicalization is the process of defining and characterizing a condition/behavior as a medical illness, which can have positive (eg, funding for research) and negative (eg, stigmatization) consequences.</p>
        <p><strong>(Choice D)</strong> Social exchange theory is a microsociological perspective of human interactions, which proposes that any given interaction between people is the result of a calculated effort by all parties to maximize personal benefit and minimize personal cost.</p>
      `,
      eo: "The socioeconomic gradient in health is a positive correlation between socioeconomic status (SES) and health outcomes. On average, individuals with lower SES tend to have worse health outcomes than those with higher SES."
    }
  ]
};
