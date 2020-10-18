export default function users(
  state = { list: [], hasFullList: false },
  action
) {
  switch (action.type) {
    case "READ_USERS_SUCCESS":
      return { ...state, list: [...action.payload], hasFullList: true };
    case "GET_USER_SUCCESS":
      return { ...state, list: [...state.list, ...action.payload] };
    default:
      return state;
  }
}
