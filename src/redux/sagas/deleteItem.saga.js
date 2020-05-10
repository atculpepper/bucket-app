import axios from "axios";
import { put } from "redux-saga/effects";

function* deleteItem(action) {
  try {
    yield axios.delete(`/api/${experienceID}`);
    yield put({
      type: "GET_LIST_ITEMS",
      payload: action.payload,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* deleteItemSaga() {
  yield takeLatest("DELETE_ITEM", deleteItem);
}

export default deleteItemSaga;
