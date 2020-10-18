import { call, put, takeLeading } from "redux-saga/effects";
import { getPostSuccess, readPostsSuccess } from "./action";

function* readPosts() {
  try {
    const posts = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      )
    );

    yield put(readPostsSuccess(posts));
  } catch (error) {
    console.log(error);
  }
}

function* getPost({ payload }) {
  try {
    const post = yield call(() =>
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${payload}`
      ).then((res) => res.json())
    );
    yield put(getPostSuccess(post));
  } catch (error) {
    console.log(error);
  }
}

function* postsSaga() {
  yield takeLeading("READ_POSTS", readPosts);
  yield takeLeading("GET_POST", getPost);
}

export default postsSaga;
