import React, { Component } from 'react';
import PropTypes from 'prop-types';

import stores from '../utils/coords_store_directory.json'

const google = window.google;

export default class Map extends Component {
  constructor(){
    super()
    this.setMarkers = this.setMarkers.bind(this)
  }

  componentDidMount() {
    const {lat, lng} = this.props.initialPosition;
    this.map = new google.maps.Map(this.refs.map, {
      center: {lat, lng},
      zoom: 12
    });

    this.setMarkers(this.map)
  }

  setMarkers = map => {
    // eslint-disable-next-line
    stores.items.map((store, index) => {
      const image = {
        url: 'http://maps.gstatic.com/mapfiles/ms2/micons/blue.png',
        scaledSize: new google.maps.Size(42, 42),
        origin: new google.maps.Point(0, -6),
        anchor: new google.maps.Point(0, 0)
      }
      const imageFav = {
        url: 'http://maps.gstatic.com/mapfiles/ms2/micons/green.png',
        scaledSize: new google.maps.Size(42, 42),
        origin: new google.maps.Point(0, -6),
        anchor: new google.maps.Point(0, 0)
      }

      let marker;
      if (store.loc.length > 0){
        marker = new google.maps.Marker({
          position: {lat: store.loc[0], lng: store.loc[1]},
          map: map,
          animation: google.maps.Animation.DROP,
          title: store.Name,
          label: index.toString(),
          icon: image
        })

        //onClick add to my favorites list
        marker.addListener('click', () => {
          store = {
            ...store,
            id: index
          }
          this.props.handleAddFavs(store)
          marker.setIcon(imageFav)
        });

        var contentString = `
          <div class="content">
            <p>${index} | ${marker.title}</p>
            <p>${store.Address}</p>
          </div>`

        //onHover show info
        const infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('mouseover', function() {
          infowindow.open(map, marker);
        });
        marker.addListener('mouseout', function() {
          infowindow.close(map, marker);
        });
      }
    })
  }

  render() {
    return (
        <div className="mapContainer" ref="map"></div>
    );
  }
}

Map.propTypes = {
  initialPosition: PropTypes.object.isRequired,
  stores: PropTypes.array,
  store: PropTypes.object
};
