"use strict";

// Event listener that shows navigation links when user clicks on hamburger menu
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks1 = document.querySelector(".nav-links-1");
const navbarLinks2 = document.querySelector(".nav-links-2");

toggleButton.addEventListener("click", () => {
    navbarLinks1.classList.toggle("active");
    navbarLinks2.classList.toggle("active");
})