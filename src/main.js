//import { example } from './data.js';

import data from './data/potter/potter.js';

//import data from './data.js';

console.log(data);

//primero voy a llamar todos los Id//

let start=document.getElementById("start");
let pag1= document.getElementById("pag1");
let pag2=document.getElementById("pag2");
let pag3=document.getElementById("pag3");
let pag4=document.getElementById("pag4");
let pag5=document.getElementById("pag5");

const harryBox = document.getElementById('root'); //variable que contiene a la ventana de persoanjes  que me voy a traer//

const harryType= document.getElementById('roles'); // variabke que contiene el primer filtro por roles en la pelicula//

// Eventos para mostrar página 1 a página 2
document.getElementById("start").addEventListener("click",(evento) => {
    evento.preventDefault();
    document.getElementById("pag1").style.display="none";
    document.getElementById("pag2").style.display="block";

})

//Eventos para mostrar página "Personajes" (página3)
document.getElementById("Personajes").addEventListener("click",(evento) => {
    evento.preventDefault();
    document.getElementById("pag2").style.display="none";
    document.getElementById("pag3").style.display="block";
    verData (data);

})

//Eventos para mostrar página "Casas" (página4)
document.getElementById("Casas").addEventListener("click",(evento) => {
    evento.preventDefault();
    document.getElementById("pag2").style.display="none";
    document.getElementById("pag4").style.display="block";

})

//Eventos para mostrar página "Varitas" (página5)
document.getElementById("Varitas").addEventListener("click",(evento) => {
    evento.preventDefault();
    document.getElementById("pag2").style.display="none";
    document.getElementById("pag5").style.display="block";

})

// Función para mostrar la data//
const verData = (data) => {
    let resultado= ''; // lo hago vacio para que entre la data
    for (let i=0; i<data.length; i++){
        console.log (data[i]);
        resultado=harryBox.innerHTML += `
        <div class="card">
        <div class="front">
         
          <h1>${data[i].name}</h2>
          <div class ="imagenes"><img src=${data[i].image}></div>
          </div>
          <div class="back">
          
          <p>  Especie: ${data[i].species}</p>
          <p>  Género: ${data[i].gender}</p>
          <p>  Casa: ${data[i].house}</p>
          <p>  Rol: ${data[i].rol}</p>
          <p>  Patronus: ${data[i].patronus}</p>
         
          
          </div>
          </div>
          `

    };
        return resultado;
        
};
    
   // verData (data);

