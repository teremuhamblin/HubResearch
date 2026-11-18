### 📄 `README.md` *(mis à jour pour la **v1.7 Stable**)*

# 🧠 HubResearch — v1.7 Stable

Portail technique dédié aux **explorations modernes en IA, diagnostics de modèles, cyber‑analyse et systèmes avancés** (*MantraLab v3.0*).

![Version](https://img.shields.io/badge/Version-v1.7%20Stable-16A34A?style=for-the-badge&logo=semanticrelease&logoColor=white&labelColor=0F172A)
![Build](https://img.shields.io/badge/Vite-MPA%20Static-4FD1C5?style=for-the-badge&logo=vite&logoColor=0F172A&labelColor=0F172A)
![Deploy](https://img.shields.io/badge/GitHub%20Pages-Auto%20Deploy-16A34A?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0F172A)

## ✨ Nouveautés v1.7 Stable

- **Thème Dark / Light** persistant avec respect de `prefers-reduced-motion` et accessibilité renforcée (`skip-link`, `aria-current`, navigation clavier).

- **Catalogue dynamique (`modules.html` & `research.html`) :** filtres par domaine, recherche temps réel insensible aux accents, résumés dépliables et copie rapide des citations.

- **Sécurité & Build :** politique **CSP** côté client, chemins relatifs compatibles GitHub Pages (`base: "./"`), vérification automatique de `dist/` dans `deploy.yml` et gouvernance `.github/`.

## 📄 Pages

- `index.html` — présentation rapide et accès aux axes MantraLab v3.0

- `lab.html` — vision, mission, méthodologie et cycle de recherche

- `modules.html` — projets actifs filtrables (`MantraCore`, `MantraOps`, `MantraAI`, `CyberOps Toolkit`)

- `research.html` — notes techniques, drafts (`HR-*`), prototypes et citations

- `team.html` — contributeurs réels et fictifs (voir `CONTRIBUTORS.md`)

- `contact.html` — support (`SUPPORT.md`), contributions et sécurité (`.github/SECURITY.md`)

## 🛠️ Développement & Build

```bash
pnpm install
pnpm dev      # Développement local (http://localhost:5173)
pnpm build    # Build de production dans dist/
pnpm preview  # Prévisualisation du build (http://localhost:4173)
```
