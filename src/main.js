import { staff,students,phoenixOrder,deathEaters,housesHogwarts,gryffindor,slytherin,ravenclaw,hufflepuf,wandsHarryPotter, phoenixFeather,dragonHeartstring,unicornTailHair} from './data.js';

import data from './data/potter/potter.js';

console.log(data);

/* Establecer variables de ID para utilizarlos en Addeventlistener*/

let start=document.getElementById("start");
let pag1= document.getElementById("pag1");
let pag2=document.getElementById("pag2");
let pag3=document.getElementById("pag3");
let pag4=document.getElementById("pag4");
let pag5=document.getElementById("pag5");

/*Variable que contiene a la ventana de personajes que mostrara data en HTML*/
const harryBox = document.getElementById('root'); 

/*Eventos para mostrar página 1 a página 2*/

document.getElementById("start").addEventListener("click",(evento) => {
    evento.preventDefault();
    document.getElementById("pag1").style.display="none";
    document.getElementById("pag2").style.display="block";
});


function goHome (){
window.location='Index.html';

};

let botonHome=document.getElementById ('home');
botonHome.addEventListener('click',goHome);








/*Eventos para mostrar página "Personajes" (página3)*/
document.getElementById("Personajes").addEventListener("click",(evento) => {
    document.getElementById("pag2").style.display="none";
    document.getElementById("pag3").style.display="block";
    document.getElementById("roles").style.display="block";
    verData (data);
});

/*Eventos para mostrar página "Casas" (página4)*/

document.getElementById("Casas").addEventListener("click",(evento) => {
    document.getElementById("pag2").style.display="none";
    document.getElementById("pag4").style.display="block";
    document.getElementById("house").style.display="block";
    housesHP (housesHogwarts);
});

/*Eventos para mostrar página "Varitas" (página5)*/

document.getElementById("Varitas").addEventListener("click",(evento) => {
    document.getElementById("pag2").style.display="none";
    document.getElementById("pag5").style.display="block";
    document.getElementById("core").style.display="block";
    wandsHP (wandsHarryPotter);
});

/*Función para mostrar la data completa*/
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
    
/*Declarar variable de selects de páginas de personajes, casas y varitas*/
const harryType = document.getElementById('roles');  
const harryHouse = document.getElementById('house');
const harryCore = document.getElementById('core');

/*Función para mostrar información relacionada al select de personajes*/

const caractherHP = (infor) =>{

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
   
};

/*Función para mostrar información relacionada al select de Casas*/

const housesHP = (infor) =>{

  for (let i=0; i<infor.length; i++){
    harryBox.innerHTML += `
    <div class="card">
    <div class= "cardFull">  
      <div class="front">
         <div class ="imagenes"><img src=${infor[i].image} ></div> 
         <h1>${infor[i].name}</h1>
      </div>
      <div class="back">
        <div class ="imagenlogo"><img src=${infor[i].houseimg}></div>
        </div>
      </div>
    </div>
       `
   }; 
   
};

/*Función para mostrar información de select de Varitas*/

const wandsHP = (infor) =>{

  for (let i=0; i<infor.length; i++){
    harryBox.innerHTML += `
    <div class="card">
      <div class= "cardFull">  
        <div class="front">
           <div class ="imagenes"><img src=${infor[i].image} ></div> 
          <h1>${infor[i].name}</h1>
        </div>
       <div class="back">
          <div class="imagenlogo"> <img src="https://user-images.githubusercontent.com/66574419/87886112-6a39f400-c9e8-11ea-9bf5-6a45417d5304.png"></div>
          <div class ="infovaritas">
          <p>  Madera: ${infor[i].wand.wood}</p>
          <p>  Núcleo: ${infor[i].wand.core}</p>
          <p>  Longitud: ${infor[i].wand.length}</p>
          </div>
        </div>
      </div>
    </div>
       `
   }; 
   
};
 
/*Evento para que cada opción de select de página personajes cargue personajes filtrados*/

harryType.addEventListener('change', () => {   
      harryBox.innerHTML = '';  
      /*Para cargar data en menu Todos*/
       if ( harryType.value === "todos"){
        let harryType0=data;
        caractherHP(harryType0);
       } else if ( harryType.value === "hogwartsStaff"){
        let harryType1=staff;
        caractherHP(harryType1);
       } else if(harryType.value === "hogwartsStudent") {
        let harryType2=students;
        caractherHP(harryType2);
       } else if (harryType.value === 'OrderofthePhoenix') {
        let harryType3=phoenixOrder;
        caractherHP(harryType3);
       } else if ( harryType.value === "Mortífagos") {
        let harryType4= deathEaters;
        caractherHP(harryType4);
       };

});

/* Evento para que cada opción de select de página de Casas cargue casas  filtrados*/

harryHouse.addEventListener('change', () => {// a mi harryType le paso el evento escuchar, se lo pase como change 
       
        harryBox.innerHTML = '';  //esto lo puse porque cuando cargo la pestaña de personajes, se cargan todos, entonces, le pido que se vacie cuando pinche opciones .
         // Para cargar data en menu Todos
        if ( harryHouse.value === "Gry"){
         let harryHouse0=housesHogwarts;
         housesHP(harryHouse0);
        } else if ( harryHouse.value === "Gryffindor"){
         let harryHouse1=gryffindor;
         housesHP(harryHouse1);
        } else if(harryHouse.value === "Slytherin") {
         let harryHouse2=slytherin;
         housesHP(harryHouse2);
        } else if (harryHouse.value === 'Ravenclaw') {
         let harryHouse3=ravenclaw;
         housesHP(harryHouse3);
        } else if ( harryHouse.value === "Hufflepuff") {
         let harryHouse4= hufflepuf;
         housesHP(harryHouse4);
        };
 
});

/*Evento para que cada opción de select de Página Varitas cargue varitas*/
harryCore.addEventListener('change', () => {
       
  harryBox.innerHTML = '';  
  if ( harryCore.value === "varitas"){
   let harryCore0= wandsHarryPotter;
   wandsHP(harryCore0);
  } else if ( harryCore.value === "phoenix feather"){
   let harryCore1=phoenixFeather;
   wandsHP(harryCore1);
  } else if(harryCore.value === "dragon heartstring") {
   let harryCore2=dragonHeartstring;
   wandsHP(harryCore2);
  } else if (harryCore.value === 'unicorn tail-hair') {
   let harryCore3=unicornTailHair;
   wandsHP(harryCore3);
  } 
});


