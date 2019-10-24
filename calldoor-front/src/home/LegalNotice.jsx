import React from 'react';
import './LegalNotice.scss';


function LegalNotice() {
  return (
    <div className="LegalNotice">
      <div className="LegalMentions">
        <h1>Mentions légales</h1>
        <p>
          <b>Propriétaire du site</b>
          : SAS ED2
          <br />
          <br />
          <b>Adresse</b>
          : 97 allée Théodore Monod 64210 Bidart
          <br />
          <br />
          <b>RCS de Bayonne</b>
          <br />
          <br />
          <b>SIREN</b>
          : 814426425
          <br />
          <br />
          <b>N° TVA</b>
          : FR 25 814426425
          <br />
          <br />
          <b>Directeur de la publication</b>
          : Edouard Mongrand, Directeur de la SAS ED27
          <br />
          <br />
          <b>Contact</b>
          : contact@droitaladeconnexion.fr
        </p>
        <br />
      </div>
      <div className="Host">
        <h1>Hébergeur</h1>
        <p>
          OVH
          2 rue Kellerman
          59100 Roubaix
          France
        </p>
      </div>
    </div>
  );
}

export default LegalNotice;
