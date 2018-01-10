import * as types from './StoresActionsTypes';

export const addFavoriteStore = store => (dispatch, getState) => {
  let { favoriteStores: { favStores } } = getState();
  const idsArray = [];
  favStores.map(storeItem => idsArray.push(storeItem.id));
  if (idsArray.includes(store.id)) {
    return 'already added';
  }
  favStores = [...favStores, store];
  dispatch({
    type: types.ADD_FAVORITE,
    favStores,
  });
  return null;
};

export const toggleFavsList = () => (dispatch, getState) => {
  const { favoriteStores: { showFavs } } = getState();
  dispatch({
    type: types.TOGGLE_FAVORITES_LIST,
    showFavs: !showFavs,
  });
};
