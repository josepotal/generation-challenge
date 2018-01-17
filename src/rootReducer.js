import { combineReducers } from 'redux';
import storesReducer from './storesFeature/StoresReducer';

const rootReducer = combineReducers({
  storesReducer,
});

export default rootReducer;
