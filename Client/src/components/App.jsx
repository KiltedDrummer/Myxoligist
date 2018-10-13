import React from 'react';
import { Header, MainBox } from '../styles/styledComponents';
import Recipes from './Recipes';
import Ingredients from './Ingredients';
import Search from './Search';
import AddItem from './AddItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.recipes = [{
      name: 'Old Fashioned',
      tags: ['bourbon', 'classic'],
      ingredients:
      ['2 oz. bourbon', '.75oz simple syrup', '2 dashes angostura bitters', '1 dash orange bitters', 'orange'],
      instructions: 'Cut a swath of peel off orange, wipe it on rim of glass, mix all ingredients in shaker tin. fill with ice. Stir for 30s. strain into glass. garnish with orange peel',
    }];
    this.ingredients = [
      {
        name: "Jameson",
        type: "Irish Whiskey",
      },
      {
        name: "Larceny",
        type: "Bourbon",
      },
      {
        name: "Simple Syrup",
        type: "Common",
      },
      {
        name: "Angostura Bitters",
        type: "Bitters",
      },
      {
        name: "Orange Bitters",
        type: "Bitters",
      },
      {
        name: "Orange",
        type: "Common",
      },
    ]
  }

  render() {
    return (
      <MainBox>
        <Header>
          <h1>Welcome to Nick the Bartender!</h1>
          <h3>What shall we mix up today?</h3>
        </Header>
        <Recipes recipes={this.recipes} />
        <Ingredients ingredients={this.ingredients} />
        <Search />
        <AddItem />

      </MainBox>
    )
  }
}

export default App;
