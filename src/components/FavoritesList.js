import React from 'react';
import FavoriteItem from './FavoriteItem';

const FavoritesList = props => (
  <div className="board">
    <h1>My Favorites Stores</h1>
    {props.favStores.map((store, index) => {
      return (
        <FavoriteItem
          key={index}
          store={store}
        />
      );
    })
    }
  </div>
);

export default FavoritesList;
