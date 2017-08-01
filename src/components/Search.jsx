import React from 'react';
import { FormControl } from 'react-bootstrap';

import BeerWindow from './BeerWindow.jsx';

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      beer: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ beer: event.target.value });
  }

  handleSubmit() {
    this.props.onSubmit(this.state.beer);
  }

  render() {
    return (
     <div>
      <FormControl onChange={ this.handleChange } value={ this.state.beer } placeholder="Grab a cold one"></FormControl>
      <button onClick={ this.handleSubmit }>Beer me.</button>
     </div>
    )
  }
}


export default Search;
