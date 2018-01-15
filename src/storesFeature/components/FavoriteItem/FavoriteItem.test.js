import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FavoriteItem from './FavoriteItem';

describe('FavoriteItem', () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = {
      Address:
        'Valle  Santiago  N° 102  Col. Valle  de  Aragon  CP. 57100  Nezahualcoyotl  Estado  de  Mexico',
      Name: 'La Tienda Especiál 3777-Valle de Aragón ',
      id: 176,
      loc: [19.4893963, -99.05444829999999],
    };
    wrapper = shallow(<FavoriteItem store={store} />);
  });

  it('always renders a div', () => {
    expect(wrapper.find('div').length).toBe(1);
  });

  it('it should have favItem className', () => {
    expect(wrapper.find('.favItem').length).toBe(1);
  });

  it('it should receive a store prop', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
