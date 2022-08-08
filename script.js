"use strict";

// Event listener that shows navigation links when user clicks on hamburger menu
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks1 = document.querySelector(".nav-links-1");
const navbarLinks2 = document.querySelector(".nav-links-2");

toggleButton.addEventListener("click", () => {
    navbarLinks1.classList.toggle("active");
    navbarLinks2.classList.toggle("active");
})


// Event listener for the expanding cards. When the user clicks on one of the cards immediately the active  
// class gets assigned to that card. 
let panels = document.querySelectorAll(".panel");

for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", () => {
        removeActiveClasses();
        panels[i].classList.add("active");
    })
}

// Function that removes all active classes from panels
function removeActiveClasses(){
    for (let i = 0; i < panels.length; i++){
            panels[i].classList.remove("active");
    }
}