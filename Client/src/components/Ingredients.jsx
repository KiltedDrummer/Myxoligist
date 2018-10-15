import React from 'react';
import { Header, IngredientBox, SoloIngredient, ItemName, ItemType, RemoveItem, Bold, SubType } from '../styles/styledComponents';

const Ingredients = ({ ingredients }) => {
  const removeItem = (e) => {
    const id = e.target.name;
    const newIngredients = ingredients.filter(item => {
      if (item.id !== Number(id)) {
        return true;
      }
    });
  }

  const Ingredients = ingredients.map(item => {
    return (
      <SoloIngredient key={item.id}>
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
        <SubType>
          <Bold>
            Sub-Type:
          </Bold>
          {item.sub_type}
        </SubType>
        <RemoveItem name={item.id} onClick={removeItem}>X</RemoveItem>
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
