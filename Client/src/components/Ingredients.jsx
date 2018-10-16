import React from 'react';
import { Header, IngredientBox, SoloIngredient, ItemName, ItemType, RemoveItem, Bold, SubType } from '../styles/styledComponents';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(e) {
    const id = e.target.name;
    console.log('REMOVE', id)
    this.props.updateIngredients(id);
  }

  buildItems() {
    const { ingredients } = this.props;
    const IngredientList = ingredients.map(item => {
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
          <RemoveItem name={item.id} onClick={this.removeItem}>X</RemoveItem>
        </SoloIngredient>
      )
    });

    return IngredientList
  }

  // componentDidUpdate() {
  //   this.props.updateKeywords();
  // }

  render() {
    return (
      <IngredientBox>
        <Header>
          <h2>Available Ingredients</h2>
        </Header>
        { this.buildItems() }
      </IngredientBox>
    )
  }
}

export default Ingredients;
