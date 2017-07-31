import React from 'react';

const Beer = (props) => (
  <div className="beer">
    <p>Name: Pearl Snap</p>
    <img src="https://s3.amazonaws.com/brewerydbapi/beer/pLRUgD/upload_MDbR0Z-medium.png" />
    <p>Description: "When the temperature hits 100, this beer will be your best friend.
    When it hits 109, six of these will be your girlfriend. It has a bright hop character with a
    finish so clean it will pick up after itself. It’s Crisp, Refreshing, and Clean. HOPS: German Magnum,
    Tettnanger, Saaz, Hallertau\r\nMALTS: Pils, Carapils\r\nYEAST: Urquell Lager"</p>
    <p>Type: Pilsner</p>
    <p>ABV: 5</p>
  </div>
);

export default Beer;
