import React from 'react';
import { Header, SearchBox, SearchStyle, Submit, SearchForm } from '../styles/styledComponents';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  handleSearch(e) {
    e.preventDefault();
  }

  render() {
    return (
      <SearchBox>
        <SearchForm>
          <label>Search</label>
          <SearchStyle type="textarea" name="search" placeholder="Narrow down your options by Name or an ingredient" onChange={this.handleChange} />
          <Submit type="submit" name="submit" onClick={this.handleSearch} value="Search!" />
        </SearchForm>
      </SearchBox>
    )
  }
}

export default Search;
