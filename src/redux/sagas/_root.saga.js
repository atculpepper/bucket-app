import { all } from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";
import getListSaga from "./getList.saga";
import addItemSaga from "./addItem.saga";
import deleteItemSaga from "./deleteItem.saga";
import imageInfoSaga from "./imageInfo.saga";
import updateCompleteSaga from "./updateComplete.saga";
import updateDescriptionSaga from "./updateDescription.saga";

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    getListSaga(),
    addItemSaga(),
    deleteItemSaga(),
    imageInfoSaga(),
    updateCompleteSaga(),
    updateDescriptionSaga(),
  ]);
}
