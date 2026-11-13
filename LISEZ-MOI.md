# Site Vincentes

Site statique (HTML, CSS, un peu de JavaScript). Aucune installation, aucun serveur requis.

## Voir le site
Double-cliquez sur `index.html`.

## Structure
- `index.html` : la page principale (accueil, à propos, services, réalisations, forfaits, ateliers, équipe, contact)
- `conditions.html` : conditions générales
- `confidentialite.html` : politique de confidentialité
- `404.html` : page d'erreur
- `assets/css/style.css` : toute la mise en forme (les couleurs sont en haut du fichier)
- `assets/js/main.js` : langue FR/EN, thème clair/sombre, menu mobile
- `assets/img/`, `assets/pdf/`, `assets/fonts/` : images, forfaits PDF, police Montserrat

## Modifier un texte
Le français est écrit directement dans le HTML. L'anglais est dans l'attribut `data-en` de la même balise.
Changez les deux en même temps.

## Mettre en ligne (GitHub Pages, comme le portfolio)
1. Créez un dépôt GitHub et déposez-y tout le contenu de ce dossier.
2. Dans Settings > Pages, choisissez la branche principale.
3. Le fichier `CNAME` à la racine déclare le domaine personnalisé (servicesvincentes.com).

## À faire avant la mise en ligne
- [ ] Remplacer le logo Amor Fati par celui de Vincentes quand il existera (`assets/img/jackalope.png` dans l'en-tête, `assets/img/logo-amorfati.webp` dans le pied de page).
- [x] Domaine : servicesvincentes.com (acheté chez Network Solutions). Le fichier `CNAME` à la racine le déclare à GitHub Pages ; les adresses de partage et les `canonical` pointent dessus.
- [ ] Vérifier les coordonnées (courriel et téléphone sont ceux d'Amor Fati pour l'instant).
- [ ] Faire relire les deux pages légales (voir les points signalés par Claude dans la conversation).
