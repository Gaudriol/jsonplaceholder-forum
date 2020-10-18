export const postsSelector = ({ posts }) => posts;

export const postByIdSelector = (postId) => ({ posts }) =>
  posts && posts.find(({ id }) => String(id) === String(postId));
