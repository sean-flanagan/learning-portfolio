function toggleMenu() {
  const menu = document.querySelector('[data-nav-links]');
  const button = document.querySelector('[data-nav-toggle]');
  const isOpen = menu.classList.toggle('open');
  button.setAttribute('aria-expanded', String(isOpen));
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('[data-nav-toggle]');
  if (button) button.addEventListener('click', toggleMenu);
});
