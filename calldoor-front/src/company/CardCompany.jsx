import React from 'react';
import { NavLink } from 'react-router-dom';
import RatingStars from './RatingStars';

import './CardCompany.scss';


function CardCompany({
  from,
  company: {
    id, name, logo, city, description, rating, totalcomments, manager,
  },
}) {
  return (
    <li className="CardCompany">
      {from === 'manageCompany'
        ? (
          <img className="imgCompany" src={logo} alt="logo" />
        )
        : (
          <div className="circle">
            <NavLink to={`/company/${id}`}>
              <img className="imgCompany" src={logo} alt="logo" />
            </NavLink>
          </div>
        )}
      <div className="cardCompanyRight">
        <h2 className="titleCompany">{name}</h2>
        <p className="totalCommentCompany">
          Nombre total d&apos;avis
          (
          {totalcomments}
          )
        </p>
        <p>
          {manager}
        </p>
        <p className="descriptionCompany">
          {description}
        </p>
        <p className="cityCompany">{city}</p>
        <p className="card-rating">
          <RatingStars stars={rating} />
        </p>
        {from === 'manageCompany'
          ? (
            <NavLink to={`/admin/managecompany/company/${id}/update`}>
              <button type="button">Modifier</button>
            </NavLink>
          )
          : (
            <NavLink to={`/company/${id}`}>
              <button type="button">En savoir plus</button>
            </NavLink>
          )}
        {from === 'manageCompany'
          ? (
            <div>
              <NavLink to={`/admin/managecompany/company/${id}/delete`}>
                <button type="button">Supprimer</button>
              </NavLink>
              <NavLink to={`/admin/managecompany/company/${id}/addmanager`}>
                <button type="button">
                  Ajouter un manager
                </button>
              </NavLink>
              <NavLink to="/admin/managecompany">
                <button type="button">
                  Retour accueil
                </button>
              </NavLink>
            </div>
          )
          : ''}
      </div>
    </li>
  );
}

CardCompany.defaultProps = {
  company: {},
};

export default CardCompany;
