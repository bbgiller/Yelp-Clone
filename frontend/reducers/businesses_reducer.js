import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from "../actions/business_actions";

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({},state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
        // debugger
      return action.businesses;
    case RECEIVE_BUSINESS:
      newState[action.business.id] = action.business;
      return newState; 
    default:
      return state;
  }
};

export default businessesReducer;