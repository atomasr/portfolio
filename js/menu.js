"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-links");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});


for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(event) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
}