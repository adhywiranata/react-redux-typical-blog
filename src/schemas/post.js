import { schema } from 'normalizr';

const comment = new schema.Entity('comments');
const post = new schema.Entity('posts', { comments: [comment] });
const postSchema = { posts: [post] };

export default postSchema;
