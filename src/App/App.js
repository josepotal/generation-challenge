import React, { PureComponent } from 'react';

import { Header } from '../commonComponents';
import StoresContainer from '../storesFeature/StoresContainer';

/* eslint-disable */
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <StoresContainer />
      </div>
    );
  }
}
