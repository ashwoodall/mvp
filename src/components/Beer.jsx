import React from 'react';

const Beer = ({ beer }) => (
  <div className="beer">
    <p><label>Name: </label> { beer.name }</p>
    { beer.labels && <img src={ beer.labels.medium } /> }
    { !beer.labels && <img width='256' height='256' src='https://www.drinkpreneur.com/wp-content/uploads/2017/04/drinkpreneur_2016-01-26-1453821995-8643361-beermain.jpg' /> }
    <p><label>Description: </label>{ beer.description }</p>
    <p><label>Type: </label>{ beer.style.name }</p>
    <p><label>ABV: </label> { beer.abv }</p>
    <p><label>IBU: </label> { beer.ibu }</p>
  </div>
);

export default Beer;
