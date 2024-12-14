import UrlParser from '../../routes/url-parser.js';
import FavoriteRestaurant from '../../../public/data/favorite-restaurant-data.js';
import skipContent from '../../utils/skip-content.js';
import addElement from '../../utils/add-element.js';

const Favorite = {
  async render() {
    return `
        <section id="mainContent" class="detail__content">
        <div style="margin: 2em 1.5em;">
          <div class="skeleton__detail"><div></div></div>
          <div class="skeleton__detail"><div></div></div>
          <div class="skeleton__detail"><div></div></div>
        </div>
        </section>
      `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurant.getAllRestaurants();
    console.log(resto);
    const mainContent = document.querySelector('#mainContent');
    skipContent.init(mainContent);
    if (resto.length > 0) {
      addElement.init({ _content: mainContent, _element: 'resto-list', _class: 'resto__list', _data: resto });
    } else {
      mainContent.innerHTML = '<div class="not__found">We can\'t find a restaurant</div>';
    }
  },
};

export default Favorite;