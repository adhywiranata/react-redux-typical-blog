import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  isFetchingError: false,
  data: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS_REQUEST:
      return { ...state, isFetching: true };
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return {
        isFetching: false,
        isFetchingError: false,
        data: action.payload,
      };
    case ActionTypes.FETCH_POSTS_FAILED:
      return { ...state, isFetching: false, isFetchingError: true };
    default:
      return state;
  }
};

export default postReducer;
