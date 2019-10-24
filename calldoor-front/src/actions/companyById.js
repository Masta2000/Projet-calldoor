import { urlApi } from '../constants';

export const startFetchCompanyById = id => ({
  type: 'START_FETCH_COMPANY_BY_ID',
  id,
});

export const fetchSuccessCompanyById = company => ({
  type: 'FETCH_SUCCESS_COMPANY_BY_ID',
  company,
});

export const fetchErrorCompanyById = err => ({
  type: 'FETCH_ERROR_COMPANY_BY_ID',
  err,
});

export const CompanyById = id => (dispatch) => {
  dispatch(startFetchCompanyById(id));
  fetch(`${urlApi}/company/review/${id}`)
    .then(res => res.json())
    .then((company) => {
      dispatch(fetchSuccessCompanyById(company));
    })
    .catch(() => {
      dispatch(fetchErrorCompanyById('Erreur lors de l\'affichage de l\'entreprise'));
    });
};
