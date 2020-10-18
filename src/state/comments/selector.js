export const postCommentsSelector = (postId) => ({ comments }) =>
  comments[postId] ? comments[postId] : null;
