import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import QuizForm from './QuizForm';
import { urlApi } from '../constants';
import { clearStep } from '../actions/quiz';

import './Quiz.scss';

class Quiz extends Component {
  submitReview = (values) => {
    const keys = Object.keys(values);
    if (keys.length > 0) {
      const { history } = this.props;
      const data = {
        date: new Date().getTime(),
        ...values.answers,
      };
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const url = `${urlApi}/review`;
      const { clearStep } = this.props;
      fetch(url, config)
        .then((res) => {
          if (res.ok) {
            NotificationManager.success('Questionnaire bien pris en compte');
            setTimeout(() => {
              history.push('/');
            }, 1000);
            clearStep();
          } else {
            NotificationManager.warning('', 'Erreur lors de l\'ajout du questionnaire.', 3000);
          }
        }).catch(() => {
          NotificationManager.error('', 'Erreur lors de l\'ajout du questionnaire.', 5000);
        });
    }
  }

  render() {
    return (
      <div className="Quiz">
        <QuizForm onSubmit={this.submitReview} />
        <NotificationContainer />
      </div>
    );
  }
}


const mdtp = dispatch => bindActionCreators({ clearStep }, dispatch);

export default connect(null, mdtp)(Quiz);
