import React, { Component } from 'react';
import Header from './Header';
import Map from './Map';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Map initialPosition={{lat: 19.43236, lng: -99.1332}}/>
      </div>
    )
  }
}

export default App;
