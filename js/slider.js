let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Asegura que el índice sea válido (circular)
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`; // Mueve el slider
}

let autoplayInterval = null;

function startAutoplay(interval) {
   stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
   autoplayInterval = setInterval(() => {
      moveSlide(1); // Navega a la siguiente imagen cada intervalo de tiempo.
   }, interval);
}

function stopAutoplay() {
   clearInterval(autoplayInterval);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(5000);

// Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
/*
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
});
*/