const init = { keywords: [] };

export const UpdateKeywords = (state = init, action) => {
  // let newState = Object.ass;
  if (action.type === 'UPDATE_KEYWORDS') {
    return Object.assign({}, state, {
      keywords: action.keywords
    });
  } else {
    return state;
  }
}