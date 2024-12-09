import API_ENDPOINTS from '../../scripts/globals/api-enpoints.js';

class Restaurant {
  static async getAllRestaurant() {
    try {
      const request = await fetch(API_ENDPOINTS.LIST_RESTAURANT, {
        method: 'GET'
      });
      const responds = await request.json();
      return responds;
    } catch (error) {
      return error;
    }
  };

  static async getRestaurant(id) {
    try {
      const request = await fetch(API_ENDPOINTS.DETAIL_RESTAURANT(id), {
        method: 'GET'
      });
      const responds = await request.json();
      return responds;
    } catch (error) {
      return 'error';
    }
  }
}
export default Restaurant;