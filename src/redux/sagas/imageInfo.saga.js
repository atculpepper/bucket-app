import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* postImageUrl(action) {
  try {
    const userID = action.payload.userID;
    const imgURL = action.payload.imgURL;

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.post(`/api/imageurl/${userID}`, action.payload, config);
    yield put({
      type: "SET_NEW_IMAGE",
      payload: action.payload,
    });
    //after Post comes back successful, put in a GET

    yield axios.get(`/api/user/${userID}`);
  } catch (err) {
    console.log("image URL post failed:", err);
  }
}

function* imageInfoSaga() {
  yield takeLatest("POST_IMAGE_URL", postImageUrl);
  console.log("imageInfoSaga fired");
}

export default imageInfoSaga;
