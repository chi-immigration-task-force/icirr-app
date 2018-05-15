import * as _ from 'lodash';
import strings from 'localization';

import supportedLanguages from 'constants/supportedLanguages';

// If the browser is set to use spanish, default to that. Else, fallback to
// english as the only other language we have.
// Users can always change languages using teh selector.
const initialLanguage = _.includes(navigator.languages, supportedLanguages.es) ?
  supportedLanguages.es : supportedLanguages.en;

strings.setLanguage(initialLanguage);

const initialState = {
  language: initialLanguage,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SETTINGS': {
      if (payload.language) {
        strings.setLanguage(payload.language);
      }
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
}
