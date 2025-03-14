let lastScrollY = window.scrollY;
const header = document.querySelector("header");
const headerIntervalo= 2000;
let autoHide;
let isScrolling;

window.addEventListener("scroll", function () {
    if (isScrolling) return; // Evita múltiples ejecuciones en un solo frame
    
    isScrolling = true;
    requestAnimationFrame(() => {
        let currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY + 5) { 
            // Si el usuario baja más de 5px, ocultamos el header
            ocultarHeader()
            this.clearInterval(autoHide)
            
        } else if (currentScrollY < lastScrollY - 5 && currentScrollY != 0){
            mostrarHeader()
            reiniciarAutoOcultado()
            
        } else if (currentScrollY === 0) {
            // Si el usuario sube más de 5px o está en la parte superior, mostramos el header
            mostrarHeader()   
            this.clearInterval(autoHide)
            autoHide=null
            
        }

        lastScrollY = currentScrollY; // Guardamos la posición actual del scroll
        isScrolling = false; // Permite nuevas detecciones de scroll
    });
});

function ocultarHeader(){
    header.classList.add("hidden");
    console.log("aaa")
}
function mostrarHeader(){
    header.classList.remove("hidden");
}
function reiniciarAutoOcultado() {
    clearInterval(autoHide); // Detiene cualquier headerIntervalo existente
    autoHide = setTimeout(ocultarHeader, headerIntervalo); // Programa la ocultación
}