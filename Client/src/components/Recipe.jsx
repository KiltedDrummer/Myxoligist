import React from 'react';
import { Header, RecipeItem, TagStyle, SoloTag, TagName, Centered, IngredientsStyle,  IngredientList } from '../styles/styledComponents';

const Recipe = ({ recipe }) => {
  const Tags = recipe.tags.map(tag => {
    return (<SoloTag>{tag}</SoloTag>);
  });

  const Ingredients = recipe.ingredients.map(item => {
    return (<IngredientList>{item}</IngredientList>);
  });

  return (
    <RecipeItem>
      <Centered>{ recipe.name }</Centered>
      <div>
        <TagStyle>
          <TagName>Tags:</TagName>
          { Tags }
        </TagStyle>
      </div>
      <IngredientsStyle>
        { Ingredients }
      </IngredientsStyle>
      <p>{ recipe.instructions }</p>
    </RecipeItem>
  )
}

export default Recipe;
