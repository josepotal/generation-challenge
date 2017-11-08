import React from 'react';

const FavoriteItem = props => (
  <div className="card">
    <p>{props.store.Name}</p>
  </div>
);

export default FavoriteItem;
