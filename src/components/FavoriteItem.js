import React from 'react';

const FavoriteItem = props => (
  <div className="fav-item">
    <p>#{props.store.id} | {props.store.Name}</p>
  </div>
);

export default FavoriteItem;
