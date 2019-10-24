import React, { Component } from 'react';
import {
  Field, reduxForm, formValueSelector, reset,
} from 'redux-form';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { NavLink } from 'react-router-dom';
import { urlApi } from '../../constants';
import './AddCompanyByAdmin.scss';


class AddCompanyByAdmin extends Component {
  submitCompany = (values) => {
    const { dispatch } = this.props;
    const data = {
      ...values,
      validation: 1,
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const url = `${urlApi}/company/`;
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Entreprise ajoutée avec succès!');
          dispatch(reset('Company'));
        } else {
          NotificationManager.warning('', 'Erreur lors de l\'ajout de l\'entreprise.', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Erreur lors de l\'ajout de l\'entreprise.', 5000);
      });
  }

  render() {
    const { handleSubmit, logo } = this.props;
    return (
      <div className="AddCompanyByAdmin">
        <h1>Ajouter une entreprise</h1>
        <img src={logo} alt={logo} />
        <NotificationContainer />
        <form className="adminProfilCompany" onSubmit={handleSubmit(this.submitCompany)}>
          <div className="adminForm">
            <label>Nom</label>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="adminForm">
            <label>Ville</label>
            <div>
              <Field
                name="city"
                component="input"
                type="text"
                placeholder="City"
              />
            </div>
          </div>
          <div className="adminForm">
            <label>Taille</label>
            <div>
              <Field className="select-form" id="size" name="size" component="select">
                <option>Taille de la société</option>
                <option>1 à 3 salariés</option>
                <option>4 à 10 salariés</option>
                <option>10 à 15 salariés</option>
                <option>50 à 100 salariés</option>
                <option>500 à 1000 salariés</option>
                <option>1000 à 1200 salariés</option>
                <option>2000 et plus</option>
              </Field>
            </div>
          </div>
          <div className="adminForm">
            <label>Site web</label>
            <div>
              <Field
                name="website"
                component="input"
                type="text"
                placeholder="Website"
              />
            </div>
          </div>
          <div className="adminForm">
            <label>Description</label>
            <div>
              <Field
                name="description"
                component="input"
                type="text"
                placeholder="Description"
              />
            </div>
          </div>
          <div className="adminForm">
            <label>Logo</label>
            <div>
              <Field
                name="logo"
                component="input"
                type="text"
                placeholder="Logo"
              />
            </div>
          </div>
          <div>
            <button className="validationbutton" type="submit">
              Envoyer
            </button>
          </div>
          <div>
            <NavLink to="/admin/managecompany">
              <button className="rejectebutton" type="button">
                Annuler
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

const selector = formValueSelector('Company');
const mstp = state => ({
  logo: selector(state, 'logo'),
});

export default reduxForm({
  form: 'Company', // a unique identifier for this form
})(connect(mstp)(AddCompanyByAdmin));
