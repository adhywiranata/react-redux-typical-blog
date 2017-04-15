// @flow

import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

import postSchema from '../schemas/post';

const getPosts = ({ posts }) => {
  const { data } = posts;
  const result = data.result === undefined ? { posts: [] } : data.result;
  const denormalizedPost = denormalize(result, postSchema, data.entities);
  return denormalizedPost.posts;
};

const getPostSearchKey = ({ postSearchKey }) => postSearchKey;

export const getFilteredPosts = createSelector(
  [getPosts, getPostSearchKey],
  (posts, postSearchKey: string) => (
    posts.filter(post => post.title.toLowerCase().includes(postSearchKey))
  ),
);
