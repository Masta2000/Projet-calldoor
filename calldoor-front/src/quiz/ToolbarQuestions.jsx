import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { prevQuestion, nextQuestion } from '../actions/quiz';
import './ToolbarQuestions.scss';

function ToolbarQuestions(props) {
  const {
    prevQuestion, nextQuestion, step, allowNextStep, review1,
  } = props;
  return (
    <div className="ToolbarQuestions">
      {step === 0 ? '' : <button className="select-button" type="button" onClick={() => prevQuestion(review1)}>Question précédente</button>}
      <button className="select-button" type="button" onClick={() => nextQuestion(review1)} disabled={!allowNextStep}>Question suivante</button>
      <div className={`advertise ${!allowNextStep ? '' : 'hidden'}`}>
        <p>Veuillez remplir tous les champs pour continuer</p>
      </div>
    </div>
  );
}

const selector = formValueSelector('quiz');
const mstp = state => ({
  step: state.quiz.step,
  review1: selector(state, 'answers.review1'),
});
const mdtp = dispatch => bindActionCreators({ prevQuestion, nextQuestion }, dispatch);

export default connect(mstp, mdtp)(ToolbarQuestions);
