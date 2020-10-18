import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { all, fork } from "redux-saga/effects";

import postsSaga from "./posts/saga";
import posts from "./posts/reducer";

import usersSaga from "./users/saga";
import users from "./users/reducer";

import commentsSaga from "./comments/saga";
import comments from "./comments/reducer";

const reducers = { posts, users, comments };

const sagas = [postsSaga, usersSaga, commentsSaga];

const reducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
