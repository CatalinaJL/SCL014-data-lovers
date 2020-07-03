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
const a = data;
for (let i=0; i<a.length; i++){
    
    console.log (a[i].name, a[i].house, a[i].wand.wood, a[i].wand.core, a[i].wand.length);
    document.getElementById("gridDePersonajes").innerHTML = "Los personajes de esta saga son" + " " +  a[0].name  + " " +  a[1].name  + " " +  a[2].name;
    
    
    }

/*const recursos= data; // ME TRAJE LA DATA Y LA GUARDE EN ESTA CONSTANTE

/*console.log (recursos);*/

/*const gridCentral= document.getElementById('gridDeImagenes'); //creo una constante para llamar al contenedor de data

console.log (gridCentral);

*/