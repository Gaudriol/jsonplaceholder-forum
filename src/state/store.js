import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { all, fork } from "redux-saga/effects";

import testSaga from "./test/saga";
import test from "./test/reducer";

const reducers = { test };

const sagas = [testSaga];

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
