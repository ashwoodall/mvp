import React from 'react';
import Beer from './Beer.jsx'

import { Row, Col } from 'react-bootstrap';



const BeerWindow = (props) => (
  <div className="BeerWindow">
    {props.beers.map((beer, index) =>
      <Col key={ index } xs={12} md={6} ><Beer key={beer.id} beer={beer} /></Col>
    )}
  </div>
);


// class BeerWindow extends React.Component {
//   constructor(props){
//     super(props);

//   }


//   render() {
//     return (
//      <div className="beers">
//       <h3>Full pours of brew info just for you</h3>
//        <Row className="show-grid">
//          {props.beers.map(beer =>
//            <Beer key={beer.id} beer={beer} />
//          )}
//       </Row>
//      </div>
//     )
//   }
// }


export default BeerWindow;
