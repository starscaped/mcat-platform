window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["tlr4-mutation-mice"] = {
  id: "tlr4-mutation-mice",
  title: "LPS Response and Tlr4 Mutation in Mice",
  subject: "Biology",
  system: "Genetics and Evolution",
  difficulty: "Moderate",
  estMinutes: 8,
  passageHtml: `
    <p>Lipopolysaccharides (LPS) found in gram-negative bacterial cells can elicit a lethal degree of adjuvanticity, or immune activation, in LPS-responsive host organisms. In mice, responses may be modulated by abnormalities in the toll-like receptor (TLR) encoded by the <i>Tlr4</i> gene, which is on the same chromosome as and closely linked to the coat color gene (Chromosome 4). To investigate the effect of a particular <i>Tlr4</i> mutation on LPS response, three experiments were performed following a cross between fully responsive HeN mice [<i>tlr4<sup>Lps-n</sup>/tlr4<sup>Lps-n</sup></i>] and HeJ mice homozygous for the deficient-response mutation (<i>tlr4<sup>Lps-d</sup>/tlr4<sup>Lps-d</sup></i>).</p>
    
    <p><strong>Experiment 1</strong></p>
    <p>Researchers isolated spleen cells from both parents as well as the progeny of the cross for analysis of protein expression and LPS response. In cells isolated from mice from the F1 generation, both wild-type and mutant TLRs were distinguishable by protein electrophoresis. Following this first analysis, spleen cells from each cohort (HeN mice, HeJ mice, or F1 progeny) were exposed to 2 × 10<sup>5</sup> sheep erythrocytes (SRCs), which served as a source of antigens to stimulate the mouse immune cells. The spleen cell suspension was then incubated in the presence or absence of Ph-LPS (LPS extracted from <i>Escherichia coli</i> K345 cells using a phenol–water mixture). Titers (antibody levels) of anti-SRC antibody per spleen were recorded on incubation day 5, with the results shown in Table 1. Titers were measured as the number of plaques of lysed erythrocytes surrounding an activated immune cell.</p>
    
    <p><strong>Table 1: Mean Anti-SRC Titers with Standard Error</strong></p>
    <table class="table">
      <thead>
        <tr>
          <th>Spleen cell source</th>
          <th>0 µg Ph-LPS</th>
          <th>0.1 µg Ph-LPS</th>
          <th>1.0 µg Ph-LPS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HeN</td>
          <td>840 ± 46</td>
          <td>1235 ± 95</td>
          <td>1605 ± 55</td>
        </tr>
        <tr>
          <td>HeJ</td>
          <td>767 ± 45</td>
          <td>703 ± 41</td>
          <td>810 ± 17</td>
        </tr>
        <tr>
          <td>F1</td>
          <td>880 ± 35</td>
          <td>907 ± 38</td>
          <td>1240 ± 58</td>
        </tr>
      </tbody>
    </table>
    
    <p><strong>Experiment 2</strong></p>
    <p>Serum samples were assayed for interferon production 2 hours post–LPS injection. Interferon was quantified using a plaque reduction assay on mouse cells challenged with vesicular stomatitis virus.</p>
    <p><strong>Figure 1</strong> Average serum interferon levels in mice cohorts</p>
    
    <p><strong>Experiment 3</strong></p>
    <p>Mice were injected with varying doses of Ph-LPS and monitored for 4 days. The lethal dose (LD<sub>50</sub>) was defined as the minimum dose causing death in 50% of injected mice. Compared to HeN mice, results reflected a 10-fold increase in LD<sub>50</sub> for F1 mice and a 100-fold increase in LD<sub>50</sub> for HeJ mice.</p>
  `,
  questions: [
    {
      qid: "400208",
      stem: "Experimental results suggest that the mutated Tlr4 allele exhibits which quality?",
      preopts: "",
      options: [
        { L: "A", text: "Codominance", pct: "34%", correct: true },
        { L: "B", text: "Recessivity", pct: "21%", correct: false },
        { L: "C", text: "Reduced penetrance", pct: "15%", correct: false },
        { L: "D", text: "Variable expressivity", pct: "27%", correct: false }
      ],
      stat: "34% answered correctly",
      explanationHtml: `
        <p><strong>Codominance</strong> describes the <strong>co-expression of alleles</strong> as observed in the phenotype of heterozygous individuals. In the case of codominant traits, neither allele is fully dominant or fully recessive.</p>
        <p>In the passage, in vitro studies of <strong>F1 spleen cells</strong> suggest that <strong>both wild-type and mutant TLRs are observable by protein electrophoresis</strong>. This co-expression of the normally functioning receptor and the mutated receptor can be attributed to the codominance of <i>tlr4<sup>Lps-n</sup></i> and <i>tlr4<sup>Lps-d</sup></i> alleles. In the presence of Ph-LPS, F1 cells display intermediate production of anti-SRC antibodies and interferon because half of their expressed TLR receptors are functional while the other half of expressed proteins are mutant.</p>
        <p><strong>(Choice B)</strong> If the mutant allele were recessive, F1 mice (which are heterozygous) would exhibit a full response to LPS, and measurements observed in the F1 generation would be indistinguishable from measurements observed in the HeN mice.</p>
        <p><strong>(Choice C)</strong> <i>Penetrance</i> refers to the portion of offspring that expresses a genetic trait. If the mutation had reduced penetrance, only a fraction of the F1 offspring would show decreased response to LPS compared to HeN mice. As seen in Table 1, immune response was decreased relatively uniformly among F1 mice as indicated by the low standard error.</p>
        <p><strong>(Choice D)</strong> <i>Expressivity</i> refers to the range of symptoms observed in individuals with a given genetic condition. If the allele had variable expressivity, the mutation would result in a range of different phenotype characteristics, whereas here the response is uniform.</p>
      `,
      eo: "Codominance refers to the co-expression of two alleles at the same locus, where both allelic products are observable in the phenotype of heterozygous individuals."
    },
    {
      qid: "400209",
      stem: "If researchers repeated the analyses using F2 generation mice, spleen cell cultures exposed to SRC plus 1.0 µg Ph-LPS would be expected to have anti-SRC titers of:\n\nI. 1600\nII. 1200\nIII. 800",
      preopts: "",
      options: [
        { L: "A", text: "II only", pct: "17%", correct: false },
        { L: "B", text: "I and II only", pct: "17%", correct: false },
        { L: "C", text: "I and III only", pct: "10%", correct: false },
        { L: "D", text: "I, II, and III", pct: "54%", correct: true }
      ],
      stat: "53% answered correctly",
      explanationHtml: `
        <p>The experiment describes a <strong>monohybrid cross</strong>, or a mating between individuals with different alleles at one genetic locus. The first cross is performed between homozygous HeN (<i>tlr4<sup>Lps-n</sup>/tlr4<sup>Lps-n</sup></i>) and HeJ mice (<i>tlr4<sup>Lps-d</sup>/tlr4<sup>Lps-d</sup></i>), producing a heterozygous F1 generation (<i>tlr4<sup>Lps-n</sup>/tlr4<sup>Lps-d</sup></i>). The second cross (F1 × F1) would produce an <strong>F2 generation with a mix of genotypes</strong> at a 1:2:1 ratio:</p>
        <ul>
          <li><strong>25% <i>tlr4<sup>Lps-n</sup>/tlr4<sup>Lps-n</sup></i>:</strong> Homozygous normal. Spleen cells from these mice will show an immune response similar to HeN mice, with titers around 1600 (Number I).</li>
          <li><strong>50% <i>tlr4<sup>Lps-n</sup>/tlr4<sup>Lps-d</sup></i>:</strong> Heterozygous. Spleen cells will show an immune response similar to F1 generation mice, with titers around 1200 (Number II).</li>
          <li><strong>25% <i>tlr4<sup>Lps-d</sup>/tlr4<sup>Lps-d</sup></i>:</strong> Homozygous deficient. Spleen cells will show an immune response similar to HeJ mice, with titers around 800 (Number III).</li>
        </ul>
        <p>Because the F2 generation includes individuals of all three genotypes, all three titer levels (I, II, and III) are expected to be observed in different F2 mice spleen cultures.</p>
      `,
      eo: "In a monohybrid cross, members of the P generation are homozygous for different alleles at one locus. The first cross produces heterozygous offspring in the F1 generation. The second cross produces a mix of genotypes and phenotypes observed in members of the F2 generation."
    },
    {
      qid: "400210",
      stem: "In an isolated population of 10,000 mice, 1,600 are homozygous for a Tlr4 defect. Assuming stable allele and genotype frequencies, how many mice are heterozygous for a Tlr4 defect?",
      preopts: "",
      options: [
        { L: "A", text: "2,400", pct: "11%", correct: false },
        { L: "B", text: "3,600", pct: "12%", correct: false },
        { L: "C", text: "4,800", pct: "62%", correct: true },
        { L: "D", text: "8,400", pct: "12%", correct: false }
      ],
      stat: "61% answered correctly",
      explanationHtml: `
        <p><strong>Hardy-Weinberg calculations</strong> can be used to relate allele and genotype frequencies in stable, nonevolving populations:</p>
        <p class="text-center" style="text-align: center;"><strong>p + q = 1</strong> (allele frequency equation)</p>
        <p class="text-center" style="text-align: center;"><strong>p<sup>2</sup> + 2pq + q<sup>2</sup> = 1</strong> (genotype frequency equation)</p>
        <p>Where:</p>
        <ul>
          <li>p = frequency of the normal allele</li>
          <li>q = frequency of the mutant (defective) allele</li>
          <li>p<sup>2</sup> = frequency of normal homozygotes</li>
          <li>2pq = frequency of heterozygotes</li>
          <li>q<sup>2</sup> = frequency of mutant homozygotes</li>
        </ul>
        <p>The frequency of mice homozygous for the mutated allele (q<sup>2</sup>) is 1,600 / 10,000 = 0.16. Therefore, the allele frequency q is:</p>
        <p class="text-center" style="text-align: center;">q = √0.16 = 0.40</p>
        <p>Using p + q = 1, we can find the frequency of the normal allele p:</p>
        <p class="text-center" style="text-align: center;">p = 1 − 0.40 = 0.60</p>
        <p>The frequency of the heterozygous genotype (2pq) is:</p>
        <p class="text-center" style="text-align: center;">2pq = 2(0.60)(0.40) = 0.48</p>
        <p>The total number of heterozygous mice in the population of 10,000 is:</p>
        <p class="text-center" style="text-align: center;">0.48 × 10,000 = 4,800 mice</p>
        <p><strong>(Choice A)</strong> 2,400 is one-half of the number of heterozygous mice (pq instead of 2pq).</p>
        <p><strong>(Choice B)</strong> 3,600 is equal to the number of mice homozygous for the normal allele: 10,000 × p<sup>2</sup> = 10,000 × 0.36.</p>
        <p><strong>(Choice D)</strong> 8,400 is the number of mice containing at least one copy of the normal allele: 10,000 × (p<sup>2</sup> + 2pq) = 10,000 × (1 − q<sup>2</sup>).</p>
      `,
      eo: "Hardy-Weinberg equations can be used to relate allele frequencies and genotype frequencies. Genotype frequencies are equal to the probability of inheriting each genotype, with the frequency of homozygotes equal to p^2 or q^2 and the frequency of heterozygotes equal to 2pq."
    },
    {
      qid: "400211",
      stem: "The experiments allowed researchers to determine the effect of genotype variation on all of the following EXCEPT:",
      preopts: "",
      options: [
        { L: "A", text: "in vitro versus in vivo studies.", pct: "18%", correct: false },
        { L: "B", text: "innate versus adaptive immune responses.", pct: "32%", correct: true },
        { L: "C", text: "responses modulated by LPS exposure.", pct: "1%", correct: false },
        { L: "D", text: "qualitative and quantitative phenotypic traits.", pct: "47%", correct: false }
      ],
      stat: "32% answered correctly",
      explanationHtml: `
        <p>The experiments in the passage performed several assessments of <i>Tlr4</i> genotype on mice. Experiment 1 was performed on spleen cells isolated from mice of various strains. Because these experiments were performed outside a living organism, they are considered <strong>in vitro</strong> experiments. Experiments 2 and 3 were performed in living mice and were therefore <strong>in vivo</strong> experiments. Combined with Experiment 1, these studies provide a comparison for in vitro versus in vivo effects (Choice A).</p>
        <p>In all three experiments, the mice or mouse cells were exposed to varying amounts of LPS to observe the resulting response (Choice C). Spleen cells were qualitatively characterized based on the types of proteins expressed via protein electrophoresis, and then quantitatively characterized based on antibody titer (Choice D).</p>
        <p>However, <strong>none of the experiments can be used to compare innate versus adaptive immune responses</strong>. While Experiment 1 measures antibody levels (specifically adaptive immunity), both the results of Experiments 2 and 3 measure combined effects of both innate and adaptive immunity. Interferons, measured in Experiment 2, are signaling molecules that act in both the innate and adaptive immune systems, and survival, measured in Experiment 3, is an outcome of overstimulation of both systems. Because none of the experiments are specific to innate immunity alone, researchers cannot differentiate the influence of genotype on innate versus adaptive immune response.</p>
      `,
      eo: "Experiments must be designed to isolate effects of the variables being tested. To compare innate vs adaptive immunity, innate immunity in isolation must be tested against adaptive immunity in isolation. In living organisms, both the innate and adaptive immune responses generally work together to protect the organism against foreign antigens."
    },
    {
      qid: "400212",
      stem: "According to the results of Experiment 3, which of the following could represent survival curves for F1 and HeJ mice?",
      preopts: "",
      options: [
        { L: "A", text: "Figure A (showing similar or identical survival curves for both F1 and HeJ mice)", pct: "20%", correct: false },
        { L: "B", text: "Figure B (showing F1 mice have higher survival than HeJ mice at lower concentrations)", pct: "24%", correct: false },
        { L: "C", text: "Figure C (showing the survival curve of HeJ shifted to the right of F1, representing a 10-fold higher LD50 for HeJ than F1)", pct: "37%", correct: true },
        { L: "D", text: "Figure D (showing the survival curve of F1 shifted to the right of HeJ, representing a higher LD50 for F1 than HeJ)", pct: "18%", correct: false }
      ],
      stat: "36% answered correctly",
      explanationHtml: `
        <p>Survival curves plot the fraction or number of surviving members as a function of an independent variable, usually time or drug dosage. In safety studies, survival curves are used to assess the <strong>lethal dose value LD<sub>50</sub></strong>, which is the <strong>minimum dose causing death in 50%</strong> of group members. On survival curves, this data point can be observed as the dose (x-value) corresponding to 50% survival (y-value).</p>
        <p>In this case, survival is a function of LPS dose. Experiment 3 states that compared to HeN, 10-fold and 100-fold increases in LD<sub>50</sub> were found for F1 and HeJ mice, respectively. This means that the LD<sub>50</sub> for HeJ mice was <strong>10 times greater</strong> than the LD<sub>50</sub> for F1 mice. The only survival curve that corresponds to this ratio is the one that shows that 50% of F1 mice died at a dose of 1 mg (LD<sub>50</sub> = 1 mg) and that 50% of HeJ mice died at a 10× higher dose of 10 mg (LD<sub>50</sub> = 10 mg).</p>
        <p><strong>(Choices A and B)</strong> These curves correspond to LD<sub>50</sub> values near 0.5 mg and 2.5 mg, which represents only a 5-fold difference.</p>
        <p><strong>(Choice D)</strong> In this curve, the LD<sub>50</sub> for the F1 mice is 10 times greater than the LD<sub>50</sub> for the HeJ mice. This is the opposite of what was observed in Experiment 3: LD<sub>50</sub> is greater in HeJ mice, not F1 mice.</p>
      `,
      eo: "Survival curves plot percent survival against an independent variable, usually time or dosage. Survival curves can be used to determine LD50, defined as the minimum dose causing death in 50% of test subjects."
    },
    {
      qid: "400213",
      stem: "In mice, a brown coat color is a dominant trait. Assuming that the HeN mice in the experiments were homozygous for the white allele (w/w) and the HeJ mice were homozygous for the brown allele (B/B), which of the following is true with regard to coat color and LPS response in subsequent generations?",
      preopts: "",
      options: [
        { L: "A", text: "F1 mice will produce gametes with equal haplotype frequencies.", pct: "31%", correct: false },
        { L: "B", text: "A large fraction of F2 mice exhibiting full response to LPS will be white.", pct: "35%", correct: true },
        { L: "C", text: "A large fraction of F1 mice exhibiting full response to LPS will be white.", pct: "18%", correct: false },
        { L: "D", text: "Half of F1 mice exhibiting full response to LPS will be brown and the other half will be white.", pct: "14%", correct: false }
      ],
      stat: "35% answered correctly",
      explanationHtml: `
        <p>The passage states that the <i>Tlr</i> gene and the coat color gene are close together on the same chromosome (Chromosome 4). Therefore, these genes are <strong>linked</strong> rather than independent.</p>
        <p><strong>Genetic linkage</strong> refers to the tendency of alleles on the same chromosome to remain on the same chromosome. Linked alleles will not separate independently during meiosis unless a crossing-over event happens. As the genes become closer in proximity, the frequency of crossing over between them decreases.</p>
        <p>The F1 generation, formed by the cross of white (w/w) HeN mice and homozygous brown (B/B) HeJ mice, have a genotype of <i>w,tlr4<sup>Lps-n</sup>/B,tlr4<sup>Lps-d</sup></i>. Because coat color and the <i>Tlr4</i> gene are closely linked, the gametes will <i>not</i> have equal haplotype frequencies (Choice A). Instead, coat color and <i>Tlr4</i> alleles will tend to stay together, and the majority of the gametes produced by F1 mice will have the nonrecombinant parental haplotypes (ie, <i>w,tlr4<sup>Lps-n</sup></i> and <i>B,tlr4<sup>Lps-d</sup></i>).</p>
        <p>Therefore, when these F1 mice mate with each other, offspring that are fully responsive to LPS will have a <i>Tlr</i> genotype of <i>tlr4<sup>Lps-n</sup>/tlr4<sup>Lps-n</sup></i>. Because the white coat color allele is linked to the responsive <i>Tlr</i> allele, the majority of these mice will have a full genotype of <i>w,tlr4<sup>Lps-n</sup>/w,tlr4<sup>Lps-n</sup></i> and be <strong>both fully responsive to LPS and white</strong>.</p>
        <p><strong>(Choices C and D)</strong> Because the brown allele is dominant, none of the heterozygous F1 mice will be white (they require two recessive w alleles). In addition, because the two <i>Tlr</i> alleles are codominant, none of the heterozygous F1 mice will show a full response to LPS.</p>
      `,
      eo: "Genetic linkage refers to the tendency of alleles in close proximity to remain on the same chromosome and be inherited together by offspring. This tendency occurs because of fewer crossover events between these loci during meiosis, resulting in a greater number of haploid gametes with nonrecombinant genotypes."
    }
  ]
};
