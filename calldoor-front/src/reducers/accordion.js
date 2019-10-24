const initialState = {
  loading: false,
  list: [],
  error: '',
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_COMMENTS_UNVALIDATE': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_SUCCESS_COMMENTS_UNVALIDATE': {
      return {
        loading: false,
        list: [...action.comments],
        error: '',
      };
    }
    case 'FETCH_ERROR_COMMENTS_UNVALIDATE': {
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

export default comments;
