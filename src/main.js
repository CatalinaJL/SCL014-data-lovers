/*import data from './data/potter/potter.js';
*/
/*import { caractherName } from './data.js';
*/
import data from './data/potter/potter.js';

console.log (data);
console.log (data[0].name);

console.log (data);



let personajes = document.getElementById("gridDePersonajes");
let botonPersonajes= document.getElementById ("Personajes");

const dataPersonajes = (data) => {
    console.log (data);
    
    for (let i=0 ; i<data.length; i++) {
        
     
    personajes.innerHTML = `
      <div class="tarjeta">
        <div class="frente">
           
           <h1>${data[i].name}</h1>
           <div class ="imagenPersonaje"><img src=${data.image}></div>
        </div>
        <div class="atras">
           <div class="imagenJuego"><img src=img/logoSinFondo.png></div>
            <p>   Specie: ${data.species}</p>
            <p>   Gender: ${data.gender}</p>
            <p>   House: ${data.house}</p>
            <p>   Rol: ${data.rol}</p>
            <p>   Actor: ${data.actor}</p>
        </div>
       
     </div>
        `;
        
        console.log (personajes);
    //return personajes;
    };
  };
  botonPersonajes.addEventListener("click",dataPersonajes);