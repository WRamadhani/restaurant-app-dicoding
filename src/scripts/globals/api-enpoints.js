// const BASE_URL = 'https://restaurant-api.dicoding.dev';
import CONFIG from './config.js';
const API_ENDPOINTS = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  REVIEW_RESTAURANT: (id) => `${CONFIG.BASE_URL}/review/${id}`,
};
export default API_ENDPOINTS;