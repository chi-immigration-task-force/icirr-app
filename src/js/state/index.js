import { combineReducers } from 'redux';

import map from 'state/map';
import settings from 'state/settings';

/**
 * Standard combineReducers call from redux
 * https://redux.js.org/api-reference/combinereducers
 */
export default combineReducers({
  map,
  settings,
});
