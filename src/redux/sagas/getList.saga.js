import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getList(action) {
  try {
    const userID = action.payload;
    //what is this constant response doing such that payload is response.data?
    const response = yield axios.get(`/api/user/${userID}`);
    yield put({
      type: "SET_LIST_ITEMS",
      payload: response.data,
    });
  } catch (err) {
    console.log("error getting list items:", err);
  }
}

function* getListSaga() {
  yield takeLatest("GET_LIST_ITEMS", getList);
  console.log("getListSaga fired off");
}

export default getListSaga;
