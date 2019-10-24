import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="Footer">
      <Link to="/mentions-legales">Mentions légales</Link>
      <Link to="/contactez-nous">Contact</Link>
    </div>
  );
}

export default Footer;
