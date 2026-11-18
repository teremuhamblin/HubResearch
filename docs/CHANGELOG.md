# Changelog

Toutes les modifications notables apportées à **HubResearch** (*MantraLab v3.0*) sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/), et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Unreleased]

### Added
- Ajout de `ROADMAP.md` pour le suivi des évolutions post-v1.7 (`v1.7.x`, `v1.8`, `v2.0`).
- Ajout de `public/sitemap.xml` pour l'indexation des 6 pages du portail.
- Ajout de `public/.well-known/security.txt` (conforme RFC 9116) en complément de `.github/SECURITY.md`.

## [1.7.0] - 2026-11-18 — v1.7 Stable

### Added
- **Portail Vite MPA (6 pages) :** `index.html`, `lab.html`, `modules.html`, `research.html`, `team.html`, `contact.html`.
- **Thème & Accessibilité (`style.css`, `main.js`) :** thème Dark / Light persistant, respect de `prefers-reduced-motion`, `skip-link`, attributs `aria-current` et navigation clavier renforcée.
- **Catalogue dynamique (`modules.html` & `research.html`) :** filtrage par domaine (`MantraCore`, `MantraOps`, `MantraAI`, `CyberOps Toolkit`), recherche temps réel insensible aux accents, résumés dépliables et copie rapide des citations.
- **Ressources statiques (`public/`) :** ajout de `hubresearch-logo.svg`, `.nojekyll` et `robots.txt`.
- **Documentation & Gouvernance :** `README.md`, `SUPPORT.md`, `CONTRIBUTORS.md`, `docs/structure.md` ainsi que `.github/` (`SECURITY.md`, `CONTRIBUTING.md`, `PULL_REQUEST_TEMPLATE.md`, `ISSUE_TEMPLATE/bug_report.md`, `ISSUE_TEMPLATE/research_proposal.md`).

### Security & Build
- Politique **CSP** côté client.
- Configuration `vite.config.js` en mode Multi-Page App avec chemins relatifs (`base: "./"`) compatibles GitHub Pages.
- Workflow `.github/workflows/deploy.yml` avec vérification automatique du dossier `dist/` avant déploiement sur GitHub Pages.

[Unreleased]: https://github.com/<OWNER>/<REPO>/compare/v1.7.0...HEAD
[1.7.0]: https://github.com/<OWNER>/<REPO>/releases/tag/v1.7.0
