const updateComplete = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_COMPLETE":
      return action.payload;
    default:
      return state;
  }
};

export default updateComplete;
