export const postsSelector = ({ posts }) => (posts.length ? posts : null);

export const postByIdSelector = (postId) => ({ posts }) =>
  posts.length && posts.find(({ id }) => String(id) === String(postId));
