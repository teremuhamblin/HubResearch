// main.js — HubResearch v1.6
// JS minimaliste pour interactions légères et instrumentation basique.

const page = document.body.dataset.page || "index";

function logPage() {
  // instrumentation simple côté client
  console.debug(`[HubResearch] Page active: ${page}`);
}

function enhanceNav() {
  const links = document.querySelectorAll(".hr-nav a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-1px)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0)";
    });
  });
}

function init() {
  logPage();
  enhanceNav();
}

document.addEventListener("DOMContentLoaded", init);
