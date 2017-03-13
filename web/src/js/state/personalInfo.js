const initialState = {
  lawyerNumber: '415-573-5092',
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_LAWYER_NUMBER':
      return {
        ...state,
        lawyerNumber: payload,
      };
    default:
      return state;
  }
}
