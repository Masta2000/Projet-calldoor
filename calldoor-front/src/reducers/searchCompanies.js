const initialState = {
  list: [],
  loading: false,
  error: '',
  searchValue: '',
};

const searchCompanies = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_SEARCH_COMPANIES': {
      return {
        ...state,
        loading: true,
        searchValue: action.value,
      };
    }
    case 'FETCH_SUCCESS_SEARCH_COMPANIES': {
      return {
        loading: false,
        error: '',
        list: [...action.companies],
        searchValue: state.searchValue,
      };
    }
    case 'FETCH_ERROR_SEARCH_COMPANIES': {
      return {
        error: action.err,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default searchCompanies;
