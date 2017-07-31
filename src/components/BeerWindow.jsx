import React from 'react';
import Beer from './Beer.jsx'

import { Row, Col } from 'react-bootstrap';


class BeerWindow extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
     <div className="beers">
     <Row className="show-grid">
      <h3>Full pours of brew info just for you</h3>
      <Col xs={12} md={4}> <Beer /> </Col>
      <Col xs={12} md={4}> <Beer /> </Col>
      <Col xs={12} md={4}> <Beer /> </Col>
      <Col xs={12} md={4}> <Beer /> </Col>
      <Col xs={12} md={4}> <Beer /> </Col>
      <Col xs={12} md={4}> <Beer /> </Col>
      <Col xs={12} md={4}> <Beer /> </Col>
      <Col xs={12} md={4}> <Beer /> </Col>
      <Col xs={12} md={4}> <Beer /> </Col>
      <Col xs={12} md={4}> <Beer /> </Col>


    </Row>
     </div>
    )
  }
}


export default BeerWindow;
