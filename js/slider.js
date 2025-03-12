const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
let distanciaDesplazamiento = images[0].offsetHeight;
console.log(distanciaDesplazamiento)


let index = 0;

document.getElementById("next").addEventListener("click", () => {
  if (index < images.length - 1) index++;
  else index = 0;
  slider.style.transform = `translateY(-${index * distanciaDesplazamiento}px)`;
});

document.getElementById("prev").addEventListener("click", () => {
  if (index > 0) index--;
  else index = images.length - 1;
  slider.style.transform = `translateY(-${index * distanciaDesplazamiento}px)`;
});

window.addEventListener("resize",calcularAlturaSlider);

function calcularAlturaSlider(){
   distanciaDesplazamiento = images[0].offsetHeight;
   console.log(distanciaDesplazamiento)
   
}


function cambiarImagenesCon(){
   let imagenesCon =['img/placeHolderCuadrado.png','img/placeHolderCuadrado.png','img/placeHolderCuadrado.png']
   let indice=0

   for (let i=0; i<images.length; i++){
      images[i].src=imagenesCon[i]
   }
   slider.style.border = "1px solid var(--verdePastel)"
   console.log("Se cambiaron las imagenes correctamente!!!")
}

function cambiarImagenesSin(){
   let imagenesSin =['img/placeHolderCuadrado.png','img/placeHolderCuadrado.png','img/placeHolderCuadrado.png']   
   let indice=0

   for (let i=0; i<images.length; i++){
      images[i].src=imagenesSin[i]
   }
   console.log("Se cambiaron las imagenes correctamente!!!")
}
