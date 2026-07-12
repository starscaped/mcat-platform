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

window.PASSAGES["scuba-diving"] = {

  id: "scuba-diving",
  title: "Scuba Diving and the Bends",
  subject: "Physics",
  system: "Fluids",
  difficulty: "Moderate",
  estMinutes: 9,

  passageHtml: `
    <p>During deep underwater dives, scuba divers must overcome the external ambient pressure in order to expand their chests to inhale. To assist underwater breathing, air from scuba tanks is administered at high pressures to keep divers' lungs inflated. Scuba tanks are often filled with a mixture of N<sub>2</sub> and O<sub>2</sub> gas. Due to the increased pressure of the gases in the lungs, a greater amount of the gases are dissolved into the bloodstream during underwater dives. At a body temperature of 37&deg;C, the solubility of N<sub>2</sub> gas in blood is 6.0 &times; 10<sup>&minus;3</sup> mol/L&middot;atm and the solubility of O<sub>2</sub> gas is 1.3 &times; 10<sup>&minus;2</sup> mol/L&middot;atm.</p>
    <p>If a diver ascends too quickly after an extended dive, there is an increased risk of vascular bubble formation. Due to the decrease in ambient pressure, the excess gas dissolved in the blood may come out of solution as gas bubbles and cause a number of adverse effects. This condition is known as decompression sickness, or &ldquo;the bends.&rdquo; To avoid this problem, scuba divers limit their rate of ascension to allow the excess gas dissolved in their blood to be safely removed through respiration. Because gas bubbles are good reflectors of sound, these bubbles can be detected using Doppler ultrasonic flowmetry after the diver has surfaced.</p>
  `,

  questions: [
    {
      qid: "400008",
      stem: "What is the change in pressure when a diver descends from 10 m to 100 m below the water's surface? (Note: The density of water is 1,000 kg/m<sup>3</sup>.)",
      preopts: "",
      options: [
        { L: "A", text: "8.0 &times; 10<sup>5</sup> N/m<sup>2</sup>", pct: "2%", correct: false },
        { L: "B", text: "9.0 &times; 10<sup>5</sup> N/m<sup>2</sup>", pct: "75%", correct: true },
        { L: "C", text: "1.0 &times; 10<sup>6</sup> N/m<sup>2</sup>", pct: "18%", correct: false },
        { L: "D", text: "1.1 &times; 10<sup>6</sup> N/m<sup>2</sup>", pct: "2%", correct: false }
      ],
      stat: "75% answered correctly",
      explanationHtml: `
        <p>Pressure is the force exerted over an area, and hydrostatic pressure is the pressure exerted by the weight of a fluid. The hydrostatic pressure (<em>P</em>) exerted at a point is the product of the fluid's density (&rho;), gravitational acceleration (<em>g</em>), and the height (<em>h</em>) of the fluid above it:</p>
        <p style="text-align:center"><em>P</em> = &rho;<em>gh</em></p>
        <p>The pressure experienced by the diver increases with depth because the amount of water directly above increases. During the diver's descent from 10 m to 100 m below the surface, <em>h</em> increases by 90 m. Using 1,000 kg/m<sup>3</sup> for &rho;, 10 m/s<sup>2</sup> for <em>g</em>, and 90 m for &Delta;<em>h</em>, the change in hydrostatic pressure is:</p>
        <p style="text-align:center">&Delta;<em>P</em> = &rho;<em>g</em>&Delta;<em>h</em></p>
        <p style="text-align:center">&Delta;<em>P</em> = (1,000 kg/m<sup>3</sup>)(10 m/s<sup>2</sup>)(90 m)</p>
        <p style="text-align:center">&Delta;<em>P</em> = 900,000 Pa</p>
        <p>The SI unit of pressure is a pascal (Pa), which is defined as one newton per square meter (N/m<sup>2</sup>). Therefore, this value in scientific notation is 9.0 &times; 10<sup>5</sup> N/m<sup>2</sup>.</p>
        <p><strong>(Choice C)</strong> The hydrostatic pressure 100 m below the surface is 1.0 &times; 10<sup>6</sup> N/m<sup>2</sup>. However, the diver did not start at the surface; &Delta;<em>h</em> is 90 m, not 100 m.</p>
        <p><strong>(Choice D)</strong> The change in hydrostatic pressure between two points is calculated as a difference, not a sum. The sum of the pressures is 1.1 &times; 10<sup>6</sup> N/m<sup>2</sup>.</p>
        <p class="figwrap"><img src="images/q400008_explanation_hydrostatic_pressure.png" alt="Hydrostatic pressure: P = ρgh and ΔP = gΔh = 9 × 10 N/m²"></p>`,
      eo: "Hydrostatic pressure is the pressure exerted by the weight of a fluid. It is calculated as P = ρgh, where ρ is density, g is the gravitational acceleration, and h is the height of the fluid above the point of interest. The difference in pressure ΔP between two points is calculated using Δh."
    },
    {
      qid: "400009",
      stem: "A diver is using a tank filled with 20% O<sub>2</sub> and 80% N<sub>2</sub> (by volume). If the pressure in the lungs is 5 atm, what is the expected equilibrium concentration of N<sub>2</sub> dissolved in the diver's blood? (Note: Assume that the mixtures of the gases in the lungs and tank are equal.)",
      preopts: "",
      options: [
        { L: "A", text: "1.3 &times; 10<sup>&minus;2</sup> mol/L", pct: "6%", correct: false },
        { L: "B", text: "2.4 &times; 10<sup>&minus;2</sup> mol/L", pct: "62%", correct: true },
        { L: "C", text: "3.0 &times; 10<sup>&minus;2</sup> mol/L", pct: "26%", correct: false },
        { L: "D", text: "6.5 &times; 10<sup>&minus;2</sup> mol/L", pct: "4%", correct: false }
      ],
      stat: "61% answered correctly",
      explanationHtml: `
        <p>The amount of N<sub>2</sub> dissolved in the blood is in equilibrium with the partial pressure of N<sub>2</sub> in the gas phase. The partial pressure (<em>P</em><sub>gas</sub>) of a gas is the hypothetical pressure it would exert if it was the only gas occupying the same volume (Dalton law of partial pressures):</p>
        <p style="text-align:center"><em>P</em><sub>gas</sub> = <em>X</em><sub>gas</sub><em>P</em><sub>total</sub></p>
        <p>where <em>X</em><sub>gas</sub> is the mole fraction of the gas, the ratio of the number of moles of a substance to the total number of moles present. An ideal gas's mole fraction is equal to its fraction of the total volume. Therefore, the partial pressure of N<sub>2</sub> is 80% of the total pressure (5 atm):</p>
        <p style="text-align:center"><em>P</em><sub>N2</sub> = (0.8)(5 atm)</p>
        <p style="text-align:center"><em>P</em><sub>N2</sub> = 4 atm</p>
        <p>The equilibrium between the gas partial pressure and the amount dissolved in solution is described by the Henry law of solubility:</p>
        <p style="text-align:center"><em>C</em> = <em>k</em><sub>H</sub><em>P</em><sub>gas</sub></p>
        <p>where <em>C</em> is the concentration of the dissolved gas, and <em>k</em><sub>H</sub> is the solubility coefficient specific to the gas and solution at a given temperature. Using 6.0 &times; 10<sup>&minus;3</sup> mol/L&middot;atm for <em>k</em><sub>H</sub> and 4 atm for <em>P</em>, the concentration of dissolved N<sub>2</sub> is:</p>
        <p style="text-align:center"><em>C</em> = (6.0 &times; 10<sup>&minus;3</sup> mol/L&middot;atm)(4 atm)</p>
        <p style="text-align:center"><em>C</em> = 2.4 &times; 10<sup>&minus;2</sup> mol/L</p>
        <p><strong>(Choice A)</strong> The concentration of O<sub>2</sub> in the blood is 1.3 &times; 10<sup>&minus;2</sup> mol/L. However, the question asks for the concentration of N<sub>2</sub>.</p>
        <p><strong>(Choice C)</strong> If the total pressure (5 atm) is used as the partial pressure of N<sub>2</sub>, the incorrectly calculated concentration is 3.0 &times; 10<sup>&minus;2</sup> mol/L.</p>
        <p class="figwrap"><img src="images/q400009_explanation_henry_law.png" alt="Partial pressure and Henry law illustration for N2 dissolved in blood"></p>`,
      eo: "The partial pressure of a specific gas in a mixture is its hypothetical individual pressure (Dalton law of partial pressures). The partial pressure of a gas can be calculated from its mole fraction, which is equal to its fraction of the total volume. The gas partial pressure determines the concentration of the gas dissolved in solution by the Henry law of solubility (C = kH Pgas)."
    },
    {
      qid: "400010",
      stem: "While underwater, divers designate their position with a buoy that floats at the surface above them. Assuming the buoy is not pulled by the diver, what is the mass of a floating buoy that experiences a buoyancy force of 10 N and is 20% submerged?",
      preopts: "",
      options: [
        { L: "A", text: "1 kg", pct: "30%", correct: true },
        { L: "B", text: "2 kg", pct: "30%", correct: false },
        { L: "C", text: "5 kg", pct: "34%", correct: false },
        { L: "D", text: "10 kg", pct: "3%", correct: false }
      ],
      stat: "31% answered correctly",
      explanationHtml: `
        <p>The upward buoyant force felt by a submerged object is equal to the weight of the fluid it displaces (Archimedes principle). For an object floating at the surface, the vertical forces (its buoyancy and weight) cancel each other out and there is no net vertical force or acceleration. Therefore, the weight of the buoy is equal to its buoyancy force (10 N):</p>
        <p style="text-align:center"><em>F</em><sub>B</sub> = <em>W</em> = 10 N</p>
        <p>The weight of the buoy is the product of its mass (<em>m</em>) and gravitational acceleration (<em>g</em>). Therefore, its mass is calculated as its weight (10 N) divided by gravitational acceleration (10 m/s<sup>2</sup>):</p>
        <p style="text-align:center"><em>W</em> = <em>mg</em></p>
        <p style="text-align:center"><em>m</em> = <em>W</em>/<em>g</em> = 10 N / 10 m/s<sup>2</sup> = 1 kg</p>
        <p><strong>(Choices B and C)</strong> Because the buoy is floating at the surface, its buoyancy is equal to its weight. The percent the object is submerged is determined by the relative densities of the object and fluid. This percentage is not used to determine the buoy's weight (or mass) in this question.</p>
        <p><strong>(Choice D)</strong> The weight of the buoy (10 N) is divided by gravitational acceleration (10 m/s<sup>2</sup>) to obtain its mass.</p>
        <p class="figwrap"><img src="images/q400010_explanation_buoyancy.png" alt="Buoyancy force equals gravitational force for a floating object"></p>`,
      eo: "The buoyant force experienced by an object floating at the surface is equal to the weight of the object. The mass of an object can be determined from its weight (W = mg)."
    },
    {
      qid: "400011",
      stem: "Which of the following wave characteristics would be observed to increase if the bubbles are flowing toward the Doppler ultrasonic flow meter?",
      preopts: "",
      options: [
        { L: "A", text: "Frequency", pct: "80%", correct: true },
        { L: "B", text: "Amplitude", pct: "7%", correct: false },
        { L: "C", text: "Velocity", pct: "6%", correct: false },
        { L: "D", text: "Wavelength", pct: "5%", correct: false }
      ],
      stat: "79% answered correctly",
      explanationHtml: `
        <p>A flow meter is a device that measures the rate of flow, and ultrasound refers to high frequency sound waves. According to the passage, Doppler ultrasonic flow meters can be used to measure vascular bubble formation because gas bubbles are good reflectors of sound waves. When the bubbles are moving relative to the device, the observed wavelength and frequency differ from those of the original ultrasound signal (Doppler effect).</p>
        <p>The wavelength of a wave is the distance from one wave maximum to the next, and the frequency of a wave is the number of wavelengths that pass through a point per unit time. By definition, wavelength and frequency are inversely related to each other. When bubbles flow toward the device, each successive sound wave is reflected at a location closer to the device, decreasing its wavelength (Choice D). Therefore, the observed frequency would increase compared to the original frequency.</p>
        <p><strong>(Choice B)</strong> The amplitude of a wave is related to its energy. The amplitude of a reflected wave decreases because a portion of its energy is transmitted into the bubble.</p>
        <p><strong>(Choice C)</strong> The velocity of a wave depends on the medium in which it is traveling. Because the reflected wave travels in the same media as the original wave, their velocities are the same.</p>
        <p class="figwrap"><img src="images/q400011_explanation_doppler_effect.png" alt="Doppler effect: increase in frequency when source moves toward receiver, decrease when moving away"></p>`,
      eo: "When relative motion exists between a wave source and an observer, the frequency and wavelength of the observed wave differ from those of the original wave. Frequency increases and wavelength decreases if the sound source is moving toward the observer."
    },
    {
      qid: "400012",
      stem: "An underwater diver is able to shine a laser onto the underwater portion of a distant boat. However, the diver is unable to shine the laser onto the portion of the boat that is above the surface. Which of the following best explains this phenomenon?",
      preopts: "",
      options: [
        { L: "A", text: "Diffraction", pct: "38%", correct: false },
        { L: "B", text: "Dispersion", pct: "13%", correct: false },
        { L: "C", text: "Polarization", pct: "3%", correct: false },
        { L: "D", text: "Reflection", pct: "44%", correct: true }
      ],
      stat: "44% answered correctly",
      explanationHtml: `
        <p>Water and air have different indices of refraction <em>n</em>, which indicate the relative speed of light in each medium. A medium's <em>n</em> increases with density; <em>n</em> of water (<em>n</em> = 1.3) is greater than that of air (<em>n</em> = 1).</p>
        <p>Refraction, the bending of light, occurs at the boundary between two different mediums with different values of <em>n</em>. If light passes from a high to low <em>n</em>, such as from water to air, light bends away from the normal (axis perpendicular to the surface) and toward the surface.</p>
        <p>As the incident angle (angle between incident ray and the normal) increases, the light ray is refracted closer to the surface. At a &ldquo;critical angle&rdquo;, light is refracted at a 90&deg; angle and continues parallel to the surface. At incident angles greater than the critical angle, light reflects back into the water, causing total internal reflection.</p>
        <p>When the diver shines the laser towards a distant boat, the incident angle likely exceeds the critical angle. Therefore, the reflection of light best explains why the laser beam bends back into the water and doesn't reach the portion of the boat above the surface.</p>
        <p><strong>(Choice A)</strong> Diffraction is the bending of light around physical corners or very narrow gaps. Significant diffraction would not occur at the water-air surface.</p>
        <p><strong>(Choice B)</strong> Dispersion is the spreading of light into its different frequencies (colors) due to differences in the index of refraction for different frequencies of light. The effects of dispersion would not significantly change the direction of the laser beam.</p>
        <p><strong>(Choice C)</strong> Polarization aligns transverse electromagnetic radiation along a specific orientation, such as vertical, horizontal, etc. Light can be polarized during reflection, but polarization does not cause reflection.</p>
        <p class="figwrap"><img src="images/q400012_explanation_total_internal_reflection.png" alt="Total internal reflection: light from diver reflects at water-air surface beyond critical angle"></p>`,
      eo: "Because the refractive index of water is greater than that of air, light traveling from water to air will refract toward the surface of the water. At a critical angle, light is refracted at 90° and is parallel to the surface. Above this angle, all of the light will be reflected away from the surface (total internal reflection)."
    },
    {
      qid: "400013",
      stem: "A 10-L scuba tank is initially filled with 2,800 g of N<sub>2</sub> gas. At room temperature (25&deg;C), what is the pressure in the tank? (Note: Use R = 0.08 L&middot;atm/mol&middot;K.)",
      preopts: "",
      options: [
        { L: "A", text: "120 atm", pct: "2%", correct: false },
        { L: "B", text: "240 atm", pct: "79%", correct: true },
        { L: "C", text: "390 atm", pct: "5%", correct: false },
        { L: "D", text: "480 atm", pct: "12%", correct: false }
      ],
      stat: "79% answered correctly",
      explanationHtml: `
        <p>The relationship between pressure (<em>P</em>), volume (<em>V</em>), number of moles (<em>n</em>), and temperature (<em>T</em>) of an ideal gas is given by the ideal gas law:</p>
        <p style="text-align:center"><em>PV</em> = <em>nRT</em></p>
        <p>where <em>R</em> is the universal gas constant, given as 0.0821 L&middot;atm&middot;mol<sup>&minus;1</sup>&middot;K<sup>&minus;1</sup>. The mass of N<sub>2</sub> is converted to moles using its molar mass. From the periodic table, the atomic mass of N is 14 g/mol. Therefore, the molar mass of N<sub>2</sub> is (2)(14 g/mol) = 28 g/mol. Dividing the total mass of N<sub>2</sub> in the tank (2,800 g) by its molar mass gives the moles of N<sub>2</sub>:</p>
        <p style="text-align:center"><em>n</em> = 2,800 g / 28 g/mol = 100 mol</p>
        <p>The value of <em>R</em> is given with units of inverse kelvin (K<sup>&minus;1</sup>). Therefore, the given temperature (25&deg;C) is converted from Celsius to kelvin:</p>
        <p style="text-align:center">K = &deg;C + 273</p>
        <p style="text-align:center"><em>T</em> = 25&deg;C + 273 = 298 K</p>
        <p>This value is approximated as 300 K. Rearranging the ideal gas law equation to solve for <em>P</em> and using these values,</p>
        <p style="text-align:center"><em>P</em> = <em>nRT</em>/<em>V</em></p>
        <p style="text-align:center"><em>P</em> = (100 mol)(0.08 L&middot;atm/mol&middot;K)(300 K) / 10 L = 240 atm</p>
        <p><strong>(Choice D)</strong> If the molar mass of N (14 g/mol) is used instead of the molar mass of N<sub>2</sub> (28 g/mol), the pressure would be incorrectly calculated as 480 atm.</p>
        <p class="figwrap"><img src="images/q400013_explanation_ideal_gas_law.png" alt="Ideal gas law PV = nRT applied to a scuba tank"></p>`,
      eo: "For an ideal gas, the relationship between its pressure P, volume V, number of moles n, and temperature T is PV = nRT, where R is the universal gas constant. This equation is known as the ideal gas law, and it can be rearranged to solve for pressure."
    }
  ]
};
