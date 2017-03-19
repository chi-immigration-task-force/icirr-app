import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import settings from 'state/settings';

export default combineReducers({
  form: formReducer,
  settings,
});
