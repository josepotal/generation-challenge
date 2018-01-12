import React from 'react';

import { mount } from 'enzyme';
import FavoritesList from './FavoritesList';

describe('FavoritesList', () => {
  /* props and mountedFavoritesList will be available inside the describe */
  let props;
  let mountedFavoritesList;
  /* function to return FavoritesList alrady mounted or with the current props */
  const favoritesList = () => {
    if (!mountedFavoritesList) {
      mountedFavoritesList = mount(<FavoritesList {...props} />);
    }
    return mountedFavoritesList;
  };

  /* resets props before every test */
  beforeEach(() => {
    props = {
      favStores: undefined,
      showFavs: undefined,
      toggleFavsList: jest.fn(),
    };
    /* if calls favoritesList function will mount the current props */
    mountedFavoritesList = undefined;
  });

  /* Tests go here */
  it('always renders a div', () => {
    const divs = favoritesList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});

// import React from 'react';
// import renderer from 'react-test-renderer';
//
// import FavoritesList from './FavoritesList';
//
// test('FavoritesList component', () => {
// const favStores = [
//   {
//     Address:
//       'Valle  Santiago  N° 102  Col. Valle  de  Aragon  CP. 57100  Nezahualcoyotl  Estado  de  Mexico',
//     Name: 'La Tienda Especiál 3777-Valle de Aragón ',
//     id: 176,
//     loc: [19.4893963, -99.05444829999999],
//   },
// ];
// const showFavs = true;
// const toggleFavsList = jest.fn();
//
//   const component = renderer.create(
//     <FavoritesList
//       favStores={favStores}
//       showFavs={showFavs}
//       toggleFavsList={toggleFavsList}
//     />,
//   );
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
//
// test('FavoritesList component favorites close', () => {
//   const favStores = [];
//   const showFavs = false;
//   const toggleFavsList = jest.fn();
//
//   const component = renderer.create(
//     <FavoritesList
//       favStores={favStores}
//       showFavs={showFavs}
//       toggleFavsList={toggleFavsList}
//     />,
//   );
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
