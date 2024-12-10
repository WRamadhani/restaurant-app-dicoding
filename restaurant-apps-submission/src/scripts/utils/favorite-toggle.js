import FavoriteResto from '../../public/data/favorite-restaurant-data.js';

const favoriteToggle = {
  async init({ favoriteButtonContainer, resto }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;
    // console.log(this._resto);
    this._renderLike();
    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteResto.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._favoriteButtonContainer.innerHTML = '<span class="material-symbols-outlined">favorite</span>';
    this._favoriteButtonContainer.classList.remove('close');
    this._favoriteButtonContainer.addEventListener('click', async () => {
      await FavoriteResto.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._favoriteButtonContainer.innerHTML = '<span class="material-symbols-outlined">close</span>';
    this._favoriteButtonContainer.classList.add('close');
    this._favoriteButtonContainer.addEventListener('click', async () => {
      await FavoriteResto.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default favoriteToggle;