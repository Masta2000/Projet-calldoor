import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { urlApi } from '../constants';

import './ContactForm.scss';


class ContactForm extends Component {
  submitForm = (values) => {
    const { reset } = this.props;
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    };
    const url = `${urlApi}/send`;
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Formulaire envoyé !');
          reset();
        } else {
          NotificationManager.warning('', 'Erreur lors de l\'envoi du formulaire.', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Erreur lors de l\'envoi du formulaire.', 5000);
      });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="ContactForm">
        <div className="imageContact">
          <img
            src="https://image.freepik.com/photos-gratuite/vue-dessus-bureau-travail-cahier-ouvert_1163-2583.jpg"
            alt="imageContact"
          />
        </div>
        <div className="form">
          <h1>Contactez-nous</h1>
          <form onSubmit={handleSubmit(this.submitForm)}>
            <div className="half left cf">
              <div>
                <Field type="text" name="name" component="input" placeholder="Nom & Prénom" required />
              </div>
              <Field type="email" name="email" component="input" placeholder="Adresse mail" required />
              <Field type="text" name="subject" component="input" placeholder="Sujet" required />
            </div>
            <div className="half right cf">
              <Field type="text" name="message" component="textarea" placeholder="Votre message" required />
            </div>
            <input type="submit" value="Envoyer" id="input-submit" />
          </form>
          <NotificationContainer />
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'ContactForm', // a unique identifier for this form
})(ContactForm);
