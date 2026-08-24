export function ProjectVisual({ type }: { type: string }) {
  if (type === 'community') return (
    <div className="project-art art-community" aria-hidden="true">
      <div className="art-browser">
        <div className="browser-bar"><i/><i/><i/><span>community / console</span></div>
        <div className="console-grid">
          <div className="console-sidebar"><b>LM</b>{[1,2,3,4,5].map(i=><i key={i}/>)}</div>
          <div className="console-main"><small>COMMUNITY HEALTH</small><strong>Member signal</strong><div className="chart-line"><svg viewBox="0 0 260 90"><path d="M0 78C31 73 37 49 70 56s43-32 73-20 35-18 60-5 31-20 57-25"/></svg></div><div className="metric-row"><span/><span/><span/></div></div>
          <div className="console-chat">{[1,2,3,4].map(i=><div key={i}><i/><span><b/><b/></span></div>)}</div>
        </div>
      </div>
    </div>
  );
  if (type === 'advertising') return (
    <div className="project-art art-advertising" aria-hidden="true">
      <div className="funnel-ring ring-1"/><div className="funnel-ring ring-2"/>
      <div className="ad-phone"><div className="phone-top"/><div className="ad-card"><small>PLACEMENT 04</small><strong>Right audience.<br/>Clear next step.</strong><span/></div><div className="phone-stats"><i/><i/><i/></div></div>
      <div className="float-metric metric-a"><small>PATH</small><strong>01 → 04</strong></div>
      <div className="float-metric metric-b"><small>SIGNAL</small><svg viewBox="0 0 80 25"><path d="M2 21C16 20 16 11 28 15s15-9 25-5 13-6 25-8"/></svg></div>
    </div>
  );
  if (type === 'automation') return (
    <div className="project-art art-automation" aria-hidden="true">
      <svg className="flow-lines" viewBox="0 0 600 380"><path d="M110 190h84c35 0 26-86 74-86h65c47 0 39 86 83 86h77"/><path d="M194 190h74c42 0 32 88 78 88h70"/></svg>
      <div className="flow-node node-lead"><i>01</i><span>Lead</span></div>
      <div className="flow-node node-ai"><i>02</i><span>AI logic</span><b/></div>
      <div className="flow-node node-route"><i>03</i><span>Route</span></div>
      <div className="flow-node node-action"><i>04</i><span>Action</span></div>
      <div className="flow-node node-report"><i>05</i><span>Report</span></div>
    </div>
  );
  return (
    <div className="project-art art-web" aria-hidden="true">
      <div className="web-window window-back"><div/><span/><span/><i/></div>
      <div className="web-window window-front"><div className="window-nav"><i/><span/><span/><span/></div><div className="window-copy"><small>DIGITAL EXPERIENCE</small><strong>Make the value<br/>feel obvious.</strong><span/><button/></div><div className="window-orb"/></div>
      <div className="responsive-phone"><i/><span/><b/></div>
    </div>
  );
}
