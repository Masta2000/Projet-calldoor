const initialState = {
  list: [],
  loading: false,
  error: '',
};

const CompanyById = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_COMPANY_BY_ID': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_COMPANY_BY_ID': {
      return {
        loading: false,
        error: '',
        list: [...action.company],
      };
    }
    case 'FETCH_ERROR_COMPANY_BY_ID': {
      return {
        error: action.err,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default CompanyById;
