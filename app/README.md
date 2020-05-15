
## BANK-UP FRONT

Ce projet contient le frontend web du POC3 BankUP.
Il s'agit d'une application NodeJS/React.

### Node

Un serveur node est mis en place pour gérer l'authentification OAuth avec BAPI.
Pour faire fonctionner ce serveur, il est nécessaire de créer un fichier .env.
Utilisez le même contenu que .env.example en complétant les informations nécessaires.
Ce fichier .env est local à votre poste de développement et n'est pas transmis dans les commits git.

Démarrez ensuite le serveur avec la commande `node server`. Le serveur sera disponible sur le port `8080`.

### React

Le projet React requiert l'installation de Python 27 (https://www.python.org/download/releases/2.7/).
Python est requis du fait de la dépendances node-sass (utilisée pour la gestion des feuilles de styles SCSS).
Lors de l'installation Python il est important de garder le chemin par défaut proposé: C:\Python27.

