import React from 'react';
import './TextPresentation.scss';

function TextPresentation() {
  return (
    <div className="TextPresentation">
      <div className="Title">
        <h1>
        Qu&apos;est-ce que le droit à la déconnexion ?
        </h1>
      </div>
      <div className="Block">
        <div className="Parallax1">
          <span />
        </div>
        <div className="Law">
          <h2>
            Ce que dit la loi
          </h2>
          <p>
          Le droit à la déconnexion a été inscrit dans le code du travail
           (article L.2242-8,7°) suite à l&apos;
          adoption de la loi n°2016-1088 du 08 Août 2016
           (article 55) relative au travail, à la modernisation du dialogue
            social et à la sécurisation des parcours professionnels.
            <br />
            Cette loi est
             applicable depuis le 1er Janvier 2017.
            <br />
            Son objectif est de permettre à tous les salariés de concilier
             vie personnelle et vie professionnelle, tout en luttant contre les risques de burn-out.
            <br />
            Pour cela ils doivent avoir la possibilité de ne pas se connecter
             aux outils numériques et de ne pas être contactés par leur employeur
              en dehors des heures de travail (congés, soirées, week-end...).
            <br />
            Chaque entreprise doit élaborer une charte.
          </p>
        </div>
        <div className="Parallax2">
          <span />
        </div>
        <div className="Criteria">
          <h2>
            Critères de notation
          </h2>
          <p>
          Sur ce site, les salariés ou anciens salariés peuvent
           noter une entreprise en matière de droit à la déconnexion
           et une note moyenne sera ensuite calculée et attribuée
            à l&apos;entreprise selon un certain nombre de critères :
            <br />

          - Les salariés évaluent l&apos;impact des outils numériques
           fournis par l’employeur tant au niveau professionnel et surtout personnel.
            <br />

          - Ils notent également le niveau d’engagement de leur
           hiérachie sur la diminution des usages numériques professionnels
            en dehors des horaires de travail.
            <br />

          - Enfin, ils attribuent une note globale à l&apos;entreprise
           concernant son implication au sujet du droit à la déconnexion.
          </p>
        </div>
        <div className="Parallax3">
          <span />
        </div>
      </div>
    </div>
  );
}

export default TextPresentation;
