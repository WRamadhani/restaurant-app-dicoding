import favoriteToggle from '../src/scripts/utils/favorite-toggle.js';
import FavoriteResto from '../src/public/data/favorite-restaurant-data.js';

describe('Unliking a restaurant', () => {
  const addLikeButton = () => {
    document.body.innerHTML = '<button type="button" class="resto--fav-button"></button>';
  };

  beforeEach(async () => {
    try {
      addLikeButton();
      await FavoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
    } catch (error) {
      console.error(error);
    }
  });

  afterEach(async () => {
    await FavoriteResto.deleteResto('rqdv5juczeskfw1e867');
  });

  it('the unlike button should be shown if the restaurant has been liked before', async () => {
    const likeButton = document.querySelector('.resto--fav-button');
    await favoriteToggle.init({ favoriteButtonContainer: likeButton, resto: { id: 'rqdv5juczeskfw1e867' } });
    expect(likeButton.children[0].textContent == 'close').toBe(true);
  });

  it('the unlike button should be shown if the restaurant has been liked before', async () => {
    const likeButton = document.querySelector('.resto--fav-button');
    await favoriteToggle.init({ favoriteButtonContainer: likeButton, resto: { id: 'rqdv5juczeskfw1e867' } });
    likeButton.dispatchEvent(new Event('click'));
    expect(likeButton.children[0].textContent == 'favorite').toBe(false);
  });

  it('should be able to unlike a restaurant', async () => {
    const likeButton = document.querySelector('.resto--fav-button');
    await favoriteToggle.init({ favoriteButtonContainer: likeButton, resto: { id: 'rqdv5juczeskfw1e867' } });
    likeButton.dispatchEvent(new Event('click'));
    const resto = await FavoriteResto.getAllRestaurants();
    expect(resto).toEqual([]);
  });
});