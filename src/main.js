//import { example } from './data.js';

import data from './data/potter/potter.js';

//import data from './data.js';

console.log(data);

//primero voy a llamar todos los Id//

const harryBox = document.getElementById('root'); //variable que contiene a la ventana de persoanjes  que me voy a traer//

const harryType= document.getElementById('roles'); // variabke que contiene el primer filtro por roles en la pelicula//

//vamos a mostar la pagina 1 y pag 2 por medio de un display (none y block)//

document.getElementById("start").addEventListener("click",(evento) => {
    evento.preventDefault();
    document.getElementById("pag1").style.display="none";
    document.getElementById("pag2").style.display="block";

})

// tercero, veamos la data//
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
          
          <p>   Specie: ${data[i].species}</p>
          <p>  Gender: ${data[i].gender}</p>
          <p>   House: ${data[i].house}</p>
          <p>   Rol: ${data[i].rol}</p>
         
          
          </div>
          </div>
          `

    };
        return resultado;
        
};
    
    verData (data);

