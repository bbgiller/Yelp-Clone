import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review: review
})

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews: reviews
})

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId: reviewId
})


export const fetchReview = reviewId => dispatch => (
    APIUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
)

export const fetchReviews = () => dispatch => {
    debugger
    return (
        APIUtil.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)))

    )
}


export const createReview = (review) => dispatch => (
    APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)
    ))
  );
  
  export const updateReview = review => dispatch => (
    APIUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)
    ))
  );