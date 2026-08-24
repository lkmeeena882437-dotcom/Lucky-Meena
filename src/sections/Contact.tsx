import { useState, type FormEvent } from 'react';
import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon } from '../components/Icons';
import { Reveal } from '../components/Reveal';
import { personal } from '../data/portfolio';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [notice, setNotice] = useState('');

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('website')) return;
    setStatus('loading');
    setNotice('Preparing your project brief…');
    const plainText = [`New project inquiry for Lucky Meena`, `Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Project: ${data.get('project')}`, `Budget: ${data.get('budget') || 'Not specified'}`, `Message: ${data.get('message')}`].join('\n');

    try {
      if (personal.contactEndpoint) {
        const response = await fetch(personal.contactEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error('Submission failed');
        setStatus('success'); setNotice('Thanks — your project brief has been sent.'); form.reset();
      } else {
        await navigator.clipboard.writeText(plainText);
        setStatus('success');
        setNotice('Brief copied. Add your real email or form endpoint to enable direct delivery.');
      }
    } catch {
      setStatus('error');
      setNotice('Could not prepare the brief. Please copy your message manually or add a contact endpoint.');
    }
  };

  return <section className="contact-section section" id="contact" aria-labelledby="contact-heading">
    <BackgroundEnvironment variant="cosmic"/>
    <div className="page-shell contact-layout">
      <Reveal className="contact-copy">
        <div className="contact-label mono"><i/>AVAILABLE FOR SELECT PROJECTS</div>
        <h2 id="contact-heading">Have a project in mind?<br/><span>Let&apos;s build something<br/>worth remembering.</span></h2>
        <p>Share the context, the constraint and what a strong outcome would look like. You&apos;ll get a direct, thoughtful next step.</p>
        <div className="contact-details">
          <div><Icon name="mail"/><span><small className="mono">EMAIL</small><strong>{personal.email}</strong></span></div>
          <div><Icon name="message"/><span><small className="mono">WHATSAPP / TELEGRAM</small><strong>{personal.whatsapp} · {personal.telegram}</strong></span></div>
        </div>
        <p className="contact-placeholder-note"><Icon name="spark"/>Replace the bracketed contact details before publishing.</p>
      </Reveal>
      <Reveal className="contact-form-shell" delay={.1}>
        <form onSubmit={submit} className="contact-form" noValidate>
          <div className="form-title"><div><small className="mono">PROJECT INQUIRY</small><h3>Tell me what you&apos;re building.</h3></div><span className="form-step mono">01 / 01</span></div>
          <label><span>Your name</span><input name="name" type="text" autoComplete="name" placeholder="Your name" required minLength={2}/></label>
          <label><span>Email address</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required/></label>
          <div className="form-row">
            <label><span>Project type</span><select name="project" required defaultValue=""><option value="" disabled>Select one</option><option>Telegram community</option><option>Telegram advertising</option><option>AI automation</option><option>Crypto operations</option><option>Website design & build</option><option>Growth consulting</option></select></label>
            <label><span>Budget <small>(optional)</small></span><select name="budget" defaultValue=""><option value="">Select range</option><option>₹50K – ₹1L</option><option>₹1L – ₹3L</option><option>₹3L+</option><option>Let&apos;s scope it</option></select></label>
          </div>
          <label><span>Project message</span><textarea name="message" rows={5} placeholder="What are you building, and what would a great outcome look like?" required minLength={20}/></label>
          <label className="honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off"/></label>
          <button className="form-submit magnetic" type="submit" disabled={status === 'loading'}><span>{status === 'loading' ? 'Preparing brief…' : 'Prepare project inquiry'}</span>{status === 'loading' ? <i className="loader"/> : <Icon name="arrow"/>}</button>
          <div className={`form-notice notice-${status}`} role="status" aria-live="polite">{status !== 'idle' && <><Icon name={status === 'error' ? 'close' : status === 'success' ? 'check' : 'spark'}/><span>{notice}</span></>}</div>
          {!personal.contactEndpoint && <p className="endpoint-note mono">DEMO MODE · ADD CONTACT ENDPOINT IN src/data/portfolio.ts</p>}
        </form>
      </Reveal>
    </div>
  </section>;
}
