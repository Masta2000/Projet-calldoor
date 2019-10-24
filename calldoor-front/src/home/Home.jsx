import React from 'react';
import './Home.scss';
import Searchbar from './Searchbar';
import TextPresentation from './TextPresentation';
import CardCompanyTen from './CardCompanyTen';

function Home() {
  return (
    <div className="Home">
      <div className="home-search">
        <div className="fog" />
        <h1>Votre entreprise respecte elle votre droit à la déconnexion ?</h1>
        <Searchbar from="home" />
      </div>
      <CardCompanyTen />
      <TextPresentation />
    </div>
  );
}

export default Home;
