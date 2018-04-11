import React, { Component } from 'react';
import './App.css';

import LandingPage from './LandingPage';
import SearchHeader from './SearchHeader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResult: '',
    }

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(result) {
    this.setState({ searchResult: result })
  }

  render() {
    const { searchResult } = this.state;
    
    const renderResults = () => {
      return (
        searchResult === 'react' ? 
        <h1>React is AWESOME!!!!</h1> :
        <h1> {this.state.searchResult} </h1>
      )
    }

    return (
      <div className="App">
        <header className="App-header">

          <SearchHeader updateProp={ this.updateSearch } />

        </header>
        
        <section>
        
        { !searchResult ? <LandingPage /> : renderResults() }
    
        </section>
      </div>
    );
  }
}

export default App;
