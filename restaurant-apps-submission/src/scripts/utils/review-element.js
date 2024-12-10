const reviewElement = {
  init({ content, data }) {
    const restoReview = document.createElement('review-resto');
    restoReview.classList.add('reviews__list');
    console.log(data);
    restoReview.data = data.customerReviews;
    content.replaceChildren(restoReview);
  }
};

export default reviewElement;