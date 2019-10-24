import React from 'react';
import RatingStars from './RatingStars';

import './GlobalRating.scss';

function GlobalRating({
  ratings: {
    rating, rating1, rating2, rating3, rating4, rating5,
  },
}) {
  return (
    <div className="GlobalRating">
      <h1 className="main-title">Note Globale</h1>
      <p className="card-global-rating">
        <RatingStars stars={rating} />
      </p>
      <h2 className="sub-title">Note par catégorie de questions</h2>
      <p className="question1">
        Modalités de droit à la déconnexion :
      </p>
      <span className="stars1"><RatingStars stars={rating1} /></span>
      <p className="question2">
        Vie personnelle et outils digitaux entreprises :
      </p>
      <span className="stars2"><RatingStars stars={rating2} /></span>
      <p className="question3">
        Formation sur le droit à la déconnexion :
      </p>
      <span className="stars3"><RatingStars stars={rating3} /></span>
      <p className="question4">
        Votre usage :
      </p>
      <span className="stars4"><RatingStars stars={rating4} /></span>
      <p className="question5">
         L’entreprise encourage-t-elle les usages raisonnables ?
      </p>
      <span className="stars5"><RatingStars stars={rating5} /></span>
    </div>
  );
}

GlobalRating.defaultProps = {
  ratings: {},
};

export default GlobalRating;
