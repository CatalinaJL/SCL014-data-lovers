/*import data from './data/potter/potter.js';
*/
/*import { caractherName } from './data.js';
*/
import data from './data/potter/potter.js';

/*console.log(data[0,1].house);
*/
console.table(data[3].wand); 

document.getElementById("Personajes").innerHTML = "¡Bienvenido!" + "estos son los personajes" +":" + data[0].name, data[1].name;

