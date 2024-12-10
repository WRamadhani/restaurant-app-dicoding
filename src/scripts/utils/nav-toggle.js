const navToggle = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      this._toggleDrawer(event, drawer);
    });
    const link = document.querySelectorAll('.header__nav__link');
    link.forEach((link) => {
      link.addEventListener('click', (event) => {
        const iconSwap = document.querySelector('.icon__group');

        drawer.classList.toggle('header__nav--open');
        iconSwap.classList.toggle('icon__group--swap');
        document.querySelector('body').classList.remove('hideoverflow');
      });
    });
    // link.addEventListener('click', (event) => {
    //   this._toggleDrawer(event, drawer);
    // });
  },

  _toggleDrawer(event, drawer) {
    const body = document.querySelector('body');
    const iconSwap = document.querySelector('.icon__group');

    drawer.classList.toggle('header__nav--open');
    iconSwap.classList.toggle('icon__group--swap');
    body.classList.toggle('hideoverflow');
  }
};

export default navToggle;