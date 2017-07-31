import React from 'react';
import Beer from './Beer.jsx'


class BeerWindow extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
     <div className="beers">
      <h3>Found Beer!</h3>
      <Beer />

     </div>
    )
  }
}


export default BeerWindow;
