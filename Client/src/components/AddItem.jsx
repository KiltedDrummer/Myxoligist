import React from 'react';
import { Header, AddIngredient, Centered, Bold, Add } from '../styles/styledComponents';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchName: e.target.value,
    });
  }

  handleAdd(e) {
    e.preventDefault();
    console.log(this.state.searchName);
    this.props.addItem(this.state.searchName);
  }

  render() {
    console.log('AddItem', this.props)
    return (
      <AddIngredient>
        <Centered>Add an Item</Centered>
        <form>
          <label>
            <Bold>
              Name:
            </Bold>
          </label>
          <input type="text" name="name" onChange={this.handleChange} />
          <Add type="submit" name="addIngredient" onClick={this.handleAdd} value="Add Ingredient" />
        </form>
      </AddIngredient>
    )
  }
};

export default AddItem;
