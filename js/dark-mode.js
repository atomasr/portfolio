"use strict";

let buttonDarkMode = document.getElementById("darkmode-toggle");
let body = document.querySelector("body");

buttonDarkMode.addEventListener('click', function () {
    body.classList.toggle("light-mode");
});
