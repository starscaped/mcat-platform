window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["mri-contrast-gadolinium"] = {
  id: "mri-contrast-gadolinium",
  title: "MRI Contrast Agents and Gadolinium",
  subject: "General Chemistry",
  system: "Atomic Theory and Chemical Composition",
  difficulty: "Moderate",
  estMinutes: 8,
  passageHtml: `
    <p>Magnetic resonance imaging (MRI) interprets the <i>nuclear relaxation</i> or <i>relaxivity</i> of hydrogen nuclei in resident water molecules. Hydrogen nuclei in water have two magnetic spin states: alpha and beta. In the presence of an applied magnetic field, these spins align with the field in an "excited" state and then relax back to the "ground" state, producing a signal with intensity proportional to their relaxivity. Frequently, an MRI contrast agent is used to increase the relaxation time in coordinated molecules, resulting in a more intense signal.</p>
    <p>Commonly used contrast agents include gadolinium-based compounds. Depending on its environment, gadolinium (Gd) can have eight or nine sites in its coordination sphere, allowing Gd<sup>3+</sup> to interact with eight water molecules as in [Gd(H<sub>2</sub>O)<sub>8</sub>]<sup>3+</sup>. The electronic configuration of gadolinium is shown in Figure 1:</p>
    <p><strong>Figure 1 Electronic configuration of Gd:</strong> [Xe] 4f<sup>7</sup> 5d<sup>1</sup> 6s<sup>2</sup> (with 7 unpaired electrons in the 4f subshell)</p>
    <p>Gd<sup>3+</sup> alone is toxic to cells because its ionic radius is similar to that of Ca<sup>2+</sup>, allowing Gd<sup>3+</sup> to displace Ca<sup>2+</sup> in biologically important settings. Therefore, Gd<sup>3+</sup> must be coordinated to an organic ligand such as 1,4,7,10-tetraazacyclododecane-1,4,7,10-tetraacetic acid (DOTA) to allow it to pass through the body safely. When chelated, DOTA displaces the water around gadolinium and leaves only one coordination site for a water molecule (Figure 2).</p>
    <p><strong>Figure 2</strong> Gd-DOTA with a water molecule coordinated to Gd<sup>3+</sup></p>
    <p>Zinc ions (Zn<sup>2+</sup>) are required to store insulin and are co-released when insulin is secreted by the pancreas. To detect zinc ions in the body, researchers have designed a variation of Gd-DOTA called Gd-daa3 with two diaminoacetate (daa) arms that preferentially bind to Zn<sup>2+</sup> ions (Figure 3). When Zn<sup>2+</sup> is absent, these arms coordinate to Gd<sup>3+</sup> and create a nine-coordinate complex that prohibits water from binding to Gd<sup>3+</sup>. Binding of diaminoacetate arms to Zn<sup>2+</sup> frees Gd<sup>3+</sup> to coordinate with water molecules. This configuration results in increased signal intensity in the parts of the cell where Zn<sup>2+</sup> is located.</p>
    <p><strong>Figure 3</strong> Gd-daa3 complex behavior when Zn<sup>2+</sup> is present</p>
  `,
  questions: [
    {
      qid: "400220",
      stem: "When Gd<sup>3+</sup> binds to DOTA, Gd<sup>3+</sup> is acting as a(n):",
      preopts: "",
      options: [
        { L: "A", text: "Lewis acid.", pct: "66%", correct: true },
        { L: "B", text: "Lewis base.", pct: "22%", correct: false },
        { L: "C", text: "Arrhenius acid.", pct: "6%", correct: false },
        { L: "D", text: "Arrhenius base.", pct: "4%", correct: false }
      ],
      stat: "65% answered correctly",
      explanationHtml: `
        <p>Acids and bases can be defined in different ways. According to the <strong>Lewis definitions</strong> of acids and bases:</p>
        <ul>
          <li><strong>Bases are electron donors</strong>.</li>
          <li><strong>Acids are electron acceptors</strong>.</li>
        </ul>
        <p>These definitions are more general than the Arrhenius and Brønsted-Lowry definitions, which involve the exchange of protons or hydroxide ions.</p>
        <p>In coordination chemistry, <strong>metal ions such as Gd<sup>3+</sup> act as Lewis acids</strong> because they have empty valence orbitals that can readily accept electrons. Molecules or atoms with lone pairs of electrons (such as the nitrogen and oxygen atoms of DOTA) act as <strong>Lewis bases</strong> and coordinate to the metal ion, forming a complex ion; these electron-donating groups are referred to as <strong>ligands</strong>.</p>
        <p><strong>(Choice B)</strong> A Lewis base is an electron donor, which is the role played by the DOTA ligand.</p>
        <p><strong>(Choices C and D)</strong> Arrhenius definitions involve the exchange of OH<sup>−</sup> and H<sup>+</sup> ions in aqueous solution. Because no proton or hydroxide exchange is occurring in the formation of this coordination complex, neither species acts as an Arrhenius acid or base.</p>
      `,
      eo: "Lewis bases are electron donors whereas Lewis acids are electron acceptors. Metal cations have empty valence orbitals and act as Lewis acids when they accept electron pairs from ligands (Lewis bases) in coordination chemistry."
    },
    {
      qid: "400221",
      stem: "Gadolinium becomes ionized to Gd<sup>3+</sup> when it loses electrons from which orbital(s)?",
      preopts: "",
      options: [
        { L: "A", text: "4f, 4d, and 5s", pct: "1%", correct: false },
        { L: "B", text: "4f", pct: "25%", correct: false },
        { L: "C", text: "4f, 5d, and 6s", pct: "7%", correct: false },
        { L: "D", text: "5d and 6s", pct: "65%", correct: true }
      ],
      stat: "64% answered correctly",
      explanationHtml: `
        <p>The electron configuration of an atom describes the placement of electrons within the atom and can be used to determine the order of electron removal during ionization. For neutral gadolinium, the shorthand noble gas configuration is:</p>
        <p class="text-center" style="text-align: center;">[Xe] 6s<sup>2</sup> 4f<sup>7</sup> 5d<sup>1</sup></p>
        <p>During ionization, <strong>electrons are removed from the valence electron shell with the greatest principal quantum number (n) first</strong> because these electrons are farthest from the nucleus and are therefore the least tightly bound.</p>
        <p>For gadolinium:</p>
        <ol>
          <li>The first two electrons are lost from the <strong>6s subshell</strong> (the highest principal quantum number n=6).</li>
          <li>The third electron is lost from the <strong>5d subshell</strong> (the next highest principal quantum number n=5).</li>
        </ol>
        <p>This produces Gd<sup>3+</sup> with the stable configuration <strong>[Xe] 4f<sup>7</sup></strong>. Thus, the three electrons are lost from the <strong>5d and 6s</strong> subshells.</p>
        <p><strong>(Choices A, B, and C)</strong> Gadolinium does not lose electrons from the 4f subshell during this ionization because those electrons are deeper and more tightly bound than the outermost 6s and 5d electrons.</p>
      `,
      eo: "The electron configuration of an atom describes the placement of all the electrons within the atom. During ionization, electrons are removed first from the orbital with the greatest principal quantum number."
    },
    {
      qid: "400222",
      stem: "The Heisenberg uncertainty principle impacts the study of nuclei and small particles such as electrons. Which of the following is a consequence of this principle?",
      preopts: "",
      options: [
        { L: "A", text: "Two electrons in the same orbital cannot both have parallel alignment with the magnetic field.", pct: "18%", correct: false },
        { L: "B", text: "Neutrons and protons are affected by the nuclear force almost identically.", pct: "1%", correct: false },
        { L: "C", text: "Electrons in coordination bonds can be described only as probability distributions.", pct: "74%", correct: true },
        { L: "D", text: "Particles release energy when transitioning from an excited state to a ground state.", pct: "6%", correct: false }
      ],
      stat: "73% answered correctly",
      explanationHtml: `
        <p>The <strong>Heisenberg uncertainty principle</strong> states that the <strong>exact position and momentum of a particle cannot both be known at the same time</strong>. In fact, the uncertainty of position and momentum is inversely proportional: the more accurately an object's position is known, the less accurately its momentum can be known, and vice versa.</p>
        <p>This principle most strongly impacts the study of small particles such as electrons. Its acceptance ended scientists' attempts to describe the exact path of an electron in its orbital, as understanding this path would require simultaneous knowledge of the electron's position and momentum. Instead, <strong>electron orbitals are now modeled as probability distributions</strong> in which electrons are most likely to be found.</p>
        <p><strong>(Choice A)</strong> Although it is true that two electrons in the same orbital must have spins of opposite alignment, this fact is related to the <strong>Pauli exclusion principle</strong>, not the Heisenberg uncertainty principle.</p>
        <p><strong>(Choice B)</strong> The nuclear force is the attractive force that binds neutrons and protons in the nucleus, which is independent of the Heisenberg uncertainty principle.</p>
        <p><strong>(Choice D)</strong> Energy is released when particles transition from a higher energy state to a lower energy state. This is a consequence of the conservation of energy, not the Heisenberg uncertainty principle.</p>
      `,
      eo: "The Heisenberg uncertainty principle states that the position and momentum of a particle cannot both be precisely known at the same time. The uncertainty of the position and the uncertainty of the momentum are inversely proportional."
    },
    {
      qid: "400223",
      stem: "Which of the following accurately describes the magnetic properties of Gd<sup>3+</sup> ions?",
      preopts: "",
      options: [
        { L: "A", text: "Gd<sup>3+</sup> is diamagnetic because of unpaired electrons.", pct: "14%", correct: false },
        { L: "B", text: "Gd<sup>3+</sup> is paramagnetic, and its electron spins align parallel to the applied magnetic field.", pct: "67%", correct: true },
        { L: "C", text: "Gd<sup>3+</sup> is diamagnetic because ions are attracted to the magnetic field due to their positive charge.", pct: "6%", correct: false },
        { L: "D", text: "Gd<sup>3+</sup> is paramagnetic, and therefore repels magnetic field lines.", pct: "11%", correct: false }
      ],
      stat: "66% answered correctly",
      explanationHtml: `
        <p>Hund's rule states that the order of orbital filling should maximize the number of unpaired electrons. <strong>Paramagnetic</strong> atoms and molecules have <strong>one or more unpaired electrons</strong> that can <strong>align parallel to an applied magnetic field</strong>. Therefore, these atoms are weakly <strong>attracted</strong> to magnetic fields.</p>
        <p>In contrast, in <strong>diamagnetic</strong> atoms and molecules, <strong>all electrons are spin-paired</strong> (all orbitals contain two electrons). Diamagnetic materials <strong>weakly repel</strong> magnetic fields, and their magnetic moments align antiparallel to an applied field.</p>
        <p>As shown in the passage, Gd<sup>3+</sup> has <strong>seven unpaired electrons in its 4f sub-shell</strong>, making it <strong>strongly paramagnetic</strong>. Therefore, the unpaired electrons in Gd<sup>3+</sup> align parallel to an applied magnetic field.</p>
        <p><strong>(Choices A and C)</strong> Diamagnetic species have no unpaired electrons and are weakly repelled by magnetic fields. Net ionic charge does not determine diamagnetic/paramagnetic properties.</p>
        <p><strong>(Choice D)</strong> Paramagnetic species align parallel to and are attracted to magnetic fields, whereas diamagnetic species repel magnetic fields.</p>
      `,
      eo: "Hund's rule states that orbital filling maximizes the number of unpaired electrons. Paramagnetic atoms and molecules have unpaired electrons that align parallel to an applied magnetic field; paramagnetic species are weakly attracted to magnets. In contrast, diamagnetic atoms and molecules have no unpaired electrons, and these species are repelled by magnets."
    },
    {
      qid: "400224",
      stem: "To determine whether Gd-daa3 is selective for Zn<sup>2+</sup>, researchers compared relaxivity measurements of Gd-daa3 in the presence of different cations. Varying amounts of XCl<sub>2</sub> (where X is Zn<sup>2+</sup>, Ca<sup>2+</sup>, or Mg<sup>2+</sup>) were added to a buffered 0.1 mM solution of Gd-daa3 at pH 7.4. What is the most appropriate control for this experiment?",
      preopts: "",
      options: [
        { L: "A", text: "Relaxivity measurements without XCl₂", pct: "61%", correct: true },
        { L: "B", text: "Relaxivity measurements with ZnCl₂", pct: "14%", correct: false },
        { L: "C", text: "Relaxivity measurements with BeCl₂", pct: "5%", correct: false },
        { L: "D", text: "Relaxivity measurements without Gd-daa3", pct: "18%", correct: false }
      ],
      stat: "60% answered correctly",
      explanationHtml: `
        <p>An <strong>experimental control</strong> is a measurement taken with all experimental conditions in place <strong>except the independent variables</strong>. The control setup allows for <strong>baseline measurements</strong> of dependent variables in the <strong>absence of the independent variables</strong>, allowing for a more accurate assessment of the independent variables' effects.</p>
        <p>For these testing conditions, the independent variables include the amount of XCl<sub>2</sub> and the identity of X, and the dependent variable is relaxivity. The most appropriate experimental control includes <strong>baseline readings of the relaxivity of the Gd-daa3 solution in the absence of XCl<sub>2</sub></strong>. Therefore, the control solution contains only Gd-daa3 and buffer at pH 7.4.</p>
        <p><strong>(Choice B)</strong> Because Zn<sup>2+</sup> is one of the ions tested in this experiment (an independent variable), ZnCl<sub>2</sub> cannot be the control.</p>
        <p><strong>(Choice C)</strong> Even though BeCl<sub>2</sub> is not one of the ions tested, it would not be included in the control because introducing other cations would confuse the baseline.</p>
        <p><strong>(Choice D)</strong> A control without Gd-daa3 would not provide baseline relaxivity measurements, since Gd-daa3 is the active agent being assessed.</p>
      `,
      eo: "The experimental control is a measurement taken with all experimental conditions in place except the independent variable of interest. Controls provide baseline measurements so that the effects of independent variables on dependent variables can be accurately determined."
    },
    {
      qid: "400225",
      stem: "Two MRI images of the pancreas were taken at different times (Time A and Time B) in a mouse injected with Gd-daa3. Greater relaxivity was detected at Time B, suggesting all of the following EXCEPT:",
      preopts: "",
      options: [
        { L: "A", text: "Time B was soon after a meal when insulin is released.", pct: "13%", correct: false },
        { L: "B", text: "Fewer diaminoacetate arms were bound to Gd³⁺ ions at Time B than at Time A.", pct: "28%", correct: false },
        { L: "C", text: "The relaxivity of water molecule nuclei was increased at Time B.", pct: "18%", correct: false },
        { L: "D", text: "Gd³⁺ ions are bound to Zn²⁺ ions at Time B.", pct: "39%", correct: true }
      ],
      stat: "39% answered correctly",
      explanationHtml: `
        <p>The passage describes the mechanism by which Gd-daa3 acts as a contrast agent in the presence of zinc ions. <strong>Zinc preferentially binds to the diaminoacetate (daa) arms, not Gd<sup>3+</sup></strong>. When Zn<sup>2+</sup> binds to the daa arms, Gd<sup>3+</sup> is freed to coordinate with water molecules, increasing relaxivity.</p>
        <p>An increase in relaxivity at Time B suggests an increase in the release of zinc ions. Because Zn<sup>2+</sup> is co-released with insulin, this is consistent with Time B being shortly after a meal when insulin is released (Choice A).</p>
        <p>When Zn<sup>2+</sup> binds to the daa arms, fewer daa arms are bound to Gd<sup>3+</sup>, which is consistent with Choice B. The freed Gd<sup>3+</sup> coordinates with water molecules, increasing their relaxivity (Choice C).</p>
        <p>However, <strong>Gd<sup>3+</sup> ions do NOT bind to Zn<sup>2+</sup> ions</strong>. Zn<sup>2+</sup> binds to the daa arms, which frees Gd<sup>3+</sup> to coordinate with water molecules. Therefore, Choice D is the EXCEPT.</p>
      `,
      eo: "Contrast agents increase MRI signals by increasing the relaxivity of water molecules. These agents can be used to monitor biological processes if their mechanisms involve biochemical changes associated with those processes."
    }
  ]
};
