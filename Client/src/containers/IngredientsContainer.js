import { connect } from 'react-redux';
import { UpdateKeywords } from '../actions/UpdateKeywordsAction';
import { UpdateIngredients } from '../actions/IngredientsAction';
import { Ingredients } from '../components/Ingredients';




const mapDispatchToProps = (dispatch) => {
  const obj = {
    updateKeywords: () => {
      dispatch(UpdateKeywords());
    },
    updateIngredients: () => {
      dispatch(UpdateIngredients());
    },
  };
  return obj;
};

const mapStateToProps = (state) => {
  const props = {
    ingredients: state.UpdateIngredients.ingredients,
    key_words: state.UpdateKeywords.keywords,
  };
  return props;
};

const IngredientsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ingredients);

export default IngredientsContainer;