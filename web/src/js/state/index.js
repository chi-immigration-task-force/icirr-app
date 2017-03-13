import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import personalInfo from 'state/personalInfo';

export default combineReducers({
  form: formReducer,
  personalInfo,
});
