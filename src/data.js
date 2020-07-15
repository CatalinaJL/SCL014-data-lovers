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

// Filtro para tener array de Orden del Fénix
export const phoenixOrder= others.filter(function(others){
 if (others.name === "Arthur Weasley") {
   return others.name === "Arthur Weasley";
 } if (others.name === "Sirius Black") {
   return others.name === "Sirius Black"
 } if (others.name === "Kingsley Shacklebolt") {
  return others.name === "Kingsley Shacklebolt"; 
 } 
})

console.log(phoenixOrder); 

// Filtro para tener array de Mortífagos
export const deathEaters= others.filter(function(others){
  if (others.name === "Lord Voldemort" ) {
    return others.name === "Lord Voldemort" ;
  }if (others.name === "Bellatrix Lestrange" ) {
    return others.name === "Bellatrix Lestrange" ;
  } if (others.name === "Lucius Malfoy") {
    return others.name === "Lucius Malfoy";
  }  
 })
 
 console.log(deathEaters); 
 
// Filtro Casas Hogwarts

export const gryffindor = data.filter(function(data){
  return data.house === "Gryffindor"
});

console.log(gryffindor);





export const hufflepuf = data.filter(function(data){
  return data.house === "Hufflepuff"
})

console.log(hufflepuf);

export const ravenclaw = data.filter(function(data){
  return data.house === "Ravenclaw"
})

console.log(ravenclaw);

export const slytherin = data.filter(function(data){
  return data.house === "Slytherin"
})

console.log(slytherin);

// Filtro Varitas 

export const phoenixFeather = data.filter(function(data){
  return data.wand.core === "phoenix feather"
})

console.log(phoenixFeather);

export const dragonHeartstring = data.filter(function(data){
  return data.wand.core === "dragon heartstring"
})

console.log(dragonHeartstring);

export const unicornTailHair = data.filter(function(data){
  return data.wand.core === "unicorn tail-hair"
})

console.log(unicornTailHair);















//const dataHP = () => 'OMG';
//export default studentsHogwarts; 
//export const studentsHogwarts = () => 'example';