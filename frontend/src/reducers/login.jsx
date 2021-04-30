import {REQUEST_STATE} from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  email: '',
  password: '',
  user_id: null
};

export const loginActionTypes = {
  WRITING: 'WRITING',
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
};

export const loginReducer = (state, action) => {
  switch(action.type){
    case loginActionTypes.WRITING:
      return {
        ...state,
        fetchState: REQUEST_STATE.INITIAL,
        email: action.email,
        password: action.password
      };
    case loginActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case loginActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        fetchState: REQUEST_STATE.OK,
        user_id: action.user_id
      }
    default:
      throw new Error();
  }
}
