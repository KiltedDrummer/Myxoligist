import React from 'react';
import { Header, AddIngredient, Centered, Bold, Add } from '../styles/styledComponents';

const AddItem = (props) => {

  return (
    <AddIngredient>
      <Centered>Add an Item</Centered>
      <form>
        <label>
          <Bold>
            Name:
          </Bold>
        </label>
        <input type="text" name="name" />
        <label>
          <Bold>
            Type:
          </Bold>
        </label>
        <input type="text" name="type" />
        <Add type="submit" name="addIngredient" onClick={props.handleAdd} value="Add Ingredient" />
      </form>
    </AddIngredient>
  )
}

export default AddItem;
