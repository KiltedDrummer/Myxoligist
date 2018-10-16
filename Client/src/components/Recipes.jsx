import React from 'react';
import { Head, RecipeBox } from '../styles/styledComponents';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => {
  const RecipeList = recipes.map(ele => {
    return (
      <Recipe recipe={ele}></Recipe> 
    )
  })
  return (
    <RecipeBox>
      <Head>
        <h2>Available Recipes</h2>
      </Head>
      { RecipeList }
    </RecipeBox>
  )
}

export default Recipes;
