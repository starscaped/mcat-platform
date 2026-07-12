window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["cardiovascular-hemodynamics"] = {
  id: "cardiovascular-hemodynamics",
  title: "Cardiovascular Circuit Modeling and Hemodynamics",
  subject: "Physics",
  system: "Electrostatics and Circuits",
  difficulty: "Moderate",
  estMinutes: 8,
  passageHtml: `
    <p>In hemodynamics, blood flow through the cardiovascular system can be modeled as an electric circuit in which the blood serves as electricity, the blood vessels as resistive wires, and the heart as a battery (Figure 1).</p>
    <p><strong>Figure 1</strong> Cardiovascular circuit model</p>
    <p>Ohm's law states that the voltage drop ΔV across each element, the current I flowing through it, and its electrical resistance R are related by ΔV = IR. In a blood vessel, the pressure difference ΔP between one vessel and the next replaces ΔV, the volumetric blood flow Q replaces I, and the vascular resistance R replaces electrical resistance. Therefore, Ohm's law for blood flow in a vessel is:</p>
    <p class="text-center" style="text-align: center;">ΔP = QR</p>
    <p class="text-center" style="text-align: center;"><strong>Equation 1</strong></p>
    <p>Vascular resistance is due to the blood's viscosity η and the dimensions of the vessel through which it flows. Assuming blood vessels are cylindrical, R can be approximated as:</p>
    <p class="text-center" style="text-align: center;">R = 8ηL / (πr<sup>4</sup>)</p>
    <p class="text-center" style="text-align: center;"><strong>Equation 2</strong></p>
    <p>where L is the length of the vessel, and r is its inner radius. If Equation 2 is combined with Equation 1, the resulting equation is Poiseuille's law.</p>
    <p>In a study of the circulatory system in rats, researchers measured the intravascular blood pressure of the mesenteric blood vessels (the mesentery is the set of tissues that holds the intestines in place). Blood flows in the following order: aorta, superior mesenteric artery (SMA), arterial arcade, venous arcade, superior mesenteric vein (SMV).</p>
    <p>For the procedure, catheters with pressure transducers were inserted into each vessel via laparotomy, an invasive procedure that involves a surgical incision into the abdominal cavity. Systolic blood pressure measurements were taken simultaneously at the proximal end (beginning) of each blood vessel.</p>
    <p><strong>Figure 2 Mesenteric blood pressure profile of rats (systolic pressure at beginning of each vessel):</strong>
      <ul>
        <li>Aorta: 121 ± 4 mmHg</li>
        <li>SMA: 115 ± 4 mmHg</li>
        <li>Arterial arcade: 78 ± 6 mmHg</li>
        <li>Venous arcade: 17 ± 2 mmHg</li>
        <li>SMV: 10 ± 2 mmHg</li>
      </ul>
    </p>
  `,
  questions: [
    {
      qid: "400214",
      stem: "Which change would result in the greatest decrease in the volumetric blood flow rate within a mesenteric vessel?",
      preopts: "",
      options: [
        { L: "A", text: "Decrease the viscosity of the blood by a factor of 4", pct: "8%", correct: false },
        { L: "B", text: "Increase the length of the vessel by a factor of 9", pct: "26%", correct: false },
        { L: "C", text: "Decrease the radius of the vessel by a factor of 2", pct: "59%", correct: true },
        { L: "D", text: "Increase the pressure difference by a factor of 6", pct: "6%", correct: false }
      ],
      stat: "58% answered correctly",
      explanationHtml: `
        <p><strong>Poiseuille's law</strong> describes the laminar flow of a viscous, incompressible fluid through a pipe. By combining Equation 1 and Equation 2, the volumetric blood flow rate Q can be determined as:</p>
        <p class="text-center" style="text-align: center;">Q = ΔP / R = (πr<sup>4</sup> ΔP) / (8ηL)</p>
        <p>The <strong>greatest decrease</strong> in the blood flow rate is achieved when the <strong>radius is reduced by a factor of 2</strong>. Poiseuille's law has a <strong>fourth-power dependence</strong> on radius r, and a linear (first-power) dependence on all other variables. Halving the radius yields:</p>
        <p class="text-center" style="text-align: center;">(r / 2)<sup>4</sup> = r<sup>4</sup> / 16</p>
        <p>Therefore, the blood flow rate Q decreases by a <strong>factor of 16</strong> when the vessel's radius r is halved, whereas increasing the length L by a factor of 9 only decreases Q by a factor of 9.</p>
        <p><strong>(Choices A and D)</strong> Decreasing viscosity increases the flow rate because they are inversely proportional. Similarly, increasing the pressure difference increases the flow rate because they are directly proportional.</p>
        <p><strong>(Choice B)</strong> Increasing vessel length reduces the blood flow rate by a factor of 9, but this reduction is less than the 16-fold reduction produced by decreasing the vessel radius.</p>
      `,
      eo: "Poiseuille's law is used to model fluid flow in pipes, assuming laminar flow of viscous and incompressible fluids. According to Poiseuille's law, the flow rate is directly proportional to vessel radius (to the fourth power) and pressure difference, and inversely proportional to viscosity and vessel length."
    },
    {
      qid: "400215",
      stem: "Which of the following can be used as units for η in Equation 2?",
      preopts: "",
      options: [
        { L: "A", text: "Pa · m² · s", pct: "20%", correct: false },
        { L: "B", text: "Pa · m² / s", pct: "38%", correct: false },
        { L: "C", text: "Pa · s", pct: "34%", correct: true },
        { L: "D", text: "Pa / s", pct: "7%", correct: false }
      ],
      stat: "34% answered correctly",
      explanationHtml: `
        <p>The units of a variable in an equation can be determined from the units of the other variables. Viscosity η is used in Equation 2, but the units of vascular resistance R are unknown. Because R can be determined from Equation 1 (R = ΔP/Q), we can combine these equations to eliminate R:</p>
        <p class="text-center" style="text-align: center;">8ηL / (πr<sup>4</sup>) = ΔP / Q</p>
        <p>To determine the units of η, we rewrite the other variables with their SI units:</p>
        <ul>
          <li>Length L and radius r in meters (m)</li>
          <li>Pressure change ΔP in pascals (Pa)</li>
          <li>Volumetric flow rate Q in cubic meters per second (m³/s)</li>
          <li>8 and π are dimensionless quantities (have no units)</li>
        </ul>
        <p>Substituting these units gives:</p>
        <p class="text-center" style="text-align: center;">[η] [m] / [m<sup>4</sup>] = [Pa] / ([m³/s])</p>
        <p>Solving for [η]:</p>
        <p class="text-center" style="text-align: center;">[η] / [m³] = [Pa] · [s] / [m³]</p>
        <p class="text-center" style="text-align: center;">[η] = [Pa] · [s]</p>
        <p>Therefore, the unit of viscosity η is <strong>Pa · s</strong>.</p>
      `,
      eo: "The units of a variable in an equation can be determined by rewriting the other variables using their units and solving for the units of the target variable."
    },
    {
      qid: "400216",
      stem: "Given the relationship between vascular resistance and blood pressure decay in Equation 1, which of the following blood vessel categories has the greatest total vascular resistance during systole? (Note: Vessel arcades are comprised of multiple individual blood vessels.)",
      preopts: "",
      options: [
        { L: "A", text: "Aorta", pct: "49%", correct: false },
        { L: "B", text: "Arterial arcade", pct: "29%", correct: true },
        { L: "C", text: "Venous arcade", pct: "16%", correct: false },
        { L: "D", text: "Superior mesenteric artery", pct: "5%", correct: false }
      ],
      stat: "28% answered correctly",
      explanationHtml: `
        <p>Vascular resistance is the resistance in a blood vessel that must be overcome for blood to flow. Equation 1 can be rearranged to R = ΔP/Q, showing that resistance R is directly proportional to pressure difference ΔP and inversely proportional to flow rate Q. Q must be the same for each vessel because the continuity equation states that the same volume of blood per unit time must flow through all the vessels connected in series. Thus, <strong>R is dependent only on ΔP, and the vessel with the greatest pressure drop ΔP has the greatest R</strong>.</p>
        <p>The pressure drop across a vessel is the difference between its pressure and the pressure of the next vessel. Using the data in Figure 2:</p>
        <ul>
          <li><strong>Aorta</strong> to SMA: 121 − 115 = 6 mmHg</li>
          <li><strong>SMA</strong> to Arterial arcade: 115 − 78 = 37 mmHg</li>
          <li><strong>Arterial arcade</strong> to Venous arcade: 78 − 17 = <strong>61 mmHg</strong></li>
          <li><strong>Venous arcade</strong> to SMV: 17 − 10 = 7 mmHg</li>
        </ul>
        <p>Because the pressure drop ΔP for the <strong>arterial arcade</strong> (61 mmHg) is greater than that of any other vessel, the arterial arcade has the greatest resistance R.</p>
        <p><strong>(Choice A)</strong> Although the aorta has the highest absolute pressure, the pressure drop between it and the next vessel is only 6 mmHg, so its resistance is very low.</p>
      `,
      eo: "The vascular resistance of a vessel is directly proportional to the pressure difference across it and inversely proportional to the volumetric flow rate. When the volumetric blood flow rate is the same across vessels in series, the vessel with the greater pressure difference has the greater resistance to flow."
    },
    {
      qid: "400217",
      stem: "Which of the following experimental groups would aid in determining if the procedure described in the passage has a confounding variable?",
      preopts: "",
      options: [
        { L: "A", text: "Group with laparotomy used without measuring blood pressure", pct: "9%", correct: false },
        { L: "B", text: "Group with minimally invasive aortic catheterization to measure mesenteric blood pressure", pct: "41%", correct: true },
        { L: "C", text: "Group fitted with noninvasive tail cuffs to measure systolic blood pressure", pct: "41%", correct: false },
        { L: "D", text: "Group with laparotomy to measure renovascular blood pressure", pct: "7%", correct: false }
      ],
      stat: "41% answered correctly",
      explanationHtml: `
        <p>In an ideal experiment, changes in the measured dependent variable are due strictly to changes in the independent variable. However, <strong>confounding variables</strong> (uncontrolled variables that affect the dependent variable) can interfere. To determine the magnitude of any effect of a possible confounding variable, an experimental group that differs <i>only</i> in the suspected confounding variable is tested.</p>
        <p>In this study, different blood vessels (independent variable) were accessed through an invasive laparotomy procedure (suspected confounding variable) to measure mesenteric blood pressures (dependent variable). The inclusion of an alternative procedure that is <strong>minimally invasive but still measures mesenteric blood pressures</strong> (such as minimally invasive aortic catheterization) would determine if laparotomy itself were a confounding variable by finding if there are differences in the measured blood pressures.</p>
        <p><strong>(Choices A and D)</strong> The suspected confounding variable (procedural invasiveness of laparotomy) is not changed, so they would not serve to isolate this confound.</p>
        <p><strong>(Choice C)</strong> Although using a noninvasive tail cuff changes the invasiveness, it measures tail (peripheral systemic) blood pressure, not mesenteric blood pressure, so it does not measure the same dependent variable of interest.</p>
      `,
      eo: "A confounding variable is an uncontrolled variable different from the independent variable but that still has an impact on the dependent variable. The effect of a confounding variable can be isolated by including an experimental group that differs in the confounding variable."
    },
    {
      qid: "400218",
      stem: "The blood pressures of an artery in the neck and an artery in the leg of a person lying down are measured, and their difference calculated. When the blood pressures are taken after the person stands up, their difference:",
      preopts: "",
      options: [
        { L: "A", text: "decreases because flow resistance is greater over horizontal distances.", pct: "6%", correct: false },
        { L: "B", text: "remains the same because blood is modeled as an ideal fluid.", pct: "4%", correct: false },
        { L: "C", text: "increases because viscous pressure acts in the direction of gravity.", pct: "42%", correct: false },
        { L: "D", text: "increases due to the hydrostatic pressure difference between the two locations.", pct: "46%", correct: true }
      ],
      stat: "45% answered correctly",
      explanationHtml: `
        <p>The pressure exerted by the weight of a column of fluid is known as <strong>hydrostatic pressure</strong>. The hydrostatic pressure difference ΔP between any two points in a fluid is found by:</p>
        <p class="text-center" style="text-align: center;">ΔP = ρgΔh</p>
        <p>where ρ is the density of the fluid, g is the acceleration due to gravity, and Δh is the vertical distance between the two locations.</p>
        <p>When the person is lying down, the neck and the leg are at about the same height, making Δh negligible. However, when the person stands up, the vertical distance Δh between the neck and the leg increases significantly. The blood pressure difference increases due to the hydrostatic pressure of the column of blood from above the leg to below the neck.</p>
        <p><strong>(Choice A)</strong> Flow resistance is independent of the direction of flow and is determined by blood viscosity and vessel geometry, not horizontal distance.</p>
        <p><strong>(Choice B)</strong> An ideal fluid possesses negligible viscosity, but still experiences hydrostatic pressure. Furthermore, blood is not modeled as an ideal fluid here.</p>
        <p><strong>(Choice C)</strong> Viscosity is a measure of a fluid's resistance to flow due to internal frictional forces, not a measure of gravity-associated pressure.</p>
      `,
      eo: "Hydrostatic pressure is the pressure exerted by the weight (potential energy) of a fluid. The hydrostatic pressure difference between two points in a fluid is proportional to the fluid's density, the gravitational acceleration, and the vertical distance between the two points."
    },
    {
      qid: "400219",
      stem: "Suppose a simplified cardiovascular system is modeled as an electrical circuit where three biological components (Muscle, Gut, and Brain) act as resistors in parallel, and the heart acts as a battery. Which of the following would occur if the blood flow to the brain is blocked?",
      preopts: "",
      options: [
        { L: "A", text: "Total vascular flow resistance will increase", pct: "38%", correct: true },
        { L: "B", text: "Pressure drop across the muscle will increase", pct: "10%", correct: false },
        { L: "C", text: "Blood flow through the gut will increase", pct: "48%", correct: false },
        { L: "D", text: "Blood flow throughout the cardiovascular system will stop", pct: "3%", correct: false }
      ],
      stat: "37% answered correctly",
      explanationHtml: `
        <p>In a parallel circuit, the properties of parallel resistors are:</p>
        <ul>
          <li>The voltage drop (pressure difference) across each resistor is the same and is equal to that of the battery (heart).</li>
          <li><strong>The equivalent resistance decreases if a resistor is added in parallel. Conversely, the equivalent resistance increases if a resistor in parallel is removed.</strong></li>
          <li>The current (blood flow) through each resistor is independent of that through the other resistors.</li>
        </ul>
        <p>Blocking the blood flow to the brain is analogous to removing a resistor from the parallel network. Therefore, the equivalent resistance (total vascular flow resistance) will <strong>increase</strong>.</p>
        <p><strong>(Choice B)</strong> The pressure drop across each resistor is equal to that of the battery, which remains constant.</p>
        <p><strong>(Choice C)</strong> The current through the gut resistor is dependent only on its own resistance and the constant voltage supplied by the battery, so gut blood flow remains constant.</p>
        <p><strong>(Choice D)</strong> Because they are in parallel, blocking one path does not stop the flow in the other paths.</p>
      `,
      eo: "For resistors connected in parallel, the voltage drop across each resistor is the same and the equivalent resistance increases if a resistor is removed. The current through each resistor in parallel is independent of the others, and the sum of each component current equals the total current."
    }
  ]
};
