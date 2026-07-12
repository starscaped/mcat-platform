window.PASSAGES = window.PASSAGES || {};
window.PASSAGES["suicide-sociology"] = {
  id: "suicide-sociology",
  title: "Sociological Theories of Suicide",
  subject: "Behavioral Sciences",
  system: "Identity and Social Interaction",
  difficulty: "Moderate",
  estMinutes: 3,
  passageHtml: `
    <p>Suicide is one of the leading causes of death in the United States. Suicide risk is associated with a variety of factors. Personal factors include childhood abuse, certain personality traits (eg, impulsiveness, aggression), and history of mental illness. Over 90% of people who attempt suicide meet diagnostic criteria for at least one psychological disorder, and suicide risk increases as the number of co-occurring disorders increases. Diagnosis severity also matters: studies suggest that individuals are at greatest risk of attempting suicide while inpatient at or newly discharged from a psychiatric hospital.</p>
    <p>Social factors also play a role in suicide. Sociologist &Eacute;mile Durkheim argued that embeddedness in society is a key feature in determining the likelihood of an individual committing suicide. Specifically, the more people that depend on an individual financially, emotionally, or physically, the less likely that individual is to commit suicide. Studies suggest that suicide is also linked to religious affiliation and income level. Religious groups that place more value on community events, church attendance, and collective solidarity tend to have lower rates of suicide among members, whereas more affluent individuals are more likely to commit suicide.</p>
    <p>Economic trends have also been linked to suicide. One study retrospectively analyzed the relationship between the U.S. economy and suicide rates. It found that the overall suicide rate tends to rise during economic recessions and drop during economic expansions.</p>
    
    <p class="figcap"><b>Figure 1</b>&nbsp;&nbsp;U.S. suicide rates compared to economic recessions and expansions</p>
    <div style="border: 1px solid var(--border); border-radius: var(--radius); padding: 12px; margin-bottom: 12px; font-size: 13px;">
      <strong>Trend Summary (Figure 1):</strong><br>
      The retrospective study shows a strong correlation between economic downturns (recessions) and peaks in the U.S. suicide rate (such as during the Great Depression and the early 1980s recession). Conversely, periods of economic prosperity (expansions) correlate with declines in suicide rates.
    </div>
  `,
  questions: [
    {
      qid: "400080",
      stem: "Which of the following is NOT supported by the passage?",
      preopts: "",
      options: [
        { 
          L: "A", 
          text: `
            <div style="display: flex; gap: 8px; align-items: center; justify-content: center; padding: 10px;">
              <div style="font-size: 9px; writing-mode: vertical-lr; transform: rotate(180deg); color: var(--muted); font-weight: 600;">Suicide attempts</div>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <svg width="100" height="60" style="border-left: 1.5px solid var(--border); border-bottom: 1.5px solid var(--border); overflow: visible;">
                  <line x1="5" y1="45" x2="95" y2="15" stroke="var(--teal)" stroke-width="2" />
                </svg>
                <div style="font-size: 9px; margin-top: 4px; color: var(--muted); font-weight: 600;">Socioeconomic status</div>
              </div>
            </div>
          `, 
          pct: "10%", 
          correct: false 
        },
        { 
          L: "B", 
          text: `
            <div style="display: flex; gap: 8px; align-items: center; justify-content: center; padding: 10px;">
              <div style="font-size: 9px; writing-mode: vertical-lr; transform: rotate(180deg); color: var(--muted); font-weight: 600;">Suicide attempts</div>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <svg width="100" height="60" style="border-left: 1.5px solid var(--border); border-bottom: 1.5px solid var(--border); overflow: visible;">
                  <line x1="5" y1="45" x2="95" y2="15" stroke="var(--accent)" stroke-width="2" />
                </svg>
                <div style="font-size: 9px; margin-top: 4px; color: var(--muted); font-weight: 600;">Religiosity</div>
              </div>
            </div>
          `, 
          pct: "74%", 
          correct: true 
        },
        { 
          L: "C", 
          text: `
            <div style="display: flex; gap: 8px; align-items: center; justify-content: center; padding: 10px;">
              <div style="font-size: 9px; writing-mode: vertical-lr; transform: rotate(180deg); color: var(--muted); font-weight: 600;">Suicide attempts</div>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <svg width="100" height="60" style="border-left: 1.5px solid var(--border); border-bottom: 1.5px solid var(--border); overflow: visible;">
                  <line x1="5" y1="15" x2="95" y2="45" stroke="var(--teal)" stroke-width="2" />
                </svg>
                <div style="font-size: 9px; margin-top: 4px; color: var(--muted); font-weight: 600;">Economic prosperity</div>
              </div>
            </div>
          `, 
          pct: "8%", 
          correct: false 
        },
        { 
          L: "D", 
          text: `
            <div style="display: flex; gap: 8px; align-items: center; justify-content: center; padding: 10px;">
              <div style="font-size: 9px; writing-mode: vertical-lr; transform: rotate(180deg); color: var(--muted); font-weight: 600;">Suicide attempts</div>
              <div style="display: flex; flex-direction: column; align-items: center;">
                <svg width="100" height="60" style="border-left: 1.5px solid var(--border); border-bottom: 1.5px solid var(--border); overflow: visible;">
                  <line x1="5" y1="15" x2="95" y2="45" stroke="var(--teal)" stroke-width="2" />
                </svg>
                <div style="font-size: 9px; margin-top: 4px; color: var(--muted); font-weight: 600;">Time from discharge</div>
              </div>
            </div>
          `, 
          pct: "6%", 
          correct: false 
        }
      ],
      stat: "74% answered correctly",
      explanationHtml: `
        <p>In sociology, there is a distinction between religiosity and religious affiliation. <strong>Religiosity</strong> refers to the extent to which a given religious doctrine is incorporated into all aspects of an individual's life (eg, beliefs, behaviors, identity). Also referred to as <em>religiousness</em>, religiosity is the degree to which a person <strong>internalizes a religion</strong>. For example, those who consider themselves Catholic and have a high degree of religiosity also demonstrate beliefs and behaviors that align with Catholicism, and &quot;being Catholic&quot; is an important part of their identity.</p>
        <p>Religious affiliation describes an individual identifying with a religious group (eg, Catholics, Jews, Muslims). Just because individuals identify with a religious group does not necessarily mean that they live their lives according to the principles or customs of that religion.</p>
        <p>The second paragraph suggests that religious affiliation is linked to suicide: religious groups that place more value on people actively participating in the faith (religiosity) tend to have lower rates of suicide among members. This is presumably due to members feeling a greater sense of embeddedness within their religious community. Therefore, as <strong>religiosity increases, suicide attempts should decrease</strong> (reflecting a negative correlation). Thus, the positive-slope graph in <strong>Choice B</strong> is NOT supported by the passage and is the correct answer.</p>
        <p><strong>(Choice A)</strong> According to paragraph 2, there is a positive correlation between socioeconomic status (in particular, income) and the likelihood of committing suicide (&quot;more affluent individuals are more likely to commit suicide&quot;). Thus, this graph is supported.</p>
        <p><strong>(Choice C)</strong> Economic prosperity shows a negative correlation with suicide attempts (recessions correlate with higher suicide rates, expansions with lower rates). Thus, this graph is supported.</p>
        <p><strong>(Choice D)</strong> Paragraph 1 suggests that individuals are at greatest risk of suicide during or just after discharge from a psychiatric hospital, meaning risk decreases as time from discharge increases. Thus, this graph is supported.</p>
      `,
      eo: "Religious affiliation describes an individual identifying with a religious group, whereas religiosity (or religiousness) is the degree to which an individual internalizes that religion, as demonstrated by the individual's beliefs, behaviors, and identity."
    },
    {
      qid: "400081",
      stem: "Durkheim describes a type of suicide committed by individuals who feel disconnected from society for not providing them a moral compass. What is the societal condition that occurs when a society does not provide enough moral guidance to individuals?",
      preopts: "",
      options: [
        { L: "A", text: "Anomie", pct: "73%", correct: true },
        { L: "B", text: "Cultural relativism", pct: "1%", correct: false },
        { L: "C", text: "Relative deprivation", pct: "19%", correct: false },
        { L: "D", text: "Deindividuation", pct: "5%", correct: false }
      ],
      stat: "73% answered correctly",
      explanationHtml: `
        <p><strong>Anomie</strong> is a state of <strong>normlessness</strong> that occurs when a society fails to provide individuals with norms and values to guide behavior. In an anomic society, individuals lack guidance and purpose and feel aimless or alienated from society. Anomie is often the result of a shift or transition in society that causes instability, undermining current norms (before new norms arise to replace them).</p>
        <p>Anomie variously impacts individuals within society based on which norms are undermined and how. For example, during the Industrial Revolution, many individuals who moved to cities (a new way of life) experienced anomie, but those who remained in the countryside were less likely to be affected because the norms governing life prior to the Industrial Revolution were still in effect.</p>
        <p><strong>(Choice B)</strong> Cultural relativism is the evaluation of a society's norms and values in comparison to itself instead of in comparison to another society. Beliefs, values, norms, and practices are not considered good or bad but depend on the cultural context from which they arise.</p>
        <p><strong>(Choice C)</strong> Relative deprivation describes feelings of discontent experienced by those who are being deprived of something to which they feel entitled.</p>
        <p><strong>(Choice D)</strong> Deindividuation describes a process by which someone loses self-awareness in a group and behaves in a way that is out of character.</p>
      `,
      eo: "Anomie is a state of normlessness in society. When the norms and values of a society are undermined and have yet to be replaced, the social system reaches the condition of anomie. Individuals in an anomic society lack the guidance and purpose that society usually provides; as a result, they may feel less tied to society, aimless, or alienated."
    }
  ]
};
