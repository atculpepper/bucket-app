import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addItem() {
  try {
    const userID = action.payload;
    const response = yield axios.post(`/api/user/${userID}`);
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
