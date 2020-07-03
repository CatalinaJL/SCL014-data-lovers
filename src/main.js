/*import data from './data/potter/potter.js';
*/
/*import { caractherName } from './data.js';
*/
import data from './data/potter/potter.js';

/*console.log(data [0].house);*/

/*document.getElementById ("personajes").innerHTML = "Aqui estan los personajes" + data[].name;*/
var a = data;
for (let i=0; i<a.length; i++){
    document.getElementById ("gridDePersonajes").innerHTML= "Aqui estan los personajes" + a[i];
    
    console.log (a[i]);
    /*alert (document.getElementById ("gridDePersonajes").value);*/
}


const recursos= data; // ME TRAJE LA DATA Y LA GUARDE EN ESTA CONSTANTE

/*console.log (recursos);*/

const gridCentral= document.getElementById('gridDeImagenes'); //creo una constante para llamar al contenedor de data

console.log (gridCentral);



