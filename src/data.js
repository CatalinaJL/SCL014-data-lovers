import data from './data/potter/potter.js';

/* Filtro para tener array de Estudiantes*/
export const students = data.filter(function(data){
   return data.hogwartsStudent === true;
});
  
/* Filtro para tener array de Staff*/
export const staff = data.filter(function(data){
return data.hogwartsStaff === true;
});

/* Filtro para tener array de Ministerio de Magia y Lado Tenebroso Juntos */

const others = data.filter(function(data){
  return data.hogwartsStaff !== true && data.hogwartsStudent !== true;
});
  
/* Filtro para tener array de Orden del Fénix*/

export const phoenixOrder = others.filter(function(others){
 if (others.name === "Arthur Weasley") {
   return others.name === "Arthur Weasley";
 } if (others.name === "Sirius Black") {
   return others.name === "Sirius Black"
 } if (others.name === "Kingsley Shacklebolt") {
  return others.name === "Kingsley Shacklebolt"; 
 } 
});

/* Filtro para tener array de Mortífagos*/

export const deathEaters = others.filter(function(others){
  if (others.name === "Lord Voldemort" ) {
    return others.name === "Lord Voldemort" ;
  }if (others.name === "Bellatrix Lestrange" ) {
    return others.name === "Bellatrix Lestrange" ;
  } if (others.name === "Lucius Malfoy") {
    return others.name === "Lucius Malfoy";
  }  
});
 
/* Filtro Casas Hogwarts*/

export const housesHogwarts = data.filter(function(data){
  return data.house !== ''; 
});

export const gryffindor = data.filter(function(data){
  return data.house === "Gryffindor"
});

export const hufflepuf = data.filter(function(data){
  return data.house === "Hufflepuff"
});

export const ravenclaw = data.filter(function(data){
  return data.house === "Ravenclaw"
});

export const slytherin = data.filter(function(data){
  return data.house === "Slytherin"
});

/*Filtro Varitas*/

export const wandsHarryPotter = data.filter(function(data){
  return data.wand.wood !== '';
});

export const phoenixFeather = data.filter(function(data){
  return data.wand.core === "phoenix feather"
});

export const dragonHeartstring = data.filter(function(data){
  return data.wand.core === "dragon heartstring"
});

export const unicornTailHair = data.filter(function(data){
  return data.wand.core === "unicorn tail-hair"
});
