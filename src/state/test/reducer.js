export default function test(state = {}, action) {
  switch (action.type) {
    case "TEST_CYCLE":
      return { ...state, isFetching: true };
    case "TEST_CYCLE_SUCESS":
      return { ...state, isFetching: false };
    default:
      return state;
  }
}
