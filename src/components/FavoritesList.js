import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FavoriteItem from './FavoriteItem';

class FavoritesList extends Component {
  render () {
    const { showFavs, favStores, toggleFavsList } = this.props
    const buttonText = (showFavs) ? 'Hide Favorite Stores': 'Show Favorite Stores'
    return(
      <div className="fav-list">
        <button className="fav-list-button" onClick={toggleFavsList}>{buttonText}</button>
        {(showFavs) ?
          favStores.map(store => {
            return (
              <FavoriteItem
                key={store.id}
                store={store}
              />
            );
          })
        : <div className="fav-list-message">(Click on the icons to add them to your Favorites List)</div>
        }
      </div>
    )
  }
}

FavoritesList.propTypes = {
  showFavs: PropTypes.bool.isRequired,
  favStores: PropTypes.array,
  toggleFavsList: PropTypes.func.isRequired,
};

export default FavoritesList;
