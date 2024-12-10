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
    console.log(resto);
    const mainContent = document.querySelector('#mainContent');
    skipContent.init(mainContent);
    if (typeof resto == 'object') {
      addElement.init({ _content: mainContent, _element: 'resto-item', _class: 'resto__detail', _data: resto });
      const reviewList = document.querySelector('#reviewList');
      const favoriteButton = document.querySelector('.resto--fav-button');
      favoriteToggle.init({ favoriteButtonContainer: favoriteButton, resto: resto.restaurant });
      reviewElement.init({ content: reviewList, data: resto.restaurant });
      const reviewForm = document.querySelector('#addReviewForm');
      const reviewName = document.querySelector('#name');
      const reviewReview = document.querySelector('#review');
      reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        Restaurant.addReview({ id: url.id, name: reviewName.value, review: reviewReview.value }).then(
          (result) => {
            reviewElement.init({ content: reviewList, data: result });
          },
          (error) => {
            console.log(error);
          }
        );
      });
    } else {
      mainContent.innerHTML = 'we are Offline right now';
    }
  },
};

export default Detail;