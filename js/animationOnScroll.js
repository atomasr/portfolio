"use strict";

/* Agrega animación on scroll */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight; // Devuelve la altura interior de la ventana en píxeles
      var elementTop = reveals[i].getBoundingClientRect().top; // getBoundingClientRect() devuelve un DOMRect que proporciona información tamaño y su posición relativa a la ventana gráfica (en este caso devuelve el top)
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) { // Cuando esta en la zona agrega animaciones
        reveals[i].classList.add("active");
      } /* else {
        reveals[i].classList.remove("active"); // Cuando no esta en la zona elimina las animaciones
      } */
    }
  }
  
  window.addEventListener("scroll", reveal);