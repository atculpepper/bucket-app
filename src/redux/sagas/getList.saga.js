import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getList(action) {
  try {
    const itemID = action.payload;
    const response = yield axios.get(`/api/user/${itemID}`);
    yield put({
      type: "SET_LIST_ITEMS",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* getListSaga() {
  yield takeLatest("GET_LIST_ITEMS", getList);
}

export default getListSaga;
