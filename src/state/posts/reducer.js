export default function posts(
  state = { list: [], hasFullList: false },
  action
) {
  switch (action.type) {
    case "READ_POSTS_SUCCESS":
      return { ...state, list: [...action.payload], hasFullList: true };
    case "GET_POST_SUCCESS":
      return { ...state, list: [...action.payload] };
    default:
      return state;
  }
}
