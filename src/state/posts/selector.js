export const postsSelector = ({ posts: { list } }) =>
  list.length ? list : null;

export const hasFullListPostsSelector = ({ posts: { hasFullList } }) =>
  hasFullList;

export const postByIdSelector = (postId) => ({ posts: { list } }) =>
  list.length && list.find(({ id }) => String(id) === String(postId));
