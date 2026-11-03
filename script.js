const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'بستن منو' : 'باز کردن منو');
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const floatingContact = document.getElementById('floatingContact');
const floatingTrigger = document.getElementById('floatingTrigger');
const floatingPanel = document.getElementById('floatingPanel');

floatingTrigger?.addEventListener('click', () => {
  const isOpen = floatingContact.classList.toggle('is-open');
  floatingTrigger.setAttribute('aria-expanded', String(isOpen));
  floatingPanel.setAttribute('aria-hidden', String(!isOpen));
});

document.addEventListener('click', event => {
  if (floatingContact && !floatingContact.contains(event.target)) {
    floatingContact.classList.remove('is-open');
    floatingTrigger?.setAttribute('aria-expanded', 'false');
    floatingPanel?.setAttribute('aria-hidden', 'true');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && floatingContact) {
    floatingContact.classList.remove('is-open');
    floatingTrigger?.setAttribute('aria-expanded', 'false');
    floatingPanel?.setAttribute('aria-hidden', 'true');
    floatingTrigger?.focus();
  }
});
