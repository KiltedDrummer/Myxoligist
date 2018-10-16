import $ from 'jquery';

export const UpdateKeywords = () => {
  const state = getState();
  const keyWords = new Set();
  console.log(state.ingredients);
  state.ingredients.forEach(item => {
    keyWords.add(item.name);
    keyWords.add(item.type);
    keyWords.add(item.sub_type);
  });

  let ingredientString = ''
  keyWords.forEach((word, index) => {
    if (index !== keyWords.length - 1) {
      ingredientString += `"${word}", `
    } else {
      ingredientString += `"${word}"`
    }
  });

  ingredientString = ingredientString.substring(0, ingredientString.length - 2);
  console.log(ingredientString);

  return (dispatch, getState) => {
    const user_id = 1;
    $.ajax({
      type: 'POST',
      url: `/user/${user_id}/keywords`,
      data: {
        key_words: ingredientString,
      },
      dataType: 'text/json',
      success: (res) => {
        dispatch({ type: 'UPDATE_KEYWORDS', keyWords: res})
        console.log('KEYWORDS', res);
      }
    });
  }

}