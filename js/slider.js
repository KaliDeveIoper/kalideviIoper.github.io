const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const textos = document.querySelectorAll(".slider .textoCapsulas")
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
   pausarIntervaloHeader()
   let imagenesCon =['img/con1.jpg','img/con2.jpg','img/con3.jpg']
   let textosCon=[
      "Ki'ibok ayuda a reducir estos efectos, mejorando el bienestar.",
      "Ki'ibok alivia la tensión y reduce el dolor, ofreciendo calma.",
      "Ki'ibok neutraliza los malos olores con una fragancia fresca."]
   let indice=0
   images[index].style.opacity=0;
   setTimeout(()=>{
      for (let i=0; i<images.length; i++){
         images[i].src=imagenesCon[i]
         textos[i].textContent=textosCon[i]
      }
      
      
   },1500)
   setTimeout(()=>{
      images[index].style.opacity=1
   },1500)
   
   reiniarIntervaloHeader()
}

function cambiarImagenesSin(){
   pausarIntervaloHeader()
   let imagenesSin =['img/sin1.jpg','img/sin2.jpg','img/sin3.jpg']   
   let textosSin=[
      "Efectos secundarios de las medicinas: Las medicinas pueden causar efectos como náuseas y mareos.",
      "El ruido y la sobrecarga sensorial causan dolores de cabeza.",
      "La contaminación deja un olor desagradable en el aire.<"]
   let indice=0

   images[index].style.opacity=0;
   setTimeout(()=>{
      for (let i=0; i<images.length; i++){
         images[i].src=imagenesSin[i]
         textos[i].textContent=textosSin[i]
      }
      
      
   },1500)
   setTimeout(()=>{
      images[index].style.opacity=1
   },1500)
   
   reiniarIntervaloHeader()
}

function pausarIntervaloHeader(){
   clearInterval(autoSlide)
   autoSlide=null
}
function reiniarIntervaloHeader(){
   if(!autoSlide){
      autoSlide=setInterval(avanzarSlider,intervalo)
   }
}