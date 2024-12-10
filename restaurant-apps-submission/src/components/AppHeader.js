class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <h1 class="header__title"><a href="#">Resto <span style="color: var(--secondary-bg-color);">Hub</span></a></h1>
            <a href="#" title="hamburger-menu" class="icon__menu--anchor">
            <svg class="icon__menu--toggle" viewBox="0 0 60 30">
                <g class="icon__group">
                    <g class="icon--menu">
                        <path d="M 6 0 L 54 0" />
                        <path d="M 6 15 L 54 15" />
                        <path d="M 6 30 L 54 30" />
                    </g>
                    <g class="icon--close">
                        <path d="M 15 0 L 45 30" />
                        <path d="M 15 30 L 45 0" />
                    </g>
                </g>
            </svg>
            </a>
            
            <nav class="header__nav">
                <ul class="header__nav__list">
                    <li><a class="header__nav__link" href="#">Home</a></li>
                    <li><a class="header__nav__link" href="#/favorite">Favorite</a></li>
                    <li><a class="header__nav__link" href="https://linkedin.com/in/wahyu-ramadhani" target="_blank">About Us</a>
                    </li>
                </ul>
            </nav>
        `;
  }
}

customElements.define('app-header', AppHeader);