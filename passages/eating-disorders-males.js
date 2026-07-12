window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["eating-disorders-males"] = {
  id: "eating-disorders-males",
  title: "Eating Disorders and Muscle Dysmorphia in Males",
  subject: "Behavioral Sciences",
  system: "Learning, Memory, and Cognition",
  difficulty: "Moderate",
  estMinutes: 8,
  passageHtml: `
    <p>A common misconception in medicine is that eating disorders present similarly in males and females. Research suggests that this is untrue: males meeting diagnostic criteria for eating disorders are more likely than females to have another psychiatric illness, demonstrate a later age of onset, and engage in excessive exercise. They are less likely to engage in purging behaviors, be diagnosed by clinicians, or seek treatment. When males do enter treatment, they are generally further along in the course of the illness.</p>
    <p>The classification of eating disorders in males according to the <i>Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition</i> (DSM-5) has recently been debated. Research suggests that one very common manifestation of eating disorder etiology in males, called muscle dysmorphia (MD), includes an obsession with a larger and more muscular body, which contrasts with the thin, idealized body for females with eating disorders. Characterized as a subset of body dysmorphic disorder, MD is more recently conceptualized as part of a spectrum of eating disorders; however, it is still classified under the obsessive-compulsive and related disorders umbrella in the DSM-5.</p>
    <p>One study applied the latest DSM-5 diagnostic criteria for anorexia nervosa (AN), bulimia nervosa (BN), binge eating disorder (BED), and MD to the medical records of male veterans treated in Veterans Administration (VA) hospitals across the United States from 2000 to 2015. The study found a significant increase in psychiatric comorbidity compared to controls (C).</p>
    <p><strong>Table 1: Prevalence of Psychiatric Disorders for Eating Disorder and MD Cases and Controls in Male Veterans</strong></p>
    <table class="table">
      <thead>
        <tr>
          <th>Comorbid psychiatric diagnosis</th>
          <th>AN (n=20)</th>
          <th>BN (n=14)</th>
          <th>BED (n=22)</th>
          <th>MD (n=36)</th>
          <th>C (n=92)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Depressive disorders</td>
          <td>35%</td>
          <td>70%</td>
          <td>50%</td>
          <td>32%</td>
          <td>8%</td>
        </tr>
        <tr>
          <td>Anxiety disorders</td>
          <td>21%</td>
          <td>23%</td>
          <td>22%</td>
          <td>20%</td>
          <td>12%</td>
        </tr>
        <tr>
          <td>Substance use & addictive disorders</td>
          <td>35%</td>
          <td>60%</td>
          <td>30%</td>
          <td>49%</td>
          <td>12%</td>
        </tr>
        <tr>
          <td>Alcohol abuse/dependence</td>
          <td>30%</td>
          <td>40%</td>
          <td>24%</td>
          <td>22%</td>
          <td>9%</td>
        </tr>
        <tr>
          <td>Drug abuse/dependence</td>
          <td>15%</td>
          <td>25%</td>
          <td>25%</td>
          <td>44%</td>
          <td>3%</td>
        </tr>
        <tr>
          <td>Schizophrenia spectrum/psychotic disorders</td>
          <td>35%</td>
          <td>22%</td>
          <td>20%</td>
          <td>25%</td>
          <td>10%</td>
        </tr>
      </tbody>
    </table>
  `,
  questions: [
    {
      qid: "400177",
      stem: "The DSM-5 describes AN as characterized by a distorted body image and excessive food restriction leading to severe weight loss. How would a behaviorist explain the behavior of an individual diagnosed with AN?",
      preopts: "",
      options: [
        { L: "A", text: "The eating behavior is evidence of a biochemical imbalance in the dopamine reward system in the brain.", pct: "2%", correct: false },
        { L: "B", text: "Positive attention from others for initially losing weight motivates the individual to want to lose more weight.", pct: "58%", correct: true },
        { L: "C", text: "The individual is behaving in a way to attain the \"thin ideal\" portrayed by celebrities in the media.", pct: "20%", correct: false },
        { L: "D", text: "The individual most likely has a close friend or family member with an eating disorder and is imitating that behavior.", pct: "18%", correct: false }
      ],
      stat: "57% answered correctly",
      explanationHtml: `
        <p><strong>Behaviorism</strong> is a theory in psychology that focuses on the role the <strong>environment</strong> plays in shaping human behavior. Specifically, behaviorism focuses on how <strong>reinforcement and punishment</strong> shape human behavior.</p>
        <p><strong>Reinforcement</strong> is anything that <strong>increases the likelihood</strong> of the behavior happening again. For example, positive attention for losing weight would reinforce that behavior and make it more likely the individual will lose more weight. <strong>Punishment</strong> is anything that <strong>decreases the likelihood</strong> of a behavior happening again.</p>
        <p>Although positive attention for losing weight might initially reinforce the behaviors (eg, food restriction) associated with that weight loss, additional weight loss can become a self-reinforcing cycle in which an individual no longer needs external reinforcement and the weight loss itself is reinforcing.</p>
        <p><strong>(Choice A)</strong> A behaviorist approach is more likely to be focused on environmental factors influencing behavior whereas a biological approach is more likely to consider biochemical factors (such as dopamine reward imbalances).</p>
        <p><strong>(Choice C)</strong> A behaviorist might consider the role of idealized body types portrayed in the media and societal standards of beauty but would be more concerned with the direct reinforcements and punishments that shape individual behavior.</p>
        <p><strong>(Choice D)</strong> A social learning theorist (not a behaviorist) is more likely to suggest that individuals with AN have close friends or family members whose behavior they are imitating. Social learning theory suggests that behavior is shaped through social interaction, imitation, and modeling, and can occur in the absence of direct reinforcement.</p>
      `,
      eo: "Behaviorism focuses on how an individual's behavior is shaped by the environment, particularly through reinforcement and punishment. Reinforcement tends to increase the likelihood of the behavior happening again whereas punishment decreases the likelihood of the behavior happening again."
    },
    {
      qid: "400178",
      stem: "Which is least applicable to a diagnosis of MD?",
      preopts: "",
      options: [
        { L: "A", text: "Persistent, intrusive, and repetitive thoughts or urges", pct: "4%", correct: false },
        { L: "B", text: "Physical behaviors that help reduce anxiety", pct: "23%", correct: false },
        { L: "C", text: "Excessive, repetitive behaviors", pct: "3%", correct: false },
        { L: "D", text: "Obsession with losing weight", pct: "69%", correct: true }
      ],
      stat: "69% answered correctly",
      explanationHtml: `
        <p>The passage states that MD is currently classified under the umbrella of <strong>obsessive-compulsive disorder (OCD) and related disorders</strong> under body dysmorphic disorder. OCD and related disorders are characterized by recurrent <strong>obsessions</strong>, which induce anxiety, and <strong>compulsions</strong>, which are used to relieve anxiety.</p>
        <p><strong>Obsessions</strong> are persistent, intrusive, and repetitive thoughts and urges (Choice A). For example, obsessions for an individual with body dysmorphia might include persistent thoughts about being too small. <strong>Compulsions</strong> are excessive, repetitive behaviors that reduce anxiety (Choices B and C). The obsessions and compulsions are significantly time-consuming, interfering with a person's daily routine, social, or work functioning.</p>
        <p>For example, a compulsion for an individual with body dysmorphia might include weightlifting at the gym for more than 4 hours a day to relieve anxiety associated with repetitive thoughts about being too small. MD involves an "obsession with a larger and more muscular body." Therefore, an <strong>obsession with losing weight is the least applicable</strong> to a diagnosis of MD.</p>
      `,
      eo: "OCD and related disorders are characterized by obsessions (recurrent, persistent, unwelcome, intrusive, distressing thoughts or urges) and/or compulsions (repetitive behaviors or mental acts meant to neutralize obsessions)."
    },
    {
      qid: "400179",
      stem: "A proponent of the biopsychosocial approach to mental illness would likely consider which of the following as factors contributing to the development of an eating disorder?\n\nI. Images seen on television and social media\nII. Variations in hormones such as leptin and cortisol\nIII. Co-occurring mental illnesses",
      preopts: "",
      options: [
        { L: "A", text: "I only", pct: "1%", correct: false },
        { L: "B", text: "I and III only", pct: "3%", correct: false },
        { L: "C", text: "II and III only", pct: "7%", correct: false },
        { L: "D", text: "I, II, and III", pct: "88%", correct: true }
      ],
      stat: "88% answered correctly",
      explanationHtml: `
        <p>Proponents of the <strong>biopsychosocial model</strong> of mental illness assert that mental illness results from the <strong>interaction between biological factors, psychological factors, and social factors</strong>.</p>
        <ul>
          <li><strong>Social factors (I)</strong> that might influence the development of mental illness include the social and cultural context in which an individual lives as well as specific factors such as socioeconomic status, family dynamics, peer groups, and major life events. Images portrayed in the media (television, social media) are social factors that could influence the development of an eating disorder.</li>
          <li><strong>Biological factors (II)</strong> that might influence the development of mental illness include genetic predisposition, hormones (such as leptin and cortisol), neurotransmitters, anatomy, and physiology.</li>
          <li><strong>Psychological factors (III)</strong> that might influence the development of mental illness include personality characteristics (eg, self-efficacy, negative thought patterns) and co-occurring mental illnesses (such as depression or anxiety).</li>
        </ul>
        <p>In contrast to the biopsychosocial approach to mental illness, the <i>biomedical approach</i> conceptualizes mental illness as directly resulting from chemical imbalances in the brain. The biomedical perspective emphasizes the use of pharmacological therapy to correct these imbalances.</p>
      `,
      eo: "The biopsychosocial model of mental illness suggests that mental illness is the result of interaction between biological factors, psychological factors, and social factors. This differs from the biomedical model, which suggests that mental illness is caused directly by chemical imbalances in the brain."
    },
    {
      qid: "400180",
      stem: "Which of the following hypothetical findings from a follow-up study evaluating eating disorders in males is most consistent with the data presented in Table 1?",
      preopts: "",
      options: [
        { L: "A", text: "The proportion of males diagnosed with MD was roughly equivalent to the proportion of females diagnosed with AN.", pct: "2%", correct: false },
        { L: "B", text: "Half of the individuals who met the diagnostic criteria for BED also met the criteria for BN within the past year.", pct: "11%", correct: false },
        { L: "C", text: "Individuals diagnosed with BED were less likely to also meet criteria for depression than individuals diagnosed with AN.", pct: "4%", correct: false },
        { L: "D", text: "Individuals meeting diagnostic criteria for MD were more likely to abuse anabolic steroids than those meeting diagnostic criteria for any other eating disorder.", pct: "81%", correct: true }
      ],
      stat: "80% answered correctly",
      explanationHtml: `
        <p>Table 1 compares comorbid psychiatric diagnoses (ie, diagnoses that are present simultaneously in one individual) among groups of people diagnosed with eating disorders (AN, BN, and BED) and MD.</p>
        <p>According to Table 1, <strong>44% of the 36 cases that met diagnostic criteria for MD also met criteria for drug abuse/dependence</strong>, which <strong>exceeded</strong> the proportion of AN (15%), BN (25%), and BED (25%) cases that also met criteria for drug abuse/dependence.</p>
        <p>Anabolic steroids are categorized under drugs of abuse. Therefore, the hypothetical finding that individuals with MD were more likely to abuse anabolic steroids than those with any other of the studied disorders is <strong>most consistent</strong> with the data presented in Table 1.</p>
        <p><strong>(Choice A)</strong> The study described in the passage was conducted using a sample of male veterans; therefore, conclusions about relative proportions of males and females diagnosed with eating disorders are not consistent with Table 1 data.</p>
        <p><strong>(Choice B)</strong> Table 1 does not provide any information about individuals who may have met diagnostic criteria for more than one eating disorder; therefore, the finding that those with BED also met the criteria for BN within the past year is not consistent with Table 1 data.</p>
        <p><strong>(Choice C)</strong> Table 1 suggests that individuals meeting criteria for BED were <i>more likely</i> to also meet criteria for depression (50%) than were those with AN (35%), which contradicts this choice.</p>
      `,
      eo: "To support findings from another study, data need not report exactly the same findings; rather, results from the first study should align with results from the second."
    },
    {
      qid: "400181",
      stem: "A physician suspects that a young woman seen in the clinic displays symptoms of an eating disorder. Which of the following responses best demonstrates the ego defense mechanism of rationalization in the patient?",
      preopts: "",
      options: [
        { L: "A", text: "The patient states that she writes in her journal or calls a friend whenever she gets the urge to binge and purge.", pct: "3%", correct: false },
        { L: "B", text: "The patient states that she sometimes skips breakfast and lunch but only when she is planning a big dinner.", pct: "73%", correct: true },
        { L: "C", text: "The patient insists that she does not recall any binging or purging episodes, although her mother states that they occur frequently.", pct: "13%", correct: false },
        { L: "D", text: "The patient expresses concern that several of her classmates engage in unhealthy eating patterns and purging behaviors.", pct: "9%", correct: false }
      ],
      stat: "72% answered correctly",
      explanationHtml: `
        <p>According to psychoanalytic theory, <strong>ego defense mechanisms</strong> are an unconscious way to deal with the anxiety caused by unacceptable urges and thoughts. Ego defense mechanisms were first proposed by Sigmund Freud and later expanded on by other psychoanalytic theorists. Common mechanisms include denial, repression, rationalization, projection, and sublimation.</p>
        <p><strong>Rationalization</strong> occurs when an individual <strong>unconsciously generates an acceptable excuse for an unacceptable behavior or thought</strong>. For example, skipping meals is not a normal or healthy behavior; the patient using this defense mechanism is rationalizing the behavior by telling herself that she is doing it for an acceptable reason ("planning a big dinner").</p>
        <p><strong>(Choice A)</strong> <i>Sublimation</i> involves turning unacceptable thoughts or behaviors into productive, acceptable ones. Writing in a journal when feeling the urge to binge and purge is using sublimation.</p>
        <p><strong>(Choice C)</strong> <i>Repression</i> involves an inability to consciously recall unacceptable thoughts or behaviors. Being unable to remember engaging in binging behaviors is using repression.</p>
        <p><strong>(Choice D)</strong> <i>Projection</i> involves the attribution of one's own unacceptable thoughts and behaviors to another person or group. Focusing on classmates' unhealthy eating patterns instead of her own is using projection.</p>
      `,
      eo: "Psychoanalytic theory suggests that ego defense mechanisms are a method of dealing with unacceptable thoughts and behaviors that cause anxiety. Rationalization is an ego defense mechanism in which an individual generates an acceptable excuse for an unacceptable behavior or thought."
    },
    {
      qid: "400182",
      stem: "The most appropriate control subjects for the study described in the final paragraph would be:",
      preopts: "",
      options: [
        { L: "A", text: "males who have never been diagnosed with an eating disorder.", pct: "80%", correct: true },
        { L: "B", text: "males who have never been treated for an eating disorder.", pct: "16%", correct: false },
        { L: "C", text: "females who have never been diagnosed with an eating disorder.", pct: "1%", correct: false },
        { L: "D", text: "females who have never been treated for an eating disorder.", pct: "3%", correct: false }
      ],
      stat: "80% answered correctly",
      explanationHtml: `
        <p><strong>Control subjects</strong> provide a comparison group in experiments. The control subjects should be <strong>as similar as possible</strong> to the subjects of interest, <strong>except for the causal (independent) variable</strong> being studied. For example, in clinical trials controls are demographically similar to the treatment subjects but do not receive any active treatment.</p>
        <p>This study sought to determine whether a previous diagnosis of an eating disorder would predict other comorbid psychological disorders. The most appropriate control subjects should be similar to other subjects except with regard to the variable being studied (eating disorders). Therefore, the most appropriate control subjects for this study are males who have never been diagnosed with an eating disorder.</p>
        <p><strong>(Choice B)</strong> If the study sought to look at the rates of comorbidity for males who had and had not received <i>treatment</i> for their eating disorder, then males who had never been treated would be a good comparison group.</p>
        <p><strong>(Choices C and D)</strong> Comparing males with eating disorders to females who have never been diagnosed or treated would not be an effective comparison because two significant variables (sex and diagnosis) would differ between the groups simultaneously, confounding the results.</p>
      `,
      eo: "Control subjects provide a useful comparison to the subjects of interest in a study. Control subjects should be as similar as possible to the treatment subjects, except for the variable of interest."
    }
  ]
};
