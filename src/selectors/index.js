import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';
import postSchema from '../schemas/post';

const getPosts = (state) => {
  const result = state.posts.result === undefined ? { posts: [] } : state.posts.result;
  const denormalizedPost = denormalize(result, postSchema, state.posts.entities);
  return denormalizedPost.posts;
};

const getPostSearchKey = state => state.postSearchKey;

export const getFilteredPosts = createSelector(
  [getPosts, getPostSearchKey],
  (posts, postSearchKey) => (
    posts.filter(post => post.title.toLowerCase().includes(postSearchKey))
  ),
);
