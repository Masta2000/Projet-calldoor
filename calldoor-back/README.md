# bordeaux-0219-js-calldoor-back

## Fichiers de configuration pour accéder à la base de données

L’accès à la base de données doit être configuré aussi bien dans le back que dans le front.

Back:

Dans bordeaux-0219-js-calldoor-back créer un fichier conf.js structuré comme suit:
```js

import mysql from 'mysql';

const connection = mysql.createConnection({

host: insérer l’adresse IP du serveur,

user: identifiant de votre base de données MySQL,

password: mot de passe de votre base de données MySQL,

database: nom de votre base de données MySQL,

secretorkey = 'clé privée pour authentification';

});

export default = connection;
```




## Routes API

## admin
**GET** /api/admin --> récupère les infos sur tous les administrateurs


**GET** /api/admin/:id --> récupère les infos d'un administrateur identifié par son id


**POST** /api/admin--> référencer un nouvel administrateur
```js
[
  {
        "id": 1,
        "lastname": "LEVY",
        "firstname": "Jean-Bernard",
        "email": "JB.Lévy@edf.fr ",
        "super_admin": 0,
        "company_id": 1
    },
]
```

## auth
**POST** /api/admin/signup --> créer un nouvel administrateur

**POST** /api/admin/signup --> se connecter en tant qu'administrateur
```js
{
    "login": "votre login",
    "password": "votre password"
}
```
mot de passe crypté par bcrypt

##company
**GET** /api/company --> récupère les infos sur toutes les entreprises validées par l'admin

**POST** /api/company/homecards--> créer une nouvelle entreprise

**PUT** /api/company/:id --> modifier une entreprise identifiée par son id

**DELETE** /api/company/homecards/:id--> supprimer une entreprise

**GET** /api/company/:id --> récupère les infos d'une entreprise identifiée par son id
```js
{
        "id": 315,
        "name": "dan",
        "logo": url,
        "city": "Paris",
        "size": 3000,
        "website": www.exemple.com,
        "description": texte,
        "rating": 3,
        "totalcomments": 1
    },
```

**GET** /api/company/review/:id --> récupère les infos d'une entreprise identifiée par son id dont les commentaires sont validés
```js
[
    {
        "id": 7,
        "name": "SFR",
        "logo": "https://pbs.twimg.com/profile_images/756108823816011776/BFGOsQES_400x400.jpg",
        "city": "Pessac",
        "size": "14500",
        "website": "https://www.sfr.fr/",
        "description": "SFR (historiquement, sigle de Société française du radiotéléphone) est un opérateur de télécommunications français, branche regroupant les activités télécoms d'Altice France.",
        "rating1": 0,
        "rating2": 3,
        "rating3": 0,
        "rating4": 2,
        "rating5": 2,
        "rating": 4,
        "totalcomments": 1,
        "manager": Martin Havor,
        "email": dede@gmail.com
    }
]
```

**GET** /api/company/homecards --> optenir les entreprises validées

**GET** /api/company/homecards/top10 --> optenir le top 10 des entreprises validées ayant des commentaires validés
```js
{
        "id": 2,
        "name": "Calldoor",
        "logo": "http://www.agglo-cotebasque.fr/typo3temp/fl_realurl_image/logo-calldoor-aout2016-Lo.jpg",
        "city": "Bidart",
        "size": "5",
        "website": "www.calldoor.net",
        "description": "L'entreprise installe une application mobile sur le smartphone pro du salarié et paramètre à distance via un navigateur internet. Calldoor Notification, une de nos applications permet de sensibiliser. Via cet outil de com interne, l'entreprise peut notamment notifier à son salarié de manière récurrente ou ponctuelle les modalités de déconnexion.",
        "rating": 4.975,
        "totalcomments": 8
    },
```

**GET** /api/company/homecards/:id --> optenir une entreprise identifiée par son id
```js
[
    {
        "id": 8,
        "name": "Decathlon",
        "logo": "https://www.phenixaeden.com/wp-content/uploads/2016/07/Logo-Decathlon.jpg",
        "city": "Villeneuve-d'Ascq",
        "size": "88000",
        "website": "www.decathlon.fr",
        "description": "Decathlon est un groupe français de grande distribution de sport et de loisirs.\r\n",
        "rating": 2.89285714,
        "totalcomments": 7
    }
]
```

**GET** /api/company/admin/companies --> optenir les entreprises en attente de validation
```js
{
        "id": 5,
        "name": "Orange",
        "logo": "https://www.sangbreetamoitra.com/wp-content/uploads/2018/11/orange-logo.png",
        "city": "Paris"
    },
```

**PUT** /api/company/validation/:id --> valider une entreprise identifiée par son id

**POST** /api/company/admin/manage --> créer une entreprise autovalidée depuis l'espace admin

**GET** /api/company/allow/toreview --> sélectionner les entreprises possédant des commentaires en attente de validation


##mail
**POST** /api/send --> envoie de mail via NodeMailer
```js
{
    "name": "Albert",
    "email": "albert@yahoo.fr",
    "subject": "sujet",
    "message": "message",
    "content": "contenu",
}
```

**POST** /api/review --> poster un commentaire

**GET** /api/review/company/:id --> obtenir tous les commentaires validés d'une entreprise identifiée par son id
```js
  {
        "id": 6,
        "date": "1561471948264",
        "review7": "Je laisse un avis favorable",
        "review8": "Oui j'aurais des propositions à faire à mon entreprise pour améliorer le droit à la déconnexion",
        "rating": 5,
        "company_id": 8
    },
```

**GET** /sorted/validation --> obtenir toutes les entreprises qui ont des commentaires en attente de validation
```js
 {
        "name": "Credit Agricole",
        "logo": "https://probleme-paiement.fr/wp-content/uploads/2019/02/credit-agricole.png",
        "id": 10,
        "city": "Montrouge",
        "companyId": 10,
        "nbComments": 6
    },

```

**GET** /sorted/validation --> obtenir tous les commentaires non validés d'une entreprise identifiée par son id

**PUT** /validation/content/:id --> valider un commentaire d'une entreprise identifiée par son id

**DELETE** /validation/content/:id --> supprimer un commentaire d'une entreprise identifiée par son id
```js

{
        "id": 15,
        "review7": "Très bonne ambiance de travail, les différents collaborateurs avec qui j’ai eu l’occasion de travaillé ont toujours été à mon écoute et m’ont orienté le mieux possible. Je n’aurais pu terminer mon projet sans leurs aides. Le personnel est impliqué dans l’amélioration de l’entreprise.",
        "review8": "Conseils à l'entreprise : Réduire l'écart des salaires avec le marché du travail et valoriser le travail de vos salariés avec des avantages sociaux dignent d'un grand groupe et non d'une PME. Réduire les \"tabous\" en terme de communication. ",
        "review9": "sasa@sasa.fr"
    },

```


## BARRE DE RECHERCHE

**GET** /api/company --> rechercher une entreprise via **req.query** 
```js
{
	"search": "entreprise",
	"search": "ville"
}
 ```

```js
 {
        "id": 185,
        "name": "apple",
        "logo": "https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SL1270_.jpg",
        "city": "Paris",
        "size": "52402",
        "website": "https://www.apple.com/fr/",
        "description": "Apple est une entreprise multinationale américaine qui conçoit et commercialise des produits électroniques grand public, des ordinateurs personnels et des logiciels informatiques.",
        "rating": null,
        "totalcomments": 1
    },
```



## Arborescence de l’application

**Back**
```
├── app.js
├── bin
├── build
├── package-lock.json
├── package.json
├── process.yml
├── public
└── routes

```

**Back routes/** 
```

├── admin.js
├── auth.js
├── company.js
├── mail.js
├── review.js

```


  

## Contributeurs

Ce site a été réalisé par:

- Martin Hamon,

- Anthony Desorbais,

- Chris Fradet,

- Martin Peubey,

- Philippe Bousselier,

- Mathias Tujague

 

