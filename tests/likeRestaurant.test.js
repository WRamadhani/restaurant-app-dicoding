import favoriteToggle from '../src/scripts/utils/favorite-toggle.js';
import FavoriteResto from '../src/public/data/favorite-restaurant-data.js';

describe('Liking a restaurant', () => {
  const addLikeButton = () => {
    document.body.innerHTML = '<button type="button" class="resto--fav-button"></button>';
  };

  beforeEach(() => {
    addLikeButton();
  });

  it('the like button should be shown if the restaurant has not been liked before', async () => {
    const likeButton = document.querySelector('.resto--fav-button');
    await favoriteToggle.init({ favoriteButtonContainer: likeButton, resto: { id: 'rqdv5juczeskfw1e867' } });
    expect(likeButton.children[0].textContent == 'favorite').toBe(true);
  });

  it('the unlike button should not be shown if the restaurant has not been liked before', async () => {
    const likeButton = document.querySelector('.resto--fav-button');
    await favoriteToggle.init({ favoriteButtonContainer: likeButton, resto: { id: 'rqdv5juczeskfw1e867' } });
    expect(likeButton.children[0].textContent == 'close').toBe(false);
  });

  it('should be able to like a restaurant', async () => {
    const likeButton = document.querySelector('.resto--fav-button');
    await favoriteToggle.init({ favoriteButtonContainer: likeButton, resto: { id: 'rqdv5juczeskfw1e867' } });
    likeButton.dispatchEvent(new Event('click'));
    const resto = await FavoriteResto.getResto('rqdv5juczeskfw1e867');
    expect(resto).toEqual({ id: 'rqdv5juczeskfw1e867' });
  });
});