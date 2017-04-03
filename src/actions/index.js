import * as ActionTypes from './actionTypes';

export const fetchPostsSuccess = posts => ({
  type: ActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPosts = () => (dispatch) => {
  setTimeout(() =>
    fetch('http://localhost:1234/posts')
      .then(res => res.json())
      .then(posts => dispatch(fetchPostsSuccess(posts)))
  , 2000);
};
