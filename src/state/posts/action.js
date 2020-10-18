export const readPosts = () => ({
  type: "READ_POSTS",
});

export const readPostsSuccess = (posts) => ({
  type: "READ_POSTS_SUCCESS",
  payload: posts,
});

export const getPost = (id) => ({
  type: "GET_POST",
  payload: id,
});

export const getPostSuccess = (post) => ({
  type: "GET_POST_SUCCESS",
  payload: [post],
});
