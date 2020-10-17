import { call, put, takeLeading } from "redux-saga/effects";
import { testCycleSuccess } from "./action";

function* testCycle({ payload }) {
  try {
    const { data } = payload;
    const test = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((json) => json)
    );

    console.log(data, test);

    yield put(testCycleSuccess());
  } catch (error) {
    console.log(error);
  }
}

function* testSaga() {
  yield takeLeading("TEST_CYCLE", testCycle);
}

export default testSaga;
