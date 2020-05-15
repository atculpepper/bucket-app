const getPhotosExperiences = (state = [], action) => {
  switch (action.type) {
    case "SET_PHOTOS_EXPERIENCES":
      return action.payload;
    default:
      return state;
  }
};

export default getPhotosExperiences;
