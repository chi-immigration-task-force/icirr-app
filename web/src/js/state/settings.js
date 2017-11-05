import * as _ from 'lodash';
import strings from 'localization';

import supportedLanguages from 'constants/supportedLanguages';

const initialLanguage = _.includes(navigator.languages, supportedLanguages.es) ?
  supportedLanguages.es : supportedLanguages.en;

strings.setLanguage(initialLanguage);

const initialState = {
  language: initialLanguage,
  lawyerNumber: '',
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
