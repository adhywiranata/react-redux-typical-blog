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
        const jsonRes = { posts };
        const normalizedPosts = normalize(jsonRes, postSchema);
        dispatch(fetchPostsSuccess(normalizedPosts));
      })
  , 2000);
};

export const setPostSearchKey = searchKey => ({
  type: ActionTypes.SET_SEARCH_KEY,
  payload: { searchKey },
});

export const resetPostSearchKey = () => ({
  type: ActionTypes.RESET_SEARCH_KEY,
});
