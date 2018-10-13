import React from 'react';
import { Header, IngredientBox, SoloIngredient, ItemName, ItemType, RemoveItem, Bold } from '../styles/styledComponents';

const Ingredients = ({ ingredients }) => {
  const Ingredients = ingredients.map(item => {
    return (
      <SoloIngredient>
        <ItemName>
          <Bold>
            Name:    
          </Bold>
          {item.name}
        </ItemName>
        <ItemType>
          <Bold>
            Type: 
          </Bold>
          {item.type}
        </ItemType>
        <RemoveItem>X</RemoveItem>
      </SoloIngredient>
    )
  })

  return (
    <IngredientBox>
      <Header>
        <h2>Available Ingredients</h2>
      </Header>
      { Ingredients }
    </IngredientBox>
  )
}

export default Ingredients;
