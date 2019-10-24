import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../home/Searchbar';
import './AdminSearchCompany.scss';

function AdminSearchCompany() {
  return (
    <div className="AdminSearchCompany">
      <NavLink to="/">
        <button type="button">Ajouter une entreprise</button>
      </NavLink>
      <SearchBar />
    </div>
  );
}

export default AdminSearchCompany;
