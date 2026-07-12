window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["color-perception"] = {
  id: "color-perception",
  title: "Color Perception in Tetrachromats",
  subject: "Behavioral Sciences",
  system: "Sensation, Perception, and Consciousness",
  difficulty: "Moderate",
  estMinutes: 8,
  passageHtml: `
    <p>Of the biological factors impacting color perception in humans, one of the easiest to study is the number and type of color-sensitive photoreceptors. The human retina typically contains three types of cone photoreceptors, which contain opsin proteins that are sensitive to short (blue), medium (green), and long (red) wavelengths of light (Figure 1A).</p>
    <p>The genes that encode for medium and long wavelength-sensitive opsin proteins are located on the X chromosome. Mutations in these genes often produce a variant cone type that responds to wavelengths <i>overlapping</i> the response range of one of the normal cone types, so color perception is unaltered (Figure 1B). However, in a small percentage of women, the variant cone type appears to be sensitive to a range of wavelengths that <i>differs</i> from that of normal cone types (Figure 1C). It is hypothesized that these "tetrachromatic" women may be able to distinguish more colors than can the normal trichromatic population.</p>
    <p><strong>Figure 1</strong> Response curves for (A) three cone types (trichromat, normal color perception); (B) four cone types (likely normal color perception); and (C) four cone types (tetrachromat, hypothesized enhanced color perception)</p>
    <p>A researcher conducted a series of tasks to assess the extent to which color perception of tetrachromatic subjects differs from that of trichromatic controls. Three women known to possess four retinal cone classes were recruited for the study. One of the women had experienced a small lesion to her right primary visual cortex the year prior. In addition, two women with normal trichromatic vision were recruited as controls (Table 1).</p>
    <p><strong>Table 1: Characteristics of Subjects</strong></p>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Retinal cone classes</th>
          <th>Brain lesion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Subject 1</td>
          <td>4</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Subject 2</td>
          <td>4</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Subject 3</td>
          <td>4</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Subject 4</td>
          <td>3</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Subject 5</td>
          <td>3</td>
          <td>No</td>
        </tr>
      </tbody>
    </table>
    <p>In Task 1, participants identified the colors of objects that were stationary (artificial condition) and in motion (natural condition). Under both conditions, the researcher systematically varied where the objects were presented in the subjects' visual field. Task 2 was a standardized, computer-administered color-discrimination task. Task 3 was an extensive interview that assessed the subjects' subjective experience of color.</p>
    <p>Subject 1 was able to identify more colors than the controls under all experimental conditions, and Subject 2 and Subject 3 performed marginally better than controls in some of the experimental conditions. Notably, only Subject 1 was able to verbalize her thoughts about her atypical color perception during Task 3, where she described seeing nuances in colors using words she had learned from her mother, who was also a tetrachromat and an artist. The researcher concluded that language likely plays a significant role in color perception: Without a vocabulary for the full variety of colors tetrachromats can perceive, they are limited in their perception despite their biological trait.</p>
  `,
  questions: [
    {
      qid: "400107",
      stem: "The researcher's conclusion is best aligned with the:",
      preopts: "",
      options: [
        { L: "A", text: "nativist hypothesis.", pct: "16%", correct: false },
        { L: "B", text: "opponent-process theory.", pct: "8%", correct: false },
        { L: "C", text: "Sapir-Whorf hypothesis.", pct: "66%", correct: true },
        { L: "D", text: "Young-Helmholtz theory.", pct: "7%", correct: false }
      ],
      stat: "66% answered correctly",
      explanationHtml: `
        <p>The <strong>Sapir-Whorf hypothesis</strong>, also known as <strong>linguistic relativity</strong>, posits that <strong>language influences our perception and cognition</strong>. For example, if a person's native language does not have separate names for the colors blue and indigo (instead referring to both as "blue"), that person may have difficulty <i>discriminating</i> blue from indigo in isolation but could learn to differentiate them with practice.</p>
        <p><strong>Linguistic determinism</strong>, a stronger version of this hypothesis, states that <strong>language controls perception and cognition</strong>. For example, if a person's native language does not have separate names for blue and indigo, linguistic determinism predicts that this person <i>would not be able to perceive</i> these two colors as distinct.</p>
        <p>The researcher's conclusion that color perception may be limited by vocabulary and language is best aligned with the Sapir-Whorf hypothesis.</p>
        <p><strong>(Choice A)</strong> The nativist hypothesis states that language is not learned the way other skills/behaviors are learned but is rather an innate process hardwired in the brain. As long as humans are exposed to language during a <i>critical (time-sensitive) period</i> in early life, language development is biologically predetermined.</p>
        <p><strong>(Choice B)</strong> The opponent-process theory states that color information from cones is combined in such a way that we perceive three opposing pairs of colors: black/white, blue/yellow, and red/green. No two members of a pair are seen simultaneously, which is why we do not see colors such as "reddish green" or "bluish yellow."</p>
        <p><strong>(Choice D)</strong> The Young-Helmholtz theory, also known as the trichromatic theory, states that all the colors we see are the result of the combined activity of three types of photoreceptors: those that respond to short (blue), medium (green), and long (red) wavelengths of light.</p>
      `,
      eo: "The Sapir-Whorf hypothesis (linguistic relativity) states that language influences/shapes cognition and perception. A stronger version of the hypothesis (linguistic determinism) states that language controls/limits cognition and perception."
    },
    {
      qid: "400108",
      stem: "Subject 3 would NOT be able to perceive visual stimuli presented:",
      preopts: "",
      options: [
        { L: "A", text: "to the far left of her central fixation point.", pct: "82%", correct: true },
        { L: "B", text: "to the far right of her central fixation point.", pct: "11%", correct: false },
        { L: "C", text: "just above her central fixation point.", pct: "3%", correct: false },
        { L: "D", text: "just below her central fixation point.", pct: "1%", correct: false }
      ],
      stat: "83% answered correctly",
      explanationHtml: `
        <p>The <strong>visual field</strong> (ie, area seen when gaze is directed forward) is divided into the left and right hemifields. The <strong>left hemifield</strong> is processed in the <strong>right primary visual cortex</strong>, and the <strong>right hemifield</strong> is processed in the <strong>left primary visual cortex</strong>. Someone with a lesion in the right primary visual cortex (such as Subject 3) would not be able to perceive stimuli presented to the far left of the central fixation point.</p>
        <p>Similarly, other sensory and motor information is processed by the brain in this <strong>contralateral</strong> (opposite) manner. For example, movement on the right side of the body is controlled by the left primary motor cortex whereas movement on the left side of the body is controlled by the right primary motor cortex.</p>
        <p><strong>(Choice B)</strong> Stimuli presented to the far right of the fixation point (right hemifield) would be processed by the left primary visual cortex, which is intact for Subject 3.</p>
        <p><strong>(Choices C and D)</strong> The right and left hemifields overlap at and slightly beyond the central fixation point. Stimuli presented above and below the central fixation point would be processed in both primary visual cortices, so Subject 3 would be able to perceive stimuli presented above and below her central fixation point.</p>
      `,
      eo: "Visual information is processed contralaterally: A stimulus in the left visual hemifield is processed in the right visual cortex, and a stimulus in the right visual hemifield is processed in the left visual cortex."
    },
    {
      qid: "400109",
      stem: "All subjects performed better in Task 1 when the objects were presented near the center of the visual field as opposed to the periphery because:",
      preopts: "",
      options: [
        { L: "A", text: "the fovea contains the greatest density of cones in the retina.", pct: "90%", correct: true },
        { L: "B", text: "the fovea is more vascularized than the rest of the retina.", pct: "2%", correct: false },
        { L: "C", text: "the optic disc contains the greatest density of cones in the retina.", pct: "5%", correct: false },
        { L: "D", text: "the optic disc is more vascularized than the rest of the retina.", pct: "1%", correct: false }
      ],
      stat: "90% answered correctly",
      explanationHtml: `
        <p>The retina is the region at the back of the eye that converts light rays into impulses that travel to the brain. There are two types of <strong>photoreceptors in the retina</strong> responsible for this process:</p>
        <ul>
          <li><strong>Cones</strong> are sensitive to <strong>colors</strong> and high-intensity light. Cones have opsin proteins that respond to certain wavelengths of light. Cones are more densely packed in the <strong>fovea</strong>, the central portion of the retina that receives information from the central visual field.</li>
          <li><strong>Rods</strong> are sensitive to low levels of light, and are responsible for <strong>night vision</strong> but not for color vision. More numerous than cones, rods are present primarily in the periphery of the retina.</li>
        </ul>
        <p><strong>(Choice B)</strong> The retina contains blood vessels but the fovea is avascular, meaning that it has no blood vessels that would interfere with light reception by the cones. Visual acuity is sharpest at the fovea.</p>
        <p><strong>(Choices C and D)</strong> The optic disc is the region of the retina where both the optic nerve exits and the artery that vascularizes the retina enters. The optic disc is known as the "blind spot" because there are no photoreceptors in this area.</p>
      `,
      eo: "The retina contains two types of photoreceptors, cones and rods. Cones are concentrated in the fovea (central point of the retina) and are sensitive to colors. Rods are located in the periphery of the retina and are responsible for night vision because they are sensitive to low levels of light."
    },
    {
      qid: "400110",
      stem: "During Task 1, the researcher found that subjects' response time was slower and color identification accuracy was worse during the natural condition. Which of the following best accounts for this finding?",
      preopts: "",
      options: [
        { L: "A", text: "Color and motion are processed simultaneously.", pct: "43%", correct: true },
        { L: "B", text: "Color information is processed slower than motion.", pct: "30%", correct: false },
        { L: "C", text: "Motion is processed in the retina whereas color is processed in the occipital lobe.", pct: "8%", correct: false },
        { L: "D", text: "Color and motion information are transmitted to the brain via the same pathway.", pct: "17%", correct: false }
      ],
      stat: "42% answered correctly",
      explanationHtml: `
        <p><strong>Parallel processing</strong> describes the brain's ability to <strong>simultaneously process</strong> the various components of visual stimuli. Information from the retina is transmitted to the primary visual cortex (V1) of the occipital lobe via two separate pathways, which are named according to where they project in the lateral geniculate nucleus (LGN), the region of the thalamus that receives visual input:</p>
        <ul>
          <li>The <strong>parvo pathway</strong> travels from the retina to the ventral (lower) layers of the LGN, then to the V1, and eventually to the ventral brain regions. This pathway, known as the "what" pathway, is responsible for the perception of <strong>finer detail</strong>, such as <strong>form and color</strong>.</li>
          <li>The <strong>magno pathway</strong> travels from the retina to the dorsal (upper) layers of the LGN, then to the V1, and eventually to the dorsal brain regions. This pathway, known as the "where" pathway, is responsible for the perception of coarser detail, such as <strong>depth and motion</strong>.</li>
        </ul>
        <p>Color and motion are processed simultaneously via two different pathways. The artificial condition involved identifying the color of a fixed, nonmoving object, which required processing of only one component (color), whereas the natural condition required the simultaneous processing of two components, motion and color. Therefore, subjects' response time and accuracy should be worse during the natural condition.</p>
        <p><strong>(Choice B)</strong> Information about color (parvo pathway) and motion (magno pathway) is processed simultaneously via two different pathways. One is not processed faster than the other.</p>
        <p><strong>(Choice C)</strong> Detection refers to the recognition of the stimulus (eg, light wavelengths); processing involves making sense of the information. Both color and motion are detected by cells in the retina and processed by the occipital lobe. Cones detect information about color whereas specialized cells in the retina (eg, amacrine cells) detect information about motion and transfer that information to the occipital lobe for processing.</p>
        <p><strong>(Choice D)</strong> Color and motion information are both transmitted to the brain via different pathways. Color is transmitted via the parvo pathway and motion is transmitted via the magno pathway.</p>
      `,
      eo: "Parallel processing is the cognitive ability to process color, form, motion, and depth simultaneously. Color and form are processed by the parvo pathway; motion and depth are processed by the magno pathway."
    },
    {
      qid: "400111",
      stem: "Which hypothetical result from a study on tetrachromatic monozygotic (MZ) twins separated at birth and raised by different parents would provide the strongest evidence contradicting the conclusion in the final paragraph of the passage? Tetrachromatic MZ twins' color discrimination abilities are more similar to each other than to:",
      preopts: "",
      options: [
        { L: "A", text: "the general population.", pct: "6%", correct: false },
        { L: "B", text: "their biological siblings.", pct: "8%", correct: false },
        { L: "C", text: "their biological parents.", pct: "16%", correct: false },
        { L: "D", text: "their adoptive siblings.", pct: "67%", correct: true }
      ],
      stat: "67% answered correctly",
      explanationHtml: `
        <p><strong>Twin studies</strong> and <strong>adoption studies</strong> are used to estimate the importance of <strong>genetic and environmental factors</strong> on complex human traits, such as color perception. Although they are rare, twin adoption studies can help clarify the role of genes versus the environment for specific traits.</p>
        <p>MZ twins <i>raised together</i> share the same genes and an extremely similar environment (eg, same household, same schools, similar experiences), so it is <i>not possible to determine</i> if similar traits are the result of genes, environment, or a combination of the two. However, if MZ twins are each adopted and <strong>raised apart</strong>, traits that they share are most likely determined by <strong>genes</strong> whereas traits that are more similar to those of their adoptive families are most likely determined by <strong>environmental influences</strong>.</p>
        <p>If tetrachromatic MZ twins (same genes) are raised apart (different environment) and perceive color more similarly to each other than to their adoptive siblings, this would suggest that genes play a major role in color perception, which would strongly contradict the researcher's conclusion that language (an environmental factor) influences this trait.</p>
        <p><strong>(Choices A, B, and C)</strong> Adopted twins do not share a home environment with their biological parents, biological siblings, or the general population. Therefore, the hypothetical finding that includes a comparison to adoptive siblings (with whom they have a shared environment) provides the <i>strongest evidence against</i> the passage's conclusion that language (an environmental factor) influences color perception abilities.</p>
      `,
      eo: "For human traits, particularly complex ones, twin studies and adoption studies can help explain the extent to which genes and/or the environment play a role in that trait. Twin adoption studies are a rare but powerful tool for elucidating the role of genes versus the environment for specific traits."
    },
    {
      qid: "400112",
      stem: "The study described in the passage would best be categorized as which of the following?",
      preopts: "",
      options: [
        { L: "A", text: "Longitudinal study", pct: "2%", correct: false },
        { L: "B", text: "Case study", pct: "39%", correct: true },
        { L: "C", text: "Cross-sectional study", pct: "40%", correct: false },
        { L: "D", text: "Randomized controlled trial", pct: "17%", correct: false }
      ],
      stat: "39% answered correctly",
      explanationHtml: `
        <p>It is often impossible to study a rare condition or illness in large numbers of people. In such instances, <strong>case studies</strong> are used to <strong>study one or a few individuals</strong> who possess a <strong>trait or condition of interest</strong>, such as a genetic mutation causing four distinct cone types.</p>
        <p>Case studies also allow for a more thorough, in-depth analysis of the trait or condition of interest. Because of the relatively small sample size of this study and the multifaceted nature of the research approach, this study would best be considered a case study of three women who possess a trait of interest (four retinal cone classes).</p>
        <p><strong>(Choice A)</strong> In a longitudinal study, variables are repeatedly measured over time, which can reveal how or if these variables change over time (eg, if color perception changes as we age). This study did not collect data over time, so it would not be considered a longitudinal study.</p>
        <p><strong>(Choice C)</strong> A cross-sectional study is a type of observational study that measures an outcome or variable of interest (generally, a disease or trait) in a population or subpopulation at one point in time. Cross-sectional studies measure prevalence, the percentage of people with a disease or trait at a given point. This study did not attempt to quantify the prevalence of four distinct cone types in the population, so it is not a cross-sectional study.</p>
        <p><strong>(Choice D)</strong> A randomized controlled trial is an experimental study in which participants are randomly allocated to two or more experimental groups that receive different treatments or exposures. This study did not allocate subjects into groups receiving different treatments, so it was not a randomized controlled trial.</p>
      `,
      eo: "Case studies are used to study one or a few individuals who possess a trait or condition of interest. Case studies allow for a more thorough, in-depth analysis."
    }
  ]
};
