import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES= 'RECEIVE_BUSINESSES';

export const receiveBusinesses = businesses => {
    // debugger
    return {
    type: RECEIVE_BUSINESSES,
    businesses }
};


export const fetchBusinesses = () => dispatch => (
    APIUtil.fetchBusinesses()
    .then(businesses => (dispatch(receiveBusinesses(businesses))
    ))
  );
  