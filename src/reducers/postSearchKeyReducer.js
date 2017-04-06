import * as ActionTypes from '../actions/actionTypes';

const postSearchKeyReducer = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_KEY:
      return action.payload.searchKey.toLowerCase();
    default: return state;
  }
};

export default postSearchKeyReducer;
