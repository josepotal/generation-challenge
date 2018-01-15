import React from 'react';

import { shallow } from 'enzyme';
import FavoritesList from './FavoritesList';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

describe('FavoritesList', () => {
  /* props and mountedFavoritesList will be available inside the describe */
  let props;
  let mountedFavoritesList;
  /* function to return FavoritesList alrady mounted or with the current props */
  const favoritesList = () => {
    if (!mountedFavoritesList) {
      mountedFavoritesList = shallow(<FavoritesList {...props} />);
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

  it('it should have favList className', () => {
    expect(favoritesList().find('.favList').length).toBe(1);
  });
  describe('interaction button tag click', () => {
    beforeEach(() => {
      favoritesList()
        .find('button')
        .prop('onClick')();
    });

    it('button tag should receive toggleFavsList prop', () => {
      expect(
        favoritesList()
          .find('button')
          .prop('onClick'),
      ).toBe(props.toggleFavsList);
    });

    it('should call the onClick callback', () => {
      expect(props.toggleFavsList).toHaveBeenCalledTimes(1);
    });

    it('button tag should trigger the toggleFavsList function', () => {
      favoritesList()
        .find('button')
        .simulate('click');
      expect(props.toggleFavsList).toHaveBeenCalled();
    });
  });

  describe('if showFavs is false and favStores is empty (inital state)', () => {
    beforeEach(() => {
      props.favStores = [];
      props.showFavs = false;
    });
    it('it should not render `Favorite Item` if favStores is empty', () => {
      expect(favoritesList().find(FavoriteItem).length).toBe(0);
    });

    it('button tag should display the `Show Favorite Stores` text', () => {
      expect(
        favoritesList()
          .find('button')
          .children()
          .text(),
      ).toBe('Show Favorite Stores');
    });

    it('div with message className should be `(Click on the icons to add them to your Favorites List)` text', () => {
      expect(
        favoritesList()
          .children('.message')
          .text(),
      ).toBe('(Click on the icons to add them to your Favorites List)');
    });
  });

  describe('if showFavs is true', () => {
    beforeEach(() => {
      props.showFavs = true;
    });

    it('button tag should display the `Hide Favorite Stores` text', () => {
      expect(
        favoritesList()
          .find('button')
          .children()
          .text(),
      ).toBe('Hide Favorite Stores');
    });

    it('should not appear the div with className message', () => {
      expect(favoritesList().find('.message').length).toBe(0);
    });

    describe('if favStores is not empty', () => {
      const favStores = [
        {
          Address:
            'Valle  Santiago  N° 102  Col. Valle  de  Aragon  CP. 57100  Nezahualcoyotl  Estado  de  Mexico',
          Name: 'La Tienda Especiál 3777-Valle de Aragón ',
          id: 176,
          loc: [19.4893963, -99.05444829999999],
        },
        {
          Address:
            'Félix Cuevas  N° 133  Col. Valle  de  Aragon  CP. 57100  Nezahualcoyotl  Estado  de  Mexico',
          Name: 'La Tienda Especiál 3777-Valle de Aragón ',
          id: 126,
          loc: [19.5293963, -99.025444829999999],
        },
      ];

      beforeEach(() => {
        props.favStores = favStores;
      });

      it('should render Favorite Item as many times as favStores are', () => {
        expect(favoritesList().find(FavoriteItem)).toHaveLength(
          props.favStores.length,
        );
      });
    });
  });
});
