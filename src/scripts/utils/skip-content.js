const skipContent = {
  init(content) {
    const anchor = document.querySelector('.skip__content');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    anchor.addEventListener(('click'), (e) => {
      e.preventDefault();
      window.scrollTo({
        top: content.getBoundingClientRect().top - headerHeight,
        behavior: 'smooth'
      });
    });
  }
};

export default skipContent;