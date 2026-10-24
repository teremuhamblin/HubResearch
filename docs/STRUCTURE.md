📁 STRUCTURE.md — HubResearch

STRUCTURE — HubResearch

Ce document décrit l’architecture complète du projet HubResearch, son organisation interne, la fonction de chaque fichier et la logique globale du portail.

---

1. Vue d’ensemble

HubResearch est un portail statique multi‑pages construit avec Vite.  
Il sert de hub central pour les modules, recherches, outils et contributeurs du MantraLab v3.0.

Le projet repose sur :
- des pages HTML indépendantes (entry points Vite)
- un thème CSS minimaliste partagé
- un script JS léger pour les interactions
- un déploiement automatique via GitHub Pages

---

2. Arborescence du projet

```text
HubResearch/
│
├── index.html          # Page d’accueil : présentation rapide + accès modules
├── lab.html            # Vision, mission, méthodologie du MantraLab
├── modules.html        # Liste des projets actifs (MantraCore, MantraOps, MantraAI)
├── research.html       # Notes techniques, drafts, prototypes
├── team.html           # Contributeurs réels et fictifs
├── contact.html        # Point de contact officiel
│
├── style.css           # Thème minimaliste moderne (typographie, layout, couleurs)
├── main.js             # Interactions légères (navigation, animations simples)
│
├── public/
│   └── hubresearch-logo.svg   # Logo ou marque du projet
│
├── vite.config.js      # Configuration Vite (multi-entry, build, optimisation)
│
└── .github/
    └── workflows/
        └── deploy.yml  # Déploiement automatique sur GitHub Pages

>> AJOUT DES FICHIERS DE GOUVERNANCES, CONTRIBUTIONS ETC... DANS :
.github/

---

>> AJOUT DES DOSSIERS :
- ~/assets/
- ~/docs/
```

---

3. Description des fichiers et dossiers

🔹 Pages HTML
Chaque page est un entry point Vite et représente une section du portail :

- index.html  
  Introduction, résumé du lab, liens vers les modules.

- lab.html  
  Présentation du MantraLab : objectifs, approche, méthodologie.

- modules.html  
  Liste des projets actifs, outils, frameworks, prototypes.

- research.html  
  Documents de travail, drafts, notes techniques.

- team.html  
  Contributeurs réels + fictifs (via All‑Contributors ou manuel).

- contact.html  
  Email ou formulaire de contact.

---

🔹 Style global : style.css
- Palette minimaliste moderne  
- Layout éditorial uniforme  
- Typographie sobre  
- Responsive léger  
- Composants simples (header, footer, sections)

---

🔹 Script global : main.js
- Petites interactions (menu, transitions, scroll)  
- Utilitaires légers  
- Aucun framework lourd

---

🔹 Assets : public/
Contient :
- logos  
- icônes  
- images statiques  

---

🔹 Déploiement : .github/workflows/deploy.yml
Pipeline CI/CD :
- build Vite  
- publication automatique sur GitHub Pages  
- déclenché à chaque push sur main

3.1 📁 Fichiers du dossier .github/

🔧 1. CONTRIBUTING.md
➡️ Règles pour contribuer au projet  
➡️ Comment faire une PR, un commit, un fork, etc.

---

🛡️ 2. SECURITY.md
➡️ Politique de sécurité  
➡️ Comment signaler une vulnérabilité  
➡️ Bonnes pratiques de sécurité

---

💬 3. SUPPORT.md
➡️ Comment demander de l’aide  
➡️ Types de demandes acceptées  
➡️ Processus de support

---

👥 4. CODEOWNERS
➡️ Fichier texte (sans extension)  
➡️ Définit les propriétaires du code  
➡️ Ceux qui doivent valider les PR sur certaines sections

---

📜 5. CODEOFCONDUCT.md
➡️ Code de conduite du projet  
➡️ Règles de comportement pour les contributeurs

---

🧩 6. ISSUE_TEMPLATE/
➡️ Dossier contenant les templates d’issues  
Exemples :  
- bug_report.md  
- feature_request.md  
- config.yml

---

🔄 7. PULLREQUESTTEMPLATE.md
➡️ Template pour les PR  
➡️ Structure standard pour les contributions

---

⚙️ 8. workflows/
➡️ Dossier contenant les workflows GitHub Actions  
Exemples :  
- deploy.yml  
- ci.yml  
- lint.yml

---

🧪 9. CODESPACE.md (optionnel mais recommandé)
➡️ Documentation pour GitHub Codespaces  
➡️ Configuration de l’environnement de dev

---

🎯 Résumé rapide (comme un ingénieur GitHub)

| Fichier | Nom exact | Rôle |
|--------|-----------|------|
| CONTRIBUTING.md | ✔️ | Règles de contribution |
| SECURITY.md | ✔️ | Politique de sécurité |
| SUPPORT.md | ✔️ | Support utilisateur |
| CODEOWNERS | ✔️ | Propriétaires du code |
| CODEOFCONDUCT.md | ✔️ | Code de conduite |
| ISSUE_TEMPLATE/ | ✔️ | Templates d’issues |
| PULLREQUESTTEMPLATE.md | ✔️ | Template de PR |
| workflows/ | ✔️ | CI/CD GitHub Actions |
| CODESPACE.md | ✔️ | Config Codespaces |

---

4. Développement local

```bash
pnpm install
pnpm dev
```

---

5. Build

```bash
pnpm build
```

---

6. Objectif du projet

HubResearch sert de :
- portail central pour les projets MantraLab v3.0  
- vitrine publique pour les recherches et outils  
- documentation technique légère  
- espace de publication de drafts  
- hub de contributeurs (réels + fictifs)

---

7. Philosophie du projet

- Minimaliste : pas de framework lourd  
- Modulaire : pages indépendantes  
- Éditorial : mise en page uniforme  
- Automatisé : déploiement GitHub Pages  
- Scalable : facile à étendre avec de nouveaux modules  

---
