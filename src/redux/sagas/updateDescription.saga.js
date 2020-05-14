import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* updateDescription(action) {
  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };
  const experienceID = action.payload.experienceID;
  const userID = action.payload.userID;

  try {
    yield axios.put(
      `/api/user/edit/updateDescription/${experienceID}`,
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

function* updateDescriptionSaga() {
  yield takeLatest("EDIT_ITEM", updateDescription);
}

export default updateDescriptionSaga;
