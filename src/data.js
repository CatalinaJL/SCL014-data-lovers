import data from './data/potter/potter.js';

const dataHP= data; 
//console.log(dataHP);

/*const mainAtributtes= {
   showPepito (){
      for (let i=0 ; i<data.length; i++);
      const fullNames = dataHp.filter(datos=>  `${datos.name} ${datos.species}`);

      console.log (fullNames); 
      
   }
   
}
console.log(mainAtributtes) 
*/
const students = dataHP.filter(hogwarts => (hogwarts.name !==""));
console.log(students)

const fullNames = dataHP.map(caracther => `${caracther.name} ${caracther.species} ${caracther.house} ${caracther.ancestry} ${caracther.wand.wood}`);
//const importantInformation = fullNames;
const importantInformation = () =>{
    let arrayFullNames= fullNames;
    for (i=0, i<arrayFullNames.length;i++;
    console.log(importantInformation[i]));
},

//const arrayFullNames = fullNames.values;
//console.log(arrayFullNames);
//console.table(fullNames);
/*const data= potter.data
console.log(dataHP); 
export const example = () => 'example';
*/

//export default mainAtributtes; 
export default students;

//const dataHP = () => 'OMG';
