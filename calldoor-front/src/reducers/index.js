import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import companies from './companies';
import searchCompanies from './searchCompanies';
import quiz from './quiz';
import accordion from './accordion';
import companyById from './companyById';
import admin from './administrator';

const allReducers = combineReducers({
  companies,
  searchCompanies,
  form: formReducer,
  quiz,
  accordion,
  companyById,
  admin,
});

export default allReducers;
