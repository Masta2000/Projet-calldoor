const initialState = {
  success: '',
  loading: false,
  error: '',
};

const deleteCompany = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_DELETE_COMPANY_BY_ID': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_DELETE_COMPANY_BY_ID': {
      return {
        loading: false,
        error: '',
        success: action.success,
      };
    }
    case 'FETCH_ERROR_DELETE_COMPANY_BY_ID': {
      return {
        error: action.err,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default deleteCompany;
