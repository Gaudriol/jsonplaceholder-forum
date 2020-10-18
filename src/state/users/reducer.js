export default function users(state = [], action) {
  switch (action.type) {
    case "READ_USERS_SUCCESS":
      return action.payload;
    case "GET_USER_SUCCESS":
      return [...state, ...action.payload];
    default:
      return state;
  }
}
