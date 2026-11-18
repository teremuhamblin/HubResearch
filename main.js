// main.js — HubResearch v1.7 Stable (MantraLab v3.0)
// Interactions légères : thème, menu mobile, filtres/recherche et copie presse-papiers.

const THEME_STORAGE_KEY = "hubresearch_theme";

/**
 * Applique immédiatement le thème sauvegardé (ou préférence système) pour limiter le flash visuel.
 */
function applyInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
      return;
    }
  } catch {
    // Stockage local indisponible (mode privé strict)
  }
  const prefersLight =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  document.documentElement.setAttribute("data-theme", prefersLight ? "light" : "dark");
}

applyInitialTheme();

function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const syncButton = () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const nextIsLight = current === "dark";
    toggleBtn.textContent = nextIsLight ? "☀" : "☾";
    toggleBtn.setAttribute(
      "aria-label",
      nextIsLight ? "Passer au thème clair" : "Passer au thème sombre"
    );
  };

  syncButton();

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Ignorer si localStorage est bloqué
    }
    syncButton();
  });
}

function setupMobileNav() {
  const toggleBtn = document.querySelector(".hr-nav-toggle");
  const nav = document.getElementById("primary-nav");
  const header = document.querySelector(".hr-header");
  if (!toggleBtn || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggleBtn.setAttribute("aria-expanded", String(open));
    toggleBtn.setAttribute(
      "aria-label",
      open ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"
    );
  };

  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    setOpen(!isOpen);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggleBtn.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      nav.classList.contains("is-open") &&
      header &&
      !header.contains(event.target)
    ) {
      setOpen(false);
    }
  });
}

/**
 * Normalise un texte pour une recherche insensible à la casse et aux accents.
 */
function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function setupFilterableCollection({
  itemSelector,
  searchInputId,
  countId,
  emptyId,
  singularLabel,
  pluralLabel,
}) {
  const items = Array.from(document.querySelectorAll(itemSelector));
  if (items.length === 0) return;

  const filterButtons = Array.from(document.querySelectorAll(".hr-filter-btn[data-filter]"));
  const searchInput = document.getElementById(searchInputId);
  const countEl = document.getElementById(countId);
  const emptyEl = document.getElementById(emptyId);

  let activeFilter = "all";

  const applyFilters = () => {
    const query = searchInput ? normalizeText(searchInput.value.trim()) : "";
    let visibleCount = 0;

    items.forEach((item) => {
      const category = item.dataset.category || "";
      const matchesCategory = activeFilter === "all" || category === activeFilter;
      const matchesQuery = !query || normalizeText(item.textContent || "").includes(query);
      const visible = matchesCategory && matchesQuery;

      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (countEl) {
      const label = visibleCount <= 1 ? singularLabel : pluralLabel;
      countEl.textContent = `${visibleCount} ${label}`;
    }
    if (emptyEl) {
      emptyEl.hidden = visibleCount > 0;
    }
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter || "all";
      filterButtons.forEach((b) => {
        const selected = b === btn;
        b.classList.toggle("active", selected);
        b.setAttribute("aria-pressed", String(selected));
      });
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  applyFilters();
}

async function copyTextSafe(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function setupCopyButtons() {
  const buttons = document.querySelectorAll(".hr-copy-btn[data-copy]");
  buttons.forEach((btn) => {
    const originalLabel = btn.textContent || "Copier";
    let resetTimer = null;

    btn.addEventListener("click", async () => {
      const payload = btn.dataset.copy;
      if (!payload) return;

      try {
        await copyTextSafe(payload);
        btn.textContent = "Copié ✓";
      } catch {
        btn.textContent = "Erreur copie";
      }

      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        btn.textContent = originalLabel;
      }, 1800);
    });
  });
}

function init() {
  const page = document.body.dataset.page || "index";
  console.debug(`[HubResearch v1.7] Page active : ${page}`);

  setupThemeToggle();
  setupMobileNav();
  setupCopyButtons();

  if (page === "modules") {
    setupFilterableCollection({
      itemSelector: "#modules-grid .module-card",
      searchInputId: "module-search",
      countId: "modules-count",
      emptyId: "modules-empty",
      singularLabel: "module affiché",
      pluralLabel: "modules affichés",
    });
  } else if (page === "research") {
    setupFilterableCollection({
      itemSelector: "#research-list .hr-research-item",
      searchInputId: "research-search",
      countId: "research-count",
      emptyId: "research-empty",
      singularLabel: "note affichée",
      pluralLabel: "notes affichées",
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
