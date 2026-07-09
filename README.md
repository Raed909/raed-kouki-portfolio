# Portfolio Raed Kouki

Projet statique HTML/CSS/JavaScript pour le portfolio professionnel de Raed Kouki.

## Ouvrir dans VS Code

Ouvre ce dossier dans VS Code:

```text
C:\Users\Asus\Documents\Codex\2026-06-30\je\outputs\portfolio-raed-kouki
```

## Structure

```text
portfolio-raed-kouki/
  index.html        Contenu de la page: textes, sections, liens, images
  styles.css        Design: couleurs, espacements, responsive, cartes
  script.js         Petit script pour le header et le scroll fluide
  assets/           Images, logos et CV PDF
```

## Fichiers importants

- `index.html`: c'est le fichier principal. Tu modifies ici les textes, les expériences, les projets et les liens.
- `styles.css`: c'est le style visuel. Tu modifies ici les couleurs, tailles, grilles, cartes, bouton de langue et affichage mobile.
- `script.js`: il contient le header au scroll, la navigation fluide et la traduction FR/EN.
- `assets/`: contient la photo, les logos, l'image hero et le CV.

## Traduction FR / EN

Le bouton `EN / FR` est géré dans `script.js`.

Les textes traduits sont dans l'objet:

```js
const translations = {
  fr: { ... },
  en: { ... },
};
```

Pour modifier un texte:

1. Cherche sa clé `data-i18n` dans `index.html`.
2. Retrouve la même clé dans `script.js`.
3. Modifie la version française et anglaise.

Les liens du CV changent automatiquement selon la langue:

```js
const cvByLang = {
  fr: "./assets/CV_RAED_KOUKI_FR.pdf",
  en: "./assets/CV_RAED_KOUKI_EN.pdf",
};
```

## Tester le site en local

Option simple: ouvre `index.html` dans ton navigateur.

Option plus propre avec un serveur local:

```powershell
cd C:\Users\Asus\Documents\Codex\2026-06-30\je\outputs\portfolio-raed-kouki
python -m http.server 8765 --bind 127.0.0.1
```

Ensuite ouvre:

```text
http://127.0.0.1:8765/
```

## Modifier une image

1. Ajoute la nouvelle image dans `assets/`.
2. Dans `index.html`, cherche la balise `<img>`.
3. Remplace le chemin, par exemple:

```html
<img src="./assets/photo-raed.jpg" alt="Portrait professionnel de Raed Kouki">
```

## Modifier une expérience

Dans `index.html`, cherche:

```html
<section class="section alt" id="experience">
```

Chaque expérience est dans un bloc:

```html
<article class="timeline-item">
```

Tu peux modifier:

- le logo
- les dates
- le titre
- le paragraphe d'introduction
- les puces
- les tags techniques

## Redéployer

Quand tu modifies le site, recrée une archive ZIP du contenu du dossier, puis redéploie-la sur Netlify, Vercel ou GitHub Pages.

Attention: il faut zipper le contenu du dossier, avec `index.html` à la racine de l'archive.
