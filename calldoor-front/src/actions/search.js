import { urlApi } from '../constants';

export const startFetchSearchCompanies = value => ({
  type: 'START_FETCH_SEARCH_COMPANIES',
  value,
});

export const fetchSuccessSearchCompanies = companies => ({
  type: 'FETCH_SUCCESS_SEARCH_COMPANIES',
  companies,
});

export const fetchErrorSearchCompanies = err => ({
  type: 'FETCH_ERROR_SEARCH_COMPANIES',
  err,
});

export const searchCompanies = value => (dispatch) => {
  dispatch(startFetchSearchCompanies(value));
  fetch(`${urlApi}/company?search=${value}`)
    .then(res => res.json())
    .then((companies) => {
      dispatch(fetchSuccessSearchCompanies(companies));
    })
    .catch(() => {
      dispatch(fetchErrorSearchCompanies('Erreur lors de la recherche des entreprises '));
    });
};
