const imageInfo = (state = [], action) => {
  switch (action.type) {
    case "SET_NEW_IMAGE":
      return action.payload;
    default:
      return state;
  }
};

export default imageInfo;
