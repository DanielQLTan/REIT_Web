// Navigation color swap on scroll
const nav = document.querySelector('nav.nav');
const onScroll = () => {
  if (window.scrollY > 10) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
document.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu
const burger = document.querySelector('.burger');
const sheet = document.querySelector('.mobile-sheet');
if (burger && sheet) {
  burger.addEventListener('click', () => sheet.classList.toggle('open'));
}

// Logo swap based on nav background
const logo = document.getElementById('brandLogo');
const setLogo = () => {
  if (!logo) return;
  if (nav.classList.contains('scrolled')) {
    logo.src = 'assets/logo.png';   // on white nav
  } else {
    logo.src = 'assets/logo-reversed.png';// on dark hero
  }
};
document.addEventListener('scroll', setLogo);
setLogo();

// Simple currency formatter and dynamic SAV (stubbed to design numbers)
const savEl = document.querySelector('[data-sav]');
const priceEl = document.querySelector('[data-price]');
const sav = 10558.57; // example value
if (savEl) savEl.textContent = new Intl.NumberFormat('en-US',{style:'currency', currency:'USD'}).format(sav);
if (priceEl) priceEl.textContent = new Intl.NumberFormat('en-US',{style:'currency', currency:'USD'}).format(sav);

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();