import React from 'react';

import Search from './Search.jsx';
import BeerWindow from './BeerWindow.jsx';
import Header from './Header.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {

  }




  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <BeerWindow />
      </div>
    );
  }
}

export default App;
