const inisialState = {
  cardData: [],
};

const addItems = (state = [], action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.data];

    case "DELITEM":
      state.pop();

      return [...state];

    default:
      return state;
  }
};

export default addItems;
