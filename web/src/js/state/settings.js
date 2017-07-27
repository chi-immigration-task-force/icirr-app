import strings from 'localization';

const initialState = {
  language: 'en',
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
