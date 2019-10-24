import React from 'react';
import { Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import ToolbarQuestions from './ToolbarQuestions';


function Question2(props) {
  const { review2 } = props;
  const allowNextStep = (review2 !== undefined);
  return (
    <div className="Question2">
      <h1>Si oui, depuis quelle date ?</h1>
      <Field name="review2" component="input" type="date" />
      <ToolbarQuestions allowNextStep={allowNextStep} />
    </div>
  );
}

const selector = formValueSelector('quiz');
const mstp = state => ({
  review2: selector(state, 'answers.review2'),
});

export default connect(mstp)(Question2);
