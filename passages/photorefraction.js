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

window.PASSAGES["photorefraction"] = {

  id: "photorefraction",
  title: "Photorefraction &amp; Vision Correction",
  subject: "Physics",
  system: "Light and Sound",
  difficulty: "Moderate",
  estMinutes: 9,

  passageHtml: `
    <p>For a person with perfect vision, light from an object is properly refracted by the eye lens to converge on a single point at the retina, forming a clear image of the object. Vision defects result from eye shape abnormalities or errors in the refractive power of the eye lens. Myopia (nearsightedness) occurs when light from a distant object is incorrectly focused in front of the retina. Hyperopia (farsightedness) occurs when light rays from a nearby object are focused beyond the retina.</p>
    <p>Many optical techniques are available to measure the refractive error of an individual to determine the necessary correction. Photorefraction is a photographic technique often used with young children because it does not require the individual to be still for a lengthy duration. When the patient is looking at the camera, a flash photograph is taken of the eye to determine the amount of light that is reflected off the retina and captured by the camera lens.</p>
    <p>In healthy eyes, all the light from the flash that enters the eye is reflected off the retina and returns back to the camera's light source. Because the camera lens does not receive this light, the pupil is completely dark in the resulting image. A myopic eye cannot properly focus the light at the retina. Due to the geometry of the eye and its lens, some of the light is reflected to the top portion of the camera lens. The camera captures an image of a pupil with a crescent of light at the top. In a hyperopic eye, the crescent appears at the bottom of the pupil. Ray diagrams for photorefraction are shown in Figure 1.</p>
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;Paths of light in photorefraction for different eyes: (A) Healthy, (B) Myopic, and (C) Hyperopic.</p>
    <p class="figwrap"><img src="images/photo_fig1_ray_diagrams.png" alt="Figure 1: Ray diagrams for photorefraction showing healthy, myopic, and hyperopic eyes"></p>
  `,

  questions: [
    {
      qid: "400371",
      stem: "Myopia can be corrected with a:",
      preopts: "",
      options: [
        { L: "A", text: "diverging lens, which creates real and inverted images.", pct: "17%", correct: false },
        { L: "B", text: "diverging lens, which creates virtual and upright images.", pct: "53%", correct: true },
        { L: "C", text: "converging lens, which creates real and inverted images.", pct: "19%", correct: false },
        { L: "D", text: "converging lens, which creates virtual and upright images.", pct: "10%", correct: false }
      ],
      stat: "54% answered correctly",
      explanationHtml: `
        <p>A clear image is formed in the eye when light from an object is refracted by the eye lens to focus at the retina. Refraction is the bending of light rays when light passes from one medium to another. Eyesight defects can be corrected with thin lenses.</p>
        <p>A converging (convex) lens converges parallel rays of light toward its focal point. A real image is formed from the convergence of the refracted light rays on the side of the lens opposite the object. Real images are always inverted (upside-down with respect to the object).</p>
        <p>A diverging (concave) lens spreads parallel rays of light away from its focal point. A virtual image is formed from the apparent convergence of refracted light rays traced back to the same side of the lens as the object. The image is virtual because the light rays do not actually converge at the image (<strong>Choice A</strong>). Virtual images are always upright.</p>
        <p>Myopia occurs when light rays from distant objects are focused in front of the retina. This condition is corrected with diverging lenses, which spread light before they reach the eye to move the location of the focused image farther back in the eye onto the retina. Diverging lenses create upright virtual images.</p>
        <p><strong>(Choices C and D)</strong> Hyperopia causes light rays from nearby objects to be focused behind the retina. Converging lenses correct hyperopia by bending light rays inward before they reach the eye.</p>
        <p class="figwrap"><img src="images/q400371_explanation_diverging_lens.png" alt="Diverging vs converging lens ray diagrams"></p>`,
      eo: "Myopia is a condition in which light rays from distant objects are focused in front of the retina. Myopia can be corrected using diverging lenses, which spread light rays before they reach the eye. A diverging lens creates upright virtual images."
    },
    {
      qid: "400372",
      stem: "The image of an object projected onto a fixed screen through a lens using red light is clear and focused. Using the same set-up, the image is slightly unfocused when violet light is used. This is because violet light:",
      preopts: "",
      options: [
        { L: "A", text: "refracts more than red light.", pct: "71%", correct: true },
        { L: "B", text: "is more polarized than red light.", pct: "15%", correct: false },
        { L: "C", text: "is unaffected by spherical aberrations.", pct: "1%", correct: false },
        { L: "D", text: "has greater phase shifts in glass.", pct: "12%", correct: false }
      ],
      stat: "70% answered correctly",
      explanationHtml: `
        <p>Dispersion is the phenomenon of light separating into its colors. Different frequencies (or colors) of light have slightly different refractive indices in the same medium. In other words, the angle of refraction is different for different colors of light.</p>
        <p>Lens aberrations are real-world departures from ideal lens behavior that can result in blurry images. Chromatic aberration refers to the formation of blurry images due to the effects of dispersion through a lens. The refractive index of light increases with its frequency, and violet light is higher in frequency compared to red. As a result, violet light will refract more and converge before the screen, resulting in a blurry image.</p>
        <p><strong>(Choice B)</strong> The polarization of light refers to the orientation of its oscillations in space. The polarization of light does not affect its refractive properties.</p>
        <p><strong>(Choice C)</strong> Spherical aberration is due to the geometry of a spherical lens. Light rays near the edge of a spherical lens refract more than predicted for an ideal lens. Because the image created with red light is focused, the blurriness did not occur due to spherical aberration. In addition, all frequencies of light are affected by spherical aberrations.</p>
        <p><strong>(Choice D)</strong> The phase shift of a wave refers to its displacement from another wave. Phase shifts (or lack thereof) in light do not affect its refractive properties.</p>
        <p class="figwrap"><img src="images/q400372_explanation_dispersion.png" alt="Chromatic aberration and dispersion explanation"></p>`,
      eo: "Dispersion refers to the phenomenon of different frequencies of light having slightly different refractive indices. Light with higher frequency (such as violet light compared to red light) has a higher index of refraction in a lens and therefore refracts more. The formation of blurry images due to dispersion is known as chromatic aberration."
    },
    {
      qid: "400373",
      stem: "What is the camera lens' refractive index if incident light 50&deg; from the normal is refracted to 35&deg; from the normal?",
      preopts: "",
      options: [
        { L: "A", text: "sin 50&deg;/sin 35&deg;", pct: "62%", correct: true },
        { L: "B", text: "sin 35&deg;/sin 50&deg;", pct: "32%", correct: false },
        { L: "C", text: "1/sin 50&deg;", pct: "2%", correct: false },
        { L: "D", text: "1/sin 35&deg;", pct: "3%", correct: false }
      ],
      stat: "62% answered correctly",
      explanationHtml: `
        <p>Refraction is the bending of light rays when light crosses at an angle from one medium to another with a different index of refraction. If the index of refraction is higher in the second medium, light rays refract toward the normal (axis perpendicular to the surface); if the index of refraction is lower, light rays refract away from the normal.</p>
        <p>The angle of incidence is the angle between the incident ray and the normal, and the angle of refraction is the angle between the refracted ray and the normal. In the given scenario, the incident ray in air (n<sub>1</sub> = 1) enters the lens at an angle of incidence &theta;<sub>1</sub> = 50&deg; and refracts to an angle of refraction &theta;<sub>2</sub> = 35&deg; inside the lens (n<sub>2</sub>). The Snell law describes the relationship between &theta;<sub>1</sub>, &theta;<sub>2</sub>, n<sub>1</sub>, and n<sub>2</sub> when light refracts from one medium to another:</p>
        <p style="text-align:center"><em>n</em><sub>1</sub> sin &theta;<sub>1</sub> = <em>n</em><sub>2</sub> sin &theta;<sub>2</sub></p>
        <p>Setting the left side (1) of the equation as the incident light in air and the right side (2) as the refracted light in the lens:</p>
        <p style="text-align:center">(1)(sin 50&deg;) = <em>n</em><sub>2</sub>(sin 35&deg;)</p>
        <p>Solving for the refractive index of the lens n<sub>2</sub>:</p>
        <p style="text-align:center"><em>n</em><sub>2</sub> = sin 50&deg;/sin 35&deg;</p>
        <p><strong>(Choice B)</strong> In the Snell law equation, the refractive index and the incident angle for a given medium are on the same side. The expression sin 35&deg;/sin 50&deg; is obtained if the index of refraction for glass is incorrectly paired with the incident angle in air, or vice versa.</p>
        <p class="figwrap"><img src="images/q400373_explanation_snells_law.png" alt="Snell's law diagram showing light refraction"></p>`,
      eo: "Refraction is the bending of light as it crosses between media with different indices of refraction. The Snell law (n1 sin &theta;1 = n2 sin &theta;2) describes the relationship between the angles of incidence and refraction with the refractive indices of two media."
    },
    {
      qid: "400374",
      stem: "Photorefraction with a camera at a distance of 50 cm away from a child produces a completely dark image of the pupil. If the child's retina is 2.5 cm from the eye lens, what is the lens strength of the eye? (Note: Use the thin lens formula, S = 1/o + 1/i.)",
      preopts: "",
      options: [
        { L: "A", text: "38 D", pct: "7%", correct: false },
        { L: "B", text: "42 D", pct: "58%", correct: true },
        { L: "C", text: "48 D", pct: "19%", correct: false },
        { L: "D", text: "52 D", pct: "14%", correct: false }
      ],
      stat: "59% answered correctly",
      explanationHtml: `
        <p>Lens strength is a measure of a lens's refractive power; the greater the lens strength, the more light will bend. The inverse of a lens's focal length is equal to its lens strength (S = 1/f); the closer the image is focused to the lens, the greater the lens strength. The given thin lens equation relates the strength of a lens (S) to the distance to the object (o) and to the created image (i):</p>
        <p style="text-align:center"><em>S</em> = 1/<em>o</em> + 1/<em>i</em></p>
        <p>According to the passage, a completely dark photographed pupil is produced from an eye lens that does not require correction because the image is properly focused at the retina. Therefore, the image distance is equal to the lens-retina distance (i = 2.5 cm). Because the child is looking at the camera during photorefraction, the object distance is equal to the distance to the camera (o = 50 cm). In calculations involving optics, image distance i and object distance o are both positive for converging (convex) lenses, like the eye lens.</p>
        <p>Lens strength is measured in units of diopters (D), which are equal to inverse meters (m<sup>&minus;1</sup>). Therefore, these lengths are converted from cm to meters: o = 0.5 m and i = 0.025 m. Using these values in the above equation,</p>
        <p style="text-align:center"><em>S</em> = 1/0.5 m + 1/0.025 m</p>
        <p style="text-align:center"><em>S</em> = 2 D + 40 D = 42 D</p>
        <p><strong>(Choice A)</strong> The image distance would be negative for a diverging lens. Incorrectly using i = &minus;2.5 cm would result in a lens strength of &minus;38 D.</p>
        <p><strong>(Choice D)</strong> If the inverses of i and o are not used in the thin lens equation, the incorrectly calculated lens strength would be 52 D.</p>
        <p class="figwrap"><img src="images/q400374_explanation_thin_lens.png" alt="Thin lens equation calculation for eye lens strength"></p>`,
      eo: "Lens strength (refractive power) is the inverse of the lens's focal length and is measured in units of diopters (D). A diopter is equal to an inverse meter (m&minus;1). Lens strength can be determined from object distance and image distance using the thin lens equation: S = 1/o + 1/i."
    },
    {
      qid: "400375",
      stem: "An object is located at a distance of 2 focal lengths from the center of a converging lens. What is the ratio of the height of the image to the height of the object?",
      preopts: "",
      options: [
        { L: "A", text: "1:1", pct: "31%", correct: true },
        { L: "B", text: "1:2", pct: "53%", correct: false },
        { L: "C", text: "1:3", pct: "9%", correct: false },
        { L: "D", text: "No image is formed.", pct: "6%", correct: false }
      ],
      stat: "31% answered correctly",
      explanationHtml: `
        <p>A lens is converging or (convex) if both surfaces are curved outward. The focal length of a converging lens is the distance to the point where parallel incident light rays converge. The thin lens equation relates the focal length (f) of a lens to the distance to the object (o) and the image (i) that is formed:</p>
        <p style="text-align:center">1/<em>f</em> = 1/<em>o</em> + 1/<em>i</em></p>
        <p>The ratio of the image's distance to the object's distance is equal to the ratio of the image's height to the object's height. This is due to the geometry of right triangles. The distance to the object is given as 2f. This value is used in the above equation for object distance o to solve for the image distance i in terms of f:</p>
        <p style="text-align:center">1/<em>f</em> = 1/2<em>f</em> + 1/<em>i</em></p>
        <p style="text-align:center">1/<em>f</em> &minus; 1/2<em>f</em> = 1/<em>i</em></p>
        <p style="text-align:center">2/2<em>f</em> &minus; 1/2<em>f</em> = 1/<em>i</em></p>
        <p style="text-align:center">1/2<em>f</em> = 1/<em>i</em></p>
        <p style="text-align:center"><em>i</em> = 2<em>f</em></p>
        <p>The distance to the image is also equal to 2f. Therefore, the ratio of the image's height to the object's height is 2f/2f, or 1:1.</p>
        <p><strong>(Choice C)</strong> For diverging lenses, the values of f and i are negative in the thin lens equation. Using these incorrect signs would result in an image located at 2/3f with a 1:3 height ratio.</p>
        <p><strong>(Choice D)</strong> For a converging lens, no image is formed if the object is at the focal point of the lens; this object is located 2 focal lengths away. Light rays exactly 1 focal length from the lens will be refracted by the lens to become parallel and never converge/diverge to an image.</p>
        <p class="figwrap"><img src="images/q400375_explanation_converging_lens.png" alt="Converging lens ray diagram showing object at 2f"></p>`,
      eo: "The distance to an image formed by a converging lens depends on the distance to the object and the focal length of the lens. This is known as the thin lens equation: 1/f = 1/o + 1/i. The ratio of the image height to the object height is equal to the ratio of their respective distances."
    },
    {
      qid: "400376",
      stem: "A patient's eye lens has a focal length of 2 cm. When the patient wears a pair of prescription eyeglasses with an optical power of &minus;4 D, the combined strength of the lenses is approximately:",
      preopts: "",
      options: [
        { L: "A", text: "42 D", pct: "9%", correct: false },
        { L: "B", text: "46 D", pct: "62%", correct: true },
        { L: "C", text: "50 D", pct: "17%", correct: false },
        { L: "D", text: "54 D", pct: "11%", correct: false }
      ],
      stat: "62% answered correctly",
      explanationHtml: `
        <p>Optical power, or lens strength, is given in units of diopters (D). A diopter is equal to an inverse meter (m<sup>&minus;1</sup>). The strength of a lens is calculated as the inverse of its focal length (f):</p>
        <p style="text-align:center"><em>S</em> = 1/<em>f</em></p>
        <p>The patient's eye lens strength is determined by converting the given focal length from centimeters to meters (2 cm = 0.02 m) and inverting this value:</p>
        <p style="text-align:center">1/0.02 m = 50 D</p>
        <p>The strength of the eye lens is 50 D (<strong>Choice C</strong>). The lens strength (and focal length) of a converging lens is positive. The eyeglasses' optical power is given as &minus;4D, which means that it is a diverging lens. For multiple lenses in close proximity, their combined lens strength is approximated as the sum of their individual lens strengths:</p>
        <p style="text-align:center"><em>S</em><sub>combined</sub> = <em>S</em><sub>1</sub> + <em>S</em><sub>2</sub></p>
        <p>These eyeglasses have a negative prescription because they are designed to effectively lower the patient's lens strength from 50 D (<strong>Choice D</strong>). The approximate combined lens strength is:</p>
        <p style="text-align:center"><em>S</em> = 50 D + (&minus;4 D) = 46 D</p>
        <p class="figwrap"><img src="images/q400376_explanation_lens_strength.png" alt="Lens strength calculation for combined eye lens and eyeglasses"></p>`,
      eo: "The optical power (or strength) of a lens is equal to the inverse of its focal length in meters (S = 1/f). The value is positive for converging lenses and negative for diverging lenses. The combined lens strength of a multi-lens system is approximated as the sum of the strengths of each individual lens."
    }
  ]
};
