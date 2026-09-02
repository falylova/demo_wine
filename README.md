# Demo Wine

Demo Wine est un site web présentant une expérience de vente de vin avec une interface moderne et interactive.

Le projet a été réalisé avec React et TypeScript, avec Vite pour le développement et Three.js pour les éléments 3D.

## Technologies

* React
* TypeScript
* Vite
* Tailwind CSS
* Three.js
* React Three Fiber
* React Three Drei

## Fonctionnalités

* Page d'accueil avec présentation du produit
* Navigation entre les différentes sections
* Présentation d'un vin rouge
* Section promotionnelle
* Présentation des informations sur le produit
* Interface de commande
* Éléments 3D et animations
* Design responsive

## Structure du projet

```text
demo_wine/
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── Checkout.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── License.tsx
│   │   ├── Marquee.tsx
│   │   ├── Nav.tsx
│   │   ├── Promotion.tsx
│   │   ├── RedWine.tsx
│   │   └── Reveal.tsx
│   │
│   ├── hooks/
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── package-lock.json
```

## Installation

Cloner le projet :

```bash
git clone https://github.com/falylova/demo_wine.git
cd demo_wine
```

Installer les dépendances :

```bash
npm install
```

## Lancer le projet

Démarrer le serveur de développement :

```bash
npm run dev
```

L'application sera ensuite accessible à l'adresse indiquée par Vite, généralement :

```text
http://localhost:5173
```

## Build

Pour créer une version de production :

```bash
npm run build
```

Pour prévisualiser la version de production :

```bash
npm run preview
```

## Objectif

Ce projet a été réalisé pour mettre en pratique le développement d'interfaces web modernes avec React, TypeScript, Tailwind CSS et Three.js, notamment l'intégration d'éléments 3D et d'animations dans une interface utilisateur.

## Auteur

Lova Faly

GitHub : https://github.com/falylova
