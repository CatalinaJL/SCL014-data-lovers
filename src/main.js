import { staff,students,phoenixOrder,deathEaters,gryffindor,slytherin,ravenclaw,hufflepuf,wandsHarryPotter, phoenixFeather,dragonHeartstring,unicornTailHair} from './data.js';

import data from './data/potter/potter.js';

//import data from './data.js';

console.log(data);

//primero voy a llamar todos los Id//

let start=document.getElementById("start");
let pag1= document.getElementById("pag1");
let pag2=document.getElementById("pag2");
let pag3=document.getElementById("pag3");
let pag4=document.getElementById("pag4");
let pag5=document.getElementById("pag5");

const harryBox = document.getElementById('root'); //variable que contiene a la ventana de persoanjes  que me voy a traer//

//const harryType= document.getElementById('roles'); // variabke que contiene el primer filtro por roles en la pelicula//

// Eventos para mostrar página 1 a página 2
document.getElementById("start").addEventListener("click",(evento) => {
    evento.preventDefault();
    document.getElementById("pag1").style.display="none";
    document.getElementById("pag2").style.display="block";
})

//Eventos para mostrar página "Personajes" (página3)
document.getElementById("Personajes").addEventListener("click",(evento) => {
    //evento.preventDefault();
    document.getElementById("pag2").style.display="none";
    document.getElementById("pag3").style.display="block";
    document.getElementById("roles").style.display="block";
    verData (data);
})

//Eventos para mostrar página "Casas" (página4)
document.getElementById("Casas").addEventListener("click",(evento) => {
    evento.preventDefault();
    document.getElementById("pag2").style.display="none";
    document.getElementById("pag4").style.display="block";
    document.getElementById("house").style.display="block";
    verData (data);

  
})

//Eventos para mostrar página "Varitas" (página5)
document.getElementById("Varitas").addEventListener("click",(evento) => {
    evento.preventDefault();
    document.getElementById("pag2").style.display="none";
    document.getElementById("pag5").style.display="block";
    document.getElementById("core").style.display="block";
    verData (data);
})

// Función para mostrar la data//
const verData = (data) => {
    let resultado= ''; // lo hago vacio para que entre la data
    for (let i=0; i<data.length; i++){
        console.log (data[i]);
    resultado=harryBox.innerHTML += `
    <div class="card">
        <div class= "cardFull">
         <div class="front">
          
           <div class ="imagenes"><img src=${data[i].image} ></div> 
           <h1>${data[i].name}</h1>
         </div>
          
         <div class="back">
          
           <p>  Especie: ${data[i].species}</p>
           <p>  Género: ${data[i].gender}</p>
           <p>  Casa: ${data[i].house}</p>
           <p>  Patronus: ${data[i].patronus}</p>
         
          </div>
       </div>
    </div>
    `

    };
        return resultado;
        
};
    
// Declarar variable de selects de páginas de personajes, casas y varitas
const harryType = document.getElementById('roles');  ///le digo que trabajemos en roles que es el section donde tengo el menu option
const harryHouse = document.getElementById('house');
const harryCore = document.getElementById('core');

// Función para mostrar información relacionada al select de personajes
const primerMono = (infor) =>{

  for (let i=0; i<infor.length; i++){
    harryBox.innerHTML += `
    <div class="card">
      <div class= "cardFull">  
        <div class="front">
          <div class ="imagenes"><img src=${infor[i].image} ></div> 
          <h1>${infor[i].name}</h1>
    </div>
    <div class="back">
         <p>  Especie: ${infor[i].species}</p>
         <p>  Género: ${infor[i].gender}</p>
         <p>  Casa: ${infor[i].house}</p>
         <p>  Patronus: ${infor[i].patronus}</p>
    </div>
       </div>
    </div>
       `
   }; 
   
}

// Función para mostrar información relacionada al select de Casas
const segundoMono = (infor) =>{

  for (let i=0; i<infor.length; i++){
    harryBox.innerHTML += `
    <div class="card">
    <div class= "cardFull">  
      <div class="front">
         <div class ="imagenes"><img src=${infor[i].image} ></div> 
         <h1>${infor[i].name}</h1>
      </div>
      </div>
    </div>
       `
   }; 
   
}
//Función para mostrar información de select de Varitas 

const tercerMono = (infor) =>{

  for (let i=0; i<infor.length; i++){
    harryBox.innerHTML += `
    <div class="card">
    <div class= "cardFull">  
      <div class="front">
         <div class ="imagenes"><img src=${infor[i].image} ></div> 
         <h1>${infor[i].name}</h1>
      </div>
    </div>
    </div>
       `
   }; 
   
}
 
// Evento para que cada opción de select de página personajes cargue personajes filtrados
harryType.addEventListener('change', () => {// a mi harryType le paso el evento escuchar, se lo pase como change 
      harryBox.innerHTML = '';  //esto lo puse porque cuando cargo la pestaña de personajes, se cargan todos, entonces, le pido que se vacie cuando pinche opciones .
      // Para cargar data en menu Todos
       if ( harryType.value === "todos"){
        let harryType0=data;
        primerMono(harryType0);
       } else if ( harryType.value === "hogwartsStaff"){
        let harryType1=staff;
        primerMono(harryType1);
       } else if(harryType.value === "hogwartsStudent") {
        let harryType2=students;
        primerMono(harryType2);
       } else if (harryType.value === 'OrderofthePhoenix') {
        let harryType3=phoenixOrder;
        primerMono(harryType3);
       } else if ( harryType.value === "Mortífagos") {
        let harryType4= deathEaters;
        primerMono(harryType4);
       };

      });

// Evento para que cada opción de select de página de Casas cargue casas  filtrados
harryHouse.addEventListener('change', () => {// a mi harryType le paso el evento escuchar, se lo pase como change 
       
        harryBox.innerHTML = '';  //esto lo puse porque cuando cargo la pestaña de personajes, se cargan todos, entonces, le pido que se vacie cuando pinche opciones .
         // Para cargar data en menu Todos
        if ( harryHouse.value === "Gry"){
         let harryHouse0=data;
         segundoMono(harryHouse0);
        } else if ( harryHouse.value === "Gryffindor"){
         let harryHouse1=gryffindor;
         segundoMono(harryHouse1);
        } else if(harryHouse.value === "Slytherin") {
         let harryHouse2=slytherin;
         segundoMono(harryHouse2);
        } else if (harryHouse.value === 'Ravenclaw') {
         let harryHouse3=ravenclaw;
         segundoMono(harryHouse3);
        } else if ( harryHouse.value === "Hufflepuff") {
         let harryHouse4= hufflepuf;
         segundoMono(harryHouse4);
        };
 
       });

// Evento para que cada opción de select de Página Varitas cargue varitas
harryCore.addEventListener('change', () => {// a mi harryType le paso el evento escuchar, se lo pase como change 
       
  harryBox.innerHTML = '';  //esto lo puse porque cuando cargo la pestaña de personajes, se cargan todos, entonces, le pido que se vacie cuando pinche opciones .
   // Para cargar data en menu Todos
  if ( harryCore.value === "varitas"){
   let harryCore0= wandsHarryPotter;
   tercerMono(harryCore0);
  } else if ( harryCore.value === "phoenix feather"){
   let harryCore1=phoenixFeather;
   tercerMono(harryCore1);
  } else if(harryCore.value === "dragon heartstring") {
   let harryCore2=dragonHeartstring;
   tercerMono(harryCore2);
  } else if (harryCore.value === 'unicorn tail-hair') {
   let harryCore3=unicornTailHair;
   tercerMono(harryCore3);
  } 
 });