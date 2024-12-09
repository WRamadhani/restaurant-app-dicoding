const reviewElement = {
  init(content, _data) {
    const restoReview = document.createElement('review-resto');
    restoReview.classList.add('reviews__list');
    restoReview.data = _data.restaurant.customerReviews;
    content.appendChild(restoReview);
  }
};

export default reviewElement;