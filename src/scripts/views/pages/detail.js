import UrlParser from '../../routes/url-parser.js';
import Restaurant from '../../../public/data/restaurant-data.js';
import skipContent from '../../utils/skip-content.js';
import reviewElement from '../../utils/review-element.js';
import addElement from '../../utils/add-element.js';
import favoriteToggle from '../../utils/favorite-toggle.js';

const Detail = {
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await Restaurant.getRestaurant(url.id);
    const mainContent = document.querySelector('#mainContent');
    skipContent.init(mainContent);
    if (typeof resto == 'object') {
      addElement.init({ _content: mainContent, _element: 'resto-item', _class: 'resto__detail', _data: resto });
      const favoriteButton = document.querySelector('.resto--fav-button');
      favoriteToggle.init({ favoriteButtonContainer: favoriteButton, resto: resto.restaurant });
      const reviewList = document.querySelector('#reviewList');
      reviewElement.init(reviewList, resto);
    } else {
      mainContent.innerHTML = 'we are Offline right now';
    }
  },
};

export default Detail;