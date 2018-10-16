const init = {
  ingredients: [],
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