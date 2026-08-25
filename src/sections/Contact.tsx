import { useState, type FormEvent } from 'react';
import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon } from '../components/Icons';
import { Reveal } from '../components/Reveal';
import { personal } from '../data/portfolio';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [notice, setNotice] = useState('');

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    if (data.get('website')) return;

    setStatus('loading');
    setNotice('Preparing your note…');

    try {
      if (personal.contactEndpoint) {
        const response = await fetch(personal.contactEndpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error();
        form.reset();
        setNotice('Thanks — your message has been sent.');
      } else {
        const text = `Portfolio inquiry for Lucky Meena\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nMessage: ${data.get('message')}`;
        window.location.href = `${personal.emailUrl}?subject=${encodeURIComponent('Project note for Lucky Meena')}&body=${encodeURIComponent(text)}`;
        setNotice('Opening your email app — or message @adstelo_support on Telegram.');
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setNotice('Could not prepare the message. Email lkmeena8824@gmail.com or Telegram @adstelo_support.');
    }
  };

  return (
    <section className="contact-section section" id="contact" aria-labelledby="contact-heading">
      <BackgroundEnvironment variant="cosmic" />
      <div className="page-shell final-cta">
        <Reveal className="contact-copy">
          <div className="contact-person">
            <img src={personal.photos.profile} alt="" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            <div className="contact-label mono">
              <i />
              OPEN TO DIGITAL OPPORTUNITIES
            </div>
          </div>
          <h2 id="contact-heading">
            Have an idea?
            <span>Bring the Telegram work.</span>
          </h2>
          <p>Telegram, a landing page, AdsTele work, or a campaign that needs a real operator — write here or message me directly.</p>
          <div className="contact-actions">
            <a className="contact-button telegram" href={personal.telegramUrl}>
              <Icon name="message" />
              <span>Talk on Telegram</span>
              <small>{personal.telegram}</small>
            </a>
            <a className="contact-button email" href={personal.emailUrl}>
              <Icon name="mail" />
              <span>Send me an email</span>
              <small>{personal.email}</small>
            </a>
            <a className="contact-button github" href={personal.githubUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="github" />
              <span>Connect on GitHub</span>
              <small>@lkmeeena882437-dotcom</small>
            </a>
            <a className="contact-button inquiry" href="#inquiry">
              <Icon name="spark" />
              <span>Send a project note</span>
              <small>Use the form</small>
            </a>
          </div>
          <small className="open-line mono">TELEGRAM @ADSTELO_SUPPORT · LKMEENA8824@GMAIL.COM</small>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.06}>
          <form className="contact-form" id="inquiry" onSubmit={submit} noValidate>
            <div className="form-heading">
              <span className="mono">QUICK PROJECT NOTE</span>
              <strong>Share the idea in 30 seconds.</strong>
            </div>
            <label>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" placeholder="Your name" required minLength={2} />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={4} placeholder="What do you want to build?" required minLength={20} />
            </label>
            <label className="honeypot" aria-hidden="true">
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <button className="form-submit" type="submit" disabled={status === 'loading'}>
              <span>{status === 'loading' ? 'Preparing…' : 'Email this note'}</span>
              {status === 'loading' ? <i className="loader" /> : <Icon name="arrow" />}
            </button>
            <div className={`form-notice notice-${status}`} role="status" aria-live="polite">
              {status !== 'idle' && (
                <>
                  <Icon name={status === 'error' ? 'close' : status === 'success' ? 'check' : 'spark'} />
                  {notice}
                </>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
