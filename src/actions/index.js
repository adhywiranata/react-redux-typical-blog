import { normalize } from 'normalizr';

import * as ActionTypes from './actionTypes';
import postSchema from '../schemas/post';

export const fetchPostsSuccess = posts => ({
  type: ActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPosts = () => (dispatch) => {
  setTimeout(() =>
    fetch('http://localhost:1234/posts')
      .then(res => res.json())
      .then((posts) => {
        console.log(posts);
        const normalizedPosts = normalize(posts, postSchema);
        console.log(normalizedPosts);
        dispatch(fetchPostsSuccess(posts))
      })
  , 2000);
};
