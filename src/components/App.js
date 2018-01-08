import React, { Component } from 'react';

import Header from './Header';
import Map from './Map';
import FavoritesList from './FavoritesList';

export default class App extends Component {
  // initial state
  constructor(props) {
    super(props);
    this.state = {
      favStores: [],
      showFavs: false,
    };
    this.handleAddFavs = this.handleAddFavs.bind(this);
    this.toggleFavsList = this.toggleFavsList.bind(this);
  }

  // function handle click update state
  handleAddFavs(store) {
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
  }

  // function to show/hide list
  toggleFavsList() {
    const { showFavs } = this.state;
    this.setState({
      showFavs: !showFavs,
    });
  }

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
