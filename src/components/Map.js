import React, { Component } from 'react';

const google = window.google;

export default class Map extends Component {

  componentDidMount() {
    const {lat, lng} = this.props.initialPosition;

    this.map = new google.maps.Map(this.refs.map, {
      center: {lat, lng},
      zoom: 12
    });
  }

  render() {
    return (
      <div>
        <h1>Map</h1>
        <div style={{width: 1000, height: 800, border: '1px solid black'}} ref="map"></div>
      </div>
    );
  }
}
