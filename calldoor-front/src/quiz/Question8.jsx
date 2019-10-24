import React from 'react';
import { Field } from 'redux-form';
import './Question8.scss';


function Question8() {
  return (
    <div className="Question8">
      <h1>
      Auriez-vous une proposition à faire à votre entreprise pour améliorer
         ce droit à la déconnexion au sein de votre société?
      </h1>
      <Field id="text8" name="review8" component="textarea" type="text" value="" />
      <div>
        <button className="select-button" type="submit">Envoyer mes réponses</button>
      </div>
    </div>
  );
}

export default Question8;
