import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addItem(action) {
  try {
    const userID = action.payload.userID;
    yield axios.post(`/api/user/${userID}`);
    console.log(userID);
    console.log(action.payload);
    yield put({
      type: "SET_NEW_ITEM)",
      // payload: response.data,
      payload: action.payload,
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
