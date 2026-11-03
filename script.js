document.documentElement.classList.add('has-js');

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'بستن منو' : 'باز کردن منو');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'باز کردن منو');
  });
});


document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks?.classList.contains('open')) {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'باز کردن منو');
    menuButton?.focus();
  }
});

document.addEventListener('click', event => {
  if (navLinks?.classList.contains('open') &&
      !navLinks.contains(event.target) &&
      !menuButton?.contains(event.target)) {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'باز کردن منو');
  }
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const floatingContact = document.getElementById('floatingContact');
const floatingTrigger = document.getElementById('floatingTrigger');
const floatingPanel = document.getElementById('floatingPanel');

function setContactOpen(isOpen) {
  floatingContact?.classList.toggle('is-open', isOpen);
  floatingTrigger?.setAttribute('aria-expanded', String(isOpen));
  floatingPanel?.setAttribute('aria-hidden', String(!isOpen));
}

floatingTrigger?.addEventListener('click', () => {
  setContactOpen(!floatingContact.classList.contains('is-open'));
});

document.addEventListener('click', event => {
  if (floatingContact && !floatingContact.contains(event.target)) {
    setContactOpen(false);
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && floatingContact?.classList.contains('is-open')) {
    setContactOpen(false);
    floatingTrigger?.focus();
  }
});

// Reveal sections only when motion is allowed; content remains visible without JavaScript.
const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}
