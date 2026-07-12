window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["frap-hmg-mobility"] = {
  id: "frap-hmg-mobility",
  title: "FRAP Analysis of H1-GFP and HMG Proteins",
  subject: "Biology",
  system: "Molecular Biology",
  difficulty: "Moderate",
  estMinutes: 7,
  passageHtml: `
    <p>Quantitative fluorescence recovery after photobleaching (FRAP) is used to study the movement of molecules in live cells. During FRAP, the fluorescence of a green fluorescent protein (GFP)–tagged molecule is first measured and then photobleached in targeted cell regions. Researchers then assess the time course for fluorescence recovery, which is an indicator of molecular mobility of the GFP-tagged molecule into the photobleached region. For example, the average time required to recover 80% of the pre-bleach fluorescence of protein histone 1 (H1) fused to GFP (H1-GFP) in the photobleached region is given as t<sub>80</sub>.</p>
    <p>FRAP was used to analyze the mobility of H1 alone and in the presence of high-mobility group (HMG) proteins. Specifically, when H1-GFP is less able to bind chromatin, its mobility increases, allowing H1 to enter photobleached regions more rapidly, thus decreasing t<sub>80</sub>. HMG proteins have been shown to have similar chromatin binding sites as H1 proteins. Figure 1 shows the chromatin binding motifs for different HMG proteins. Both H1 and HMG proteins can dynamically bind and unbind chromatin. Accordingly, researchers hypothesize that HMG competes with H1 for similar chromatin binding sites and therefore decreases H1 binding to chromatin.</p>
    <p><strong>Figure 1 Unique chromatin binding motifs for different HMG proteins:</strong>
      <ul>
        <li><strong>HMGB1:</strong> A-Box, B-Box, Acidic tail</li>
        <li><strong>HMGA1:</strong> AT-Hook, AT-Hook, AT-Hook</li>
        <li><strong>HMGN2:</strong> Nucleosomal binding domain, Unfolding domain</li>
      </ul>
    </p>
    <p>During an experiment to test this hypothesis, either HMGB1 or HMGA1 proteins were microinjecting into the cytoplasm of mouse embryonic fibroblast cells expressing H1-GFP, leading to abnormally high levels of these HMGs in the cells. Other fibroblasts received no injection. FRAP was performed on both euchromatin and heterochromatin in these cells. Euchromatin and heterochromatin domains were identified as regions weakly and strongly stained by H1-GFP, respectively. The relative intensity of H1-GFP fluorescence in chromatin of the cells was assessed, and t<sub>80</sub> results are shown in Table 1.</p>
    <p><strong>Table 1: Effect of HMGB1 and HMGA1 on H1-GFP Mobility</strong></p>
    <table class="table">
      <thead>
        <tr>
          <th>Experiment</th>
          <th>Chromatin domain</th>
          <th>t<sub>80</sub> (s) Average time ± SD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>H1-GFP</td>
          <td>Euchromatin</td>
          <td>104 ± 41</td>
        </tr>
        <tr>
          <td>H1-GFP + HMGB1</td>
          <td>Euchromatin</td>
          <td>46.0 ± 19</td>
        </tr>
        <tr>
          <td>H1-GFP</td>
          <td>Heterochromatin</td>
          <td>126 ± 42</td>
        </tr>
        <tr>
          <td>H1-GFP + HMGB1</td>
          <td>Heterochromatin</td>
          <td>82.3 ± 33</td>
        </tr>
        <tr>
          <td>H1-GFP</td>
          <td>Euchromatin</td>
          <td>103 ± 31</td>
        </tr>
        <tr>
          <td>H1-GFP + HMGA1</td>
          <td>Euchromatin</td>
          <td>48.7 ± 40</td>
        </tr>
        <tr>
          <td>H1-GFP</td>
          <td>Heterochromatin</td>
          <td>129 ± 40</td>
        </tr>
        <tr>
          <td>H1-GFP + HMGA1</td>
          <td>Heterochromatin</td>
          <td>83.8 ± 21</td>
        </tr>
      </tbody>
    </table>
  `,
  questions: [
    {
      qid: "400201",
      stem: "If mutant HMGN2 proteins were unable to bind their substrate and then erroneously mobilized to nucleoli, these proteins would be found in the sites of:",
      preopts: "",
      options: [
        { L: "A", text: "lipid synthesis.", pct: "3%", correct: false },
        { L: "B", text: "ATP synthesis.", pct: "3%", correct: false },
        { L: "C", text: "ribosome production.", pct: "78%", correct: true },
        { L: "D", text: "ribosome attachment.", pct: "14%", correct: false }
      ],
      stat: "78% answered correctly",
      explanationHtml: `
        <p>In this scenario, mutant HMGN2 proteins erroneously mobilize to <strong>nucleoli</strong>. In eukaryotic cells, the <strong>nucleolus is a dense, round body found within the nucleus that contains ribosomal DNA</strong>. Here, <strong>RNA polymerase I</strong> functions exclusively to transcribe the pre-ribosomal RNA (rRNA) gene into a single template that is subsequently processed into mature rRNA. As such, the function of RNA polymerase I is restricted to the nucleolus.</p>
        <p>In addition, the nucleolus is involved in the maturation and assembly of ribosomal subunits. Ribosomal proteins are synthesized in the cytoplasm from mRNA and transported into the nucleolus, where they combine with the newly transcribed rRNA to form <strong>precursors to the 40S and 60S subunits</strong>. These subunits are then shuttled out of the nucleus via nuclear pores and fully mature in the cytoplasm.</p>
        <p>Therefore, if mutant HMGN2 mobilized to nucleoli, these proteins would be found in sites of <strong>ribosome production</strong>.</p>
        <p><strong>(Choice A)</strong> The smooth endoplasmic reticulum (ER), not the nucleolus, serves as the site of lipid synthesis.</p>
        <p><strong>(Choice B)</strong> Mitochondria (not nucleoli) function mainly as the "powerhouses" of the cell by producing ATP, the cell's energy currency, via cellular respiration.</p>
        <p><strong>(Choice D)</strong> The rough ER has long, folded membranes coated with attached ribosomes that translate proteins destined for secretion. Although nucleoli participate in ribosome production, these structures do not serve as an attachment site for functional ribosomes.</p>
      `,
      eo: "In eukaryotic cells, the nucleolus is found within the nucleus and is the primary site of ribosomal RNA (rRNA) transcription by RNA polymerase I. Ribosomal proteins synthesized in the cytoplasm are transported into the nucleolus, where they combine with rRNA to form 40S and 60S ribosomal subunit precursors. These precursors are exported from the nucleus to fully mature in the cytoplasm."
    },
    {
      qid: "400202",
      stem: "Based on Figure 1, HMGN2 is most likely to interact with histone complexes that are rich in:",
      preopts: "",
      options: [
        { L: "A", text: "aspartate and glutamate.", pct: "29%", correct: false },
        { L: "B", text: "aspartate and arginine.", pct: "3%", correct: false },
        { L: "C", text: "lysine and glutamate.", pct: "8%", correct: false },
        { L: "D", text: "lysine and arginine.", pct: "57%", correct: true }
      ],
      stat: "58% answered correctly",
      explanationHtml: `
        <p>Based on Figure 1, the protein HMGN2 contains a <strong>nucleosomal binding domain</strong>, meaning that it most likely interacts with a nucleosome. Within chromatin, the nucleosome consists of both DNA and the histones this DNA is wrapped around.</p>
        <p>During the initial steps of DNA packaging in the cell nucleus, the DNA double helix wraps twice around a histone octamer (eight-protein complex) to form a structural subunit known as the <strong>nucleosome</strong>. H1, H2A, H2B, H3, and H4 are the five major histone types.</p>
        <p>Because DNA is <strong>negatively charged</strong>, histone proteins must have a net <strong>positive charge</strong> to facilitate DNA binding. Histones have a net positive charge at physiological pH because they are rich in <strong>arginine and lysine</strong> (positively charged, basic amino acids).</p>
        <p><strong>(Choices A, B, and C)</strong> Molecules with opposing charges attract each other but those with like charges repel each other. Aspartate and glutamate are negatively charged amino acids, and therefore would impede (ie, repel) binding to the DNA double helix, which is also negatively charged. As a result, histones would likely not be rich in these types of amino acids.</p>
      `,
      eo: "The nucleosome is a structural subunit composed of DNA wrapped twice around a histone octamer, which contains two molecules each of H2A, H2B, H3, and H4. H1 is located outside the octamer core and serves as the 'linker' protein that secures the DNA wrapped around the nucleosome. Histone proteins are rich in positively charged arginine and lysine, which facilitate binding to negatively charged DNA."
    },
    {
      qid: "400203",
      stem: "The experimental design described in the passage allowed researchers to do which of the following?\n\nI. Assess whether structural chromatin organization influences H1 mobility\nII. Assess H1 and GFP competition at different levels of DNA compaction\nIII. Evaluate if HMG proteins interact with multiple histone types",
      preopts: "",
      options: [
        { L: "A", text: "I only", pct: "29%", correct: true },
        { L: "B", text: "I and II only", pct: "40%", correct: false },
        { L: "C", text: "II and III only", pct: "8%", correct: false },
        { L: "D", text: "I, II, and III", pct: "22%", correct: false }
      ],
      stat: "28% answered correctly",
      explanationHtml: `
        <p>In the passage, researchers used quantitative fluorescence recovery after photobleaching (FRAP) analysis to study the molecular mobility of H1 in the two known forms of chromatin, heterochromatin and euchromatin, which differ greatly in compaction level. Based on this fact, it can be postulated that one of their goals was to assess how the <strong>mobility of H1 is influenced by chromatin compaction and organization (Number I)</strong>.</p>
        <p><strong>(Number II)</strong> An objective of this experiment is to study the mobility of H1, <i>not GFP</i>. The GFP molecule serves as the fluorescent tag that allows tracking of H1 movement within the cell, but there is no competition between the two molecules.</p>
        <p><strong>(Number III)</strong> During the passage experiment, H1 mobility was examined in the presence and absence of HMG proteins to determine if HMG proteins compete with H1 for chromatin binding sites. However, this experiment only evaluated how HMG proteins interact with one type of histone (ie, H1), <i>not multiple</i> histone types.</p>
      `,
      eo: "Chromatin compaction can influence accessibility of regulatory factors to DNA. The known H1 function is to stabilize chromatin compaction by securing nucleosome packaging. However, competing proteins may decrease H1 binding."
    },
    {
      qid: "400204",
      stem: "The molecules in Figure 1 were analyzed using SDS-page gel electrophoresis, with the results shown below. Which of the following describes the correct experimental methodology?",
      preopts: "",
      options: [
        { L: "A", text: "The intrinsic charges of the proteins were masked by a reducing agent.", pct: "20%", correct: false },
        { L: "B", text: "The disulfide bonds were disrupted by the detergent sodium dodecyl sulfate.", pct: "31%", correct: false },
        { L: "C", text: "The bands on the gel were stained with a dye that causes DNA to fluoresce.", pct: "13%", correct: false },
        { L: "D", text: "The molecules were run through a highly crosslinked polyacrylamide gel.", pct: "34%", correct: true }
      ],
      stat: "33% answered correctly",
      explanationHtml: `
        <p>The proteins shown in Figure 1 were analyzed via sodium dodecyl sulfate polyacrylamide gel electrophoresis (<strong>SDS-PAGE</strong>), which is used to <strong>separate proteins by size (ie, molecular weight)</strong>. During this procedure, samples are first heated with SDS, a denaturing detergent that coats proteins with a negative charge proportional to their length.</p>
        <p>Proteins are generally smaller than DNA molecules, and therefore are loaded on a <strong>highly crosslinked polyacrylamide gel</strong> instead of an agarose gel, which has larger pores. An electric current is applied and the negatively coated proteins travel through the gel matrix <strong>toward the anode</strong>, denoted as the positive electrode. Smaller proteins travel faster than larger ones, creating size-separated bands.</p>
        <p><strong>(Choices A and B)</strong> During SDS-PAGE, the intrinsic protein charge is masked (ie, made negative) by the detergent SDS, <i>not a reducing agent</i>. When necessary, reducing agents (eg, β-mercaptoethanol), not SDS, are used in SDS-PAGE to break disulfide bonds, disrupting tertiary and quaternary structure.</p>
        <p><strong>(Choice C)</strong> Figure 1 shows the chromatin binding motifs of HMG <i>proteins</i>, not DNA. In agarose gel electrophoresis, ethidium bromide is used as a stain to make DNA (not protein) bands fluoresce.</p>
      `,
      eo: "SDS-PAGE is used to separate proteins by molecular weight. During the procedure, SDS coats proteins with a negative charge and an electric current is then applied. Smaller proteins travel through a polyacrylamide gel toward the positive anode faster than larger ones, creating lanes of size-separated protein bands."
    },
    {
      qid: "400205",
      stem: "A recent study of a model organism found that a specific HMG protein localized mainly to the ends of chromosomes. Given this result, the site of localization for this HMG protein would correspond to regions in humans that:",
      preopts: "",
      options: [
        { L: "A", text: "contain multiple copies of different DNA sequences.", pct: "15%", correct: false },
        { L: "B", text: "contain heterochromatin similar to that found in centromeres.", pct: "49%", correct: true },
        { L: "C", text: "are subsequently lengthened with each round of cell division.", pct: "22%", correct: false },
        { L: "D", text: "are actively replicated by the enzyme DNA polymerase in all cells.", pct: "11%", correct: false }
      ],
      stat: "48% answered correctly",
      explanationHtml: `
        <p><strong>Telomeres</strong> are regions at chromosomal ends that are repeatedly truncated with each round of cell division. <strong>Centromeres</strong> join two sister chromatids and are required for proper chromosome division during mitosis. Despite their different chromosomal locations, <strong>both telomeres and centromeres are composed of heterochromatin</strong>, a tightly condensed complex of DNA wrapped around histones.</p>
        <p>Because of its structurally restrictive form, heterochromatin is transcriptionally inactive, meaning that proteins responsible for regulating gene expression cannot access the tightly packed DNA. As a result, heterochromatic regions are often gene-poor and contain repetitive DNA.</p>
        <p>In this question, a study of a model organism found that a specific HMG protein localized mostly to the ends of chromosomes (ie, telomeres). Therefore, the site of localization for this HMG protein would correspond to chromosome regions in humans that contain heterochromatin similar to that found in centromeres.</p>
        <p><strong>(Choice A)</strong> Telomeres contain repeats of only TTAGGG, a <i>single</i> DNA sequence of six nucleotides that is added by the enzyme telomerase. Multiple copies of <i>differing</i> DNA sequences are not present in telomeres.</p>
        <p><strong>(Choice C)</strong> Each round of cell division leads to subsequently <i>shortened</i> (not lengthened) telomeres.</p>
        <p><strong>(Choice D)</strong> Telomerase is known as an RNA-directed DNA polymerase. In general, only embryonic stem cells and germline cells (not somatic cells) express telomerase. However, the DNA polymerase responsible for carrying out DNA synthesis in all cells <i>cannot</i> replicate chromosomal ends.</p>
      `,
      eo: "Centromeres join two sister chromatids and are essential for proper chromosome division during mitosis. Telomeres are regions at the chromosome ends that are repeatedly truncated each time a cell divides. Both centromeres and telomeres are composed of heterochromatin, a transcriptionally inactive and tightly condensed complex of DNA wrapped around histones."
    }
  ]
};
