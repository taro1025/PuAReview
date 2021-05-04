import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  postsList: [],
};

export const postsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH: 'FETCH_SUCCESS'
};

export const postReducer = (state, action) =>{
  switch(action.type){
    case postsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING
      };
    case postsActionTypes.FETCH_SUCCESS:
      return {
        postsList: action.payload.postsList,
        fetchState: REQUEST_STATE.OK
      };
    default:
      throw new Error();
    };
};
