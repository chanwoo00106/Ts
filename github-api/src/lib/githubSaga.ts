import { githubData } from "./api";
import { put, call, takeEvery } from "redux-saga/effects";
import { IData, set_data, GET_DATA } from "../module/github";
import { AxiosResponse } from "axios";

function* get_github(action: { type: string; id: string }) {
  const res: AxiosResponse<IData> = yield call(githubData, action.id);
  yield put(set_data(res.data));
}

function* rootSaga() {
  yield takeEvery(GET_DATA, get_github);
}

export default rootSaga;
