import { call, put, takeLeading } from "redux-saga/effects";
import { getUserSuccess, readUsersSuccess } from "./actions";

function* readUsers() {
  try {
    const users = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => json)
    );

    yield put(readUsersSuccess(users));
  } catch (error) {
    console.log(error);
  }
}

function* getUser({ payload }) {
  try {
    const user = yield call(() =>
      fetch(`https://jsonplaceholder.typicode.com/users/${payload}`)
        .then((res) => res.json())
        .then((json) => json)
    );

    yield put(getUserSuccess(user));
  } catch (error) {
    console.log(error);
  }
}

function* usersSaga() {
  yield takeLeading("READ_USERS", readUsers);
  yield takeLeading("GET_USER", getUser);
}

export default usersSaga;
