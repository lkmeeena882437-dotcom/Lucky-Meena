import { useState, type FormEvent } from 'react';
import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon } from '../components/Icons';
import { Reveal } from '../components/Reveal';
import { personal } from '../data/portfolio';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status,setStatus] = useState<Status>('idle');
  const [notice,setNotice] = useState('');
  const submit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const form=event.currentTarget; if(!form.reportValidity())return;
    const data=new FormData(form); if(data.get('website'))return; setStatus('loading'); setNotice('Preparing your note…');
    try {
      if(personal.contactEndpoint){const response=await fetch(personal.contactEndpoint,{method:'POST',body:data,headers:{Accept:'application/json'}});if(!response.ok)throw new Error();form.reset();setNotice('Thanks — your message has been sent.');}
      else {const text=`Portfolio inquiry for Lucky Meena\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nMessage: ${data.get('message')}`;await navigator.clipboard.writeText(text);setNotice('Message copied. Add your contact endpoint before publishing.');}
      setStatus('success');
    } catch {setStatus('error');setNotice('Could not prepare the message. Please copy it manually.');}
  };
  return <section className="contact-section section" id="contact" aria-labelledby="contact-heading">
    <BackgroundEnvironment variant="cosmic"/>
    <div className="page-shell contact-grid">
      <Reveal className="contact-copy">
        <div className="contact-label mono"><i/>LET&apos;S WORK TOGETHER</div>
        <h2 id="contact-heading">Have something useful to build?</h2>
        <p>Send the context. I&apos;ll reply with a clear next step.</p>
        <div className="contact-lines"><span><Icon name="location"/>{personal.location}</span><span><Icon name="mail"/>{personal.email}</span><span><Icon name="message"/>{personal.telegram} · {personal.whatsapp}</span><a href={personal.githubUrl} target="_blank" rel="noreferrer"><Icon name="github"/>GitHub profile</a></div>
        <small className="contact-edit mono">REPLACE BRACKETED CONTACT DETAILS BEFORE PUBLISHING</small>
      </Reveal>
      <Reveal className="contact-form-wrap" delay={.06}>
        <form className="contact-form" onSubmit={submit} noValidate>
          <label><span>Name</span><input name="name" type="text" autoComplete="name" placeholder="Your name" required minLength={2}/></label>
          <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required/></label>
          <label><span>Message</span><textarea name="message" rows={4} placeholder="What are you building?" required minLength={20}/></label>
          <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
          <button className="form-submit magnetic" type="submit" disabled={status==='loading'}><span>{status==='loading'?'Preparing…':'Send project note'}</span>{status==='loading'?<i className="loader"/>:<Icon name="arrow"/>}</button>
          <div className={`form-notice notice-${status}`} role="status" aria-live="polite">{status!=='idle'&&<><Icon name={status==='error'?'close':status==='success'?'check':'spark'}/>{notice}</>}</div>
        </form>
      </Reveal>
    </div>
  </section>;
}
