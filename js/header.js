let lastScrollY = window.scrollY;
const header = document.querySelector("header");
let isScrolling;

window.addEventListener("scroll", function () {
    if (isScrolling) return; // Evita múltiples ejecuciones en un solo frame
    
    isScrolling = true;
    requestAnimationFrame(() => {
        let currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY + 5) { 
            // Si el usuario baja más de 5px, ocultamos el header
            header.classList.add("hidden");
        } else if (currentScrollY < lastScrollY - 5 || currentScrollY === 0) {
            // Si el usuario sube más de 5px o está en la parte superior, mostramos el header
            header.classList.remove("hidden");
        }

        lastScrollY = currentScrollY; // Guardamos la posición actual del scroll
        isScrolling = false; // Permite nuevas detecciones de scroll
    });
});
