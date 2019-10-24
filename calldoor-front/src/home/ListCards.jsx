import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchCompany from '../company/SearchCompany';
import './ListCards.scss';


class ListCards extends Component {
  renderList = () => {
    const { from } = this.props;
    if (from === 'home') {
      return (
        <li className="noresult">
          <div className="quoteNoresult">Aucun résultat  :(</div>
          <NavLink to="/addCompany">
            <button className="addButton" type="button">Créer la fiche entreprise</button>
          </NavLink>
        </li>
      );
    }
    return (
      <li className="noresult">
        <div className="quoteNoresultadmin">Aucun résultat</div>
      </li>
    );
  }

  render() {
    const { companies, from } = this.props;
    return (
      <ul className="ListCards">
        {companies.length
          ? companies.map(company => (
            <SearchCompany
              key={company.id}
              company={company}
              from={from}
            />
          ))
          : this.renderList()}
      </ul>
    );
  }
}

export default ListCards;
