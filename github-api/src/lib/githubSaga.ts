import { githubData } from "./api";
import { put, call } from "redux-saga/effects";

// worker Saga: 비동기 증가 태스크를 수행할겁니다.
export function* getData(action: string) {
  const { data } = yield call(() => githubData(action));

  yield put({ type: "INCREMENT" });
}
