window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["sleep-memory-consolidation"] = {
  id: "sleep-memory-consolidation",
  title: "Sleep and Memory Consolidation",
  subject: "Behavioral Sciences",
  system: "Learning, Memory, and Cognition",
  difficulty: "Moderate",
  estMinutes: 8,
  passageHtml: `
    <p>Before memories have been consolidated they are considered "labile," or unstable and easily altered. Sleep is theorized to be essential to the process of memory consolidation, though the mechanisms for this are still under investigation. Rapid eye movement (REM) sleep has long been assumed to be the sleep stage most important for overall memory consolidation, but recent research suggests that different types of memory may be consolidated during different sleep stages. Procedural memories appear to be primarily consolidated during REM sleep while declarative memories appear to be primarily consolidated during slow-wave sleep (SWS). Sleep duration, sleep regularity, and timing of sleep all contribute to the proportions of REM and SWS, so these factors also play an important role in memory consolidation processes.</p>
    <p>An experiment was performed at a large state university to investigate the relationship between sleep and learning in college students. Researchers screened potential participants with a sleep habits questionnaire. Those who reported having a regular sleep schedule were included in the study (N = 100) and given a vocabulary knowledge pretest. Participants were then randomly assigned to 1 of 4 experimental groups, each containing 25 students. During the learning phase (L), each student was asked to memorize a set of 10 common toy objects (eg, car, ball, stuffed animal, blocks) and 10 vocabulary definitions that the student had labeled as "unknown" during the pretest. Images of the toy objects were presented in a sequence, one at a time, for 5 seconds each; the 10 vocabulary definitions were listed on a sheet that students were allowed to study for 10 minutes. During the testing phase (T), students were asked to recall the objects in any order and define the vocabulary words (Figure 1).</p>
    <p><strong>Figure 1</strong> Experimental design for each of the 4 groups (where L = Learning phase, T = Testing phase, with sleep intervals controlled between phases)</p>
    <p>Results were reported as the average recall accuracy for the objects and vocabulary definitions, by group (Table 1). Participants were then given a survey about the techniques they used when attempting to remember the toy objects and vocabulary definitions. Some students reported associating the definitions and objects with one another. For instance, one student reported that she related the words "plucky" (meaning brave) and "tocsin" (meaning an alarm) to an image of a toy fire truck, making it easier to recall the toy object and both associated vocabulary definitions.</p>
    <p><strong>Table 1: Experimental Intervals and Average Recall Accuracy, per Group</strong></p>
    <table class="table">
      <thead>
        <tr>
          <th>Group</th>
          <th>Learning-sleeping interval (hrs)</th>
          <th>Learning-testing interval (hrs)</th>
          <th>Sleeping-testing interval (hrs)</th>
          <th>Avg. object recall accuracy (%)</th>
          <th>Avg. vocab. recall accuracy (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>I</td>
          <td>8</td>
          <td>18</td>
          <td>2</td>
          <td>52%</td>
          <td>42%</td>
        </tr>
        <tr>
          <td>II</td>
          <td>2</td>
          <td>12</td>
          <td>2</td>
          <td>69%</td>
          <td>60%</td>
        </tr>
        <tr>
          <td>III</td>
          <td>8</td>
          <td>24</td>
          <td>8</td>
          <td>44%</td>
          <td>35%</td>
        </tr>
        <tr>
          <td>IV</td>
          <td>2</td>
          <td>18</td>
          <td>8</td>
          <td>64%</td>
          <td>52%</td>
        </tr>
      </tbody>
    </table>
  `,
  questions: [
    {
      qid: "400171",
      stem: "The recall of which of the following should be most subject to serial position effects?",
      preopts: "",
      options: [
        { L: "A", text: "The vocabulary words presented at the beginning and the end of the list", pct: "15%", correct: false },
        { L: "B", text: "The toy objects presented at the beginning and the end of the sequence", pct: "65%", correct: true },
        { L: "C", text: "The vocabulary words that were the most familiar to the subjects", pct: "10%", correct: false },
        { L: "D", text: "The toy objects to which the subjects had a personal connection", pct: "10%", correct: false }
      ],
      stat: "65% answered correctly",
      explanationHtml: `
        <p>The <strong>serial position effect</strong> describes the tendency to recall the first (<strong>primacy effect</strong>) and last (<strong>recency effect</strong>) items in a list more accurately than the middle items. This effect is most prominent when items are presented <strong>sequentially, one at a time</strong>.</p>
        <p>In this study, the <strong>toy objects</strong> were presented in a sequence, one at a time, for 5 seconds each. Therefore, their recall is highly subject to serial position effects, where items shown at the beginning and end of the sequence are remembered better than those in the middle.</p>
        <p><strong>(Choice A)</strong> Although the vocabulary words are a list, they were listed together on a sheet and studied all at once for 10 minutes (not sequentially presented one at a time). Thus, they are less subject to the classic serial position effect.</p>
        <p><strong>(Choices C and D)</strong> Familiarity and personal connections are factors in semantic and autobiographical memory, but they do not define the structural serial position effect, which depends strictly on presentation order.</p>
      `,
      eo: "The serial position effect (comprising primacy and recency effects) describes how the order of sequentially presented items affects recall, with items at the beginning and end of a sequence being recalled best."
    },
    {
      qid: "400172",
      stem: "If the students who related the toy objects and definitions to each other had higher-than-average recall scores, to which of the following might this be attributed?\n\nI. Spreading activation\nII. Semantic networks\nIII. Source monitoring",
      preopts: "",
      options: [
        { L: "A", text: "I only", pct: "4%", correct: false },
        { L: "B", text: "II only", pct: "14%", correct: false },
        { L: "C", text: "III only", pct: "1%", correct: false },
        { L: "D", text: "I and II only", pct: "78%", correct: true }
      ],
      stat: "78% answered correctly",
      explanationHtml: `
        <p><strong>Semantic long-term memory</strong> appears to be organized as a <strong>network of interconnected nodes</strong> containing factual concepts (eg, colors, objects). The organization and relationship between nodes (how linked or connected they are in memory) is unique to each individual.</p>
        <p><strong>(Number I)</strong> The <strong>spreading activation model</strong> suggests that when a node in the semantic network is activated (eg, viewing a picture of a toy fire engine), nodes directly connected to that node (eg, firefighter, alarm) are activated as well, which is known as <strong>priming</strong>. Spreading activation could account for better recall when students related the toy objects and definitions to each other.</p>
        <p><strong>(Number II)</strong> Each individual has a uniquely organized <strong>semantic network</strong> according to the personal meaning associated with each node. It tends to be <i>easier</i> to recall information that is semantically relevant (ie, meaningful). Therefore, better recall for students who related the toy objects and definitions to each other may be attributable to the use of semantic networks.</p>
        <p><strong>(Number III)</strong> <strong>Source monitoring</strong> refers to errors that occur when an individual incorrectly attributes a memory to the wrong source. Source monitoring errors do not explain why those students who related the toy objects and definitions to each other had higher-than-average recall scores.</p>
      `,
      eo: "Semantic long-term memory is thought to be stored as a network of interconnected concepts (nodes) in a semantic (meaning-based) network. Spreading activation suggests that when a node in the semantic network is activated, the nodes directly connected to that node are then activated as well (ie, priming)."
    },
    {
      qid: "400173",
      stem: "Which of the following, had it occurred, would be the best example of the social desirability bias in this study?",
      preopts: "",
      options: [
        { L: "A", text: "Researchers subconsciously allowed Group II to view the toys slightly longer than the other groups.", pct: "8%", correct: false },
        { L: "B", text: "Researchers selected only college students with regular 10 pm–6 am sleep schedules to participate.", pct: "14%", correct: false },
        { L: "C", text: "Some participants reported using their typical strategy for vocabulary memorization in this task.", pct: "2%", correct: false },
        { L: "D", text: "Some participants did not disclose that they stayed out past 10 pm the night of the experiment.", pct: "74%", correct: true }
      ],
      stat: "74% answered correctly",
      explanationHtml: `
        <p>Bias in scientific research occurs when something that is not accounted for or held constant influences the data. Bias generally falls into 2 categories: bias on the part of the study (eg, experimenter bias, sampling bias) or bias on the part of the subjects (eg, social desirability bias, response bias).</p>
        <p><strong>Social desirability bias</strong> describes the <strong>tendency of research participants to provide the most favorable or socially acceptable responses</strong> to research questions. In other words, participants may overemphasize positive behaviors (eg, studying) while downplaying or underreporting undesirable behaviors (eg, consuming alcohol or breaking experimental protocols).</p>
        <p>Participants who had stayed out past the time they reported going to sleep would be responding so as to seem like ideal participants, which is a prime example of possible social desirability bias in this study.</p>
        <p><strong>(Choice A)</strong> <i>Experimenter bias</i> occurs when researchers deliberately or inadvertently influence the results. Often, this bias leads to results that confirm what the researcher was expecting.</p>
        <p><strong>(Choice B)</strong> <i>Sampling bias</i> occurs when study participants are recruited from a population nonrandomly, often resulting in a nonrepresentative sample.</p>
        <p><strong>(Choice C)</strong> <i>Mental set</i> describes the inclination to use old methods to solve new problems, even when those methods are not appropriate for the current problem.</p>
      `,
      eo: "Social desirability bias describes the tendency of research participants to provide the most favorable or socially acceptable responses to research questions. Participants may overemphasize positive behaviors while downplaying or underreporting undesirable behaviors."
    },
    {
      qid: "400174",
      stem: "Which conclusion is LEAST supported by the data in Table 1?",
      preopts: "",
      options: [
        { L: "A", text: "A shorter time interval between learning and testing results in a greater amount of recall.", pct: "4%", correct: false },
        { L: "B", text: "When sleep occurs shortly after learning, memory consolidation appears to be enhanced.", pct: "5%", correct: false },
        { L: "C", text: "Recalling vocabulary definitions was more difficult than recalling toy objects for all groups.", pct: "6%", correct: false },
        { L: "D", text: "The interval between sleep and testing matters less to recall than the method of memorization.", pct: "82%", correct: true }
      ],
      stat: "83% answered correctly",
      explanationHtml: `
        <p>In this experiment, the learning-sleeping, learning-testing, and sleeping-testing time intervals were all independent variables, which were manipulated by the researcher to see if they had an effect on the dependent variable, recall.</p>
        <p>Although many studies have suggested that the method of memorization employed is important for memory consolidation and recall accuracy, <strong>this study did not directly test the effects of various memorization methods</strong> on memory consolidation or recall accuracy. Therefore, the conclusion that the interval between sleep and testing is less critical for memory consolidation than the method of memorization employed is <strong>not supported</strong> by the data in Table 1.</p>
        <p><strong>(Choice A)</strong> The data in Table 1 do support the conclusion that a shorter time interval between learning and testing results in better recall, because Group II, which had the shortest learning-testing time interval (12 hours), also demonstrated the best average recall accuracy for both objects (69%) and vocabulary (60%).</p>
        <p><strong>(Choice B)</strong> The data in Table 1 do support the conclusion that when sleep occurs shortly after learning, memory consolidation appears to be enhanced, because Groups II and IV had the shortest learning-sleeping time interval (2 hours) and also demonstrated higher average recall than Groups I and III, which had a longer learning-sleep time interval (8 hours).</p>
        <p><strong>(Choice C)</strong> The data in Table 1 do support the conclusion that recalling vocabulary definitions was more difficult than recalling toy objects for all groups, because for all groups the average percentage recalled was higher for objects than for vocabulary definitions.</p>
      `,
      eo: "In a research study, independent variables are manipulated or controlled by the researcher and dependent variables are the outcomes that are measured. Experiments reveal how changes to the independent variable affect the dependent variable."
    },
    {
      qid: "400175",
      stem: "In this study, the vocabulary recall task most directly assessed which of the following types of memory?",
      preopts: "",
      options: [
        { L: "A", text: "Implicit", pct: "3%", correct: false },
        { L: "B", text: "Semantic", pct: "65%", correct: true },
        { L: "C", text: "Short-term", pct: "15%", correct: false },
        { L: "D", text: "Working", pct: "15%", correct: false }
      ],
      stat: "65% answered correctly",
      explanationHtml: `
        <p>Research suggests that humans have 2 major types of <strong>long-term memory</strong>: implicit and explicit. <strong>Explicit/declarative memory</strong> is memory for facts and events that can be consciously or intentionally recalled, including:</p>
        <ul>
          <li><strong>Semantic memory</strong>, which includes knowledge about <strong>facts</strong> (eg, word definitions, concepts, or that humans are mammals).</li>
          <li><strong>Episodic memory</strong>, which includes <strong>personal experiences</strong> (eg, remembering toy objects seen previously during a study session).</li>
        </ul>
        <p>During the testing phase of this study, students were asked to recall objects they had previously seen (episodic memory) and define vocabulary words they had previously studied (semantic memory). Therefore, the vocabulary recall tasks in this study were most directly assessing <strong>semantic memory</strong>.</p>
        <p><strong>(Choice A)</strong> Implicit/nondeclarative memory is memory for things that cannot be consciously recalled, such as skills, tasks, emotions, and reflexes. Implicit memory was not assessed in this study.</p>
        <p><strong>(Choice C)</strong> Short-term memory can hold roughly 5–9 items for about 20 seconds. This study, which tested recall 12–24 hours after learning, did not assess short-term memory.</p>
        <p><strong>(Choice D)</strong> Working memory is the system that manipulates and processes information and focuses attention. Working memory is best assessed with tasks that require attention shifting or information manipulation, which were not included in this study.</p>
      `,
      eo: "Long-term memory includes implicit/nondeclarative (eg, 'how to') and explicit/declarative memory (eg, 'what is'). Declarative memory includes semantic memory (eg, facts) and episodic memory (eg, personal experiences)."
    },
    {
      qid: "400176",
      stem: "According to the first paragraph, which of the following electroencephalogram patterns should predominate during the sleep stage associated with the consolidation of the type of memory assessed in this study?",
      preopts: "",
      options: [
        { L: "A", text: "Alpha and beta waves", pct: "17%", correct: false },
        { L: "B", text: "Theta waves", pct: "15%", correct: false },
        { L: "C", text: "Delta waves", pct: "57%", correct: true },
        { L: "D", text: "Sleep spindles and K complexes", pct: "9%", correct: false }
      ],
      stat: "57% answered correctly",
      explanationHtml: `
        <p>An electroencephalogram (EEG) measures brain activity patterns reflective of sleep and waking states. According to the first paragraph, procedural memories are primarily consolidated during REM sleep, whereas <strong>declarative memories</strong> (which were assessed in this study) are <strong>primarily consolidated during slow-wave sleep (SWS)</strong>.</p>
        <p>The deepest of non-REM sleep, <strong>slow-wave sleep (stages 3 and 4)</strong> is characterized by <strong>delta waves</strong>, which demonstrate the lowest frequency and highest amplitude observed during the sleep cycle.</p>
        <p><strong>(Choice A)</strong> Alpha and beta waves are high-frequency, low-amplitude waves characteristic of waking states. Beta waves have the highest frequency and are characteristic of awake, alert states. Alpha waves have more regularity and are characteristic of awake, relaxed states.</p>
        <p><strong>(Choices B and D)</strong> Theta waves are characteristic of stage 1 sleep ("light sleep"). During stage 2 sleep, theta waves still predominate but are interrupted by occasional sleep spindles (bursts in frequency) and K-complexes (increases in wavelength).</p>
      `,
      eo: "Electroencephalograms measure brain wave patterns that are characteristic of the following states: awake/alert (beta waves), awake/relaxed (alpha waves), stage 1 sleep (theta waves), stage 2 sleep (theta waves interspersed with sleep spindles and K-complexes), stages 3 and 4 slow-wave sleep (delta waves), and REM sleep (high-frequency, low-amplitude waves similar to beta waves)."
    }
  ]
};
