import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import github from "./github";
import rootSaga from "../lib/githubSaga";

const reducer = combineReducers({ github });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

export type reducerState = ReturnType<typeof reducer>;
