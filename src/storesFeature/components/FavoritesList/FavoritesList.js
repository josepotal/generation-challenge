import React from 'react';
import PropTypes from 'prop-types';

import FavoriteItem from '../FavoriteItem/FavoriteItem';
import styles from './FavoritesList.module.scss';

function FavoritesList({ showFavs, favStores, toggleFavsList }) {
  const buttonText = showFavs ? 'Hide Favorite Stores' : 'Show Favorite Stores';
  return (
    <div className={styles.favList}>
      <button className={styles.button} onClick={toggleFavsList}>
        {buttonText}
      </button>
      {showFavs ? (
        favStores.map(store => <FavoriteItem key={store.id} store={store} />)
      ) : (
        <div className={styles.message}>
          (Click on the icons to add them to your Favorites List)
        </div>
      )}
    </div>
  );
}

FavoritesList.propTypes = {
  showFavs: PropTypes.bool.isRequired,
  favStores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired,
      Address: PropTypes.string.isRequired,
      loc: PropTypes.arrayOf(PropTypes.number.isRequired),
    }),
  ).isRequired,
  toggleFavsList: PropTypes.func.isRequired,
};

export default FavoritesList;
