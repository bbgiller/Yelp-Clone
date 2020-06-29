import { RECEIVE_BUSINESSES } from "../actions/business_actions";

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
        // debugger
      return action.businesses;
    default:
      return state;
  }
};

export default businessesReducer;