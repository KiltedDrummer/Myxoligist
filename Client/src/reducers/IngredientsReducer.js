const init = {
  ingredients: [{id: 1, name: 'Larceny', type: 'Whiskey', sub_type: 'Bourbon'}],
};

export const UpdateIngredients = (state = init, action) => {
  // let newState = Object.ass;
  if (action.type === 'UPDATE_INGREDIENTS') {
    return Object.assign({}, state, {
      ingredients: action.ingredients
    })
  } else {
    return state;
  }
}