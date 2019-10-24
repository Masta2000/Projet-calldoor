import React, { Component } from 'react';
import { reduxForm, FormSection } from 'redux-form';
import { connect } from 'react-redux';

import SelectCompany from './SelectCompany';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import InfoUser from './InfoUser';

import './QuizForm.scss';

class QuizForm extends Component {
  nextQuestions = () => {
    let result;
    const { step } = this.props;
    switch (step) {
      case 0:
        result = <SelectCompany />;
        break;
      case 1:
        result = <InfoUser />;
        break;
      case 2:
        result = <Question1 />;
        break;
      case 3:
        result = <Question2 />;
        break;
      case 4:
        result = <Question3 />;
        break;
      case 5:
        result = <Question4 />;
        break;
      case 6:
        result = <Question5 />;
        break;
      case 7:
        result = <Question6 />;
        break;
      case 8:
        result = <Question7 />;
        break;
      case 9:
        result = <Question8 />;
        break;
      default:
        result = <Question1 />;
    }
    return result;
  }

  render() {
    const { companyName, handleSubmit, step } = this.props;
    return (
      <form className="QuizForm" onSubmit={handleSubmit}>
        {
          (step > 0)
            ? (
              <h2>
                Laissez un avis pour
                {' '}
                {companyName}
              </h2>
            )
            : ''
        }
        <FormSection name="answers">
          {this.nextQuestions()}
        </FormSection>
      </form>
    );
  }
}

const mstp = state => ({
  companyName: state.quiz.companyName,
  step: state.quiz.step,
  initialValues: {
    answers: {
      review13: null,
    },
  },
});

export default connect(mstp)(reduxForm({
  form: 'quiz',
  enableReinitialize: true,
})(QuizForm));
