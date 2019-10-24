import { urlApi } from '../constants';

export const startFetchDeleteCompanyById = id => ({
  type: 'START_FETCH_DELETE_COMPANY_BY_ID',
  id,
});

export const fetchSuccessDeleteCompanyById = success => ({
  type: 'FETCH_SUCCESS_DELETE_COMPANY_BY_ID',
  success,
});

export const fetchErrorDeleteCompanyById = err => ({
  type: 'FETCH_ERROR_DELETE_COMPANY_BY_ID',
  err,
});


export const deleteCompany = id => (dispatch) => {
  const config = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch(startFetchDeleteCompanyById(id));
  const url = `${urlApi}/company/${id}`;
  fetch(url, config)
    .then(() => {
      dispatch(fetchSuccessDeleteCompanyById('Entreprise supprimée avec succès!'));
    })
    .catch(() => {
      dispatch(fetchErrorDeleteCompanyById('Erreur lors de l\'affichage de l\'entreprise'));
    });
};
