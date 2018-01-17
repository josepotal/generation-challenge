import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { createMockStore } from 'redux-test-utils';

import FavoritesList from './components/FavoritesList/FavoritesList';

import Map from './components/Map/Map';
import ConnectedStoresContainer, { StoresContainer } from './StoresContainer';

/* Test the connected component */
describe('StoresContainer connected', () => {
  const initialState = {
    favStores: [],
    showFavs: false,
  };
  const store = createMockStore(initialState);
  // const store = createStore(reducer);

  const connectedComponent = shallow(
    <Provider store={store}>
      <ConnectedStoresContainer />
    </Provider>,
  );
  /* Tests go here */
  it('always renders a div', () => {
    expect(connectedComponent.find(ConnectedStoresContainer).length).toBe(1);
  });
});

describe('StoresContainer not connected', () => {
  const actions = {
    addFavoriteStore: jest.fn(),
    toggleFavsList: jest.fn(),
  };

  const state = {
    favStores: [],
    showFavs: false,
  };
  const component = shallow(
    <StoresContainer
      showFavs={state.showFavs}
      favStores={state.favStores}
      actions={actions}
    />,
  );

  /* Tests go here */
  it('always renders a div', () => {
    expect(component.find('div').length).toBeGreaterThan(0);
  });

  it('it should render `Favorites List`', () => {
    expect(component.find(FavoritesList).length).toBe(1);
  });

  it('it should render `Map`', () => {
    expect(component.find(Map).length).toBe(1);
  });

  it('should have a handleAddFavs function', () => {
    expect(component.instance().handleAddFavs.length).toBe(1);
  });

  // it('should have a toggleFavsList function', () => {
  //   expect(component.instance().toggleFavsList.length).toBe(1);
  // });

  it('it should receive a store prop', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
