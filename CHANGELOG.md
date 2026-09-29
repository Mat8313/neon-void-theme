# Changelog

Toutes les évolutions notables de Neon Void sont listées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/).

## [1.2.1] - 2026-09-29

### Corrigé
- Nom du dossier racine en rose néon aussi quand l'explorateur n'a qu'une seule section
  (VS Code l'affiche alors dans le titre de la barre latérale, pas en en-tête de section).

## [1.2.0] - 2026-09-29

### Ajouté
- Variante **Neon Void Soft** (fond #0C0C12, néons adoucis) pour écrans LCD ou le soir,
  générée automatiquement depuis le thème principal (`npm run build`).
- Couverture fine de **Java** (types, génériques, annotations, packages) et **Python**
  (self/cls, décorateurs, docstrings, f-strings), TextMate + sémantique.
- Types des signatures PHP (`int`, `?array`) en jaune.

### Modifié
- Anti-marquage OLED : barre d'activité, trait d'onglet, titres de panneaux et barre
  d'état atténués (éléments statiques). Le néon plein reste réservé au code.
- En-têtes de section de l'explorateur (nom du dossier racine) en rose néon avec un
  fin trait rose.

## [1.1.0] - 2026-09-29

### Modifié
- Explorateur : titre de la vue en cyan, contour néon sur l'élément sélectionné,
  guide d'indentation du dossier courant en cyan, survol en blanc pur.

## [1.0.0] - 2026-09-29

### Ajouté
- Première version du thème **Neon Void** (sombre, noir pur #000000 pour AMOLED).
- Interface complète : éditeur, barres latérale/activité/titre/état, panneaux,
  terminal, widgets, notifications, palette de commandes, débogage, diff.
- Coloration syntaxique TextMate pour C/C++, Dart/Flutter, PHP, HTML, CSS, SQL,
  JSON et Markdown.
- Couleurs sémantiques (`semanticTokenColors`) alignées sur TextMate.
- Colorisation des paires de crochets sur 3 niveaux : cyan, rose, jaune.
- 16 couleurs ANSI pour le terminal intégré.
