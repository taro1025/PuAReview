import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  puas: [],
  reviewsCountSet: [],
  reviewsAverageSet: []
};

export const puasActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
};

export const puasReducer = (state, action) => {
  switch(action.type) {

    case puasActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING
      };
    case puasActionTypes.FETCH_SUCCESS:
    console.log(`action:`,action)
    console.log(`state:`,state)
      return {
        fetchState: REQUEST_STATE.OK,
        puas: action.payload.puas,
        reviewsCountSet: action.payload.reviewsCountSet,
        reviewsAverageSet: action.payload.reviewsAverageSet
      };
    default:
      throw new Error();
    };
};
