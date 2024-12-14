import UrlParser from '../routes/url-parser.js';

const skipContent = {
  init(content) {
    console.log(`#${window.location.hash.slice(1)}`);
    const anchor = document.querySelector('.skip__content');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    anchor.addEventListener(('click'), (e) => {
      e.preventDefault();
      content.scrollIntoView({
        behavior: 'smooth',
      });
      document.querySelector('.header__title__link').setAttribute('tabindex', '-1');
      document.querySelector('.icon__menu--anchor').setAttribute('tabindex', '-1');
      document.querySelectorAll('.header__nav__link').forEach((item) => {
        item.setAttribute('tabindex', '-1');
      });
    });
  }
};

export default skipContent;