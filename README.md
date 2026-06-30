# NantesJS Website (Next.js)

Site web de la communauté [NantesJS](https://nantesjs.org), développé avec [Next.js](https://nextjs.org/).

## Installation

```bash
git clone https://github.com/mcampourcy/nantesjs-website-nextjs.git
cd nantesjs-website-nextjs
npm install
```

## Variables d'environnement

Le projet utilise un fichier `.env.sample` comme modèle. Copie-le en `.env.local` et renseigne les valeurs nécessaires :

```bash
cp .env.sample .env.local
```

## Lancer le projet en développement

```bash
npm run dev
```

Le site est alors accessible sur [http://localhost:3000](http://localhost:3000).

## Génération des posters

Pour générer le poster d'un nouveau meetup

```bash
npm run generate:posters
```
