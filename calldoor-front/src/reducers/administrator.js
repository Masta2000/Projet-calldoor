const tokenFromLocalStorage = localStorage.getItem('login');

const initialState = {
  token: tokenFromLocalStorage,
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN_REGISTER': {
      return { ...action.admin };
    }
    default:
      return state;
  }
};

export default admin;
