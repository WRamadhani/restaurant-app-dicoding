import Restaurant from '../../../public/data/restaurant-data.js';
import skipContent from '../../utils/skip-content.js';
import addElement from '../../utils/add-element.js';

const RestaurantList = {
  async render() {
    return `
        <hero-element class="hero"></hero-element>
        <section id="mainContent" class="main__content">
            <div style="margin: 2em 15dvw;">
              <div class="skeleton__detail">
                <div></div>
              </div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const mainContent = document.querySelector('#mainContent');
    skipContent.init(mainContent);
    const resto = await Restaurant.getAllRestaurant();
    if (typeof resto == 'object') {
      addElement.init({ _content: mainContent, _element: 'resto-list', _class: 'resto__list', _data: resto.restaurants });
    } else {
      mainContent.innerHTML = 'we are Offline right now';
    }
  },
};

export default RestaurantList;