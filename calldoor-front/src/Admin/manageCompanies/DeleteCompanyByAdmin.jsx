import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { CompanyById } from '../../actions/companyById';
import { urlApi } from '../../constants';
import './DeleteCompanyByAdmin.scss';


class DeleteCompanyByAdmin extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { CompanyById } = this.props;
    CompanyById(id);
  }

  deleteCompany = () => {
    const { match: { params: { id } }, history } = this.props;
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const url = `${urlApi}/company/${id}`;
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Entreprise supprimée avec succès!');
          setTimeout(() => history.push('/admin/managecompany'), 1588);
        } else {
          NotificationManager.warning('', 'Erreur lors de la suppression de l\'entreprise.', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Erreur lors de la suppression de l\'entreprise.', 5000);
      });
  }

  render() {
    const {
      loading,
      error,
      company: {
        name, city, size, description, website, logo, id,
      },
    } = this.props;
    return (
      <div className="DeleteCompanyByAdmin">
        <NotificationContainer />
        <h3>{`Attention vous êtes sur le point de supprimer définitivement ${name} de votre base de données.`}</h3>
        <p>{`name : ${name} `}</p>
        <p>{`city : ${city} `}</p>
        <p>{`size : ${size} `}</p>
        <p>{`website : ${website} `}</p>
        <p>{`description : ${description} `}</p>
        { { logo }.length ? '' : <img src={logo} alt="logo de l'entreprise" />}
        <button type="button" onClick={this.deleteCompany}>Supprimer</button>
        <NavLink to={`/admin/managecompany/company/${id}`}>
          <button type="button">
            Annuler
          </button>
        </NavLink>
        {
          (loading)
            ? <div className="loading">Chargement des entreprises...</div>
            : ''
        }
        {
          (error !== '')
            ? <div className="error">{error}</div>
            : ''
        }
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

export default connect(mstp, mdtp)(DeleteCompanyByAdmin);
