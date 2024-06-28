"use strict";

let prevScrollpos = window.scrollY;
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").classList.remove("hideNav");
    document.querySelector("footer").classList.remove("hideFooter");
  } else {
    document.querySelector("nav").classList.add("hideNav");
    document.querySelector("footer").classList.add("hideFooter");
  }
  prevScrollpos = currentScrollPos;
}