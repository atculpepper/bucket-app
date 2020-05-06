import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getList(action) {
  try {
    const userID = action.payload;
    const response = yield axios.get(`/api/user/${userID}`);
    yield put({
      type: "SET_LIST_ITEMS",
      payload: response.data[0],
    });
  } catch (err) {
    console.warn(err);
  }
}

function* getListSaga() {
  yield takeLatest("GET_LIST_ITEMS", getList);
  console.log("getListSaga fired off");
}

export default getListSaga;
