// import NowPlaying from '../views/pages/now-playing';
// import Upcoming from '../views/pages/upcoming';
import RestaurantList from '../views/pages/restaurantList.js';
import Detail from '../views/pages/detail.js';
import Favorite from '../views/pages/favorite.js';

const routes = {
  '/': RestaurantList, // default page
  //   '/now-playing': NowPlaying,
  //   '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;