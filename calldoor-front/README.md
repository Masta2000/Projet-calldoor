# bordeaux-0219-js-calldoor-front

## Contexte

Le site a pour objectif de répertorier et classer les entreprises qui pratiquent le droit à la déconnexion.

L’implication des entreprises sera donc évaluée par les salariés eux-mêmes, le classement est ainsi dynamique (mise en valeur du top 10) et évolue au fil des avis utilisateurs.

### Technologies utilisées

* React / Redux
* Javascript ES6
* HTML5
* Sass
* NodeJS
* MySQL
* Express
* Nodemailer
* Moment

### Navigateurs supportés

Ce site est optimisé pour Google Chrome, Mozilla Firefox et Safari.

### Accessibilité

Ce site est optimisé pour les résolutions d'écrans de type : Iphone, Ipad et Web.

## Fichiers de configuration pour accéder à la base de données

Front:
Il faut créer une variable d’environnement qui contiendra l’adresse IP du serveur et qui sera utilisée dans tous les composants du front qui communiquent avec la base de données. De telle manière si l’adresse du serveur change il suffit de mettre à jour la variable d’environnement pour que le nouvel IP soit disponible dans tous les composants.

Les étapes à suivre sont les suivantes:
- Créer un fichier .env dans front/ avec les informations suivantes:
- REACT_APP_API_URL = adresse IP du serveur
- REACT_APP_API_URL est intégré dans la constante varServer, qui permet de stocker l'URL.
- Importer varServer dans les composants qui communiquent avec la base de données et l’utiliser en substitution de l’adresse Ip en dur

## Arborescence de l’application
**Front src/**
```
├── navbarFooter
├── home
├── company
├── quiz
├── contact
├── authentification
├── admin
├── actions
├── reducers
├── containers
├── App.jsx
├── ScrollToTop.jsx
├── index.js
├── index.scss
├── constants.js
└── serviceWorker.js
```

##  Contributeurs
Ce site a été réalisé par:
- [Anthony DESORBAIS](https://github.com/Anto2441)
- [Chris FRADET](https://github.com/Masta2000)
- [Martin HAMON](https://github.com/martinh12)
- [Mathias TUJAGUE](https://github.com/Math80)
- [Philippe BOUSSELIER](https://github.com/bahamut21)
- [Martin PEUBEY](https://github.com/martinioluis)