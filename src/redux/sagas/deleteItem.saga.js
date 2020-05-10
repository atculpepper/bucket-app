import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* deleteItem(action) {
  //the config includes the attributes which enables server session to recognize user
  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };
  try {
    yield axios.delete(
      `/api/user/${action.payload.experienceID}`,
      action.payload.experienceID,
      config
    );
    // yield put({
    //   type: "GET_LIST_ITEMS",
    //   payload: action.payload,
    // });
  } catch (err) {
    console.warn(err);
  }
}

function* deleteItemSaga() {
  yield takeLatest("DELETE_ITEM", deleteItem);
}

export default deleteItemSaga;
