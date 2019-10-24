import React from 'react';
import { Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import ToolbarQuestions from './ToolbarQuestions';
import './InfoUser.scss';

function InfoUser(props) {
  const {
    review9, review10, review11, review12, review13, review14,
  } = props;
  const allowNextStep = (
    review9 !== '' && review10 !== ''
     && review11 !== undefined && review12 !== undefined
      && (
        (review14 === 'non' && review13 !== null)
        || (review14 === 'oui')
      )
  );
  return (
    <div className="InfoUser">
      <h1>
      Nous souhaiterions quelques informations complémentaires
      </h1>
      <h4>
        Il s&apos;agit d&apos;un processus de vérification. Votre adresse email
restera privée et sera invisible sur le site.
      </h4>
      <h3>
        Votre email
      </h3>
      <Field className="form-input" id="email" name="review9" component="input" type="email" placeholder="Votre email" />
      <h3>
        Ville de l&apos;entreprise
      </h3>
      <Field className="form-input" id="ville" name="review10" component="input" type="text" placeholder="Ville de l'entreprise" />
      <h3>
        Type de poste
      </h3>
      <Field className="form-select" id="poste" name="review11" component="select">
        <option>Sélectionnez une option</option>
        <option>Artisan</option>
        <option>Artiste</option>
        <option>Cadre supérieur</option>
        <option>Chauffeur</option>
        <option>Commerce</option>
        <option>Comptabilité</option>
        <option>Contrôle de Gestion</option>
        <option>Digital</option>
        <option>Direction Générale</option>
        <option>Finance</option>
        <option>Informatique</option>
        <option>Juridique</option>
        <option>Marketing</option>
        <option>Recherche et Développement</option>
        <option>Réseau</option>
        <option>Ressources Humaines</option>
        <option>Santé</option>
        <option>Sécurité</option>
        <option>Technicien de chantier</option>
        <option>Autre</option>
      </Field>
      <h3>
        Votre contrat
      </h3>
      <label>
        <span>Date de début de contrat</span>
        <Field name="review12" component="input" type="date" />
      </label>
      <label htmlFor="oui">
        <span>Êtes-vous toujours en poste?</span>
        <Field id="oui" name="review14" component="input" type="radio" value="oui" />
        <span className="text-button">Oui</span>
      </label>
      <label htmlFor="non">
        <Field id="non" name="review14" component="input" type="radio" value="non" />
        <span className="text-button">Non</span>
      </label>
      <div>
        {review14 === 'non'
          ? (
            <label>
              <span>Date de fin de contrat</span>
              <Field name="review13" component="input" type="date" />
            </label>
          ) : ''}
      </div>

      <ToolbarQuestions allowNextStep={allowNextStep} />
    </div>
  );
}
const selector = formValueSelector('quiz');
const mstp = state => ({
  review9: selector(state, 'answers.review9'),
  review10: selector(state, 'answers.review10'),
  review11: selector(state, 'answers.review11'),
  review12: selector(state, 'answers.review12'),
  review13: selector(state, 'answers.review13'),
  review14: selector(state, 'answers.review14'),
});


export default connect(mstp)(InfoUser);
