import { schema } from 'normalizr';

const user = new schema.Entity('users');
const comment = new schema.Entity('comments', { commenter: user });
const post = new schema.Entity('posts', { author: user, comments: [comment] });
const postSchema = { posts: [post] };

export default postSchema;
