import React, { Component } from 'react';

class SearchHeader extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    }    
  }

  updateSearch(event) {
    this.setState({ searchValue: event.target.value })
  }

  render() {
    console.log('search header props ', this.props);
    const { searchValue } = this.state;

    return (
      <div>
        <input 
          placeholder='search'
          onChange={ e => this.updateSearch(e) } />
        
        <button onClick={() => this.props.updateProp(searchValue) } >
          Submit
        </button>

      </div>
    )
  }
}

export default SearchHeader;