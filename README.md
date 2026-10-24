# HubResearch v1.6
- — Diagrammes Mermaid

Portail d’ingénierie, d’IA et de cyber‑ops du MantraLab v3.0, présenté principalement via des diagrammes Mermaid.

---

🧩 Vue d’ensemble du projet

```mermaid
flowchart TD
    A[HubResearch v1.6] --> B[Pages HTML]
    A --> C[Style & Scripts]
    A --> D[Assets & Logo]
    A --> E[CI/CD GitHub Pages]
    A --> F[Docs & Policies]

    B --> B1[index.html]
    B --> B2[lab.html]
    B --> B3[modules.html]
    B --> B4[research.html]
    B --> B5[team.html]
    B --> B6[contact.html]

    C --> C1[style.css]
    C --> C2[main.js]

    D --> D1[public/hubresearch-logo.svg]

    E --> E1[.github/workflows/deploy.yml]

    F --> F1[README.md]
    F --> F2[CONTRIBUTORS.md]
    F --> F3[CONTRIBUTING.md]
    F --> F4[SECURITY.md]
    F --> F5[SUPPORT.md]
    F --> F6[CODEOWNERS]
    F --> F7[CODEOFCONDUCT.md]
    F --> F8[CODESPACE.md]
```

---

🧭 Architecture des pages

```mermaid
graph LR
    index[index.html<br/>Accueil] --> lab[lab.html<br/>Lab & Méthodo]
    index --> modules[modules.html<br/>Projets & Modules]
    index --> research[research.html<br/>Drafts & Notes]
    index --> team[team.html<br/>Contributeurs]
    index --> contact[contact.html<br/>Contact]

    lab --> modules
    modules --> research
    research --> team
    team --> contact
```

---

🛠️ Pipeline CI/CD GitHub Pages

```mermaid
sequenceDiagram
    participant Dev as Dev (pnpm)
    participant Git as GitHub Repo
    participant CI as GitHub Actions
    participant Pages as GitHub Pages

    Dev->>Git: git push main
    Git->>CI: Trigger workflow deploy.yml
    CI->>CI: pnpm install
    CI->>CI: pnpm build (Vite)
    CI->>Pages: Deploy static files
    Pages->>Dev: Site HubResearch v1.6 en ligne
```

---

🧠 Modules logiques (Ingénierie, IA, Cyber‑Ops)

```mermaid
mindmap
  root((HubResearch v1.6))
    Ingénierie
      MantraCore
      MantraOps
      CI/CD minimaliste
      Infra & Plateforme
    IA & Diagnostics
      Interpretability
      Model Drift
      Safety & Constraints
      Metrics & Evaluation
    CyberOps
      OSINT Tools
      Recon & Analysis
      CryptoOps
      Network Diagnostics
    Recherche
      Drafts techniques
      Notes internes
      Prototypes expérimentaux
```

---

👥 Contributeurs (68 avatars GitHub)

```mermaid
flowchart TD
    subgraph Ingénierie
        A1[Aiden Flux]
        A2[Nova Kern]
        A3[Lira Byte]
        A4[Orion Stack]
        A5[Vega Pulse]
        A6[Milo Circuit]
        A7[Selene Grid]
        A8[Kael Vector]
        A9[Aria Compute]
        A10[Juno Frame]
    end

    subgraph IA & Safety
        B1[Astra Neural]
        B2[Helix Model]
        B3[Mira Tensor]
        B4[Vorn Gradient]
        B5[Elen Synapse]
        B6[Kairo Predict]
        B7[Sora Logic]
        B8[Nox Reason]
        B9[Lyra Pattern]
        B10[Jax Entropy]
    end

    subgraph CyberOps
        C1[ShadeVector]
        C2[GhostCipher]
        C3[ZeroTrace]
        C4[PhantomRoot]
        C5[HexaGhost]
        C6[NovaSec]
        C7[DarkPacket]
        C8[ByteHunter]
        C9[FluxRecon]
        C10[CipherWave]
    end

    subgraph Hackers Éthiques
        D1[GhostByte]
        D2[NeonRoot]
        D3[FluxBreaker]
        D4[KiraHack]
        D5[ZeroPulse]
        D6[NovaCrack]
        D7[HexaForge]
        D8[ByteSpecter]
        D9[PhantomDebug]
        D10[LiraExploit]
    end
```

> Les avatars sont générés automatiquement via GitHub :  
> https://avatars.githubusercontent.com/u/10000001 → https://avatars.githubusercontent.com/u/10000068

---

⚙️ Commandes principales

```mermaid
flowchart LR
    A[pnpm install] --> B[pnpm dev]
    B --> C[pnpm build]
    C --> D[Serveur HTTP local<br/>ou GitHub Pages]
```

---

🔐 Sécurité & Conduite

```mermaid
flowchart TD
    Sec[SECURITY.md] --> R1[Signaler une vulnérabilité]
    Sec --> R2[Bonnes pratiques]
    Sec --> R3[Engagement du projet]

    Conduct[CODEOFCONDUCT.md] --> C1[Respect & Professionnalisme]
    Conduct --> C2[Comportements interdits]
    Conduct --> C3[Signalement]
    Conduct --> C4[Application]
```

---

🤝 Contribution & Support

```mermaid
flowchart TD
    Contrib[CONTRIBUTING.md] --> F1[Fork]
    Contrib --> F2[Branch feature/]
    Contrib --> F3[PR propre]
    Contrib --> F4[Commits clairs]

    Support[SUPPORT.md] --> S1[Issues avec tag support]
    Support --> S2[Bugs]
    Support --> S3[Questions techniques]
    Support --> S4[Suggestions]
```

---

🧭 Codespaces & Ownership

```mermaid
flowchart TD
    Codespace[CODESPACE.md] --> CS1[Node 18+]
    Codespace --> CS2[pnpm]
    Codespace --> CS3[Extensions recommandées]

    Owners[CODEOWNERS] --> O1[@teremuhamblin]
    Owners --> O2[/src/]
    Owners --> O3[/public/]
    Owners --> O4[.github/workflows/]
```

---

🛰️ MantraLab v3.0 — HubResearch v1.6

```mermaid
flowchart TD
    ML[MantraLab v3.0] --> HR[HubResearch v1.6]
    HR --> ENG[Engineering]
    HR --> AI[AI & Diagnostics]
    HR --> CYB[CyberOps]
    HR --> RES[Research]
```

---

> HubResearch v1.6  
> Engineering the Future. Exploring Intelligence. Building Cyber‑Ops.

`md
`
