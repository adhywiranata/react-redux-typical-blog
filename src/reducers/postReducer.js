import * as ActionTypes from '../actions/actionTypes';

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS_SUCCESS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
