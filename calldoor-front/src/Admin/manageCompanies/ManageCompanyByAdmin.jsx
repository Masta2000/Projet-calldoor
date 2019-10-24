import React from 'react';
import { NavLink } from 'react-router-dom';
import Searchbar from '../../home/Searchbar';
import './ManageCompanyByAdmin.scss';
import MenuAdmin from '../manageNotifications/MenuAdmin';

function ManageCompanyByAdmin() {
  return (
    <div className="ManageCompanyByAdmin">
      <div className="MenuAdmin">
        <MenuAdmin />
      </div>
      <div className="ManageCompany">
        <Searchbar from="managecompany" />
        <NavLink to="/admin/managecompany/addCompany">
          <button type="button">Ajouter une nouvelle entreprise</button>
        </NavLink>
      </div>
    </div>
  );
}

export default ManageCompanyByAdmin;
