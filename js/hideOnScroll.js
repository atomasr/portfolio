"use strict";

let prevScrollPos = window.scrollY;
let hamburgerMenu = document.querySelector(".hamburger");

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  console.log(currentScrollPos);
  if ((Math.abs(prevScrollPos) > currentScrollPos)||(currentScrollPos < 50)||(hamburgerMenu.classList.contains("active"))) {
    document.querySelector("nav").classList.remove("hideNav");
    document.querySelector("footer").classList.remove("hideFooter");
  } else {
    document.querySelector("nav").classList.add("hideNav");
    document.querySelector("footer").classList.add("hideFooter");
  }
  prevScrollPos = currentScrollPos;
}

window.addEventListener('resize', function listen(event) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("no-scroll");
  }, true);