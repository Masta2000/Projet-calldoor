const initialState = {
  loading: false,
  list: [],
  error: '',
  value: '',
};

const companies = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_COMPANIES': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_COMPANIES': {
      return {
        loading: false,
        list: [...action.companies],
        error: '',
      };
    }
    case 'FETCH_ERROR_COMPANIES': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    default:
      return state;
  }
};

export default companies;
