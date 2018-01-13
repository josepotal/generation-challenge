import * as actions from './StoresActions';
import * as types from './StoresActionsTypes';

describe('States', () => {
  const showFavs = false;

  it('should create an action to toggle the Favorites List', () => {
    expect(actions.toggleFavsList()).toEqual({
      type: types.TOGGLE_FAVORITES_LIST,
      showFavs,
    });
  });
});
