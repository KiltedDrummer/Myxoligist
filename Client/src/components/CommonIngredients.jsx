import React from 'react';
import { Head, SplitBox, SoloIngredient, ItemName, ItemType, RemoveItem, Bold, SubType, Minimized, Half, Full } from '../styles/styledComponents';
import { types } from 'util';

class OnTheCounter extends React.Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.types = new Set(['Common', 'Garnish', '', 'Mixer']);
  }

  removeItem(e) {
    const id = e.target.name;
    console.log('REMOVE', id)
    this.props.updateIngredients(id);
  }

  buildCommons() {
    const CommonList = this.props.ingredients.map(item => {
      if (this.types.has(item.type)) {
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
      }
    });

    return CommonList;
  }

  render() {
    if (!this.props.liquorCabinet && !this.props.onTheCounter) {
      // as half
      return (
        <Half>
          <Head onClick={this.props.minimizeCounter}>
            <h2>On the Counter</h2>
          </Head>
          {this.buildCommons()}
        </Half>
      );
    } else if (this.props.liquorCabinet && !this.props.onTheCounter) {
      // as full
      return (
        <Full>
          <Head onClick={this.props.minimizeCounter}>
            <h2>On the Counter</h2>
          </Head>
          {this.buildCommons()}
        </Full>
      );
    } else {
      // as minimized
      return (
        <Minimized>
          <Head onClick={this.props.minimizeCounter}>
            <h2>On the Counter</h2>
          </Head>
        </Minimized>
      );
    }
  }
}

export default OnTheCounter;