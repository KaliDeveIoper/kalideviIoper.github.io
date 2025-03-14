const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const intervalo= 3000
let distanciaDesplazamiento = images[0].offsetHeight;
let index = 0;

let autoSlide= setInterval(avanzarSlider,intervalo)
window.addEventListener("resize",calcularAlturaSlider);
document.getElementById("next").addEventListener("click", () => avanzarSlider());
document.getElementById("prev").addEventListener("click", () => retrocederSlider());

document.querySelector(".slider").addEventListener("mouseenter", () => {
   clearInterval(autoSlide);
 });
 document.querySelector(".slider").addEventListener("mouseleave", () => {
   autoSlide = setInterval(avanzarSlider, intervalo);
 });

function avanzarSlider() {
   if (index < images.length - 1) index++;
   else index = 0;
   slider.style.transform = `translateY(-${index * distanciaDesplazamiento}px)`;
 }
 
 function retrocederSlider() {
   if (index > 0) index--;
   else index = images.length - 1;
   slider.style.transform = `translateY(-${index * distanciaDesplazamiento}px)`;
 }



function calcularAlturaSlider(){
   distanciaDesplazamiento = images[0].offsetHeight;
   
}

function cambiarImagenesCon(){
   let imagenesCon =['img/placeHolderCuadrado.png','img/placeHolderCuadrado.png','img/placeHolderCuadrado.png']
   let indice=0

   for (let i=0; i<images.length; i++){
      images[i].src=imagenesCon[i]
   }
   
}

function cambiarImagenesSin(){
   let imagenesSin =['img/sin1.jpg','img/sin2.jpg','img/sin3.jpg']   
   let indice=0

   for (let i=0; i<images.length; i++){
      images[i].src=imagenesSin[i]
   }
   
}
