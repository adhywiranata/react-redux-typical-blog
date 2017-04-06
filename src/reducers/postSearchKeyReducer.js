import * as ActionTypes from '../actions/actionTypes';

const postSearchKeyReducer = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_KEY:
      return action.payload.searchKey.toLowerCase();
    case ActionTypes.RESET_SEARCH_KEY:
      return '';
    default: return state;
  }
};

export default postSearchKeyReducer;
