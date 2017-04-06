import { denormalize } from 'normalizr';
import postSchema from '../schemas/post';

import * as ActionTypes from '../actions/actionTypes';

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;

export const getFilteredPost = (posts, searchKey) => {
  const result = posts.result === undefined ? { posts: [] } : posts.result;
  const denormalizedPost = denormalize(result, postSchema, posts.entities);
  return denormalizedPost.posts.filter(post => post.title.toLowerCase().includes(searchKey));
};
