import { Schema, arrayOf } from 'normalizr';

const postSchema = new Schema('posts', { idAttribute: '_id' });
const commentSchema = new Schema('comments', { idAttribute: '_id' });
const commentAuthorSchema = new Schema('commentAuthors', { idAttribute: '_id' });

postSchema.define({
  comments: arrayOf(commentSchema),
});

commentSchema.define({
  author: commentAuthorSchema,
});

export { postSchema, commentSchema };
