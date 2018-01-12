import React from 'react';
import PropTypes from 'prop-types';

import FavoriteItem from '../FavoriteItem/FavoriteItem';
import './FavoritesList.module.scss';

function FavoritesList({ showFavs, favStores, toggleFavsList }) {
  const buttonText = showFavs ? 'Hide Favorite Stores' : 'Show Favorite Stores';
  return (
    <div className="favList">
      <button className="button" onClick={toggleFavsList}>
        {buttonText}
      </button>
      {showFavs ? (
        favStores.map(store => <FavoriteItem key={store.id} store={store} />)
      ) : (
        <div className="message">
          (Click on the icons to add them to your Favorites List)
        </div>
      )}
    </div>
  );
}

FavoritesList.defaultProps = {
  showFavs: false,
  favStores: [],
};

FavoritesList.propTypes = {
  showFavs: PropTypes.bool,
  favStores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired,
      Address: PropTypes.string.isRequired,
      loc: PropTypes.arrayOf(PropTypes.number.isRequired),
    }),
  ),
  toggleFavsList: PropTypes.func.isRequired,
};

export default FavoritesList;
