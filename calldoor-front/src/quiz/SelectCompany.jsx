import React, { Component } from 'react';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Searchbar from '../home/Searchbar';
import { selectCompany, nextQuestion } from '../actions/quiz';

import './Quiz.scss';
import './SelectCompany.scss';

class SelectCompany extends Component {
  onSelectCompany = (company) => {
    const { change, selectCompany, nextQuestion } = this.props;
    change('quiz', 'answers.company_id', company.id);
    selectCompany(company.name);
    nextQuestion();
  }

  render() {
    return (
      <div className="SelectCompany">
        <h2>Sélectionnez une entreprise</h2>
        <Searchbar from="quiz" selectCompany={this.onSelectCompany} />
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({ selectCompany, change, nextQuestion }, dispatch);

export default connect(null, mdtp)(SelectCompany);
