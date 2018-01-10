import { ADD_FAVORITE, TOGGLE_FAVORITES_LIST } from './StoresActionsTypes';

const initialState = {
  favStores: [],
  showFavs: false,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favStores: action.favStores,
      };
    case TOGGLE_FAVORITES_LIST:
      return {
        ...state,
        showFavs: action.showFavs,
      };
    default:
      return state;
  }
}
