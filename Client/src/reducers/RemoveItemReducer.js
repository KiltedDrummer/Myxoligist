const init = {
  ingredients: [
    {
      name: "Jameson",
      type: "Irish Whiskey",
      id: 1,
    },
    {
      name: "Larceny",
      type: "Bourbon",
      id: 2,
    },
    {
      name: "Simple Syrup",
      type: "Common",
      id: 3,
    },
    {
      name: "Angostura Bitters",
      type: "Bitters",
      id: 4,
    },
    {
      name: "Orange Bitters",
      type: "Bitters",
      id: 5,
    },
    {
      name: "Orange",
      type: "Common",
      id: 6,
    },
  ],
};

export const RemoveItemReducer = (state = init, action) => {
  let newState;
  if (action.type === 'REMOVE_ITEM') {
    newState = action;
  } else {
    return state;
  }
  return newState;
}