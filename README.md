# Tracky ✅

Tracky est une application de gestion de tâches.

## Features ✨

- Création de tâches
- Suppression de tâches
- Marquage de tâches comme terminées

---

## Conception 🧠

L'acrchitecture N* tiers est utilisée pour ce projet.
Un reverse proxy permet la mise en place du HTTPS et la redirection des requêtes vers les différents services.

### Architecture 🏗️

![tracky.svg](/docs/assets/tracky.svg)  

### Modèle 📦

![model.svg](/docs/assets/model.png)



### API 🖥️

- L'API a été développée en utilisant NestJS
- Elle est assez simple et contient peu de logique métier
- La couche service a tout de même été testée.

### Front 💄

- Le front a été développé en utilisant React
- La librairie Prime React a été utilisée pour les composants
- Le state est géré par React State et React Context

### Reverse Proxy 🚋

- Le reverse proxy est basé sur Nginx
- Il s'agit d'une simple redirection des requêtes vers les différents services
- Il me sert que pour le mode production

## Temps ⌚

- API : 2h
- Front : 3h
- Stack de build (docker, reverse proxy, etc.) : 2h

## Améliorations ⏫

- Ajout de tests pour le front
- Rendre le front un peu plus joli
- Responsivité (actuellement OK jusque ~800px de largeur)
- Ajout d'un swagger pour l'API
- Storybook pour le front
- Toaster et affichage des messages d'erreur dans le front.

---

## Installation 

1. Clone the repository

### Production 🚀

#### Prerequisites 🗹

- Docker

#### Steps 📝

1. Remplissez le fichier `.env.production.local` avec les informations nécessaires (CF : `.env.example`)
1. Run `docker-compose up --build`
2. Visit `https://localhost`

### Development 🛠️

#### Prerequisites 🗹

- Node.js
- npm
- TypeScript
- Docker

#### Steps 📝

1. Remplissez le fichier `.env.production.local` avec les informations nécessaires (CF : `.env.example`)
2. Run `docker-compose -f docker-compose.dev.yml up -d` to start the API
3. Run `npm install` on the `front` directory, puis `npm run dev`
4. Run `npm install` on the `api` directory, puis `npm run start:dev`
