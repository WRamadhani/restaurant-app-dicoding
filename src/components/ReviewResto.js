class ReviewResto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._data = this.data;
    this.render();
  }

  render() {
    this.innerHTML = this._data.map((review) => `
      <div class="reviews__item">
        <div class="reviews__item--icon">
          <span class="material-symbols-outlined">
            face
          </span>
        </div>
        <div class="reviews__item--card">
          <div class="reviews__item--info">
            <span>${review.name}</span>
            <span>${review.date}</span>
          </div>
          <div class="reviews__item--review">
            <p>${review.review}</p>
          </div>
        </div>
      </div>
    `).join('');
  }
}

customElements.define('review-resto', ReviewResto);