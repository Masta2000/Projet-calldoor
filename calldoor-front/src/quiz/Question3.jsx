import React from 'react';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import FormRating from './FormRating';
import ToolbarQuestions from './ToolbarQuestions';

import './Question3.scss';


function Question3({ dispatch }) {
  return (
    <div className="Question3">
      <h1>
        Concernant l’usage des outils numériques fournis (email, téléphone…), considérez-
vous que cela n’empiète pas sur votre vie personnelle ?
      </h1>
      <FormRating onClickStar={(value => dispatch(change('quiz', 'answers.review3', value)))} />
      <p>
        1 étoile = insatisfait, 2 étoiles = moyennement satisfait, 5 étoiles = totalement satisfait
      </p>
      <ToolbarQuestions allowNextStep />
    </div>
  );
}

export default connect()(Question3);
