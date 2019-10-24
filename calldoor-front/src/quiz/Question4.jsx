import React from 'react';
import { Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import ToolbarQuestions from './ToolbarQuestions';

function Question4(props) {
  const { review4 } = props;
  const allowNextStep = (review4 !== undefined);
  return (
    <div className="Question4">
      <h1>
      Avez vous bénéficié d&#39;une formation de sensibilisation par votre entreprise ?
      </h1>
      <label htmlFor="oui">
        <Field id="oui" name="review4" component="input" type="radio" value="5" />
        <span className="text-button">Oui</span>
      </label>
      <label htmlFor="non">
        <Field id="non" name="review4" component="input" type="radio" value="0" />
        <span className="text-button">Non</span>
      </label>
      <label htmlFor="idk">
        <Field id="idk" name="review4" component="input" type="radio" value="1" />
        <span className="text-button">Je ne sais pas</span>
      </label>
      <ToolbarQuestions allowNextStep={allowNextStep} />
    </div>
  );
}

const selector = formValueSelector('quiz');
const mstp = state => ({
  review4: selector(state, 'answers.review4'),
});

export default connect(mstp)(Question4);
