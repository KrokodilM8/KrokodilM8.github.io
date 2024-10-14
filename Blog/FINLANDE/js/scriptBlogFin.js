"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();

    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

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
