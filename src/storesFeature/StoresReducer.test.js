/* eslint-disable */
import reducer from './StoresReducer';
import { ADD_FAVORITE, TOGGLE_FAVORITES_LIST } from './StoresActionsTypes';

describe('stores reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      favStores: [],
      showFavs: false,
    });
  });

  it('should handle ADD_FAVORITE', () => {
    expect(
      reducer([], {
        type: ADD_FAVORITE,
        favStores: [
          {
            Address:
              'Calle Etzatlan, N.25 Colonia Popular Rastro, Delegación Venustiano Carranza, CP. 15220',
            Name: 'La Tienda Especiál 2737- Etzatlan',
            id: 134,
            loc: [19.4518541, -99.11991620000003],
          },
        ],
      }),
    ).toEqual({
      favStores: [
        {
          Address:
            'Calle Etzatlan, N.25 Colonia Popular Rastro, Delegación Venustiano Carranza, CP. 15220',
          Name: 'La Tienda Especiál 2737- Etzatlan',
          id: 134,
          loc: [19.4518541, -99.11991620000003],
        },
      ],
    });
  });
});
