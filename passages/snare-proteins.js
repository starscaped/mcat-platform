window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["snare-proteins"] = {
  id: "snare-proteins",
  title: "SNARE Proteins and Membrane Fusion",
  subject: "Biochemistry",
  system: "Amino Acids and Proteins",
  difficulty: "Moderate",
  estMinutes: 6,
  passageHtml: `
    <p>Presynaptic nerve terminals release neurotransmitters via synaptic vesicle exocytosis. This action is mediated by the membrane-bound target-SNARE (t-SNARE) proteins syntaxin and SNAP-25, and the vesicle-associated SNARE (v-SNARE) protein synaptobrevin. Membrane fusion is initiated when the t-SNAREs and v-SNAREs form an &alpha;-helix bundle known as the core-<em>trans</em>-complex, achieved by zipping SNARE proteins together to form a more stable <em>cis</em>-complex (Figure 1).</p>
    
    <p>The <em>cis</em>-complex contains a region called the zero ionic layer, which is the main site of interaction between complexed proteins. Within the zero ionic layer, arginine on synaptobrevin coordinates with carbonyl groups present on the other residues shown in Table 1. The zero ionic layer is buried within amphipathic domains called leucine zippers, which shield the zero ionic layer from solvent molecules.</p>
    
    <p class="figcap"><b>Table 1</b>&nbsp;&nbsp;Key Amino Acids of the <em>cis</em>-Complex Zero Ionic Layer</p>
    <table class="passage-table">
      <thead>
        <tr>
          <th>SNARE protein</th>
          <th>Zero ionic layer residue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Synaptobrevin</td>
          <td>R56</td>
        </tr>
        <tr>
          <td>Syntaxin</td>
          <td>Q226</td>
        </tr>
        <tr>
          <td>SNAP-25 (Sn1)</td>
          <td>Q53</td>
        </tr>
        <tr>
          <td>SNAP-25 (Sn2)</td>
          <td>Q174</td>
        </tr>
      </tbody>
    </table>
    
    <p>Once membrane fusion occurs, the <em>cis</em>-complex must disassemble. An early step in <em>cis</em>-complex disassembly is destabilization by the ATPase <em>N</em>-ethylmaleimide-sensitive factor (NSF), which disrupts leucine zipper regions, leading to vesicle reuptake. Movement of NSF to the cell membrane is mediated by the cytoplasmic protein &alpha;-SNAP, which recruits NSF after binding the N-terminal domain of syntaxin.</p>
    <p>To determine the effect of synaptobrevin on the binding of &alpha;-SNAP to syntaxin, increasing amounts of recombinant His-tagged &alpha;-SNAP were added to a constant amount of syntaxin affixed to glutathione-agarose beads in the presence or absence of synaptobrevin. After incubation, bound &alpha;-SNAP was recovered and quantitatively analyzed by immunoblotting. Results are shown in Figure 2.</p>
    
    <p class="figcap"><b>Figure 2</b>&nbsp;&nbsp;&alpha;-SNAP binding to syntaxin under increasing concentration of &alpha;-SNAP</p>
    <div style="border: 1px solid var(--border); border-radius: var(--radius); padding: 12px; margin-bottom: 12px; font-size: 13px;">
      <strong>Experimental Observation (Figure 2):</strong><br>
      &bull; <strong>With synaptobrevin:</strong> Binding of &alpha;-SNAP is highly efficient and levels off (saturates) at higher concentrations of &alpha;-SNAP (~2 &micro;M).<br>
      &bull; <strong>Without synaptobrevin:</strong> Binding of &alpha;-SNAP is significantly reduced and increases linearly over the tested concentration range (no saturation observed).
    </div>
  `,
  questions: [
    {
      qid: "400068",
      stem: "During <em>cis</em>-complex disassembly, what consequence of NSF function is most likely responsible for destabilization of the <em>cis</em>-complex?",
      preopts: "",
      options: [
        { L: "A", text: "Exposure of the zero ionic layer's charged amino acids to solvent molecules", pct: "66%", correct: true },
        { L: "B", text: "Increased repulsive interactions among charged residues in the zero ionic layer", pct: "19%", correct: false },
        { L: "C", text: "Increased amphipathic qualities of the leucine zipper dimer", pct: "10%", correct: false },
        { L: "D", text: "Release of v-SNARE proteins from synaptic vesicles", pct: "4%", correct: false }
      ],
      stat: "66% answered correctly",
      explanationHtml: `
        <p>Typically, <strong>hydrophilic amino acids</strong> (polar and charged) are found on the <strong>outside of proteins</strong>, where they interact favorably with water molecules. <strong>Hydrophobic amino acids</strong> are usually shielded from the solvation layer in the <strong>protein interior</strong> or found at <strong>protein-protein interfaces</strong>. This arrangement is entropically favorable, as water molecules cannot form hydrogen bonds with hydrophobic residues, and therefore must organize around these residues.</p>
        <p>Leucine is hydrophobic and leucine zipper layers act as a watertight seal around the zero ionic layer, in which a positively charged, basic arginine (R) residue interacts with polar glutamine (Q) residues at the interface of the complexed proteins.</p>
        <p>NSF destabilizes the <em>cis</em>-complex by breaking the leucine zipper seal (ie, unzipping). Without the watertight seal provided by the leucine zipper, the charged and polar residues of the zero ionic layer are exposed to water. Because water is polar, exposure of the charged and polar residues results in <strong>preferential binding to water</strong> and resultant <strong>destabilization</strong> of the <em>cis</em>-complex.</p>
        <p><strong>(Choice B)</strong> The charges on residues in the zero ionic layer do not change, so no additional repulsive forces are added by breaking the leucine zipper.</p>
        <p><strong>(Choice C)</strong> A leucine zipper is a common protein motif composed of two amphipathic &alpha;-helices, meaning they possess both hydrophilic and hydrophobic residues. Unzipping does not change the residues, and therefore would not change the amphipathic qualities of the zipper.</p>
        <p><strong>(Choice D)</strong> Release of v-SNARE proteins does not occur until after <em>cis</em>-complex disassembly.</p>
      `,
      eo: "Hydrophilic amino acids are typically found on the outside of proteins whereas hydrophobic amino acids exist in the protein interior and protein-protein interfaces. When polar or charged amino acids are exposed to water, they preferentially form hydrogen bonds with water molecules."
    },
    {
      qid: "400070",
      stem: "Which of the following amino acid substitutions is most likely to interrupt the interactions of the zero ionic layer?",
      preopts: "",
      options: [
        { L: "A", text: "R56K on synaptobrevin", pct: "17%", correct: false },
        { L: "B", text: "Q53R on SNAP-25 (Sn1)", pct: "61%", correct: true },
        { L: "C", text: "E224D on syntaxin", pct: "13%", correct: false },
        { L: "D", text: "Q174N on SNAP-25 (Sn2)", pct: "7%", correct: false }
      ],
      stat: "61% answered correctly",
      explanationHtml: `
        <p><strong>Amino acid substitutions</strong> can alter the behavior of the associated protein. Most commonly, these substitutions are denoted by writing the one-letter code of the original amino acid followed by the amino acid position, and then the one-letter code of the new amino acid. For instance, R56K indicates that the arginine (R) at position 56 has been changed to lysine (K). Amino acid substitutions that <strong>alter charge</strong> are likely to destabilize protein interactions.</p>
        <p>In this example, <strong>Q53R</strong> denotes the <strong>replacement of glutamine with arginine</strong> at position 53 on SNAP-25 (Sn1). As the passage suggests, the zero ionic layer is stabilized by attractive forces between the carbonyl groups (partial negative charge) on glutamine residues and the positively charged arginine on synaptobrevin. Substitution of glutamine with arginine results in a <strong>repulsive positive-positive ion interaction</strong> between the two arginine residues, <strong>destabilizing the interaction</strong> between the proteins in the complex.</p>
        <p><strong>(Choice A)</strong> R56K denotes the substitution of arginine with lysine on synaptobrevin. Because both amino acids are positively charged, this substitution would be expected to have a relatively small effect on protein-protein interactions.</p>
        <p><strong>(Choice C)</strong> E224D denotes the substitution of glutamate at position 224 on syntaxin with aspartate. According to Table 1, residue 226 rather than 224 is in the zero ionic layer. Because glutamate and aspartate are both negatively charged, this substitution is unlikely to significantly alter the properties of the protein.</p>
        <p><strong>(Choice D)</strong> Q174N denotes the substitution of glutamine with asparagine on SNAP-25 (Sn2). Asparagine is similar in structure to glutamine, and therefore most likely interacts similarly within the zero ionic layer.</p>
      `,
      eo: "Amino acid substitutions are denoted by the original amino acid, the amino acid position, and the substituting amino acid. Amino acid substitutions that alter charge are likely to destabilize protein interactions, particularly if they result in repulsive forces between similarly charged amino acids."
    },
    {
      qid: "400071",
      stem: "Which of the following statements regarding the binding of &alpha;-SNAP to syntaxin is best supported by the results shown in Figure 2?",
      preopts: "",
      options: [
        { L: "A", text: "Binding does not occur in the presence of synaptobrevin.", pct: "2%", correct: false },
        { L: "B", text: "Synaptobrevin induces a conformation change in syntaxin that results in lower binding affinity.", pct: "9%", correct: false },
        { L: "C", text: "In the absence of synaptobrevin, binding does not saturate under the conditions of the experiment.", pct: "79%", correct: true },
        { L: "D", text: "Interaction of synaptobrevin and syntaxin raises the K<sub>d</sub> for the dissociation of syntaxin from &alpha;-SNAP.", pct: "10%", correct: false }
      ],
      stat: "79% answered correctly",
      explanationHtml: `
        <p>Substrate binding curves relate the number of bound substrate molecules (percent saturation) to substrate concentration. Initially, substrate protein binding is approximately linear. When proteins reach saturation, all binding sites are occupied; this condition can be observed as the binding curve leveling off at the binding limit, which is dependent on the amount of protein present and the number of binding sites. At this binding limit, addition of more substrate does not result in increased binding.</p>
        <p>Figure 2 shows that when synaptobrevin is present, increasing &alpha;-SNAP beyond 2 &micro;M does not result in increased binding, suggesting that all binding sites are saturated. Conversely, when synaptobrevin is absent, &alpha;-SNAP binding to syntaxin is reduced, and the amount of &alpha;-SNAP bound to syntaxin increases linearly over the range tested, suggesting that <strong>binding has not approached saturation</strong> under these conditions.</p>
        <p><strong>(Choice A)</strong> The data show that &alpha;-SNAP binds to syntaxin to different extents in both the presence and absence of synaptobrevin.</p>
        <p><strong>(Choice B)</strong> The amount of &alpha;-SNAP bound to syntaxin <em>increases</em> when synaptobrevin is present. This behavior suggests a <em>higher</em> binding affinity in the presence of synaptobrevin.</p>
        <p><strong>(Choice D)</strong> The dissociation constant K<sub>d</sub> is an equilibrium constant for the dissociation of bound molecules. An increased K<sub>d</sub> reflects <em>decreased</em> binding affinity. The data suggest that synaptobrevin interacting with syntaxin <em>increases</em> &alpha;-SNAP binding affinity, which would <em>decrease</em> the K<sub>d</sub> for &alpha;-SNAP dissociation.</p>
      `,
      eo: "On substrate binding curves, substrate-protein binding is approximately linear at low substrate levels. When proteins reach saturation, all binding sites are occupied and binding curves level off because the further addition of substrate does not increase binding."
    },
    {
      qid: "400072",
      stem: "Wild-type syntaxin (Synt-WT) and mutant syntaxins containing a deletion of the N-terminal sequence (Synt&Delta;A) or C-terminal sequence (Synt&Delta;B) were separated and incubated with &alpha;-SNAP. After washing away unbound molecules, which of the following is the most likely result of protein immunoblotting for &alpha;-SNAP?",
      preopts: "",
      options: [
        { 
          L: "A", 
          text: `
            <div style="font-size: 11px; margin-bottom: 4px;">WT & &Delta;B lanes have thick bands; &Delta;A lane is empty/faint:</div>
            <div style="display: flex; gap: 8px; justify-content: center; align-items: flex-end; height: 50px; background: #111; padding: 8px; border-radius: 4px; width: 180px;">
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 8px; width: 100%; background: #fff; border-radius: 1px; box-shadow: 0 0 4px #fff;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">WT</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 1px; width: 100%; background: rgba(255,255,255,0.15); border-radius: 1px;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">&Delta;A</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 8px; width: 100%; background: #fff; border-radius: 1px; box-shadow: 0 0 4px #fff;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">&Delta;B</span>
              </div>
            </div>
          `, 
          pct: "69%", 
          correct: true 
        },
        { 
          L: "B", 
          text: `
            <div style="font-size: 11px; margin-bottom: 4px;">WT & &Delta;A lanes have thick bands; &Delta;B lane is empty/faint:</div>
            <div style="display: flex; gap: 8px; justify-content: center; align-items: flex-end; height: 50px; background: #111; padding: 8px; border-radius: 4px; width: 180px;">
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 8px; width: 100%; background: #fff; border-radius: 1px; box-shadow: 0 0 4px #fff;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">WT</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 8px; width: 100%; background: #fff; border-radius: 1px; box-shadow: 0 0 4px #fff;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">&Delta;A</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 1px; width: 100%; background: rgba(255,255,255,0.15); border-radius: 1px;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">&Delta;B</span>
              </div>
            </div>
          `, 
          pct: "3%", 
          correct: false 
        },
        { 
          L: "C", 
          text: `
            <div style="font-size: 11px; margin-bottom: 4px;">WT lane is empty; &Delta;A & &Delta;B lanes have thick bands:</div>
            <div style="display: flex; gap: 8px; justify-content: center; align-items: flex-end; height: 50px; background: #111; padding: 8px; border-radius: 4px; width: 180px;">
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 1px; width: 100%; background: rgba(255,255,255,0.15); border-radius: 1px;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">WT</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 8px; width: 100%; background: #fff; border-radius: 1px; box-shadow: 0 0 4px #fff;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">&Delta;A</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 8px; width: 100%; background: #fff; border-radius: 1px; box-shadow: 0 0 4px #fff;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">&Delta;B</span>
              </div>
            </div>
          `, 
          pct: "23%", 
          correct: false 
        },
        { 
          L: "D", 
          text: `
            <div style="font-size: 11px; margin-bottom: 4px;">All lanes (WT, &Delta;A, &Delta;B) have thick bands:</div>
            <div style="display: flex; gap: 8px; justify-content: center; align-items: flex-end; height: 50px; background: #111; padding: 8px; border-radius: 4px; width: 180px;">
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 8px; width: 100%; background: #fff; border-radius: 1px; box-shadow: 0 0 4px #fff;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">WT</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 8px; width: 100%; background: #fff; border-radius: 1px; box-shadow: 0 0 4px #fff;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">&Delta;A</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 8px; width: 100%; background: #fff; border-radius: 1px; box-shadow: 0 0 4px #fff;"></div>
                <span style="color: #ccc; font-size: 8px; margin-top: 3px;">&Delta;B</span>
              </div>
            </div>
          `, 
          pct: "3%", 
          correct: false 
        }
      ],
      stat: "69% answered correctly",
      explanationHtml: `
        <p>Western blot (protein immunoblotting) is a protein separation and identification technique that uses labeled antibodies to detect specific proteins after gel electrophoresis. In this example, the antibody is designed to bind &alpha;-SNAP. Therefore, after unbound &alpha;-SNAP is washed away, protein samples are visualized on a western blot in proportion to &alpha;-SNAP binding.</p>
        <p>The passage indicates that &alpha;-SNAP binds syntaxin at its N-terminal domain. The mutant syntaxin Synt&Delta;A described in the question lacks the N-terminal domain and is unlikely to bind &alpha;-SNAP in large quantities, leading to little &alpha;-SNAP&ndash;bound syntaxin for this mutation. In contrast, deletion of the C-terminal domain (Synt&Delta;B) is not expected to affect &alpha;-SNAP binding compared to binding of the wild-type (WT) protein. Therefore, &alpha;-SNAP in the WT protein and Synt&Delta;B samples are visualized as large bands whereas less &alpha;-SNAP is visualized in the Synt&Delta;A sample.</p>
        <p><strong>(Choice B)</strong> &alpha;-SNAP poorly binds the mutant syntaxin Synt&Delta;A. The quantity (band intensity) of &alpha;-SNAP&ndash;bound Synt&Delta;A should be less than WT and Synt&Delta;B.</p>
        <p><strong>(Choice C)</strong> According to the passage, &alpha;-SNAP binds syntaxin's N-terminal domain. Modification of the C-terminal domain in Synt&Delta;B should not impact &alpha;-SNAP binding, so the Synt&Delta;B lane should look similar to the WT lane.</p>
        <p><strong>(Choice D)</strong> Synt-WT binds &alpha;-SNAP effectively, so the western blot should show a full band in the WT lane, but Synt&Delta;A should have a faint or absent band.</p>
      `,
      eo: "Western blot (protein immunoblotting) uses antibodies to detect specific proteins. Greater quantities of the protein of interest manifest as larger/darker bands on the resultant blot."
    }
  ]
};
