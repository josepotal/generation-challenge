import React from 'react';
import renderer from 'react-test-renderer';

import FavoriteItem from './FavoriteItem';

test('FavoriteItem component', () => {
  const store = {
    Address:
      'Valle  Santiago  N° 102  Col. Valle  de  Aragon  CP. 57100  Nezahualcoyotl  Estado  de  Mexico',
    Name: 'La Tienda Especiál 3777-Valle de Aragón ',
    id: 176,
    loc: [19.4893963, -99.05444829999999],
  };

  const component = renderer.create(<FavoriteItem store={store} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
