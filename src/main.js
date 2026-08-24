import './styles.css';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const header = document.querySelector('#site-header');
const progress = document.querySelector('#scroll-progress');
const telegramFloat = document.querySelector('.telegram-float');
const hero = document.querySelector('.hero');
const heroVideo = document.querySelector('.hero-video');

function updateScrollUI() {
  const y = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? (y / scrollable) * 100 : 0;

  progress.style.width = `${percent}%`;
  header.classList.toggle('scrolled', y > 30);
  telegramFloat.classList.toggle('visible', y > window.innerHeight * 0.75);
}

updateScrollUI();
window.addEventListener('scroll', updateScrollUI, { passive: true });

// Reveal content only when it is close to the viewport.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('in-view'));
}

// Mobile navigation.
const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  mobileMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(opening));
  mobileMenu.setAttribute('aria-hidden', String(!opening));
  mobileMenu.classList.toggle('open', opening);
  document.body.classList.toggle('menu-open', opening);
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

// Lightweight pointer parallax—translate is composited and does not trigger layout.
if (canHover && !prefersReducedMotion && hero) {
  const parallaxItems = [...document.querySelectorAll('.parallax-item')];
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let frame;

  const renderParallax = () => {
    currentX += (targetX - currentX) * 0.075;
    currentY += (targetY - currentY) * 0.075;

    parallaxItems.forEach((item) => {
      const depth = Number(item.dataset.depth || 15);
      item.style.translate = `${currentX * depth}px ${currentY * depth}px`;
    });

    if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
      frame = requestAnimationFrame(renderParallax);
    } else {
      frame = null;
    }
  };

  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    targetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    targetY = (event.clientY - bounds.top) / bounds.height - 0.5;
    if (!frame) frame = requestAnimationFrame(renderParallax);
  });

  hero.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    if (!frame) frame = requestAnimationFrame(renderParallax);
  });
}

// Very subtle card tilt on precise pointers only.
if (canHover && !prefersReducedMotion) {
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1100px) rotateX(${-y * 2.2}deg) rotateY(${x * 2.2}deg) translateY(-2px)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });

  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.08;
      button.style.translate = `${x}px ${y}px`;
    });
    button.addEventListener('pointerleave', () => {
      button.style.translate = '';
    });
  });
}

// Pause the decorative video when it cannot be seen.
if (heroVideo && 'IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !document.hidden && !prefersReducedMotion) {
      heroVideo.play().catch(() => {});
    } else {
      heroVideo.pause();
    }
  }, { threshold: 0.08 });
  videoObserver.observe(heroVideo);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) heroVideo.pause();
    else if (hero.getBoundingClientRect().bottom > 0) heroVideo.play().catch(() => {});
  });
}

const caseContent = {
  community: {
    kicker: 'Telegram · Community operating system',
    title: 'A community designed to retain attention—not rent it.',
    intro: 'The engagement model connects onboarding, moderation, programming and reporting so the member experience stays useful while the operating team stays in control.',
    constraint: 'Activity was happening, but it was not compounding. New members lacked a clear first journey, daily operations were reactive and leadership had no concise view of community health.',
    architecture: [
      'Segmented welcome and onboarding path',
      'Weekly programming and engagement rituals',
      'Moderation rules with clear escalation logic',
      'Signal-based reporting for better decisions',
    ],
  },
  automation: {
    kicker: 'AI · Workflow architecture',
    title: 'The busywork disappeared. The operating context stayed.',
    intro: 'A practical automation layer can connect lead capture, qualification, routing, follow-up and delivery without turning the business into an unreadable maze of tools.',
    constraint: 'Information moved through copy-paste, scattered messages and individual memory. Follow-ups slowed down and leaders spent time checking work instead of improving it.',
    architecture: [
      'Unified intake and qualification logic',
      'AI-supported tagging and summarisation',
      'Ownership, alerts and escalation rules',
      'A single operational reporting view',
    ],
  },
  web: {
    kicker: 'Strategy · UI/UX · Frontend',
    title: 'A premium interface with a commercial job to do.',
    intro: 'The strongest digital experiences are not decoration. They organise trust, answer objections and move the right visitor toward a clear next action on every screen size.',
    constraint: 'The offer was valuable, but the digital presence made it difficult to understand. Visual inconsistency, weak hierarchy and an unclear journey were creating avoidable doubt.',
    architecture: [
      'Positioning and conversion journey mapping',
      'Responsive, editorial interface system',
      'Performance-conscious frontend build',
      'Clear measurement and iteration points',
    ],
  },
};

const caseDialog = document.querySelector('#case-dialog');
const dialogClose = caseDialog.querySelector('.dialog-close');
const dialogCta = document.querySelector('#dialog-cta');

function openCase(key) {
  const content = caseContent[key];
  if (!content) return;

  document.querySelector('#dialog-kicker').textContent = content.kicker;
  document.querySelector('#dialog-title').textContent = content.title;
  document.querySelector('#dialog-intro').textContent = content.intro;
  document.querySelector('#dialog-constraint').textContent = content.constraint;
  document.querySelector('#dialog-list').innerHTML = content.architecture.map((item) => `<li>${item}</li>`).join('');
  caseDialog.showModal();
}

document.querySelectorAll('.case-card').forEach((card) => {
  card.querySelector('.case-open').addEventListener('click', () => openCase(card.dataset.case));
});

dialogClose.addEventListener('click', () => caseDialog.close());
caseDialog.addEventListener('click', (event) => {
  const rect = caseDialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) caseDialog.close();
});
dialogCta.addEventListener('click', () => caseDialog.close());

// Inquiry builder. Change this one value if the public Telegram username changes.
const TELEGRAM_USERNAME = 'luckymeena';
const inquiryForm = document.querySelector('#inquiry-form');
const formProgress = document.querySelector('#form-progress');
const formStepText = inquiryForm.querySelector('.form-head strong');
const toast = document.querySelector('#toast');

function getCompletion() {
  const data = new FormData(inquiryForm);
  const groups = [
    Boolean(data.get('name') && data.get('contact')),
    data.getAll('service').length > 0,
    Boolean(data.get('budget') && data.get('timeline')),
    Boolean(data.get('brief')),
  ];
  return groups.filter(Boolean).length;
}

function updateFormProgress() {
  const complete = getCompletion();
  const labels = ['Your details', 'Select services', 'Scope & timing', 'The opportunity'];
  formProgress.style.width = `${Math.max(25, complete * 25)}%`;
  formStepText.textContent = `${String(Math.min(complete + 1, 4)).padStart(2, '0')} / 04 — ${labels[Math.min(complete, 3)]}`;
}

inquiryForm.addEventListener('input', updateFormProgress);
inquiryForm.addEventListener('change', updateFormProgress);

let toastTimer;
function showToast(message, isError = false) {
  toast.querySelector('span').textContent = isError ? '!' : '✓';
  toast.querySelector('p').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

inquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(inquiryForm);
  const services = data.getAll('service');

  if (!services.length) {
    showToast('Please choose at least one service.', true);
    inquiryForm.querySelector('.service-options label').focus();
    return;
  }

  const message = [
    `Hello Lucky — I would like to discuss a project.`,
    ``,
    `Name: ${data.get('name')}`,
    `Contact: ${data.get('contact')}`,
    `Interested in: ${services.join(', ')}`,
    `Investment: ${data.get('budget')}`,
    `Ideal start: ${data.get('timeline')}`,
    ``,
    `Project brief:`,
    `${data.get('brief')}`,
    ``,
    `Sent from luckymeena.com portfolio.`,
  ].join('\n');

  showToast('Your Telegram brief is ready.');
  const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
  window.open(telegramUrl, '_blank', 'noopener,noreferrer');
});

// Utility controls.
document.querySelector('#back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});

document.querySelector('#current-year').textContent = String(new Date().getFullYear());
