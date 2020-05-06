import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addItem() {
  try {
    // const itemID = payload;
    const response = yield axios.get(`/api/user/${itemID}`);
    yield put({
      type: "SET_NEW_ITEM)",
    });
  } catch (err) {
    console.warn(err);
  }
}

function* addItemSaga() {
  yield takeLatest("ADD_ITEM", addItem);
}

export default addItemSaga;
