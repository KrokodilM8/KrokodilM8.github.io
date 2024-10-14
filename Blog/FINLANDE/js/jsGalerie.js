// variables pour les liens de navigation et les pages
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// ajouter un événement à tous les liens de navigation
navigationLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-nav-link");

    // Activer la classe active pour les pages
    pages.forEach((page) => {
      if (page.getAttribute("data-page") === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    // Activer la classe active pour les liens de navigation
    navigationLinks.forEach((link) => {
      if (link === this) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    window.scrollTo(0, 0); // Remettre la page en haut
  });
});

// Ajout du comportement pour le menu déroulant
const navAccueilButton = document.getElementById("nav-accueil-button");
const dropdownMenu = document.getElementById("accueil-dropdown");

navAccueilButton.addEventListener("click", function () {
  // Toggle (afficher/masquer) le menu déroulant
  if (
    dropdownMenu.style.display === "none" ||
    dropdownMenu.style.display === ""
  ) {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});

// Fermer le menu si on clique en dehors
window.onclick = function (event) {
  if (!event.target.matches("#nav-accueil-button")) {
    dropdownMenu.style.display = "none";
  }
};

const images = document.querySelectorAll(".project-img img");
const videos = document.querySelectorAll(".project-img video");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");

// Affichage de l'image dans la lightbox
images.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block"; // Affiche la lightbox
    lightboxImg.src = img.src; // Charge l'image cliquée
    lightboxImg.style.display = "block"; // Affiche l'image
    lightboxVideo.style.display = "none"; // Cache la vidéo si elle était visible
  });
});

// Affichage de la vidéo dans la lightbox
videos.forEach((video) => {
  video.addEventListener("click", () => {
    lightbox.style.display = "block"; // Affiche la lightbox
    lightboxVideo.src = video.src; // Charge la vidéo cliquée
    lightboxVideo.style.display = "block"; // Affiche la vidéo
    lightboxImg.style.display = "none"; // Cache l'image si elle était visible
  });
});

// Fermer la lightbox
function closeLightbox() {
  lightbox.style.display = "none"; // Cache la lightbox
  lightboxVideo.pause(); // Met la vidéo en pause lorsque la lightbox est fermée
}

// Assure-toi d'avoir un bouton pour fermer la lightbox avec la classe "close"
document.querySelector(".close").addEventListener("click", closeLightbox);
