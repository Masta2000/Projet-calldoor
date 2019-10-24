import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <div id="cd-nav" className="Navbar">
      <div className="title">
        <NavLink activeClassName="active" exact to="/"><img src="/image/Logo.png" alt="Logo" /></NavLink>
        <h1>Droit à la déconnexion</h1>
      </div>
      <a href="#0" className="cd-nav-trigger">
          Menu
        <span />
      </a>
      <nav id="cd-main-nav">
        <ul className="Header">
          <li><NavLink activeClassName="active" exact to="/">Accueil</NavLink></li>
          <li><NavLink activeClassName="active" to="/laisser-un-avis">Laisser un avis</NavLink></li>
          <li><NavLink activeClassName="active" to="/contactez-nous">Contactez-nous</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
