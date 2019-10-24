import React from 'react';

import './DescriptionCompany.scss';

function DescriptionCompany({
  company: {
    name, logo, city, website, description, size, totalcomments, manager,
  },
}) {
  return (
    <div className="DescriptionCompany">
      <div className="descriptionCompanyLeft">
        <img className="imgCompany" src={logo} alt="logo" />
      </div>
      <div className="descriptionCompanyRight">
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
        <p>
          {manager}
        </p>
        <p className="sizeCompany">
          {size}
          {' '}
          employés
        </p>
        <p className="cityCompany">{city}</p>
        <p className="websiteCompany">
          {website}
        </p>
      </div>
    </div>
  );
}

DescriptionCompany.defaultProps = {
  company: {},
};

export default DescriptionCompany;
