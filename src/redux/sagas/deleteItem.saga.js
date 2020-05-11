import axios from "axios";
import { takeLatest } from "redux-saga/effects";

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
    // const response = yield axios.get(`/api/user/${userID}`);
    // const userID = action.payload.user_id;
    // yield put({
    //   url: `/api/user/${userID}`,
    //   type: "SET_LIST_ITEMS",
    //   payload: { userID },
    // });
    // yield put({
    //   type: "SET_LIST_ITEMS",
    //   payload: response.data,
    // });

    //   url: `/api/user/${userID}`,
    //   type: "GET_LIST_ITEMS",
    //   payload: { userID },

    // const response = yield axios.get(`/api/user/${userID}`);
    // yield put({
    //   type: "SET_LIST_ITEMS",
    //   payload: response.data,
    // });
    //   });
    //     const response = yield axios.get(`/api/user/${userID}`);
    //     yield put({
    //       type: "SET_LIST_ITEMS",
    //       payload: response.data,
    //     });
    // yield put({
    //   url: `/api/user/${action.payload.user_id}`,
    //   type: "GET_LIST_ITEMS",
    //   payload: action.payload.user_id,
    // });
  } catch (err) {
    console.warn(err);
  }
}

function* deleteItemSaga() {
  yield takeLatest("DELETE_ITEM", deleteItem);
}

export default deleteItemSaga;
