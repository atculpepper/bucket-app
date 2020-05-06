const addItem = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return action.payload;
    default:
      return state;
  }
};

export default addItem;
