import React from 'react';
import { FormControl } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
     <div>
      <FormControl placeholder="Grab a cold one"></FormControl>
      <button>Beer me.</button>
     </div>
    )
  }
}


export default Search;
