import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getPhotosExperiences(action) {
  try {
    const userID = action.payload.userID;

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get(
      `/api/imageurl/photoexperience/${userID}`,
      action.payload,
      config
    );
    console.log(action.payload);
    yield put({
      type: "SET_PHOTOS_EXPERIENCES",
      payload: response.data,
    });
    console.log(response.data);
  } catch (err) {
    console.log("error getting list items:", err);
  }
}

function* getPhotosExperiencesSaga() {
  yield takeLatest("GET_PHOTOS_EXPERIENCES", getPhotosExperiences);
  console.log("getPhotosExperiences fired off");
}

export default getPhotosExperiencesSaga;
