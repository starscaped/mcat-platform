window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["bicarbonate-buffer-gas"] = {
  id: "bicarbonate-buffer-gas",
  title: "Bicarbonate Buffer and Blood Gas Analysis",
  subject: "General Chemistry",
  system: "Solutions and Electrochemistry",
  difficulty: "Moderate",
  estMinutes: 8,
  passageHtml: `
    <p>The bicarbonate (HCO<sub>3</sub><sup>−</sup>) buffer system (Reaction 1) helps maintain acid-base homeostasis and a blood pH near 7.4. Therefore, concentrations of carbon dioxide (CO<sub>2</sub>) and HCO<sub>3</sub><sup>−</sup> must be tightly regulated through adaptations in respiratory and renal physiology. For patients with suspected acid-base imbalance, these concentrations can be monitored by blood gas analysis performed on arterial or venous blood.</p>
    <p class="text-center" style="text-align: center;">CO<sub>2</sub>(g) + H<sub>2</sub>O(l) ⇄ H<sub>2</sub>CO<sub>3</sub>(aq) ⇄ HCO<sub>3</sub><sup>−</sup>(aq) + H<sup>+</sup>(aq)</p>
    <p class="text-center" style="text-align: center;"><strong>Reaction 1</strong></p>
    <p>In most automated blood gas analyzers, H<sup>+</sup> ions, CO<sub>2</sub>, and O<sub>2</sub> dissolved in the blood sample diffuse through semipermeable membranes and are measured at separate electrodes (Figure 1).</p>
    <p><strong>Figure 1</strong> Automated blood gas analyzer system setup</p>
    <p>A pH-sensitive glass electrode (E1) is separated from the blood sample by a membrane permeable to H<sup>+</sup> ions. The sample pH is determined according to the voltage difference between E1 and a reference electrode maintained in a solution of known pH.</p>
    <p>CO<sub>2</sub> diffuses across a gas-permeable membrane to a modified pH-sensitive glass electrode (E2), where the CO<sub>2</sub> reacts with water to generate HCO<sub>3</sub><sup>−</sup> and H<sup>+</sup> ions. The partial pressure of CO<sub>2</sub> (P<sub>CO<sub>2</sub></sub>) is calculated indirectly from the change in pH, as determined by the potential difference between E2 and its reference electrode.</p>
    <p>O<sub>2</sub> diffuses through a second gas-permeable membrane into a Clark electrode (E3), which is an electrochemical cell consisting of a silver anode and a platinum cathode. Within the E3 cell, O<sub>2</sub> reacts with H<sup>+</sup> ions to form water. The current measured at E3 is then used to calculate the partial pressure of O<sub>2</sub> (P<sub>O<sub>2</sub></sub>) in the blood sample.</p>
    <p>The molar concentration of carbonic acid [H<sub>2</sub>CO<sub>3</sub>], reported in millimoles per liter (mmol/L), can be calculated from P<sub>CO<sub>2</sub></sub> by Equation 1:</p>
    <p class="text-center" style="text-align: center;">[H<sub>2</sub>CO<sub>3</sub>](mmol/L) = 0.03 × P<sub>CO<sub>2</sub></sub>(mmHg)</p>
    <p class="text-center" style="text-align: center;"><strong>Equation 1</strong></p>
    <p>Subsequently, using the concentration of H<sub>2</sub>CO<sub>3</sub> obtained from Equation 1, the HCO<sub>3</sub><sup>−</sup> concentration resulting from the decomposition of H<sub>2</sub>CO<sub>3</sub> can then be calculated by applying the Henderson-Hasselbalch equation, where HA represents a weak acid and A<sup>−</sup> represents its conjugate base:</p>
    <p class="text-center" style="text-align: center;">pH = pK<sub>a</sub> + log([A<sup>−</sup>] / [HA])</p>
    <p class="text-center" style="text-align: center;"><strong>Equation 2</strong></p>
  `,
  questions: [
    {
      qid: "400239",
      stem: "The reference electrode for E2 should be maintained in a solution of a known, stable concentration of:",
      preopts: "",
      options: [
        { L: "A", text: "H⁺(aq)", pct: "36%", correct: true },
        { L: "B", text: "HCO₃⁻(aq)", pct: "23%", correct: false },
        { L: "C", text: "dissolved CO₂", pct: "30%", correct: false },
        { L: "D", text: "dissolved O₂", pct: "9%", correct: false }
      ],
      stat: "37% answered correctly",
      explanationHtml: `
        <p>A <strong>reference electrode</strong> is an electrode that has a <strong>known electric potential and stable concentration of reacting species</strong>. It is often used in combination with a glass electrode (eg, an ion-selective electrode) so that a measurable voltage (ie, potential) difference can be generated between the two electrodes.</p>
        <p>A pH electrode (ie, a type of glass electrode) is sensitive to the amount of <strong>H<sup>+</sup> ions</strong> present in a solution and must be connected to a reference electrode containing a standard concentration of H<sup>+</sup> ions. This connection forms a concentration gradient between the pH electrode and reference electrode (ie, a concentration cell), which generates a voltage difference. This voltage difference is used to determine [H<sup>+</sup>] (ie, the molar concentration of H<sup>+</sup> ions present in the solution). [H<sup>+</sup>] is directly related to the pH of the solution by the equation: <span style="white-space: nowrap;">pH = −log[H<sup>+</sup>]</span>.</p>
        <p>The passage states that the CO<sub>2</sub> in the blood sample diffuses across a membrane to a modified pH-sensitive glass electrode (E2), where the CO<sub>2</sub> reacts with water to generate HCO<sub>3</sub><sup>−</sup> and H<sup>+</sup> ions. Therefore, <strong>the reference electrode should be maintained in a standard concentration of H<sup>+</sup> ions</strong> to give a known, stable value against which the concentration and voltage difference generated by the CO<sub>2</sub> reaction can be measured.</p>
        <p><strong>(Choices B and C)</strong> As stated in the passage, CO<sub>2</sub> reacts to produce H<sup>+</sup> and it is this change, not the change in CO<sub>2</sub> or HCO<sub>3</sub><sup>−</sup>, that is measured. Therefore, the reference electrode should be maintained at a standard concentration of H<sup>+</sup>.</p>
        <p><strong>(Choice D)</strong> O<sub>2</sub> gas is not involved in the mechanism used at E2.</p>
      `,
      eo: "A reference electrode contains a known electric potential and concentration of ions. When both electrodes in a cell contain the same chemical species (a concentration cell), the electric potential difference (voltage) between the electrodes depends only on the relative concentrations of these species."
    },
    {
      qid: "400240",
      stem: "In the Clark electrode, O<sub>2</sub> from the blood is:",
      preopts: "",
      options: [
        { L: "A", text: "oxidated at the anode.", pct: "14%", correct: false },
        { L: "B", text: "oxidized at the cathode.", pct: "2%", correct: false },
        { L: "C", text: "reduced at the anode.", pct: "8%", correct: false },
        { L: "D", text: "reduced at the cathode.", pct: "74%", correct: true }
      ],
      stat: "74% answered correctly",
      explanationHtml: `
        <p>A <strong>galvanic cell</strong> (ie, a type of electrochemical cell) harnesses energy from a spontaneous oxidation-reduction reaction by separating the reaction into half-cells. At the <strong>anode</strong>, one reactant is <strong>oxidized (loses electrons)</strong>; at the <strong>cathode</strong>, another reactant is <strong>reduced (gains electrons)</strong>. A wire connects the two half-cells and allows electrons to flow from the anode to the cathode. This produces a current that can be used to do work.</p>
        <p>At E3, dissolved O<sub>2</sub> gas reacts with aqueous protons (H<sup>+</sup>) to produce water:</p>
        <p class="text-center" style="text-align: center;">O<sub>2</sub> + 4 H<sup>+</sup> + 4 e<sup>−</sup> → 2 H<sub>2</sub>O</p>
        <p>Initially, the oxidation state of each of the oxygen atoms in O<sub>2</sub> is zero because the atoms are in their elemental state. As the reaction proceeds to form H<sub>2</sub>O, the oxygen atoms gain electrons, giving oxygen a final oxidation state of −2 in H<sub>2</sub>O (ie, <strong>oxygen is reduced</strong>). Therefore, by definition, this reduction reaction occurs at the <strong>cathode</strong>.</p>
        <p><strong>(Choice A)</strong> O<sub>2</sub> becomes reduced, not oxidized, when it is converted to water.</p>
        <p><strong>(Choice B)</strong> Oxidation occurs at the anode, not the cathode.</p>
        <p><strong>(Choice C)</strong> Reduction occurs at the cathode, not the anode.</p>
      `,
      eo: "Galvanic cells harness energy released by oxidation-reduction reactions. Oxidation (loss of electrons) occurs at the anode whereas reduction (gain of electrons) occurs at the cathode."
    },
    {
      qid: "400241",
      stem: "Blood gas analysis results are listed below. What is the HCO<sub>3</sub><sup>−</sup> concentration in the blood sample resulting from the decomposition of carbonic acid?\n\n- pH = 7.35\n- P<sub>CO₂</sub> = 40. mmHg\n- P<sub>O₂</sub> = 90. mmHg",
      preopts: "",
      options: [
        { L: "A", text: "0.12 mmol/L", pct: "9%", correct: false },
        { L: "B", text: "1.2 mmol/L", pct: "46%", correct: false },
        { L: "C", text: "2.4 mmol/L", pct: "8%", correct: false },
        { L: "D", text: "12 mmol/L", pct: "35%", correct: true }
      ],
      stat: "36% answered correctly",
      explanationHtml: `
        <p>A buffer system, which consists of a mixture of a weak acid (or base) and its conjugate base (or acid), helps maintain the pH of a solution near the pK<sub>a</sub>. The Henderson-Hasselbalch equation (Equation 2) quantitatively describes the relationship between the pH and the pK<sub>a</sub> of a buffer solution. For the bicarbonate buffer system:</p>
        <p class="text-center" style="text-align: center;">pH = pK<sub>a1</sub> + log([HCO<sub>3</sub><sup>−</sup>] / [H<sub>2</sub>CO<sub>3</sub>]) &nbsp;&nbsp;&nbsp;&nbsp; (where pK<sub>a1</sub> = 6.35)</p>
        <p>According to the data table, the pH of the blood sample is 7.35 and P<sub>CO<sub>2</sub></sub> is 40. mmHg. To determine the concentration of HCO<sub>3</sub><sup>−</sup> in the sample, the concentration of H<sub>2</sub>CO<sub>3</sub> must first be calculated using the empirical relationship described by Equation 1:</p>
        <p class="text-center" style="text-align: center;">[H<sub>2</sub>CO<sub>3</sub>] = 0.03 × P<sub>CO<sub>2</sub></sub> = 0.03 × 40. = 1.2 mmol/L</p>
        <p>The HCO<sub>3</sub><sup>−</sup> concentration can then be calculated by substituting the pH and the H<sub>2</sub>CO<sub>3</sub> concentration into the Henderson-Hasselbalch equation:</p>
        <p class="text-center" style="text-align: center;">7.35 = 6.35 + log([HCO<sub>3</sub><sup>−</sup>] / 1.2)</p>
        <p class="text-center" style="text-align: center;">log([HCO<sub>3</sub><sup>−</sup>] / 1.2) = 1.0</p>
        <p>Removal of the logarithm (base 10) is achieved by taking the inverse logarithm of both sides of the equation:</p>
        <p class="text-center" style="text-align: center;">[HCO<sub>3</sub><sup>−</sup>] / 1.2 = 10<sup>1</sup> = 10</p>
        <p class="text-center" style="text-align: center;">[HCO<sub>3</sub><sup>−</sup>] = 12 mmol/L</p>
        <p><strong>(Choice B)</strong> This value is equal to the H<sub>2</sub>CO<sub>3</sub> concentration (1.2 mmol/L), not the HCO<sub>3</sub><sup>−</sup> concentration.</p>
      `,
      eo: "A buffer system, which consists of a mixture of a weak acid (or base) and its conjugate base (or acid), helps maintain the pH of a solution near the pKa. The Henderson-Hasselbalch equation relates the pH, pKa, and the concentration ratio of the acid and conjugate base."
    },
    {
      qid: "400242",
      stem: "In the alveoli, hypoventilation (decreased CO<sub>2</sub> gas exchange) and hyperventilation (increased CO<sub>2</sub> gas exchange) can lead to abnormalities in acid-base homeostasis. Which of the following is true of the immediate effects of abnormal ventilation?",
      preopts: "",
      options: [
        { L: "A", text: "Hyperventilation decreases blood pH and decreases the HCO₃⁻ concentration.", pct: "11%", correct: false },
        { L: "B", text: "Hyperventilation increases blood pH and decreases the HCO₃⁻ concentration.", pct: "59%", correct: true },
        { L: "C", text: "Hypoventilation increases blood pH and increases the HCO₃⁻ concentration.", pct: "10%", correct: false },
        { L: "D", text: "Hypoventilation decreases blood pH and decreases the HCO₃⁻ concentration.", pct: "17%", correct: false }
      ],
      stat: "59% answered correctly",
      explanationHtml: `
        <p>According to <strong>Le Châtelier's principle</strong>, if the equilibrium state of a system is perturbed (eg, removal or addition of a reactant or a product), the equilibrium shifts to counteract the disturbance and establish a new equilibrium. A decrease in the concentration of a chemical species shifts the equilibrium <i>toward</i> that species whereas an increase in the concentration shifts the equilibrium <i>away</i> from that species.</p>
        <p>During ventilation, CO<sub>2</sub> is expelled from the lungs. An increase in ventilation (<strong>hyperventilation</strong>) decreases the concentration of CO<sub>2</sub> in the blood, which causes Reaction 1 to shift to the left (ie, toward CO<sub>2</sub>) to reestablish equilibrium. This shift results in a <strong>decrease in H<sub>2</sub>CO<sub>3</sub> and HCO<sub>3</sub><sup>−</sup></strong>, and a <strong>decrease in H<sup>+</sup> (an increase in pH)</strong>. Clinically, this condition is referred to as respiratory alkalosis.</p>
        <p><strong>(Choice A)</strong> Removal of CO<sub>2</sub> decreases H<sup>+</sup>. A decreased H<sup>+</sup> concentration corresponds to an <i>increase</i> in blood pH, not a decrease.</p>
        <p><strong>(Choices C and D)</strong> <strong>Hypoventilation</strong> (decreased gas exchange) leads to an <strong>increase in CO<sub>2</sub> levels</strong> in the blood, shifting the equilibrium to the right. This results in <strong>increased concentrations of HCO<sub>3</sub><sup>−</sup> and H<sup>+</sup> (a decrease in pH)</strong>, causing respiratory acidosis.</p>
      `,
      eo: "Chemical reactions are in a state of dynamic equilibrium to maintain equilibrium. According to Le Châtelier's principle, changes in conditions shift the equilibrium to counteract the changes. If a species is removed, the reaction shifts toward the removed species; if a species is added, the reaction shifts away from the added species."
    },
    {
      qid: "400243",
      stem: "A 0.20 mL blood sample has a P<sub>CO₂</sub> of 40. mmHg. During analysis, the CO<sub>2</sub> in the sample diffuses across a membrane into the E2 electrode containing 0.30 mL of an aqueous solution and reacts according to Reaction 1. At equilibrium, the P<sub>CO₂</sub> in the combined sample-electrode system will be:",
      preopts: "",
      options: [
        { L: "A", text: "equal to 0 mmHg.", pct: "4%", correct: false },
        { L: "B", text: "less than 16 mmHg.", pct: "45%", correct: true },
        { L: "C", text: "equal to 16 mmHg.", pct: "22%", correct: false },
        { L: "D", text: "greater than 16 mmHg.", pct: "26%", correct: false }
      ],
      stat: "46% answered correctly",
      explanationHtml: `
        <p>When a membrane permeable to an uncharged species is used to separate two solutions, the species <strong>diffuses down its concentration gradient</strong> (ie, moves from a higher concentration region to a lower concentration region) until the species concentration is <strong>equal on both sides</strong>.</p>
        <p>Essentially, this diffusion scenario can be viewed as a <strong>dilution</strong> of the CO<sub>2</sub>. Initially, all the CO<sub>2</sub> (P<sub>CO<sub>2</sub></sub> = 40. mmHg) is confined to a 0.20 mL sample of blood. During analysis, CO<sub>2</sub> diffuses across the electrode membrane into 0.30 mL of electrode solution. The CO<sub>2</sub> is distributed between the two volumes and is free to move within a <strong>total volume of 0.50 mL</strong> (0.20 mL sample + 0.30 mL electrode solution). As such, if no reaction occurred, the final concentration after diffusion would be:</p>
        <p class="text-center" style="text-align: center;">P<sub>CO<sub>2</sub></sub>(initial) × V<sub>initial</sub> = P<sub>CO<sub>2</sub></sub>(final) × V<sub>final</sub></p>
        <p class="text-center" style="text-align: center;">(40. mmHg) × (0.20 mL) = P<sub>CO<sub>2</sub></sub>(final) × (0.50 mL)</p>
        <p class="text-center" style="text-align: center;">P<sub>CO<sub>2</sub></sub>(final) = 16 mmHg</p>
        <p>However, once the CO<sub>2</sub> diffuses from the blood sample into the electrode solution, <strong>some of the CO<sub>2</sub> is consumed</strong> as it reacts with water to form HCO<sub>3</sub><sup>−</sup> and H<sup>+</sup> (Reaction 1). According to Le Châtelier's principle, as CO<sub>2</sub> is removed from the electrode solution by reaction, more CO<sub>2</sub> will continue to diffuse until a new equilibrium is reached. Therefore, the equilibrium concentration of CO<sub>2</sub> in the sample-electrode system will be <strong>less than 16 mmHg</strong>.</p>
        <p><strong>(Choice A)</strong> The diffused CO<sub>2</sub> will equilibrate with the aqueous solution in the electrode. It will not be completely consumed by Reaction 1, so the CO<sub>2</sub> concentration will not reach zero.</p>
        <p><strong>(Choices C and D)</strong> If CO<sub>2</sub> did not react with the electrode solution, the equilibrium concentration would be exactly 16 mmHg. Because some CO<sub>2</sub> is consumed after diffusion, the final concentration must be less than 16 mmHg.</p>
      `,
      eo: "An uncharged species will diffuse across a semipermeable membrane until its concentration is equal on both sides. If the species is removed from one side of the membrane, diffusion will continue in that direction until equilibrium is regained."
    },
    {
      qid: "400244",
      stem: "A 50 mL solution of 0.1 M carbonic acid (H₂CO₃) is titrated with a solution of 0.2 M sodium hydroxide (NaOH). Which of the following represents the curve for this titration?",
      preopts: "",
      options: [
        { L: "A", text: "Curve A (showing first equivalence point at 50 mL of NaOH)", pct: "12%", correct: false },
        { L: "B", text: "Curve B (showing two equivalence points, the first at 25 mL and the second at 50 mL of NaOH)", pct: "50%", correct: true },
        { L: "C", text: "Curve C (showing first buffering region / pKa1 significantly below pH 6)", pct: "21%", correct: false },
        { L: "D", text: "Curve D (showing a single equivalence point titration curve of a monoprotic acid)", pct: "15%", correct: false }
      ],
      stat: "50% answered correctly",
      explanationHtml: `
        <p>For an acid-base titration, the titration curve of a weak acid can be used to visualize pK<sub>a</sub> values and equivalence points:</p>
        <ul>
          <li>The relatively flat portion of the curve corresponds to the buffering region, where pH = pK<sub>a</sub>.</li>
          <li>The steep portion of the curve corresponds to the equivalence point, where the moles of base are equal to the moles of the given acid species.</li>
        </ul>
        <p>For a <strong>polyprotic acid</strong> (ie, a compound that can lose multiple acidic protons), a titration curve shows <strong>one pK<sub>a</sub> value and one equivalence point for each acidic proton</strong>.</p>
        <p>In this question, H<sub>2</sub>CO<sub>3</sub> is a diprotic acid, and therefore has two pK<sub>a</sub> values and two equivalence points. Per Reaction 1, the first pK<sub>a</sub> (pK<sub>a1</sub>) is 6.35, and the second (pK<sub>a2</sub>) is 10.4. The first equivalence point occurs when all 0.005 moles of H<sub>2</sub>CO<sub>3</sub> are converted to HCO<sub>3</sub><sup>−</sup>:</p>
        <p class="text-center" style="text-align: center;">moles H<sub>2</sub>CO<sub>3</sub> = 0.050 L × 0.1 M = 0.005 mol</p>
        <p>Converting 0.005 moles of H<sub>2</sub>CO<sub>3</sub> to HCO<sub>3</sub><sup>−</sup> requires 0.005 moles of NaOH, which corresponds to:</p>
        <p class="text-center" style="text-align: center;">Volume of 0.2 M NaOH = 0.005 mol / 0.2 M = 0.025 L = 25 mL</p>
        <p>A second equivalence point occurs after another 25 mL of NaOH has been added (totaling 50 mL), converting all the HCO<sub>3</sub><sup>−</sup> to CO<sub>3</sub><sup>2−</sup>. Therefore, the titration curve shown in <strong>Curve B</strong> (with the first equivalence point at 25 mL and the second at 50 mL of NaOH) best represents this diprotic titration.</p>
        <p><strong>(Choice A)</strong> This curve shows the first equivalence point occurring at 50 mL rather than at 25 mL of NaOH.</p>
        <p><strong>(Choice C)</strong> In this curve, pK<sub>a1</sub> occurs below 6.35.</p>
        <p><strong>(Choice D)</strong> This curve shows the titration of a monoprotic acid rather than a diprotic acid.</p>
      `,
      eo: "On a titration curve for a weak acid, the pKa corresponds to the pH at the center of the buffering zone. Beyond this zone, the sharp rise in pH corresponds to the equivalence point. For polyprotic acids, multiple pKa values and equivalence points can be visualized."
    }
  ]
};
