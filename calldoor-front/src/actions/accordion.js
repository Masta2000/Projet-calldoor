import { urlApi } from '../constants';

export const startFetchCommentsUnvalidate = () => ({
  type: 'START_FETCH_COMMENTS_UNVALIDATE',
});

export const fetchSuccessCommentsUnvalidate = comments => ({
  type: 'FETCH_SUCCESS_COMMENTS_UNVALIDATE',
  comments,
});

export const fetchErrorCommentsUnvalidate = err => ({
  type: 'FETCH_ERROR_COMMENTS_UNVALIDATE',
  err,
});

export const asyncFetchCommentsUnvalidate = () => (dispatch) => {
  dispatch(startFetchCommentsUnvalidate());
  fetch(`${urlApi}/review/sorted/validation`)
    .then(res => res.json())
    .then((comments) => {
      dispatch(fetchSuccessCommentsUnvalidate(comments));
    })
    .catch(() => {
      dispatch(fetchErrorCommentsUnvalidate('Erreur lors du chargement des commentaires '));
    });
};
