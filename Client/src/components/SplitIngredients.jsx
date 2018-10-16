import React from 'react';
import { Header, SplitBox, SoloIngredient, ItemName, ItemType, RemoveItem, Bold, SubType, Minimized, Half, Full } from '../styles/styledComponents';
import { types } from 'util';
import LiquorCabinet from './LiquorCabinet';
import OnTheCounter from './CommonIngredients'

class Ingredients extends React.Component {
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

  // buildLiquors() {
  //   const { ingredients } = this.props;
  //   const LiquorList = ingredients.map(item => {
  //     if (!this.types.has(item.type)) {
  //       return (
  //         <SoloIngredient key={item.id}>
  //           <ItemName>
  //             <Bold>
  //               Name:
  //             </Bold>
  //             {item.name}
  //           </ItemName>
  //           <ItemType>
  //             <Bold>
  //               Type:
  //             </Bold>
  //             {item.type}
  //           </ItemType>
  //           <SubType>
  //             <Bold>
  //               Sub-Type:
  //             </Bold>
  //             {item.sub_type}
  //           </SubType>
  //           <RemoveItem name={item.id} onClick={this.removeItem}>X</RemoveItem>
  //         </SoloIngredient>
  //       )
  //     }
  //   });

  //   return LiquorList;
  // }

  // buildCommons() {
  //   const CommonList = ingredients.map(item => {
  //     if (this.types.has(item.type)) {
  //       return (
  //         <SoloIngredient key={item.id}>
  //           <ItemName>
  //             <Bold>
  //               Name:
  //               </Bold>
  //             {item.name}
  //           </ItemName>
  //           <ItemType>
  //             <Bold>
  //               Type:
  //               </Bold>
  //             {item.type}
  //           </ItemType>
  //           <SubType>
  //             <Bold>
  //               Sub-Type:
  //               </Bold>
  //             {item.sub_type}
  //           </SubType>
  //           <RemoveItem name={item.id} onClick={this.removeItem}>X</RemoveItem>
  //         </SoloIngredient>
  //       )
  //     }
  //   });

  //   return CommonList;
  // }

  render() {
    return (
      <SplitBox>
        <LiquorCabinet
        ingredients={this.props.ingredients}
        onTheCounter={this.props.onTheCounter}
        liquorCabinet={this.props.liquorCabinet}
        removeItem={this.removeItem}
        minimizeCabinet={this.props.minimizeCabinet}
        />
        <OnTheCounter
        ingredients={this.props.ingredients}
        onTheCounter={this.props.onTheCounter}
        liquorCabinet={this.props.liquorCabinet}
        removeItem={this.removeItem}
        minimizeCounter={this.props.minimizeCounter}
        />
      </SplitBox>
    )
  }
}

export default Ingredients;
