window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["psychophysiology-distraction"] = {
  id: "psychophysiology-distraction",
  title: "Psychophysiology and Distraction",
  subject: "Behavioral Sciences",
  system: "Sensation, Perception, and Consciousness",
  difficulty: "Moderate",
  estMinutes: 7,
  passageHtml: `
    <p>Psychophysiology examines the relationship between the properties of a physical stimulus (eg, amplitude of sound waves) and how we perceive that stimulus (eg, loudness). However, this relationship is often accompanied by a degree of uncertainty as the stimulus of interest, or <i>signal</i>, can be confounded by various sources of <i>noise</i>. Noise can be either external (arising from the environment) or internal (arising from physiological sources).</p>
    <p>To investigate the effect of distraction on auditory perception, researchers tested the ability of subjects to detect auditory tones presented during a visual-memory task. The study included 90 participants age 18–65, and each participant completed 10 trials. Trials consisted of five 800-Hz tones presented randomly while participants viewed a set of 15 sequential pictures of common objects on a computer screen. The objects fell into one of three categories: animals, vehicles, or things that make noise. Half the participants were asked to memorize as many objects as they could (<i>objects group</i>), and half were asked to remember only the categories of objects they saw (<i>categories group</i>). Tones were presented bilaterally within a range of 0–20 dB. Participants noted when they detected a tone during the trial by pressing a button. Results of the study are shown in Figure 1.</p>
    <p><strong>Figure 1</strong> Mean percentage of tones correctly identified in each visual-memory task group (Note: Error bars indicate 95% confidence intervals.)</p>
  `,
  questions: [
    {
      qid: "400226",
      stem: "Researchers noticed that participants were more likely to erroneously report hearing a tone when viewing a picture of an object that produces a tone-like sound, such as a telephone or a bell. What type of processing best explains why this mistake might occur?",
      preopts: "",
      options: [
        { L: "A", text: "Bottom-up processing", pct: "10%", correct: false },
        { L: "B", text: "Parallel processing", pct: "32%", correct: false },
        { L: "C", text: "Serial processing", pct: "4%", correct: false },
        { L: "D", text: "Top-down processing", pct: "52%", correct: true }
      ],
      stat: "51% answered correctly",
      explanationHtml: `
        <p><strong>Top-down processing</strong>, or conceptually driven processing, is <strong>guided by information, beliefs, or ideas already stored in our brain</strong>. A mental association between objects that usually make sound, such as a telephone or a bell, may cause subjects to mistakenly believe they hear a tone even when none is present.</p>
        <p>Top-down processing can involve context as well as motivations. For instance, when studying a physics textbook (context), a student may interpret a seesaw in the context of its mechanics. When shown ambiguous images, subjects who are hungry (motivation) may be more likely to interpret them as images of food.</p>
        <p>Top-down processing often moves from general to specific, or "big picture" (our abstract ideas) to details. This is distinct from <strong>bottom-up processing</strong>, or stimulus-driven processing, which is guided by <strong>incoming data</strong>, often sensory information (Choice A).</p>
        <p><strong>(Choice B)</strong> Parallel processing refers to processing multiple sources of information that occur simultaneously, such as perceiving auditory and visual events together when watching someone talk.</p>
        <p><strong>(Choice C)</strong> Serial processing refers to processing one piece of information at a time, such as memorizing a list item by item.</p>
      `,
      eo: "Top-down processing is guided by ideas, beliefs, and expectations from prior experience. Bottom-up processing is guided by sensory input."
    },
    {
      qid: "400227",
      stem: "Which psychophysiology concept determines how high the volume of the tone must be for participants to detect it roughly half the time?",
      preopts: "",
      options: [
        { L: "A", text: "Absolute threshold", pct: "64%", correct: true },
        { L: "B", text: "Difference threshold", pct: "10%", correct: false },
        { L: "C", text: "Just noticeable difference", pct: "23%", correct: false },
        { L: "D", text: "Sensory adaptation", pct: "1%", correct: false }
      ],
      stat: "65% answered correctly",
      explanationHtml: `
        <p>Perceptual threshold refers to the strength of a stimulus at which one can detect its presence or a change in its intensity. The <strong>absolute threshold</strong> is the intensity value at which an individual is able to <strong>detect the stimulus 50% of the time</strong>. In this example, that threshold is the tone volume at which a participant can detect the tone about half the time.</p>
        <p>The absolute threshold can be applied to other sensations and perceptions, and usually will be of a similar value among different individuals. For instance, the absolute threshold for tasting sweetness is equivalent to the concentration of sugar resulting from 1 teaspoon dissolved in 2 gallons of water, and a given individual should be able to detect this sweetness about half the time. Stimuli presented at intensities above the absolute threshold value are more likely to be detected, and intensities presented below the absolute threshold are more likely to be missed.</p>
        <p><strong>(Choices B and C)</strong> Difference threshold and just noticeable difference are equivalent concepts: The smallest difference between two stimuli that a person can detect 50% of the time is called the difference threshold, or just noticeable difference.</p>
        <p><strong>(Choice D)</strong> Sensory adaptation occurs when an individual's sensory receptors adapt to the presence of a stimulus. For example, when you first put on your wristwatch in the morning, you notice it against your skin but within a few minutes, you completely forget it is there.</p>
      `,
      eo: "Threshold refers to the strength of a stimulus required to detect its presence or a change in its intensity. The absolute threshold is the smallest value of a stimulus intensity at which the stimulus will be just detectable 50% of the time."
    },
    {
      qid: "400228",
      stem: "Using the principles of signal detection theory, researchers likely hypothesized that:",
      preopts: "",
      options: [
        { L: "A", text: "subjects in the categories group would have more false positives than those in the objects group.", pct: "19%", correct: false },
        { L: "B", text: "subjects in the categories group would have more correct detections than those in the objects group.", pct: "70%", correct: true },
        { L: "C", text: "subjects in the categories group would have more false negatives than those in the objects group.", pct: "5%", correct: false },
        { L: "D", text: "subjects in the objects group would have more correct rejections than those in the categories group.", pct: "3%", correct: false }
      ],
      stat: "71% answered correctly",
      explanationHtml: `
        <p><strong>Signal detection theory</strong> quantifies how judgments or decisions are made under <strong>uncertain conditions amid "noise"</strong> (external or internal distractions). This theory describes four possible outcomes:</p>
        <ul>
          <li><strong>Correct detection (hit):</strong> When a signal is correctly perceived as present.</li>
          <li><strong>False negative (miss):</strong> When a signal is not detected even though it is present.</li>
          <li><strong>False positive:</strong> When a signal is absent but a perception is erroneously reported.</li>
          <li><strong>Correct rejection:</strong> When the signal is absent and is accurately judged absent.</li>
        </ul>
        <p>In the study, the signal to be detected is the auditory tone. The visual-memory task is a distraction that provides both external noise (distracting visual stimulus) and internal noise (cognitive processing). The researchers likely predicted that those in the categories group would detect more tones than those in the objects group because their assignment was easier and required less focus. Stated another way, researchers hypothesized that the <strong>categories group would correctly identify tones more often (more correct detections / hits)</strong>.</p>
        <p><strong>(Choice A)</strong> The researchers are unlikely to predict that those in the categories group (easier assignment) would report hearing a tone when it was not present (false positive) more often than would those in the objects group (harder assignment).</p>
        <p><strong>(Choice C)</strong> The researchers are unlikely to predict that those in the categories group would miss a tone when it was present (false negative) more often than would those in the objects group.</p>
        <p><strong>(Choice D)</strong> The researchers are unlikely to predict that those in the objects group would correctly report not hearing a tone when it was not present (correct rejection) more often than would those in the categories group.</p>
      `,
      eo: "Signal detection theory quantifies how decisions are made amid noise (distractions). The theory includes four possible outcomes: correct detection (signal present and correctly detected), false negative (signal present but not detected), false positive (signal absent but incorrectly detected), or correct rejection (signal absent and correctly determined to be absent)."
    },
    {
      qid: "400229",
      stem: "If the researchers first wanted to determine each subject's absolute threshold for tone detection in the presence of external white noise, which of the following would accurately represent the variables for such an assessment?",
      preopts: "",
      options: [
        { L: "A", text: "Tone volume (independent variable) and percent tones missed (dependent variable)", pct: "5%", correct: false },
        { L: "B", text: "Percent tones missed (independent variable) and white noise volume (dependent variable)", pct: "1%", correct: false },
        { L: "C", text: "Tone volume (independent variable) and percent tones detected (dependent variable)", pct: "83%", correct: true },
        { L: "D", text: "Percent tones detected (independent variable) and white noise volume (dependent variable)", pct: "9%", correct: false }
      ],
      stat: "83% answered correctly",
      explanationHtml: `
        <p>The <strong>absolute threshold</strong> describes the intensity at which a <strong>stimulus is detected approximately 50% of the time</strong>. To determine the absolute threshold, researchers must vary the <i>intensity</i> of the stimulus and then measure <i>how often</i> the stimulus is detected.</p>
        <p>To determine the absolute threshold needed to detect a tone in the presence of external white noise, the researchers would assess the stimulus of interest (the tone) by varying the intensity of its volume (<strong>independent variable, x-axis</strong>) and then measuring how often the tone is detected (<strong>dependent variable, y-axis</strong>).</p>
        <p><strong>(Choice A)</strong> When determining the absolute threshold, the percentage of tones <i>detected</i> (not missed) is typically used as the primary dependent variable of interest to trace the standard threshold curve.</p>
        <p><strong>(Choices B and D)</strong> Assessing white noise volume as a dependent variable is incorrect. The volume of the <i>tone</i> (not the external distractor, the white noise) must be varied to determine the absolute threshold of detection.</p>
      `,
      eo: "The absolute threshold, or the intensity needed to detect a stimulus half the time, can be determined by varying the stimulus intensity (independent variable) and measuring the percentage of time the stimulus is correctly detected (dependent variable)."
    },
    {
      qid: "400230",
      stem: "Which of the following conclusions can be drawn from the study as it is described in the passage?",
      preopts: "",
      options: [
        { L: "A", text: "Age is not related to the ability to detect auditory tones.", pct: "2%", correct: false },
        { L: "B", text: "Remembering the names of objects is more difficult than remembering the categories of objects.", pct: "13%", correct: false },
        { L: "C", text: "There is not sufficient evidence to establish a significant difference in the correct detection of tones between the two groups.", pct: "72%", correct: true },
        { L: "D", text: "The categories group is significantly better at correctly detecting tones than the objects group.", pct: "11%", correct: false }
      ],
      stat: "71% answered correctly",
      explanationHtml: `
        <p>Error bars may represent several types of statistics, such as confidence intervals (CIs), standard deviations, or standard errors. The interpretation of the error bar depends on which statistic is depicted.</p>
        <p>CIs (shown in Figure 1) represent a measure of uncertainty in a reported value. A 95% CI indicates that if the same population were sampled countless times and CIs were calculated each time, the resulting intervals would contain the <i>true</i> population value in approximately 95% of the cases.</p>
        <p>Although the mean percent detection calculated for the categories group was greater than that calculated for the objects group, the <strong>95% confidence intervals for the two experimental groups are shown to overlap</strong>, implying that the difference <strong>may or may not be statistically significant</strong>. Nonoverlapping CIs always imply a statistically significant difference between groups, but overlapping CIs mean there is not sufficient evidence to confirm a significant difference.</p>
        <p><strong>(Choice A)</strong> Although participants did span a wide age range (18–65), the researchers did not analyze or report a relationship between age and tone detection in this study.</p>
        <p><strong>(Choice B)</strong> No conclusions can be drawn about the difficulty of the two memory tasks as this was not directly measured or compared in the experiment.</p>
        <p><strong>(Choice D)</strong> Because the error bars overlap, the categories group is <i>not</i> shown to be significantly better than the objects group.</p>
      `,
      eo: "Overlapping confidence intervals indicate that the difference between groups may or may not be statistically significant."
    }
  ]
};
