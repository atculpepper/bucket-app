import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* updateComplete(action) {
  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };
  const experienceID = action.payload.experienceID;
}

function* updateCompleteSaga() {
  yield takeLatest("UPDATE_COMPLETE", updateComplete);
}

export default updateCompleteSaga;
