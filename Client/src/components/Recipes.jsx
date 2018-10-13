import React from 'react';
import { Header, RecipeBox } from '../styles/styledComponents';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => {
  const RecipeList = recipes.map(ele => {
    return (
      <Recipe recipe={ele}></Recipe> 
    )
  })
  return (
    <RecipeBox>
      <Header>
        <h2>Available Recipes</h2>
      </Header>
      { RecipeList }
    </RecipeBox>
  )
}

export default Recipes;
