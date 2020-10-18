export const getPostComments = (postId) => ({
  type: "GET_POST_COMMENTS",
  payload: postId,
});

export const getPostCommentsSuccess = (comments, postId) => ({
  type: "GET_POST_COMMENTS_SUCCESS",
  payload: { comments, postId },
});
