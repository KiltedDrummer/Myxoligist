import { combineReducers } from 'redux';
import { RemoveItemReducer } from './RemoveItemReducer';
import { UpdateIngredients } from './IngredientsReducer';
import { UpdateKeywords } from './UpdateKeywordsReducer';

export const rootReducer = combineReducers({
  RemoveItemReducer,
  UpdateIngredients,
  UpdateKeywords,
});