import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  puasList: [],
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
      return {
        fetchState: REQUEST_STATE.OK,
        puasList: action.payload.puas
      };
    default:
      throw new Error();
    };
};
