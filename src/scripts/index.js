import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/reset.css';
import '../components/AppHeader.js';
import '../components/HeroElement.js';
import '../components/RestoList.js';
import '../components/RestoItem.js';
import '../components/ReviewResto.js';
import swRegister from './utils/sw-register.js';
import WebSocketInitiator from './utils/websocket-initiator.js';
import CONFIG from './globals/config.js';
import App from './views/app.js';

const app = new App({
  button: document.querySelector('.icon__menu--anchor'),
  drawer: document.querySelector('.header__nav__list'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

console.log('Hello Coders! :)');
