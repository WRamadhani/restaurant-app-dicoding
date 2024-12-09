import restoData from '../public/data/DATA.json';

class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = restoData.restaurants.map((resto) => `
            <article class="resto__item">
                <div class="resto__img">
                    <img src="${resto.pictureId}" width="100%" alt="Gambar Resto ${resto.name}" />
                </div>
                <div class="resto__content">
                    <h2>${resto.name}</h2>
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