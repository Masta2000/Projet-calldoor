import React from 'react';
import { Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import ToolbarQuestions from './ToolbarQuestions';


function Question7(props) {
  const { review7 } = props;
  const allowNextStep = (review7 !== undefined);
  return (
    <div className="Question7">
      <h1>
      Quel avis général laisseriez vous à cette entreprise
         vis à vis du respect du droit à la déconnexion ?
      </h1>
      <Field id="text7" name="review7" component="textarea" type="text" value="" />
      <ToolbarQuestions allowNextStep={allowNextStep} />
    </div>
  );
}

const selector = formValueSelector('quiz');
const mstp = state => ({
  review7: selector(state, 'answers.review7'),
});

export default connect(mstp)(Question7);
