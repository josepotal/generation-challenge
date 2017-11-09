import React, {Component} from 'react';
import FavoriteItem from './FavoriteItem';

export default class FavoritesList extends Component {
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
