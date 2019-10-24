import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { urlApi } from '../constants';
import './AddCompany.scss';


class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      size: '',
      description: '',
      validation: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    const { name } = this.state;
    const { history } = this.props;
    event.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };
    const url = `${urlApi}/company/`;
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', `${name} ajoutée!`);
          setTimeout(() => history.push('/'), 1588);
        } else {
          NotificationManager.warning('', 'Erreur lors de l\'ajout de l\'entreprise.', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Erreur lors de l\'ajout de l\'entreprise.', 5000);
      });
  }

  render() {
    const {
      name, size, city, description,
    } = this.state;
    return (
      <div className="AddCompany">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Enregistrer mon entreprise</h1>
          <div className="field">
            <label htmlFor="name">
              <p>Le nom de votre société</p>
              <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
            </label>
            <br />
            <label htmlFor="size">
              <p>Sa taille</p>
              <select id="size" name="size" value={size} onChange={this.handleChange}>
                <option value="">Taille de la société</option>
                <option value="1 à 3 salariés">1 à 3 salariés</option>
                <option value="4 à 10 salariés">4 à 10 salariés</option>
                <option value="10 à 15 salariés">10 à 15 salariés</option>
                <option value="50 à 100 salariés">50 à 100 salariés</option>
                <option value="500 à 1000 salariés">500 à 1000 salariés</option>
                <option value="1000 à 1200 salariés">1000 à 1200 salariés</option>
                <option value="2000 et plus">2000 et plus</option>
              </select>
            </label>
            <br />
            <label htmlFor="city">
              <p>Sa localisation</p>
              <input type="text" name="city" id="city" value={city} onChange={this.handleChange} />
            </label>
            <br />
            <label htmlFor="description">
              <p>Ajouter votre description</p>
              <textarea value={description} name="description" id="description" onChange={this.handleChange} />
            </label>
            <br />
          </div>
          <input type="submit" value="Je créer ma fiche entreprise" id="input-submit" />
        </form>
        <NotificationContainer />
      </div>
    );
  }
}

export default AddCompany;
