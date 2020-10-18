export default function comments(state = {}, action) {
  switch (action.type) {
    case "GET_POST_COMMENTS_SUCCESS":
      const { comments, postId } = action.payload;
      return { ...state, [postId]: [...comments] };
    default:
      return state;
  }
}
