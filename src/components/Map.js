import React, { Component } from 'react';

import stores from '../utils/coords_store_directory.json'

//import data from '../utils/address-converter.js'

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
    stores.items.map(store => {
      const image = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
      let marker;
      if (store.loc.length > 0){
        marker = new google.maps.Marker({
          position: {lat: store.loc[0], lng: store.loc[1]},
          map: map,
          animation: google.maps.Animation.DROP,
          title: store.Name
        })

        //on click add to my list
        marker.addListener('click', () => {
          this.props.handleAddFavs(store)
          marker.setIcon(image)
        });

        var contentString = `
          <div id="content">
            <p>${marker.title}</p>
            <p>${marker.position}</p>
            <p>${store.Address}</p>
          </div>`

        //on Hover show info
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

// Map.propTypes = {
//   initialPosition: React.PropTypes.object.isRequired
// };
