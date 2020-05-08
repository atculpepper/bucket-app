import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addItem(action) {
  //the config includes the attributes which enables server session to recognize user
  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };
  const userID = action.payload.userID;

  try {
    yield axios.post(`/api/user/${userID}`, action.payload, config);
    console.log(action.payload);
    yield put({
      type: "SET_NEW_ITEM",
      // payload: response.data,
      payload: action.payload,
    });
    const response = yield axios.get(`/api/user/${userID}`);
    yield put({
      type: "SET_LIST_ITEMS",
      payload: response.data,
    });
    // yield console.log(response.data);
  } catch (err) {
    console.warn(err);
  }
}

function* addItemSaga() {
  yield takeLatest("ADD_ITEM", addItem);
  // console.log(action.payload);
}

export default addItemSaga;
