import * as ActionTypes from '../actions/actionTypes';

const postReducer = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default postReducer;
