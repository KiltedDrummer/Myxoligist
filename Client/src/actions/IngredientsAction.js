import $ from 'jquery';

export const UpdateIngredients = () => {
  return (dispatch, getState) => {
    const user_id = 1;
    $.ajax({
      type: 'GET',
      url: `/user/${user_id}/ingredients`,
      success: (res) => {
        console.log('RES', res);
        dispatch({
          type: 'UPDATE_INGREDIENTS',
          ingredients: res,
        });
      }
    });
  };
}