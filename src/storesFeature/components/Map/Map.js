import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Map.scss';

import database from '../../../data/database';

const { google } = window;

export default class Map extends Component {
  constructor() {
    super();
    this.setMarkers = this.setMarkers.bind(this);
  }

  componentDidMount() {
    const { lat, lng } = this.props.initialPosition;
    // eslint-disable-next-line
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat, lng },
      zoom: 12,
    });

    this.setMarkers(this.map);
  }

  setMarkers = map => {
    // eslint-disable-next-line
    database.ref('/stores').on('value', snap => {
      const stores = snap.val();
      const cleanStores = Object.values(stores);
      // eslint-disable-next-line
      cleanStores.map((store, index) => {
        const image = {
          url: 'http://maps.gstatic.com/mapfiles/ms2/micons/blue.png',
          scaledSize: new google.maps.Size(42, 42),
          origin: new google.maps.Point(0, -6),
          anchor: new google.maps.Point(0, 0),
        };
        const imageFav = {
          url: 'http://maps.gstatic.com/mapfiles/ms2/micons/green.png',
          scaledSize: new google.maps.Size(42, 42),
          origin: new google.maps.Point(0, -6),
          anchor: new google.maps.Point(0, 0),
        };

        let marker;
        if (store.loc) {
          marker = new google.maps.Marker({
            position: { lat: store.loc[0], lng: store.loc[1] },
            map,
            animation: google.maps.Animation.DROP,
            title: store.Name,
            label: store.id.toString(),
            icon: image,
          });

          // onClick add to my favorites list
          marker.addListener('click', () => {
            this.props.handleAddFavs(store);
            marker.setIcon(imageFav);
          });

          const contentString = `
            <div class="content">
              <p>${store.id} | ${marker.title}</p>
              <p>${store.Address}</p>
            </div>`;

          // onHover show info
          const infowindow = new google.maps.InfoWindow({
            content: contentString,
          });

          marker.addListener('mouseover', () => {
            infowindow.open(map, marker);
          });
          marker.addListener('mouseout', () => {
            infowindow.close(map, marker);
          });
        }
      });
    });
  };

  render() {
    return (
      // eslint-disable-next-line
      <div className="mapContainer" ref="map" />
    );
  }
}

Map.propTypes = {
  initialPosition: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  handleAddFavs: PropTypes.func.isRequired,
};
