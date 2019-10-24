const initialState = {
  step: 0,
  companyName: '',
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COMPANY': {
      return {
        ...state,
        companyName: action.companyName,
      };
    }
    case 'PREVIOUS_QUESTION': {
      const result = { ...state };
      if (result.step === 4 && action.value !== '5') {
        result.step -= 2;
      } else {
        result.step -= 1;
      }
      return result;
    }
    case 'NEXT_QUESTION': {
      const result = { ...state };
      if (result.step === 2 && action.value !== '5') {
        result.step += 2;
      } else {
        result.step += 1;
      }
      return result;
    }
    case 'CLEAR_STEP': {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default quiz;
