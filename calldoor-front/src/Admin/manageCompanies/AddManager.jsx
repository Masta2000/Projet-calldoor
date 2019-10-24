import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { CompanyById } from '../../actions/companyById';
import { urlApi } from '../../constants';
import './AddManager.scss';


class AddManager extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { CompanyById } = this.props;
    CompanyById(id);
  }

  submitManager = (values) => {
    const { dispatch } = this.props;
    const { match: { params: { id } } } = this.props;
    const data = {
      ...values,
      super_admin: 0,
      company_id: id,
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const url = `${urlApi}/admin/`;
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Manager ajouté avec effectuée!');
          dispatch(reset('AddManager'));
        } else {
          NotificationManager.warning('', 'Erreur lors de l\'ajout du manager.', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Erreur lors de l\'ajout du manager.', 5000);
      });
  }

  render() {
    const {
      handleSubmit,
      company: {
        logo, id, name,
      },
    } = this.props;
    return (
      <div className="AddManager">
        <h1>{`Ajouter un manager à ${name}`}</h1>
        <img className="logo" src={logo} alt="logo de l'entreprise" />
        <NotificationContainer />
        <form onSubmit={handleSubmit(this.submitManager)}>
          <div>
            <label>Prénom</label>
            <div>
              <Field
                name="firstname"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div>
            <label>Nom</label>
            <div>
              <Field
                name="lastname"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div>
            <label>Mail</label>
            <div>
              <Field
                name="email"
                component="input"
                type="text"
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
  form: 'AddManager', // a unique identifier for this form
})(connect(mstp, mdtp)(AddManager));
