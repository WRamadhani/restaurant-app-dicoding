class RestoItem extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this._data = this.data;
    const menu = this._addMenu(this._data.restaurant.menus);
    const category = this._data.restaurant.categories.map((item) => item.name);
    this.render({ menu, category });
  }

  _addMenu(data) {
    const foods = data.foods.map((item) => `
      <li>${item.name}</li>
    `).join('');
    const drinks = data.drinks.map((item) => `
      <li>${item.name}</li>
    `).join('');
    return { foods, drinks };
  }

  render(content) {
    console.log(this._data);
    console.log(content.menu.foods);
    console.log(content.category);
    this.innerHTML = `
      <section class="resto__detail__content">
        <article class="resto__detail__desc">
          <div class="detail__desc--img">
            <picture>
              <source media="(min-width: 768px)" srcset="https://restaurant-api.dicoding.dev/images/medium/${this._data.restaurant.pictureId}">
              <source media="(min-width: 1024px)" srcset="https://restaurant-api.dicoding.dev/images/large/${this._data.restaurant.pictureId}">
              <img loading="lazy" src="https://restaurant-api.dicoding.dev/images/small/${this._data.restaurant.pictureId}" width="100%" alt="Gambar Resto ${this._data.restaurant.name}" />
            </picture>
            <button type="button" class="resto--fav-button">
              
            </button>
          </div>
          <div class="detail__desc--desc">
            <h1>${this._data.restaurant.name}</h1>
            <p>${this._data.restaurant.description}</p>
          </div>
        </article>
        <aside class="resto__detail__info">
          <div>
            ${content.category.map((item) => `<span class="detail__info--category">${item}</span>`).join('')}
          </div>
          <div>
            <span>⭐ ${this._data.restaurant.rating}</span>
          </div>
          <div>
            <span>🗺️ ${this._data.restaurant.city}</span>
          </div>
          <div>
            <span>🗺️ ${this._data.restaurant.address}</span>
          </div>
        </aside>
        <article class="resto__detail__menu">
          <h2>Daftar Menu</h2>
          <div class="detail__menu--foods">
            <h2>Makanan</h2>
            <ul>
              ${content.menu.foods}
            </ul>
          </div>
          <div class="detail__menu--drinks">
            <h2>Minuman</h2>
            <ul>
              ${content.menu.drinks}
            </ul>
          </div>
        </article>
      </section>
      <section class="reviews">
        <form id="addReviewForm" class="reviews__form">
          <input type="text" id="name" name="name" placeholder="Masukkan nama kamu" required />
          <textarea id="review" name="review" placeholder="Masukkan review kamu" required></textarea>
          <button type="submit">Submit</button>
        </form>
        <section id="reviewList">

        </section>
      </section>
    `;
  }
}

customElements.define('resto-item', RestoItem);
