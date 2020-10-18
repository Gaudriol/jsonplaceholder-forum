export default function posts(state = [], action) {
  switch (action.type) {
    // case "READ_POSTS":
    //   return { ...state, isFetching: true };
    case "READ_POSTS_SUCCESS":
      return action.payload;
    case "GET_POST_SUCCESS":
      return [...state, ...action.payload];
    default:
      return state;
  }
}
