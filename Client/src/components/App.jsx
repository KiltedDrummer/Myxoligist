import React from 'react';
import { Header, MainBox } from '../styles/styledComponents';
import Recipes from './Recipes';
import Ingredients from './Ingredients';
import SplitIngredients from './SplitIngredients';
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
      user_id: 1,
      onTheCounter: false,
      liquorCabinet: false,
    };
    this.updateIngredients = this.updateIngredients.bind(this);
    this.getIngredients = this.getIngredients.bind(this);
    this.add = this.add.bind(this);
    this.findRecipes = this.findRecipes.bind(this);
    this.updateKeywords = this.updateKeywords.bind(this);
    this.minimizeCounter = this.minimizeCounter.bind(this);
    this.minimizeCabinet = this.minimizeCabinet.bind(this);
  }

  minimizeCounter() {
    console.log('On The Conter');
    
    const newValue = !this.state.onTheCounter;
    this.setState({
      onTheCounter: newValue,
    })
  }

  minimizeCabinet() {
    console.log('Liquor Cabinet');
    const newValue = !this.state.liquorCabinet;
    this.setState({
      liquorCabinet: newValue,
    })
  }

    //  REFACTOR AXIOS
  add(name) {
    const { user_id } = this.state;
    $.ajax({
      type: 'GET',
      url: `/user/${user_id}/addItem/${name}`,
      success: (res) => {
        console.log('ADDED', res);
        this.getIngredients();
      }
    })
  }

  getRecipes() {
    const { user_id } = this.state;
    $.ajax({
      type: 'GET',
      url: `/user/${user_id}/recipes`,
      success: (res) => {
        console.log('RES', res);
        this.setState({
          recipes: res,
        });
      }
    });
  }

  updateKeywords() {
    const { user_id } = this.state;
    const keyWords = new Set();
    console.log(this.state.ingredients);
    this.state.ingredients.forEach(item => {
      keyWords.add(item.name);
      keyWords.add(item.type);
      keyWords.add(item.sub_type);
    });

    let ingredientString = ''
    keyWords.forEach((word, index) => {
      if (index !== keyWords.length - 1) {
        ingredientString += `"${word}", `
      } else {
        ingredientString += `"${word}"`
      }
    });

    ingredientString = ingredientString.substring(0, ingredientString.length - 2);
    console.log('UPDATE KEYWORDS');
    $.ajax({
      type: 'POST',
      url: `/user/${user_id}/keywords`,
      data: {
        key_words: ingredientString,
      },
      dataType: 'text',
      success: (res) => {
        console.log('KEYWORDS', res);
        this.findRecipes();
      }
    });
  }

  findRecipes() {
    const { user_id } = this.state;
    $.ajax({
      type: 'GET',
      url: `/user/${user_id}/find`,
      success: (res) => {
        console.log('RECIPES', res);
        this.setState({
          recipes: res,
        });
      }
    });
  }

  getIngredients() {
    console.log('I MADE IT');
    const { user_id } = this.state;
    $.ajax({
      type: 'GET',
      url: `/user/${user_id}/ingredients`,
      success: (res) => {
        console.log('RES', res);
        this.setState({
          ingredients: res,
        });
        this.updateKeywords();
      }
    });
  }

  componentDidMount() {
    this.getIngredients()
    // this.findRecipes();
    this.getRecipes();
  }

  updateIngredients(toRemove) {
    $.ajax({
      type: 'GET',
      url: `/user/${1}/remove/${toRemove}`,
      success: (res) => {
        console.log('UPDATED INGREDIENTS', res);
        // this.getIngredients();
        this.setState({
          ingredients: res,
        }, () => {
          this.updateKeywords();
        })
      }
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
        <SplitIngredients 
          ingredients={this.state.ingredients}
          updateIngredients={this.updateIngredients}
          updateKeywords={this.updateKeywords}
          minimizeCabinet={this.minimizeCabinet}
          minimizeCounter={this.minimizeCounter}
          onTheCounter={this.state.onTheCounter}
          liquorCabinet={this.state.liquorCabinet}
        />
        <Search />
        <AddItem addItem={this.add} />

      </MainBox>
    )
  }
}

export default App;
