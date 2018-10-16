import React from 'react';
import { Head, SplitBox, SoloIngredient, ItemName, ItemType, RemoveItem, Bold, SubType, Minimized, Half, Full } from '../styles/styledComponents';
import { types } from 'util';

class LiquorCabinet extends React.Component {
  constructor(props) {
    super(props);
    // this.removeItem = this.removeItem.bind(this);
    this.types = new Set(['Common', 'Garnish', '', 'Mixer']);
  }

  // removeItem(e) {
  //   const id = e.target.name;
  //   console.log('REMOVE', id)
  //   this.props.updateIngredients(id);
  // }

  buildLiquors() {
    const { ingredients } = this.props;
    const LiquorList = this.props.ingredients.map(item => {
      if (!this.types.has(item.type)) {
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
            <RemoveItem name={item.id} onClick={this.props.removeItem}>X</RemoveItem>
          </SoloIngredient>
        )
      }
    });

    return LiquorList
  }

  render() {
    if (!this.props.liquorCabinet && !this.props.onTheCounter) {
      // as half
      return (
        <Half>
          <Head onClick={this.props.minimizeCabinet}>
            <h2>Available Liquors</h2>
          </Head>
          {this.buildLiquors()}
        </Half>
      );
    } else if (!this.props.liquorCabinet && this.props.onTheCounter) {
      // as full
      return (
        <Full>
          <Head onClick={this.props.minimizeCabinet}>
            <h2>Available Liquors</h2>
          </Head>
          {this.buildLiquors()}
        </Full>
      );
    } else {
      // as minimized
      return (
        <Minimized>
          <Head onClick={this.props.minimizeCabinet}>
            <h2>Available Liquors</h2>
          </Head>
        </Minimized>
      );
    }
  }
}

export default LiquorCabinet;