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

const fullNames = dataHP.map(caracther => `${caracther.name} ${caracther.house}`);
console.log(fullNames);
/*const data= potter.data
console.log(dataHP); 
export const example = () => 'example';
*/

export default fullNames; 
export default students;

//const dataHP = () => 'OMG';
