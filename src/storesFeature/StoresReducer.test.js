import storesReducer, {
  initialState,
  getShowFavs,
  getFavStores,
} from './StoresReducer';
import * as types from './StoresActionsTypes';

describe('Stores Reducer', () => {
  it('should return the initial state', () => {
    expect(storesReducer(undefined, {})).toEqual(initialState);
  });

  describe('toggle Fav list from hide to show', () => {
    it('handles a toggle action to show fav list', () => {
      expect(
        storesReducer(initialState, {
          type: types.TOGGLE_FAVORITES_LIST,
          showFavs: true,
        }),
      ).toEqual({
        ...initialState,
        showFavs: true,
      });
    });
  });

  describe('toggle Fav list from show to hide', () => {
    it('handles a toggle action to hide fav list', () => {
      expect(
        storesReducer(initialState, {
          type: types.TOGGLE_FAVORITES_LIST,
          showFavs: false,
        }),
      ).toEqual({
        ...initialState,
        showFavs: false,
      });
    });
  });

  describe('add to favorites list with no favorite stores', () => {
    const store1 = {
      Address:
        'Valle  Santiago  N° 102  Col. Valle  de  Aragon  CP. 57100  Nezahualcoyotl  Estado  de  Mexico',
      Name: 'La Tienda Especiál 3777-Valle de Aragón ',
      id: 176,
      loc: [19.4893963, -99.05444829999999],
    };

    const store2 = {
      Address:
        'Félix Cuevas  N° 133  Col. Valle  de  Aragon  CP. 57100  Nezahualcoyotl  Estado  de  Mexico',
      Name: 'La Tienda Especiál 3777-Valle de Aragón ',
      id: 126,
      loc: [19.5293963, -99.025444829999999],
    };

    it('handles an action to add store to fav list', () => {
      expect(
        storesReducer(initialState, {
          type: types.ADD_FAVORITE,
          favStores: [store1],
        }),
      ).toEqual({
        ...initialState,
        favStores: [store1],
      });
    });

    describe('add to favorites list with an exisitng store', () => {
      let state;

      beforeEach(() => {
        state = {
          ...initialState,
          favStores: [store1],
        };
      });

      it('handles an action to add store to fav stores list', () => {
        expect(
          storesReducer(state, {
            type: types.ADD_FAVORITE,
            favStores: [...state.favStores, store2],
          }),
        ).toEqual({
          ...state,
          favStores: [...state.favStores, store2],
        });
      });
    });

    /* could be like testing mapStateToProps */
    describe('StoresReducer selectors', () => {
      let state;

      beforeEach(() => {
        state = {
          storesReducer: {
            showFavs: false,
            favStores: [store1, store2],
          },
        };
      });

      it('should return the current showFavs state', () => {
        expect(getShowFavs(state)).toBe(false);
      });

      it('should return the showFavs state', () => {
        expect(getFavStores(state)).toEqual([store1, store2]);
      });
    });
  });
});
