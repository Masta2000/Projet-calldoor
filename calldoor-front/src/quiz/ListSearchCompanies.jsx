import React from 'react';
import { NavLink } from 'react-router-dom';
import './ListSearchCompanies.scss';


function ListSearchCompanies({ companies, selectCompany }) {
  return (
    <ul className="ListSearchCompanies">
      {
        (companies.length)
          ? companies.map(company => (
            <li key={company.id}>
              <span>{company.name}</span>
              <span>
                <button className="company-button" type="button" onClick={() => selectCompany(company)}>
                  Choisir cette compagnie
                </button>
              </span>
            </li>
          ))
          : (
            <li className="noresult">
              <div className="quoteNoresult">Aucun résultat</div>
              <NavLink to="/addCompany">
                <button className="addButton" type="button">Créer la fiche entreprise</button>
              </NavLink>
            </li>
          )
      }
    </ul>
  );
}

export default ListSearchCompanies;
