import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { CompanyById } from '../../actions/companyById';
import { urlApi } from '../../constants';
import './UpdateCompanyByAdmin.scss';


class UpdateCompanyByAdmin extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { CompanyById } = this.props;
    CompanyById(id);
  }

  submitCompany = (values) => {
    const { dispatch } = this.props;
    const { match: { params: { id } } } = this.props;
    const data = {
      ...values,
      validation: 1,
    };
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const url = `${urlApi}/company/${id}`;
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Modification de l\'entreprise effectuée!');
          dispatch(reset('UpdateCompanyByAdmin'));
        } else {
          NotificationManager.warning('', 'Erreur lors de la modification de l\'entreprise.', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Erreur lors de la modification de l\'entreprise.', 5000);
      });
  }

  render() {
    const {
      handleSubmit,
      company: {
        name, city, size, description, website, logo, id,
      },
    } = this.props;
    return (
      <div className="UpdateCompanyByAdmin">
        <h1>{`Modifier la société ${name}`}</h1>
        <img className="logo" src={logo} alt="logo de l'entreprise" />
        <NotificationContainer />
        <form onSubmit={handleSubmit(this.submitCompany)}>
          <div>
            <label>Nom</label>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder={name}
              />
            </div>
          </div>
          <div>
            <label>Ville</label>
            <div>
              <Field
                name="city"
                component="input"
                type="text"
                placeholder={city}
              />
            </div>
          </div>
          <div>
            <label>Taille</label>
            <div>
              <Field
                name="size"
                component="input"
                type="text"
                placeholder={size}
              />
            </div>
          </div>
          <div>
            <label>site web</label>
            <div>
              <Field
                name="website"
                component="input"
                type="text"
                placeholder={website}
              />
            </div>
          </div>
          <div>
            <label>Description</label>
            <div>
              <Field name="description" component="textarea" placeholder={description} />
            </div>
          </div>
          <div>
            <label>Logo</label>
            <div>
              <Field
                name="logo"
                component="input"
                type="text"
                placeholder={logo}
              />
            </div>
          </div>
          <div>
            <button type="submit">
              Valider
            </button>
            <NavLink to={`/admin/managecompany/company/${id}`}>
              <button type="button">
                Retour
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

const mstp = state => ({
  company: state.companyById.list[0],
  loading: state.companyById.loading,
  error: state.companyById.error,
});


const mdtp = dispatch => bindActionCreators({ CompanyById }, dispatch);

export default reduxForm({
  form: 'UpdateCompanyByAdmin', // a unique identifier for this form
})(connect(mstp, mdtp)(UpdateCompanyByAdmin));
