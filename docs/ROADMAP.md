# 🗺️ Roadmap — HubResearch (MantraLab v3.0)

Ce document présente la trajectoire d'évolution de **HubResearch** à partir de la base **v1.7 Stable**.

---

## ✅ v1.7 Stable — Baseline Production (Actuelle)
- [x] Architecture Vite MPA à 6 pages (`index`, `lab`, `modules`, `research`, `team`, `contact`)
- [x] Thème Dark / Light persistant & accessibilité (`skip-link`, `aria-current`, `prefers-reduced-motion`, clavier)
- [x] Catalogue dynamique (`modules.html`, `research.html`) : filtres, recherche insensible aux accents, résumés dépliables, copie des citations
- [x] Politique CSP côté client et compatibilité GitHub Pages (`base: "./"`, `public/.nojekyll`)
- [x] Gouvernance `.github/` et pipeline `deploy.yml` avec vérification de `dist/`

---

## 🛠️ v1.7.x — Consolidation, SEO & Qualité CI
- [x] `CHANGELOG.md` & `ROADMAP.md`
- [x] `public/sitemap.xml` & `public/.well-known/security.txt` (RFC 9116)
- [ ] Ajout d'un fichier `LICENSE` à la racine
- [ ] Balises Open Graph / Twitter Cards sur les 6 pages pour le partage social
- [ ] Workflow `.github/workflows/ci.yml` sur Pull Requests :
  - Validation du build `pnpm build`
  - Audit accessibilité & bonnes pratiques (Lighthouse CI)
  - Vérification des liens morts (`lychee`)
- [ ] Automatisation des mises à jour via `.github/dependabot.yml`

---

## 🚀 v1.8 — Expérience Chercheur & Données Découplées
- [ ] Extraction des données de `modules.html` et `research.html` vers des sources JSON structurées (faciliter les PR via `research_proposal.md`)
- [ ] **Deep linking** des filtres et recherches dans l'URL (`?domain=MantraAI`, `#HR-*`)
- [ ] Export de citations multi-formats dans `research.html` (**Texte brut / BibTeX / Markdown**)
- [ ] Palette de navigation rapide au clavier (`Ctrl+K` / `Cmd+K`) sur l'ensemble du portail
- [ ] Feuille de style d'impression (`@media print`) pour exporter proprement les notes `HR-*` en PDF
- [ ] Flux RSS / Atom (`public/feed.xml`) pour suivre la publication des nouveaux drafts `HR-*`

---

## 🧠 v2.0 — Portail MantraLab Étendu
- [ ] Pages ou fiches détaillées dédiées par projet (`MantraCore`, `MantraOps`, `MantraAI`, `CyberOps Toolkit`) et par note `HR-*`
- [ ] Intégration de schémas d'architecture SVG pré-rendus (`assets/`) compatibles avec la CSP stricte
- [ ] Ouverture de **GitHub Discussions** pour les propositions exploratoires et retours communautaires
