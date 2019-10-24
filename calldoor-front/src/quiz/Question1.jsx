import React from 'react';
import { Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import ToolbarQuestions from './ToolbarQuestions';

function Question1(props) {
  const { review1 } = props;
  const allowNextStep = (review1 !== undefined);
  return (
    <div className="Question1">
      <h1>
        Votre entreprise a-t-elle défini des modalités sur
        le droit à la déconnexion?
      </h1>
      <label htmlFor="oui">
        <Field id="oui" name="review1" component="input" type="radio" value="5" />
        <span className="text-button">Oui</span>
      </label>
      <label htmlFor="non">
        <Field id="non" name="review1" component="input" type="radio" value="0" />
        <span className="text-button">Non</span>
      </label>
      <label htmlFor="idk">
        <Field id="idk" name="review1" component="input" type="radio" value="1" />
        <span className="text-button">Je ne sais pas</span>
      </label>
      <ToolbarQuestions allowNextStep={allowNextStep} />
    </div>
  );
}

const selector = formValueSelector('quiz');
const mstp = state => ({
  review1: selector(state, 'answers.review1'),
});

export default connect(mstp)(Question1);
