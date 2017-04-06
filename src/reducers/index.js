import { combineReducers } from 'redux';

import postReducer from './postReducer';
import postSearchKeyReducer from './postSearchKeyReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  postSearchKey: postSearchKeyReducer,
});

export default rootReducer;
