import React from 'react';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import FormRating from './FormRating';
import ToolbarQuestions from './ToolbarQuestions';

import './Question5.scss';

function Question5({ dispatch }) {
  return (
    <div className="Question5">
      <h1>
        Comment réussissez-vous à appliquer le droit à la déconnexion depuis sa mise en
       place ?
      </h1>
      <FormRating onClickStar={(value => dispatch(change('quiz', 'answers.review5', value)))} />
      <p>
        1 étoile = insatisfait, 2 étoiles = moyennement satisfait, 5 étoiles = totalement satisfait
      </p>
      <ToolbarQuestions allowNextStep />
    </div>
  );
}

export default connect()(Question5);
