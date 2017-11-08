import React, {Component} from 'react';
import FavoriteItem from './FavoriteItem';

export default class FavoritesList extends Component {
  render () {
    const buttonText = (this.props.showFavs) ? 'Hide Favorite Store': 'Show Favorite Store'
    return(
      <div className="board">
        <h1>My Favorites Stores</h1>
        {(this.props.showFavs) ?
          this.props.favStores.map((store, index) => {
            return (
              <FavoriteItem
                key={index}
                store={store}
              />
            );
          })
        : <div>(Click on the icons to add them to your Favorites List)</div>
        }
        <button onClick={this.props.toggleFavsList}>{buttonText}</button>
      </div>
    )
  }
}
