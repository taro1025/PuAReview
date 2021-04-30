import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  reviewsList: [],
};

export const reviewsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH: 'FETCH_SUCCESS'
};

export const reviewReducer = (state, action) =>{
  switch(action.type){
    case reviewsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING
      };
    case reviewsActionTypes.FETCH_SUCCESS:
      return {
        reviewsList: action.payload.reviewsList,
        fetchState: REQUEST_STATE.OK
      };
    default:
      throw new Error();
    };
};
