import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/reset.css';
import '../components/AppHeader';
import '../components/HeroElement';
import '../components/RestoList';
import '../components/RestoItem';

/** Start Navbar icon swap and Navbar open */
const navBarToggle = document.querySelector('.icon__menu--anchor');
const navList = document.querySelector('.header__nav__list');
const iconSwap = document.querySelector('.icon__group');
const body = document.querySelector('body');

navBarToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  navList.classList.toggle('header__nav--open');
  iconSwap.classList.toggle('icon__group--swap');
  body.classList.toggle('hideoverflow');
});
/** End Navbar */

/** Start Skip to main content anchor */
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

const anchor = document.querySelector('.skip__content');
anchor.addEventListener(('click'), (e) => {
  e.preventDefault();
  const mainContent = document.querySelector('#mainContent');
  window.scrollTo({
    top: mainContent.getBoundingClientRect().top - headerHeight,
    behavior: 'smooth'
  });
});

const elmx = document.querySelector('.hero');

function checkVisible(elm) {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
};

checkVisible(elmx);
/* End Skip to main content */

console.log('Hello Coders! :)');
