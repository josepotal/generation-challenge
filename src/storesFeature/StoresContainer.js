import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Map, FavoritesList } from './components';
import * as actions from './StoresActions';

class StoresContainer extends Component {
  // function handle click update state
  handleAddFavs = store => {
    const { addFavoriteStore } = this.props.actions;
    addFavoriteStore(store);
  };

  // function to show/hide list
  toggleFavsList = () => {
    const { toggleFavsList } = this.props.actions;
    toggleFavsList();
  };

  render() {
    const { favStores, showFavs } = this.props;
    return (
      <div>
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

StoresContainer.propTypes = {
  actions: PropTypes.shape({
    addFavoriteStore: PropTypes.func.isRequired,
    toggleFavsList: PropTypes.func.isRequired,
  }).isRequired,
  showFavs: PropTypes.bool.isRequired,
  favStores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired,
      Address: PropTypes.string.isRequired,
      loc: PropTypes.arrayOf(PropTypes.number.isRequired),
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  favStores: state.favoriteStores.favStores,
  showFavs: state.favoriteStores.showFavs,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoresContainer);
