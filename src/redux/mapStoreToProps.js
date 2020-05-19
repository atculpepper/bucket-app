import { selectPhotosExperiences } from "./reducers/_root.reducer";

const mapStoreToProps = (reduxState) => {
  return {
    store: reduxState,
    // reduxState properties bound directly to "props"
    // ---------
    // Instead of taking everything from state, we just want the user info.
    // if you wanted you could write this code like this:
    user: reduxState.user,
    loginMode: reduxState.loginMode,
    errors: reduxState.errors,
    //the below comes from a selector function in the root reducer
    experiencePhoto: selectPhotosExperiences,
  };
};

export default mapStoreToProps;
