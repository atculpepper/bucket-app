import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* updateComplete(action) {
  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };
  const experienceID = action.payload.experienceID;
  const userID = action.payload.userID;

  try {
    yield axios.put(
      `/api/user/edit/updateComplete/${experienceID}`,
      action.payload,
      config
    );
    // yield put({
    //   type: "SET_NEW_ITEM",
    //   payload: action.payload,
    // });
    const response = yield axios.get(`/api/user/${userID}`);
    yield put({
      type: "SET_LIST_ITEMS",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* updateCompleteSaga() {
  yield takeLatest("UPDATE_COMPLETE", updateComplete);
}

export default updateCompleteSaga;
