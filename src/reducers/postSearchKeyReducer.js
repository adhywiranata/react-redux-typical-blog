import * as ActionTypes from '../actions/actionTypes';

const postSearchKeyReducer = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.RESET_SEARCH_KEY: return state;
    default: return state;
  }
};

export default postSearchKeyReducer;
