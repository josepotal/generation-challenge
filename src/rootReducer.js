import { combineReducers } from 'redux';
import favoriteStores from './storesFeature/StoresReducer';

const rootReducer = combineReducers({
  favoriteStores,
});

export default rootReducer;
