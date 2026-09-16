# HomPilot — refonte du site

Ouvrir **http://localhost:4173**. Le serveur est lancé avec `npm run dev`.

Cette version locale reprend les contenus publics de HomPilot.com au 16 septembre 2026. Aucun dépôt source HomPilot n’était disponible dans l’espace de travail : le site en production et son backend n’ont pas été modifiés.

## Contenu livré

- Homepage complète en français et en anglais, responsive, navigation mobile, FAQ et fenêtres de démo.
- Maya officielle et toutes les vidéos de la homepage, conservées dans leurs versions française et anglaise.
- Trois vues illustratives du parcours appels / agenda / HomPassport. Ce sont des illustrations d’interface, à remplacer par les véritables captures de la plateforme lorsqu’elles seront fournies.
- Pages `/agents`, `/agents/1` à `/agents/9` : contenu original français, fonctionnalités, chiffres et liens d’inscription conservés, présentation rafraîchie.
- Route alternative `/homepage3` conservée et affichant la nouvelle homepage.
- Appels et SMS vers le numéro existant, avec le texte SMS d’origine.
- Module de réservation officiel, identifiant d’entreprise et groupe `demo` inchangés. Son script est conservé dans `dist/integrations/embed-book.js`. Une surcharge visuelle adapte uniquement ses couleurs. Le module reste connecté au service de réservation existant.

## Commandes

`npm run dev` démarre le serveur sur le port 4173. `PORT=4174 npm run dev` permet de choisir un autre port.

`npm run build` vérifie la syntaxe JavaScript, les fichiers, références locales et routes. Le site utilise des modules JavaScript natifs, sans compilation ni installation de dépendances.

## Publier sur Vercel

1. Dans Vercel, choisir **Add New → Project** et importer ce dépôt GitHub.
2. Garder le dossier racine du dépôt comme **Root Directory**. Le fichier `vercel.json` configure automatiquement le type **Other**, la commande `npm run build` et le dossier publié `dist`.
3. Cliquer sur **Deploy**. Aucune variable d’environnement n’est nécessaire pour cette version.

Vercel héberge directement les fichiers de `dist/`, y compris les vidéos et les pages des agents. `server.mjs` sert uniquement à la prévisualisation locale. Conserver `dist/` dans Git : ce dossier contient les sources du site, sans étape de génération.

Le module de réservation continue d’utiliser le service officiel de HomPilot. Sur la première URL Vercel, vérifier son chargement avant d’associer un domaine. Les prochains changements poussés sur GitHub seront repris par Vercel selon les réglages du projet.

## Derniers éléments de contenu

Remplacer les vues illustratives par les screenshots réels et ajouter les photos ou vidéos restantes lorsqu’ils seront disponibles. Aucun témoignage ou logo client de la référence n’a été inventé. Si cette refonte doit ensuite rejoindre le dépôt applicatif HomPilot existant, préserver ses intégrations lors de cette étape.

## Sources

- https://www.hompilot.com/
- https://www.hompilot.com/agents/1 (et les 8 autres agents)
- https://www.hompilot.com/homepage3
- https://maya.hompilot.com/embed-book.js

Les affiches vidéo proviennent d’images extraites des vidéos officielles, sans nouvelle génération de Maya. Les polices sont hébergées localement.
