import { combineReducers } from "redux";
import errors from "./errors.reducer";
import loginMode from "./loginMode.reducer";
import user from "./user.reducer";
import getList from "./getList.reducer";
import addItem from "./addItem.reducer";
import imageInfo from "./imageInfo.reducer";
import updateComplete from "./updateComplete.reducer";
import updateDescription from "./updateDescription.reducer";
import getPhotosExperiences from "./getPhotosExperiences.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  getList,
  addItem,
  imageInfo,
  updateComplete,
  updateDescription,
  getPhotosExperiences,
});

export const selectPhotosExperiences = (state) => {
  const userExperience = state.getList;
  const experiencePhotoList = state.getPhotosExperiences;
  return experiencePhotoList.find(
    (photo) => photo.experience_id === userExperience.id
  );
};

export default rootReducer;
