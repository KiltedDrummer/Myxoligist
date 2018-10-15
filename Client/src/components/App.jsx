import React from 'react';
import { Header, MainBox } from '../styles/styledComponents';
import Recipes from './Recipes';
import Ingredients from './Ingredients';
import Search from './Search';
import AddItem from './AddItem';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{
        name: 'Old Fashioned',
        tags: ['bourbon', 'classic'],
        ingredients:
          ['2 oz. bourbon', '.75oz simple syrup', '2 dashes angostura bitters', '1 dash orange bitters', 'orange'],
        instructions: 'Cut a swath of peel off orange, wipe it on rim of glass, mix all ingredients in shaker tin. fill with ice. Stir for 30s. strain into glass. garnish with orange peel',
      }],
      ingredients: [
        {
          name: "Jameson",
          type: "Irish Whiskey",
          id: 1,
        },
        {
          name: "Larceny",
          type: "Bourbon",
          id: 2,
        },
        {
          name: "Simple Syrup",
          type: "Common",
          id: 3,
        },
        {
          name: "Angostura Bitters",
          type: "Bitters",
          id: 4,
        },
        {
          name: "Orange Bitters",
          type: "Bitters",
          id: 5,
        },
        {
          name: "Orange",
          type: "Common",
          id: 6,
        },
      ],
    };
    this.removeItem = this.removeItem.bind(this);
  }

  getRecipes() {
    let ingredientString = ''
    this.state.ingredients.forEach(item => {
      ingredientString += item.id + ', '
    });
    ingredientString.substring(0, ingredientString.length - 2);
    $.ajax({
      type: 'GET',
      url: `/recipes/${ingredientString}`,
      success: (res) => {
        console.log(res.data)
      }
    });
  }

  getIngredients() {
    const user_id = 1;
    $.ajax({
      type: 'GET',
      url: `/user/${user_id}/ingredients`,
      success: (res) => {
          console.log('RES', res);
          this.setState({
            ingredients: res,
          });
      }
    });
  }

  componentDidMount() {
    this.getIngredients();
  }

  removeItem(e) {
    const id = e.target.name;
    const newIngredients = this.state.ingredients.filter(item => {
      if (item.id !== Number(id)) {
        return true;
      }
    });

    this.setState({
      ingredients: newIngredients,
    });
  }

  render() {
    return (
      <MainBox>
        <Header>
          <h1>Welcome to Nick the Bartender!</h1>
          <h3>What shall we mix up today?</h3>
        </Header>
        <Recipes recipes={this.state.recipes} />
        <Ingredients ingredients={this.state.ingredients} removeItem={this.removeItem} />
        <Search />
        <AddItem />

      </MainBox>
    )
  }
}

export default App;
