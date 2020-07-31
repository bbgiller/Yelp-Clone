import {RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions';
import {RECEIVE_BUSINESS} from '../actions/business_actions';


const reviewsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({},state);

  switch(action.type) {
    case RECEIVE_REVIEWS:
        return action.reviews 
    case RECEIVE_REVIEW:
        newState[action.review.id] = action.review;
        return newState;
    case REMOVE_REVIEW:
        delete newState[action.reviewId];
        return newState;
    case RECEIVE_BUSINESS:
        const reviews = action.business.reviews
        return Object.assign({},state, reviews);
    default:
        return state;
       
    
  }

}

export default reviewsReducer;