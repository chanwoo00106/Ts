import { githubData } from "./api";
import { put, call, takeEvery } from "redux-saga/effects";
import { IData, set_data, GET_DATA, set_error } from "../module/github";
import { AxiosResponse } from "axios";

function* get_github(action: { type: string; id: string }) {
  try {
    const res: AxiosResponse<IData> = yield call(githubData, action.id);
    yield put(set_data(res.data));
  } catch (e: any) {
    yield put(
      set_error({ message: e.response.data.message, code: e.response.status })
    );
  }
}

function* rootSaga() {
  yield takeEvery(GET_DATA, get_github);
}

export default rootSaga;
