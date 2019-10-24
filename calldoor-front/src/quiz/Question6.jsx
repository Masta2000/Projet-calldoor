import React from 'react';
import { Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import ToolbarQuestions from './ToolbarQuestions';

function Question6(props) {
  const { review6 } = props;
  const allowNextStep = (review6 !== undefined);
  return (
    <div className="Question6">
      <h1>
      Trouvez-vous que votre entreprise et vos managers poussent au quotidien pour un usage
 plus raisonnable ?
      </h1>
      <label htmlFor="oui">
        <Field id="oui" name="review6" component="input" type="radio" value="5" />
        <span className="text-button">Oui</span>
      </label>
      <label htmlFor="non">
        <Field id="non" name="review6" component="input" type="radio" value="0" />
        <span className="text-button">Non</span>
      </label>
      <label htmlFor="idk">
        <Field id="idk" name="review6" component="input" type="radio" value="2" />
        <span className="text-button">Je ne sais pas</span>
      </label>
      <ToolbarQuestions allowNextStep={allowNextStep} />
    </div>
  );
}

const selector = formValueSelector('quiz');
const mstp = state => ({
  review6: selector(state, 'answers.review6'),
});

export default connect(mstp)(Question6);
