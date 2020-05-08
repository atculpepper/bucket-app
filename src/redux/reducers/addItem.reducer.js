const addItem = (state = [], action) => {
  switch (action.type) {
    case "SET_NEW_ITEM":
      return action.payload;
    default:
      return state;
  }
};

export default addItem;
