window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["hif1-gut-barrier"] = {
  id: "hif1-gut-barrier",
  title: "Hypoxia Inducible Factor 1 and Gut Barrier Integrity",
  subject: "Biology",
  system: "Digestion and Excretion",
  difficulty: "Hard",
  estMinutes: 7.5,
  passageHtml: `
    <p>The lumen of the human gut is lined by a monolayer of epithelial cells that acts as a selectively permeable barrier, preventing the passage of harmful intraluminal foreign antigens, flora, and toxins into circulation while allowing digestion and absorption of essential dietary nutrients along with the transfer of electrolytes and water.</p>
    <p>Proteins in the tight junctions of intestinal epithelial cells maintain barrier integrity, but barrier dysfunction occurs when these cells are damaged in the setting of infection, burns, shock, or hypoxia (low oxygen levels). The transcription factor HIF-1, a heterodimer composed of the macromolecules HIF-1&alpha; and HIF-1&beta;, regulates the adaptive cellular response to hypoxia.</p>
    <p>Researchers assessed the concentration of HIF-1 heterodimer components in human intestinal Caco-2 cells subjected to hypoxia/reoxygenation (H/R) in vitro. Caco-2 cells, a cell line originally derived from colon cells, were cultured under specific conditions to mimic the functional and morphological phenotype of wild-type enterocytes (ie, the cells lining the small intestine). These cells were prepared and grown as a monolayer on a collagen-coated membrane.</p>
    <p>The monolayer was then cultured in hypoxic conditions and samples exposed to atmospheric oxygen levels (normoxia) for 30, 60, and 120 minutes. Protein levels were quantified using direct enzyme-linked immunosorbent assay (ELISA), in which an antibody linked to a reporter enzyme was used to bind and detect expression of the target molecule (analyte) in a sample. When the colorless substrate of the reporter enzyme was added, the enzyme generated a visible colored product that could be quantified based on color intensity.</p>
    
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;Concentration of (A) HIF-1&alpha; and (B) HIF-1&beta; in Caco-2 cells subjected to H/R</p>
    <div style="border: 1px solid var(--border); border-radius: var(--radius); padding: 12px; margin-bottom: 12px; font-size: 13px;">
      <strong>Trend Summary (Figure 1):</strong><br>
      &bull; <strong>HIF-1&alpha; levels:</strong> Greatest under hypoxic conditions (0 minutes, ~180 pg/mL) and decrease rapidly upon normoxic reoxygenation (~110 pg/mL at 30 min, ~75 pg/mL at 60 min, and ~40 pg/mL at 120 min).<br>
      &bull; <strong>HIF-1&beta; levels:</strong> Remain relatively high and constant (~300 pg/mL) across all time points (0, 30, 60, and 120 minutes of normoxia).
    </div>
    
    <p>Emodin, an anthraquinone compound that prevents hypoxia-induced epithelial cell disruption, was used in conjunction with a chemical HIF-1&alpha; inhibitor (HIF-1&alpha;-I) to treat Caco-2 cells in a separate experiment. Transepithelial electrical resistance (TEER) was assessed as a measure of barrier function, with higher TEER values indicating a more intact epithelial cell barrier. HIF-1&alpha;-I was found to block emodin's protective effect on epithelial barrier integrity.</p>
  `,
  questions: [
    {
      qid: "400093",
      stem: "Which of the following statements about HIF-1 is most likely true?",
      preopts: `<div class="roman">I. At low oxygen levels, HIF-1 is nonfunctional.<br>II. At low oxygen levels, HIF-1 is functional.<br>III. At atmospheric oxygen levels, HIF-1 concentration is decreased.<br>IV. At atmospheric oxygen levels, HIF-1 concentration is increased.</div>`,
      options: [
        { L: "A", text: "I and III only", pct: "5%", correct: false },
        { L: "B", text: "I and IV only", pct: "5%", correct: false },
        { L: "C", text: "II and III only", pct: "82%", correct: true },
        { L: "D", text: "II and IV only", pct: "6%", correct: false }
      ],
      stat: "82% answered correctly",
      explanationHtml: `
        <p>The passage states that HIF-1&alpha; and HIF-1&beta; comprise the HIF-1 heterodimer, a protein complex composed of two different subunits. Based on the definition, HIF-1 requires assembly of these subunits to function. The graphs in Figure 1 show that both HIF-1&alpha; and HIF-1&beta; are expressed and functional at 0, 30, 60, and 120 minutes, suggesting that the <strong>HIF-1 dimer can be assembled</strong> at all these time points.</p>
        <p>Figure 1A shows that HIF-1&alpha; concentration is greatest under hypoxic conditions (low oxygen, time 0). However, when exposed to atmospheric (normal) oxygen concentrations (ie, 30, 60, 120 minutes), HIF-1&alpha; is degraded and its levels decrease in a time-dependent manner.</p>
        <p>In contrast, HIF-1&beta; levels are relatively unaffected in both low and atmospheric oxygen concentrations, as shown in Figure 1B. Oxygen exposure promotes degradation of HIF-1&alpha; but not HIF-1&beta;. As a result, HIF-1 is able to form and function when exposed to atmospheric oxygen levels, but its concentration would be reduced due to the decreased amount of HIF-1&alpha; available to dimerize with an unchanged amount of HIF-1&beta;. Therefore, at low oxygen levels, HIF-1 is <strong>functional</strong> but at atmospheric oxygen levels, HIF-1 concentration is <strong>decreased</strong> (Numbers II and III).</p>
        <p><strong>(Numbers I and IV)</strong> Although HIF-1 concentration is <em>decreased</em> at atmospheric oxygen levels, it is still <em>functional</em> at both low and atmospheric oxygen levels because the subunits that comprise the dimer are present at all time points assessed.</p>
      `,
      eo: "A heterodimer is composed of two different protein subunits, and its assembly and activity are dependent on the expression and proper function of these subunits. Oxygen concentration, among other factors (eg, temperature, pH), has been shown to influence protein expression."
    },
    {
      qid: "400094",
      stem: "Developmental protocols for Caco-2 monolayers involve the use of cells with high proliferation potential that can differentiate in a synchronized manner to form homogenous monolayers. This proliferation of Caco-2 cells is primarily achieved through:",
      preopts: "",
      options: [
        { L: "A", text: "meiosis.", pct: "4%", correct: false },
        { L: "B", text: "fission.", pct: "11%", correct: false },
        { L: "C", text: "completion of the G<sub>2</sub> phase of the cell cycle.", pct: "10%", correct: false },
        { L: "D", text: "completion of the M phase of the cell cycle.", pct: "74%", correct: true }
      ],
      stat: "74% answered correctly",
      explanationHtml: `
        <p>Throughout the adult life span, cells capable of continuous division function to replace cells with high turnover rate (eg, endothelial cells lining blood vessels, epithelial cells lining hollow internal organs). In contrast, many cells in adult humans are arrested in the G<sub>0</sub> (nondividing) phase of the cell cycle. Although certain cell types remain in this stage and exhibit minimal to nonexistent proliferation capacity (eg, cardiac myocytes, neurons), other cell types can resume the cell cycle and proliferate to replace cells that have been lost due to injury or programmed cell death (ie, apoptosis). Accordingly, homeostatic mechanisms function to maintain a balanced ratio of proliferating to dying cells in human tissues and organs.</p>
        <p>Based on the passage, the researchers used Caco-2 monolayers to carry out their experiments, and under the conditions of the experiment these Caco-2 cells share the same morphology (shape) and function as cells lining the small intestine. In addition, the question states that these cells are highly proliferative. Caco-2 cells are nongametic (somatic) cells; therefore, each parental Caco-2 cell would only be able to proliferate in the manner that a somatic cell can, by completing the <strong>M phase (mitosis)</strong> of the cell cycle to create two <em>genetically identical</em> daughter cells.</p>
        <p><strong>(Choice A)</strong> In eukaryotes, reproductive cells (ie, gametes), <em>not</em> somatic cells, are produced via meiosis, during which a parent cell (2n) divides to produce four genetically distinct daughter cells containing half the original number of chromosomes (1n).</p>
        <p><strong>(Choice B)</strong> The cells of multicellular organisms (eg, humans) <em>cannot</em> divide by binary fission. Binary fission is the process by which single-celled organisms, such as bacteria, reproduce asexually. During binary fission, the parental cell doubles in size and then divides into two identical daughter cells.</p>
        <p><strong>(Choice C)</strong> Cell growth and repair of DNA replication errors occur during the G<sub>2</sub> phase of the cell cycle; cell division does <em>not</em> occur at this stage.</p>
      `,
      eo: "In multicellular organisms (eg, eukaryotes), nongametic (somatic) cells can divide and multiply via mitosis whereas gametic (ie, reproductive) cells divide and multiply via meiosis. Biological homeostatic mechanisms function to maintain a balanced ratio of proliferating to dying cells in human tissues and organs. In contrast, cell division in single-celled organisms (eg, prokaryotes) occurs via binary fission."
    },
    {
      qid: "400095",
      stem: "Based on the passage, Caco-2 cells originate from a segment of the gut that mainly functions to:",
      preopts: "",
      options: [
        { L: "A", text: "absorb nutrients.", pct: "21%", correct: false },
        { L: "B", text: "absorb water.", pct: "70%", correct: true },
        { L: "C", text: "produce proteolytic enzymes.", pct: "2%", correct: false },
        { L: "D", text: "digest nutrients.", pct: "5%", correct: false }
      ],
      stat: "70% answered correctly",
      explanationHtml: `
        <p>The food eaten during a meal passes through the gastrointestinal tract. This food moves from the oral cavity to the stomach and is passed on as a semifluid mass called chyme into the small intestine. Chyme is a mixture of water, hydrochloric acid, digestive enzymes, and nutrients from the ingested food (eg, proteins, carbohydrates, fats). The small intestine proceeds to absorb the nutrients and most of the water from the chyme and passes the remaining undigested material into the large intestine.</p>
        <p>The large intestine is composed of three subdivisions: the cecum, colon, and rectum. The <strong>colon</strong> functions to <strong>absorb electrolytes</strong> (eg, sodium, chloride) and <strong>additional water</strong> from the mass of undigested material. As water is absorbed by the colon, the undigested material concentrates into feces (waste matter), which is stored in the rectum for subsequent excretion.</p>
        <p>The passage states that Caco-2 cells are a cell line originally <strong>derived from colon cells</strong>. Therefore, these cells originate from a section of the gut that mainly functions to <strong>absorb water</strong> (ie, the colon).</p>
        <p><strong>(Choices A and D)</strong> The brush border of the small intestine is a microvilli-covered epithelial surface where digestion and absorption of nutrients occur. The small intestine is composed of the duodenum, jejunum, and ileum; the duodenum is involved in additional digestion of nutrients, and the jejunum and ileum are involved in absorption of these nutrients. Although the passage states that Caco-2 cells were cultured under specific conditions to mimic the functional and morphological phenotype of wild-type enterocytes lining the small intestine, Caco-2 cells <em>originate</em> in the colon, not the small intestine.</p>
        <p><strong>(Choice C)</strong> Proteolytic enzymes are able to digest proteins (polypeptides) but the large intestine does not function to produce these enzymes. However, enzymes secreted by the stomach (pepsin), pancreas (trypsinogen, chymotrypsinogen), and the microvilli-covered brush border of the small intestine (peptidases) function in protein digestion.</p>
      `,
      eo: "The colonic segment of the large intestine functions to absorb water and electrolytes from undigested waste material that is left over from digestion and absorption in the small intestine."
    },
    {
      qid: "400096",
      stem: "When Caco-2 cells are cultured in hypoxic conditions, HIF-1 is most likely located in the:",
      preopts: "",
      options: [
        { L: "A", text: "tight junctions.", pct: "29%", correct: false },
        { L: "B", text: "cytoplasm.", pct: "17%", correct: false },
        { L: "C", text: "nucleus.", pct: "49%", correct: true },
        { L: "D", text: "lysosomes.", pct: "5%", correct: false }
      ],
      stat: "49% answered correctly",
      explanationHtml: `
        <p><strong>Transcription factors</strong> bind specific DNA sequences and <strong>control the rate of gene transcription</strong> (ie, they decrease, increase, or repress gene expression). Transcription factors are initially transcribed in the nucleus but are translated in the cytoplasm. &quot;Inactive&quot; transcription factors, which are not bound to their DNA substrate, are found in the cytoplasm. However, during cell signaling, the <strong>nuclear localization sequence</strong> found in transcription factors allows nuclear import proteins to direct transcription factors back to the nucleus via nuclear pores to alter gene expression.</p>
        <p>Based on the passage, HIF-1 is a transcription factor that controls the expression of genes that regulate the adaptive cellular response to hypoxia. When cells are cultured in hypoxic conditions, HIF-1 components are signaled to <strong>localize to the nucleus</strong> and form the heterodimer that binds the target DNA sequence, promoting transcription of genes in an attempt to restore barrier function.</p>
        <p><strong>(Choice A)</strong> HIF-1 regulates the expression of genes in the <em>nucleus</em>. This transcription factor does not interact directly with tight junctions, or seals between adjacent cells.</p>
        <p><strong>(Choice B)</strong> The cytoplasm is the thick fluid that fills a cell and includes all materials within the cell but outside the nucleus. Although transcription factors are translated in the cytoplasm, they function in the nucleus. Therefore, in hypoxic conditions, most HIF-1 is located in the nucleus, <em>not</em> in the cytoplasm.</p>
        <p><strong>(Choice D)</strong> Lysosomes are membrane-bound organelles that degrade many macromolecules. As a transcription factor, HIF-1 is located in the nucleus, <em>not</em> in lysosomes.</p>
      `,
      eo: "Transcription factors are translated in the cytoplasm but act in the nucleus to control gene expression. They contain a nuclear localization sequence that allows nuclear import proteins to direct them back to the nucleus to alter gene transcription."
    },
    {
      qid: "400097",
      stem: "Which graphic depicts the most likely effect of the HIF-1&alpha; inhibitor on emodin? (Note: &quot;Control&quot; = cells cultured under normoxic conditions.)",
      preopts: "",
      options: [
        { 
          L: "A", 
          text: `
            <div style="font-size: 11px; margin-bottom: 4px; font-weight: bold;">Control High, Hypoxia Low, Hyp+Emo High, Hyp+Emo+I Low:</div>
            <div style="display: flex; gap: 8px; align-items: flex-end; height: 50px; background: #fff; padding: 8px; border: 1px solid var(--border); border-radius: var(--radius); width: 220px;">
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 35px; width: 12px; background: var(--teal); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">Ctrl</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 10px; width: 12px; background: #bbb; border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">Hyp</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 33px; width: 12px; background: var(--teal); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">+Emo</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 12px; width: 12px; background: var(--accent); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">+Emo+I</span>
              </div>
            </div>
          `, 
          pct: "80%", 
          correct: true 
        },
        { 
          L: "B", 
          text: `
            <div style="font-size: 11px; margin-bottom: 4px; font-weight: bold;">Control High, Hypoxia Low, Hyp+Emo Low, Hyp+Emo+I High:</div>
            <div style="display: flex; gap: 8px; align-items: flex-end; height: 50px; background: #fff; padding: 8px; border: 1px solid var(--border); border-radius: var(--radius); width: 220px;">
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 35px; width: 12px; background: var(--teal); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">Ctrl</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 10px; width: 12px; background: #bbb; border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">Hyp</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 12px; width: 12px; background: var(--accent); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">+Emo</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 33px; width: 12px; background: var(--teal); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">+Emo+I</span>
              </div>
            </div>
          `, 
          pct: "8%", 
          correct: false 
        },
        { 
          L: "C", 
          text: `
            <div style="font-size: 11px; margin-bottom: 4px; font-weight: bold;">Control High, Hypoxia High, Hyp+Emo Low, Hyp+Emo+I High:</div>
            <div style="display: flex; gap: 8px; align-items: flex-end; height: 50px; background: #fff; padding: 8px; border: 1px solid var(--border); border-radius: var(--radius); width: 220px;">
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 35px; width: 12px; background: var(--teal); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">Ctrl</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 35px; width: 12px; background: var(--teal); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">Hyp</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 12px; width: 12px; background: var(--accent); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">+Emo</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 35px; width: 12px; background: var(--teal); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">+Emo+I</span>
              </div>
            </div>
          `, 
          pct: "4%", 
          correct: false 
        },
        { 
          L: "D", 
          text: `
            <div style="font-size: 11px; margin-bottom: 4px; font-weight: bold;">Control High, Hypoxia Low, Hyp+Emo High, Hyp+Emo+I High:</div>
            <div style="display: flex; gap: 8px; align-items: flex-end; height: 50px; background: #fff; padding: 8px; border: 1px solid var(--border); border-radius: var(--radius); width: 220px;">
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 35px; width: 12px; background: var(--teal); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">Ctrl</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 10px; width: 12px; background: #bbb; border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">Hyp</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 33px; width: 12px; background: var(--teal); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">+Emo</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                <div style="height: 33px; width: 12px; background: var(--teal); border-radius: 1px 1px 0 0;"></div>
                <span style="font-size: 6px; color: var(--muted); margin-top: 2px;">+Emo+I</span>
              </div>
            </div>
          `, 
          pct: "6%", 
          correct: false 
        }
      ],
      stat: "79% answered correctly",
      explanationHtml: `
        <p>The control cells in this experiment were cultured under normal oxygen conditions, and therefore should have an intact epithelial barrier and high TEER, which the passage states is a measure of proper barrier function. Because hypoxia damages the epithelial barrier, cells cultured under low oxygen conditions should have a decreased TEER compared to controls, signifying compromised barrier integrity.</p>
        <p>According to the passage, emodin prevents the epithelial damage induced by hypoxia. As a result, cells grown in hypoxic conditions that were treated with emodin should have a TEER value comparable to the control cells. The passage also states that a chemical inhibitor of HIF-1&alpha; (ie, HIF-1&alpha;-I) was found to block emodin's protective effect on epithelial barrier integrity, suggesting that HIF-1&alpha; is essential or permissive for emodin's protective effects. Therefore, cells grown in hypoxic conditions that were treated with both emodin and HIF-1&alpha;-I should have a low TEER compared to the control cells. This corresponds to the graph shown in <strong>Choice A</strong>.</p>
        <p><strong>(Choice B)</strong> This graph shows a reverse finding of the true experimental result (where emodin has no effect, but emodin + inhibitor protects the barrier).</p>
        <p><strong>(Choice C)</strong> Cells cultured in hypoxic conditions should have a low TEER, but this graph shows a high TEER in these cells. It also shows the reverse of the expected results for hypoxic cells treated with emodin and for hypoxic cells treated with both emodin and HIF-1&alpha;-I.</p>
        <p><strong>(Choice D)</strong> Cells cultured with HIF-1&alpha;-I and emodin in hypoxic conditions (ie, hypoxia + emodin + inhibitor) should have a low TEER. However, this graph shows a high TEER under these conditions.</p>
      `,
      eo: "Inhibitors prevent chemical reactions, block gene/protein expression, or reduce the activity of a particular substance (eg, enzyme, reactant). Transcription factors can be inhibited by certain drugs or substances."
    }
  ]
};
