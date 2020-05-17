import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getPhotosExperiences(action) {
  try {
    const userID = action.payload.userID;

    const config = {
      headers: { "Content-Type": "application/json" },
      params: {
        userID: action.payload.userID,
        experienceID: action.payload.experienceID,
      },
      withCredentials: true,
    };
    const response = yield axios.get(
      `/api/imageurl/photoexperience/${userID}`,
      config
    );
    // console.log(action.payload);
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
