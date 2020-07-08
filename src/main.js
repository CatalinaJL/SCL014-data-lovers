import data from './data/potter/potter.js';

//import data from './data.js';

let personajes = document.getElementById("gridDePersonajes");

const dataPersonajes = (data) => {
   //console.log (data);
         for (let i=0; i<data.length; i++){
   personajes.innerHTML = `
         <div class="tarjeta">
         <div class="frente">
           
           <h1>${data.name}</h1>
           <div class ="imagenPersonaje"><img src=${data.image}></div>
        </div>
        <div class="atras">
           <div class="imagenJuego"><src=Fotos/logoSinFondo.png></div>
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


 
  let botonPersonajes= document.getElementById ("Personajes");


  botonPersonajes.addEventListener("click",dataPersonajes);
 