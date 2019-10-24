import { urlApi } from '../constants';

export const startFetchCompanies = () => ({
  type: 'START_FETCH_COMPANIES',
});

export const fetchSuccessCompanies = companies => ({
  type: 'FETCH_SUCCESS_COMPANIES',
  companies,
});

export const fetchErrorCompanies = err => ({
  type: 'FETCH_ERROR_COMPANIES',
  err,
});

export const asyncFetchCompanies = () => (dispatch) => {
  dispatch(startFetchCompanies());
  fetch(`${urlApi}/company/homecards/top10`)
    .then(res => res.json())
    .then((companies) => {
      dispatch(fetchSuccessCompanies(companies));
    })
    .catch(() => {
      dispatch(fetchErrorCompanies('Erreur lors du chargement des entreprises '));
    });
};
