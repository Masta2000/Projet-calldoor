import React from 'react';
import { NavLink } from 'react-router-dom';
import RatingStars from './RatingStars';

import './SearchCompany.scss';


function SearchCompany({
  from,
  company: {
    id, name, logo, city, description, rating, totalcomments,
  },
}) {
  const url = from === 'home' ? `/company/${id}` : `/admin/managecompany/company/${id}`;
  return (
    <NavLink to={url}>
      <li className="SearchCompany">
        <img className="imgCompany" src={logo} alt="logo" />
        <div className="cardCompanyRight">
          <h2 className="titleCompany">{name}</h2>
          <p className="totalCommentCompany">
          Nombre total d&apos;avis
          (
            {totalcomments}
          )
          </p>
          <p className="descriptionCompany">
            {description}
          </p>
          <p className="cityCompany">{city}</p>
          <p className="card-rating">
            <RatingStars stars={rating} />
          </p>
        </div>
      </li>
    </NavLink>
  );
}

SearchCompany.defaultProps = {
  company: {},
};

export default SearchCompany;
