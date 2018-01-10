import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Map from './components/Map/Map';
import FavoritesList from './components/FavoritesList/FavoritesList';

export default class StoresContainer extends Component {
  // initial state
  state = {
    favStores: [],
    showFavs: false,
  };

  // function handle click update state
  handleAddFavs = store => {
    let { favStores } = this.state;
    const idsArray = [];
    favStores.map(storeItem => idsArray.push(storeItem.id));
    if (idsArray.includes(store.id)) {
      return 'already added';
    }
    favStores = [...favStores, store];
    this.setState({
      favStores,
    });
    return null;
  };

  // function to show/hide list
  toggleFavsList = () => {
    const { showFavs } = this.state;
    this.setState({
      showFavs: !showFavs,
    });
  };

  render() {
    const { favStores, showFavs } = this.state;
    return (
      <div>
        <Header />
        <Map
          initialPosition={{ lat: 19.43236, lng: -99.1332 }}
          handleAddFavs={this.handleAddFavs}
          favStores={favStores}
        />
        <FavoritesList
          favStores={favStores}
          showFavs={showFavs}
          toggleFavsList={this.toggleFavsList}
        />
      </div>
    );
  }
}
