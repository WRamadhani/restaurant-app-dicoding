import navToggle from '../utils/nav-toggle.js';
import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    navToggle.init({ button: this._button, drawer: this._drawer, content: this._content });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    window.scrollTo({
      top: this._content.getBoundingClientRect().top
    });
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;