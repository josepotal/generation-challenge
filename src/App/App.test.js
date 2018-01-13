import React from 'react';

import { shallow } from 'enzyme';
import App from './App';
import StoresContainer from '../storesFeature/StoresContainer';
import Header from '../commonComponents/Header/Header';

describe('App', () => {
  /* props and mountedApp will be available inside the describe */

  let mountedApp;
  /* function to return App alrady mounted or with the current props */
  const app = () => {
    if (!mountedApp) {
      mountedApp = shallow(<App />);
    }
    return mountedApp;
  };

  it('always renders a div', () => {
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('should always print header component', () => {
    expect(app().find(Header).length).toBe(1);
  });

  it('should always print StoresContainer', () => {
    expect(app().find(StoresContainer).length).toBe(1);
  });

  describe('rendered `Header`', () => {
    it('does not receive any props', () => {
      const header = app().find(Header);
      expect(Object.keys(header.props()).length).toBe(0);
    });
  });

  describe('rendered `StoresContainer`', () => {
    it('does not receive any props', () => {
      const storesContainer = app().find(StoresContainer);
      expect(Object.keys(storesContainer.props()).length).toBe(0);
    });
  });
});
