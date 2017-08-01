import React from 'react';

const Beer = ({ beer }) => (
  <div className="beer">
    <p><label>Name: </label> { beer.name }</p>
    { beer.labels && <img src={ beer.labels.medium } /> }
    { !beer.labels && <img width='256' height='auto' src='./assets/anonbeer.jpg' /> }

    <p><label>Brewery: </label><a href={beer.breweries[0].website} target="_blank" >{ beer.breweries[0].name === undefined ? ' Not Available' : ' ' + beer.breweries[0].name}</a></p>
    <div className="scroll"><p><label>Description: </label>{ beer.description === undefined ? ' Not Available' : ' ' + beer.description}</p></div>
    <p><label>Type: </label>{ beer.style.name === undefined ? ' Not Available' : ' ' + beer.style.name}</p>
    <p><label>ABV: </label> { beer.abv === undefined ? ' Not Available' : ' ' + beer.abv}</p>
    <p><label>IBU: </label> { beer.ibu === undefined ? ' Not Available' : ' ' + beer.ibu}</p>
  </div>

);

export default Beer;
