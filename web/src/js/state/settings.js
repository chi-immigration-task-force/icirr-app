const initialState = {
  language: 'en-us',
  lawyerNumber: '',
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SETTINGS': {
      return {
        ...payload,
      };
    }
    default:
      return state;
  }
}
