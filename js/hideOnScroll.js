"use strict";

let prevScrollPos = window.scrollY;
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (Math.abs(prevScrollPos) > currentScrollPos) {
    document.querySelector("nav").classList.remove("hideNav");
    document.querySelector("footer").classList.remove("hideFooter");
  } else {
    document.querySelector("nav").classList.add("hideNav");
    document.querySelector("footer").classList.add("hideFooter");
  }
  prevScrollPos = currentScrollPos;
}