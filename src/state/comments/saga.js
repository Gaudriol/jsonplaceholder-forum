import { call, put, takeLeading } from "redux-saga/effects";
import { getPostCommentsSuccess } from "./action";

function* getPostComments({ payload: postId }) {
  try {
    const comments = yield call(() =>
      fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      ).then((res) => res.json())
    );
    yield put(getPostCommentsSuccess(comments, postId));
  } catch (error) {
    console.log(error);
  }
}

function* postCommentsSaga() {
  yield takeLeading("GET_POST_COMMENTS", getPostComments);
}

export default postCommentsSaga;
