import * as ActionTypes from './actionTypes';

export const fetchPostsSuccess = (posts) => ({
  type: ActionTypes.FETCH_POSTS,
  payload: posts,
});
export const fetchPosts = () => {
  return (dispatch) => {
    // fetch('')
  }
};
