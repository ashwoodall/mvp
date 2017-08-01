import fetch from 'isomorphic-fetch';

export const searchBeers = function (beer) {
  return fetch(`api/search/?q=${beer}`)
    .then(response => response.json())
}
