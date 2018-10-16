import React from 'react';
import $ from 'jquery';
import { Header, IngredientBox, SoloIngredient, ItemName, ItemType, RemoveItem, Bold, SubType } from '../styles/styledComponents';

const Ingredients = ({ ingredients, update }) => {
  const removeItem = (e) => {
    const id = e.target.name;
    const newIngredients = [];
    ingredients.forEach(item => {
      if (item.id !== Number(id)) {
        newIngredients.push(item.id);
      }
    });
    console.log('NEW', newIngredients)
    update(newIngredients);
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
