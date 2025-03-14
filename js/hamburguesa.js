var menu = document.querySelector('#menu-toggle');
var drawer = document.querySelector('nav');
var oscurecer = document.querySelector('.oscurecer');
var enlaces = document.querySelectorAll('nav a'); // Seleccionar todos los enlaces dentro del nav

menu.addEventListener('click', function (e) {
    /* Abrir menú */
    
    drawer.classList.toggle('active');

    /* Oscurecer contenido al abrir el menú */
    oscurecer.style.display = 'block';

    /* Evitar que se haga scroll */
    document.documentElement.style.overflow = "hidden";
    e.stopPropagation();
});

oscurecer.addEventListener('click', function () {
    cerrarMenu();
});

/* Agregar evento a cada enlace del menú */
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        cerrarMenu();
    });
});

/* Función para cerrar el menú */
function cerrarMenu() {
    drawer.classList.remove('active');
    oscurecer.style.display = 'none';
    document.documentElement.style.overflow = "auto";
}
