import data from './data/potter/potter.js';

//Filtro para tener array de Estudiantes
export const students = data.filter(function(data){
   return data.hogwartsStudent === true;
  });

  console.log(students);
  
 // Filtro para tener array de Staff
export const staff= data.filter(function(data){
return data.hogwartsStaff === true;
});

console.log(staff);

// Filtro para tener array de Ministerio de Magia y Lado Tenebroso Juntos 
 const others= data.filter(function(data){
  return data.hogwartsStaff !== true && data.hogwartsStudent !== true;
  });
  
  console.log(others);

// Filtro para tener array de Ministerio de Magia
export const ministryOfMagic= others.filter(function(others){
/* if (others.name === "Sirius Black");{

 } 
else if(others.name === "Remus Lupin") {

} else if( others.name === "Arthur Weasley")
*/
return others.name === "Sirius Black" && others.name === "Remus Lupin";
}); 
console.log(ministryOfMagic); 

//export const staffHogwarts = staff.map(function(data){
  // return data.name;
//}) 
//console.log(staffHogwarts)
//console.log(students);
//console.log(studentsHogwarts);

/*const dataHP= data; 
console.log(dataHP);

console.log(mainAtributtes) 

const students = dataHP.filter(hogwarts => (hogwarts.name !==""));
console.log(students)

const fullNames = dataHP.map(caracther => `${caracther.name} ${caracther.species} ${caracther.house} ${caracther.ancestry} ${caracther.patronus} ${caracther.wand.wood}`);
const importantInformation = fullNames;

console.log(fullNames);


const importantInformation = () =>{
  let arrayFullNames= fullNames;
   for ( i=0, i<arrayFullNames.length;i++);
   console.log(importantInformation));
};
console.log(importantInformation.[0]);

const arrayFullNames = fullNames.values;
console.log(arrayFullNames);
console.table(fullNames);
const data= potter.data
console.log(dataHP); 
export const example = () => 'example';


export default mainAtributtes; 

export default fullNames;
*/
//const dataHP = () => 'OMG';
//export default studentsHogwarts; 
//export const studentsHogwarts = () => 'example';