import React from 'react';

import Search from './Search.jsx';
import BeerWindow from './BeerWindow.jsx';
import Header from './Header.jsx';
import * as allBeers from '../models/search.js';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'allBeers' : [],
      'value': ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // allBeers.getAllBeers().then(response => {
    //   console.log(response)
    // });

    // .then(beers => {
    //   this.setState({'allBeers' : beers});
    // });
  }

  handleSubmit (beer) {
    allBeers.searchBeers(beer).then(beers => {
      this.setState({ allBeers: beers.data });
      //console.log(this.state.allBeers);
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Search onSubmit={ this.handleSubmit }/>
        <BeerWindow beers={ this.state.allBeers }/>
      </div>
    );
  }
}

export default App;
