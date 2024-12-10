import restoData from '../public/data/DATA.json';


class RestoList extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this._data = this.data;
    this.render();
  }

  render() {
    console.log(this._data);
    this.innerHTML = this._data.map((resto) => `
            <article class="resto__item">
                <div class="resto__img">
                  <picture>
                    <source media="(min-width: 768px)" srcset="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}">
                    <source media="(min-width: 1024px)" srcset="https://restaurant-api.dicoding.dev/images/large/${resto.pictureId}">
                    <img src="https://restaurant-api.dicoding.dev/images/small/${resto.pictureId}" width="100%" alt="Gambar Resto ${resto.name}" />
                  </picture>
                </div>
                <div class="resto__content">
                    <h2><a href="#/detail/${resto.id}" class="resto__link">${resto.name}</a></h2>
                    <p>${resto.description}</p>
                </div>
                <div class="resto__info">
                    <div>🗺️ ${resto.city}</div>
                    <div>⭐ ${resto.rating}</div>
                </div>
            </article>
        `).join('');
  }
}

customElements.define('resto-list', RestoList);