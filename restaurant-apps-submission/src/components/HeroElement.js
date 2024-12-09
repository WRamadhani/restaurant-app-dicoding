class HeroElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <h1>Resto Hub</h1>
            <p>Katalog Restoran di Nusantara</p>
        `;
  }
}

customElements.define('hero-element', HeroElement);