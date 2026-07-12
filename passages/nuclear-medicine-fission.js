window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["nuclear-medicine-fission"] = {
  id: "nuclear-medicine-fission",
  title: "Nuclear Medicine and Fission Products",
  subject: "General Chemistry",
  system: "Atomic Theory and Chemical Composition",
  difficulty: "Moderate",
  estMinutes: 7,
  passageHtml: `
    <p>Nuclear medicine uses radiopharmaceuticals for disease treatment and as tracers in medical imaging studies. Yttrium-90 (<sup>90</sup>Y) is a radiopharmaceutical agent used to treat overgrown joint lining known as pigmented villonodular synovitis, as well as some forms of liver cancer. It has a half-life of about 64 hours.</p>
    <p>Although the relatively short half-life of <sup>90</sup>Y is optimal for use in medical applications, transportation and storage of the radiopharmaceutical are not feasible. As a result, strontium-90 (<sup>90</sup>Sr), with a half-life of 28.8 years, is the most common source of <sup>90</sup>Y. <sup>90</sup>Sr is created by a nuclear fission process that begins with uranium-235 (<sup>235</sup>U) in a nuclear reactor as shown in Reaction 1.</p>
    <p class="text-center" style="text-align: center;"><sup>235</sup>U → <sup>90</sup>Sr + Z</p>
    <p class="text-center" style="text-align: center;"><strong>Reaction 1</strong></p>
    <p>Fission of <sup>235</sup>U produces <sup>90</sup>Sr as well as additional fission products (Z) including, but not limited to, technetium-99 (<sup>99</sup>Tc), iodine-129 (<sup>129</sup>I), and zirconium-93 (<sup>93</sup>Zr). Figure 1 shows the distribution of fission products.</p>
    <p><strong>Figure 1</strong> Distribution of <sup>235</sup>U fission products by mass number</p>
    <p>To create the final <sup>90</sup>Y required for nuclear medicine studies, <sup>90</sup>Sr decay is carried out in a controlled <sup>90</sup>Y generator. <sup>90</sup>Y is then separated from residual <sup>90</sup>Sr for use in clinical applications.</p>
  `,
  questions: [
    {
      qid: "400195",
      stem: "In its nuclear decay chain, <sup>90</sup>Sr decays into <sup>90</sup>Y, and <sup>90</sup>Y then decays to <sup>90</sup>Zr. Which of the following elements exhibits chemical properties most similar to zirconium-90?",
      preopts: "",
      options: [
        { L: "A", text: "<sup>90</sup>Nb", pct: "30%", correct: false },
        { L: "B", text: "<sup>174</sup>Hf", pct: "63%", correct: true },
        { L: "C", text: "<sup>46</sup>Sc", pct: "3%", correct: false },
        { L: "D", text: "<sup>48</sup>Ca", pct: "2%", correct: false }
      ],
      stat: "63% answered correctly",
      explanationHtml: `
        <p>Atoms are most stable when they have a full outer orbital shell (valence shell). For this reason, the chemical behavior of an atom is determined largely by the <strong>number of valence electrons</strong> because this number determines how many electrons must be gained or lost to achieve stability. Accordingly, <strong>elements in the same column of the periodic table have the same valence electron configuration, and therefore have similar chemical properties</strong> (ie, react with other elements in similar ways).</p>
        <p>In contrast, <i>physical properties</i> of elements in the same column are still often dissimilar because physical properties (eg, color, density, atomic radius) are determined by atomic characteristics other than the valence electrons.</p>
        <p><sup>90</sup>Y decays by β<sup>−</sup> decay, which causes the atomic number to increase by 1 and produces zirconium-90 (<sup>90</sup>Zr). Zirconium is in the same column (Group 4) as <strong>hafnium (Hf)</strong>, and therefore any isotope of hafnium will have similar chemical properties to any isotope of zirconium.</p>
        <p><strong>(Choice A)</strong> Niobium-90 (<sup>90</sup>Nb) is in the same row as <sup>90</sup>Zr and has the same atomic mass. However, elements in the same row of the periodic table have different numbers of valence electrons and therefore different chemical properties.</p>
        <p><strong>(Choice C)</strong> Scandium-46 (<sup>46</sup>Sc) has chemical characteristics most similar to <sup>90</sup>Y, not <sup>90</sup>Zr.</p>
        <p><strong>(Choice D)</strong> Calcium-48 (<sup>48</sup>Ca) has chemical characteristics most similar to <sup>90</sup>Sr, not <sup>90</sup>Zr.</p>
      `,
      eo: "Chemical behavior is governed largely by the number of electrons in an atom's valence shell. Atoms with the same number of valence electrons (ie, in same column of the periodic table) have similar chemical properties."
    },
    {
      qid: "400196",
      stem: "<sup>90</sup>Sr is converted to <sup>90</sup>Y by which of the following processes?",
      preopts: "",
      options: [
        { L: "A", text: "Electron capture", pct: "9%", correct: false },
        { L: "B", text: "Positron emission", pct: "11%", correct: false },
        { L: "C", text: "Gamma ray emission", pct: "15%", correct: false },
        { L: "D", text: "Beta minus decay", pct: "63%", correct: true }
      ],
      stat: "63% answered correctly",
      explanationHtml: `
        <p>Protons and neutrons can be interconverted during radioactive decay by the following mechanisms:</p>
        <ul>
          <li><strong>Beta minus decay (β<sup>−</sup> decay)</strong> is the emission of a nuclear electron, in which a <strong>neutron converts into a proton and increases the atomic number by one</strong>. Mass number remains the same.</li>
          <li><strong>Positron emission (β<sup>+</sup> decay)</strong> converts a proton into a neutron, decreasing the atomic number by one.</li>
          <li><strong>Electron capture</strong> is a special form of beta decay in which a nucleus absorbs an electron from an external source. The absorbed electron converts a proton into a neutron, decreasing the atomic number by one.</li>
        </ul>
        <p>The periodic table shows that strontium has an atomic number of 38 whereas yttrium has an atomic number of 39. Because the atomic number increases by one while the mass number (90) remains constant, strontium-90 must decay via <strong>beta minus decay</strong> to form yttrium-90.</p>
        <p><strong>(Choices A and B)</strong> Positron emission and electron capture both result in a <i>decrease</i> in the atomic number (converting strontium to rubidium, Z=37).</p>
        <p><strong>(Choice C)</strong> The emission of a gamma ray (a high-energy photon) does not affect the atomic number or mass of the nucleus, but it does decrease its energy.</p>
      `,
      eo: "Beta decay typically involves the emission of a nuclear electron or positron. Electron emission (beta minus decay) increases the atomic number by one whereas positron emission and electron capture both decrease the atomic number by one."
    },
    {
      qid: "400198",
      stem: "Fission of <sup>235</sup>U produces multiple elements. Based on Figure 1, which of the following is the atomic number of the most common fission product?",
      preopts: "",
      options: [
        { L: "A", text: "38", pct: "5%", correct: false },
        { L: "B", text: "55", pct: "45%", correct: true },
        { L: "C", text: "92", pct: "5%", correct: false },
        { L: "D", text: "133", pct: "43%", correct: false }
      ],
      stat: "45% answered correctly",
      explanationHtml: `
        <p><strong>Nuclear fission</strong> is the splitting of a large atomic nucleus into multiple smaller nuclei. Figure 1 displays the mass numbers of the various nuclear fission products for <sup>235</sup>U on the x-axis and the percentage of nuclei with each mass number on the y-axis. The tallest peak indicates the greatest fission yield (ie, the isotope released in the greatest quantity).</p>
        <p>On this graph, the greatest fission yield corresponds to an isotope with a mass number of <strong>approximately 133</strong>. The periodic table displays the atomic numbers and average atomic weights of the elements. It shows that elements iodine (I, Z=53) through barium (Ba, Z=56) have masses near 133. Of the answer choices given, only <strong>cesium (Cs) with an atomic number of 55</strong> has a mass that falls within this range.</p>
        <p><strong>(Choice A)</strong> Strontium has an atomic number of 38 and an average mass number of about 88, representing one of the lower peaks on the left side of the graph.</p>
        <p><strong>(Choice C)</strong> The element with an atomic number of 92 is uranium. Because the question is about the fission (splitting) of uranium, all fission products must have an atomic number below 92.</p>
        <p><strong>(Choice D)</strong> 133 is the <i>mass number</i> (total number of neutrons and protons) of the most abundant fission product, not the atomic number (number of protons only).</p>
      `,
      eo: "Nuclear fission is the splitting of a large atomic nucleus into multiple smaller nuclei. The mass numbers (the sum of the protons and neutrons) of resulting nuclei can be measured and correlated with their most likely atomic numbers."
    },
    {
      qid: "400199",
      stem: "The uranium isotope required for Reaction 1 (<sup>235</sup>U) can be formed by the emission of an alpha particle from which of the following nuclei?",
      preopts: "",
      options: [
        { L: "A", text: "<sup>239</sup>U", pct: "11%", correct: false },
        { L: "B", text: "<sup>239</sup>Pu", pct: "76%", correct: true },
        { L: "C", text: "<sup>235</sup>U", pct: "3%", correct: false },
        { L: "D", text: "<sup>235</sup>Pa", pct: "8%", correct: false }
      ],
      stat: "75% answered correctly",
      explanationHtml: `
        <p><strong>Alpha decay</strong> is the emission of an alpha particle (ie, a helium-4 nucleus, <span style="white-space: nowrap;"><sup>4</sup><sub>2</sub>He</span>) containing two neutrons, two protons, and no electrons from the parent atom. The resulting (daughter) nucleus has a <strong>mass number that is four less</strong> and an <strong>atomic number that is two less</strong> than those of the parent nucleus.</p>
        <p>The uranium-235 isotope (<sup>235</sup><sub>92</sub>U) has a mass number of 235 and an atomic number of 92. Therefore, the parent nucleus must have a mass number of 239 (235 + 4) and an atomic number of 94 (92 + 2). Element 94 is Plutonium (Pu). Thus, plutonium-239 (<sup>239</sup><sub>94</sub>Pu) becomes uranium-235 after alpha decay.</p>
        <p><strong>(Choice A)</strong> Alpha decay of <sup>239</sup><sub>92</sub>U leads to the formation of thorium-235 (<sup>235</sup><sub>90</sub>Th), which has the desired mass number but an atomic number that is two less than uranium.</p>
        <p><strong>(Choice C)</strong> Alpha decay of <sup>235</sup><sub>92</sub>U leads to thorium-231 (<sup>231</sup><sub>90</sub>Th).</p>
        <p><strong>(Choice D)</strong> Emission of an alpha particle from protactinium-235 (<sup>235</sup><sub>91</sub>Pa) results in actinium-231 (<sup>231</sup><sub>89</sub>Ac).</p>
      `,
      eo: "Alpha decay is the emission of an alpha particle (helium-4 nucleus) containing two neutrons, two protons, and no electrons from the parent atom. Alpha decay results in a daughter nucleus with a mass number that is four less than its parent and an atomic number that is decreased by two."
    },
    {
      qid: "400200",
      stem: "A patient is injected with 20 ng of <sup>90</sup>Y. Assuming the yttrium is not excreted, how long will it take for the initial amount of <sup>90</sup>Y to be reduced to 2.5 ng?",
      preopts: "",
      options: [
        { L: "A", text: "64 hours", pct: "1%", correct: false },
        { L: "B", text: "128 hours", pct: "5%", correct: false },
        { L: "C", text: "192 hours", pct: "85%", correct: true },
        { L: "D", text: "256 hours", pct: "7%", correct: false }
      ],
      stat: "85% answered correctly",
      explanationHtml: `
        <p>Radioactive decay is a type of exponential decay. The rate is usually expressed in terms of radioactive <strong>half-life t<sub>1/2</sub></strong>, which is the amount of time needed for <strong>half of the remaining substance to decay</strong>. The fraction remaining after n half-lives can be calculated by:</p>
        <p class="text-center" style="text-align: center;">fraction remaining = 1 / 2<sup>n</sup></p>
        <p>The initial amount is 20 ng, and the final amount is 2.5 ng. The fraction remaining is:</p>
        <p class="text-center" style="text-align: center;">2.5 ng / 20 ng = 1 / 8 = (1 / 2)<sup>3</sup></p>
        <p>This corresponds to <strong>n = 3 half-lives</strong>. Per the passage, the half-life of <sup>90</sup>Y is 64 hours; therefore, the total decay time is:</p>
        <p class="text-center" style="text-align: center;">3 half-lives × 64 hours = 192 hours</p>
        <p><strong>(Choices A, B, and D)</strong> After 64 hours (1 half-life), 10 ng remains; after 128 hours (2 half-lives), 5 ng remains; and after 256 hours (4 half-lives), 1.25 ng remains.</p>
      `,
      eo: "For radioactive particles, the half-life t1/2 is the amount of time needed for half the quantity of a substance to decay. The fraction remaining after a number of half-lives can be calculated using a formula for exponential decay, 1/2^n, where n is the number of elapsed half-lives."
    }
  ]
};
