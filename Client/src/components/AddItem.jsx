import React from 'react';
import { Header, AddIngredient, Centered, Bold, Add } from '../styles/styledComponents';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
    }
  }

  handleChange(e) {
    this.setState({
      searchName: e.target.value
    })
  }

  handleAdd(e) {
    e.preventDefault();
    console.log(this.state.searchName);
  }

  render() {
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
          <Add type="submit" name="addIngredient" onClick={this.handleAdd} onChange={this.handleChange} placeHolder="Add Ingredient" />
        </form>
      </AddIngredient>
    )
  }
};

export default AddItem;
