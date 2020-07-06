/*import data from './data/potter/potter.js';
*/
/*import { caractherName } from './data.js';
*/
import data from './data/potter/potter.js';

/*console.table(data[0].name,data[0].house,data[0].patronus, data[0].wand.wood); 
console.log(data[1].name,data[1].house,data[1].patronus, data[1].wand.wood)
*/

/*console.log(data [0].house);*/

/*document.getElementById ("personajes").innerHTML = "Aqui estan los personajes" + data[].name;*/
/*const a = data;
for (let i=0; i<a.length; i++){
    
    console.log (a[i].name, a[i].house, a[i].wand.wood, a[i].wand.core, a[i].wand.length);
    document.getElementById("gridDePersonajes").innerHTML = "Los personajes de esta saga son" + " " +  a[0].name  + " " +  a[1].name  + " " +  a[2].name;
    
    
    }

/*const recursos= data; // ME TRAJE LA DATA Y LA GUARDE EN ESTA CONSTANTE

/*console.log (recursos);*/

/*const gridCentral= document.getElementById('gridDeImagenes'); //creo una constante para llamar al contenedor de data

console.log (gridCentral);

*/

const datosPersonajes =data;
console.log(datosPersonajes);

const tarjetaDato= datosPersonajes.filter (  datas => (datas.yearOfBirth< 1980) ) ; /*para filtrar debes si o si pneruna condicion*/
console.log (tarjetaDato); 

/*document.getElementById("gridDePersonajes").innerHTML = " Nombre" + tarjetaDato ;
*/


const fullName = datosPersonajes.map (actor=>  `${actor.name} ${actor.house}`); /*el map, recorre todos los datos y te entrega lo que solicitas
/*document.getElementById("gridDePersonajes").innerHTML = " Nombre" + fullName ;        
*/
console.log (fullName)

/*data.forEach (alert);*/
/*document.getElementById("gridDePersonajes").innerHTML=data.forEach;*/

const dataPersonajes = (datosPersonajes) => {
    const personajes = document.createElement('article');
    personajes.className = 'personajePelicula';
    personajes.innerHTML = `
      <div class="tarjeta">
        <div class="frente">
           <div class="imageneslogo"><img src=${datosPersonajes.imagenCasa}></div>
           <h1>${datosPersonajes.name}</h1>
           <div class ="imagenPersonaje"><img src=${datosPersonajes.image}></div>
        </div>
        <div class="atras">
           <div class="imagenJuego"><img src=img/logoSinFondo.png></div>
            <p>   Specie: ${datosPersonajes.species.toUpperCase()}</p>
            <p>   Gender: ${datosPersonajes.gender.toUpperCase()}</p>
            <p>   House: ${datosPersonajes.house.toUpperCase()}</p>
            <p>   Rol: ${datosPersonajes.rol.toUpperCase()}</p>
            <p>   Actor: ${datosPersonajes.actor.toUpperCase()}</p>
        </div>
       
     </div>
        `;
    return personaje;
    console.log (personajes);
  };
  


