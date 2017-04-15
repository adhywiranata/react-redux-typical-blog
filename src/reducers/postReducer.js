import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  isFething: false,
  isFetchingError: false,
  data: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return {
        isFetching: false,
        isFetchingError: false,
        data: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
