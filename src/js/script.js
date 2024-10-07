const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// Événement pour le bouton <Open>
open.addEventListener("click", () => {
  container.classList.add("show-navbar"); // Ajoute la classe "show-nav" à l'élément container pour afficher le menu
});

// Événement pour le bouton <Close>
close.addEventListener("click", () => {
  container.classList.remove("show-navbar"); // Supprime la classe "show-nav" de l'élément container pour masquer le menu
});

/* Script.js */
