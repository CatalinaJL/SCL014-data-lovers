import { staff,students} from './data.js';

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
})

//Eventos para mostrar página "Varitas" (página5)
document.getElementById("Varitas").addEventListener("click",(evento) => {
    evento.preventDefault();
    document.getElementById("pag2").style.display="none";
    document.getElementById("pag5").style.display="block";
    document.getElementById("core").style.display="block";
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
    
   // verData (data);
   /*const students = data.filter(function(data){
    return data.hogwartsStudent === true;
   });
  const studentsHogwarts= students.map(function(data){
    return data.name;
   });

   console.log(students);
   */
// Ver data 
 
//Para ver filtro Staff Hogwarts
//document.getElementById("Profesores").addEventListener("click",(evento)=> {
 //   let resultado1= '';
 //   let hogwarts = staff; 
 //   for (let i=0; i<hogwarts.length; i++){
 //       console.log (hogwarts[i]);
 //   resultado1 = harryBox.innerHTML= `
 //   <div class = "card"> 
 //       <div class = "cardFull"> 
 //           <div class = "front">
 //               <div class = "imagenes"> <img src = ${hogwarts[i].image}> </div> 
//                <h1>${hogwarts[i].name}</h1>
 //           </div>
 //           <div class ="back"> 
  //              <p>  Especie: ${hogwarts[i].species}</p>
 //               <p>  Género: ${hogwarts[i].gender}</p>
 //               <p>  Casa: ${hogwarts[i].house}</p>
//                <p>  Patronus: ${hogwarts[i].patronus}</p>
 //           </div>
  //      </div>
  //  </div>
 //   ` 
  //  };
  //  return resultado1
//}); 

//console.log(studentsHogwarts);

console.log(students);
console.log(staff)






const harryType = document.getElementById('roles');  ///le digo que trabajemos en roles que es el section donde tengo el menu option

harryType.addEventListener('change', () => {// a mi harryType le paso el evento escuchar, se lo pase como change 
       

    console.log(staff); 

    harryBox.innerHTML = '';  //esto lo puse porque cuando cargo la pestaña de personajes, se cargan todos, entonces, le pido que se vacie cuando pinche opciones .

     for (let i=0; i<staff.length; i++){
     
        harryBox.innerHTML += `
        <div class="card">
        <div class= "cardFull">  
        <div class="front">
          
        <div class ="imagenes"><img src=${staff[i].image} ></div> 
        <h1>${staff[i].name}</h1>
      </div>

          <div class="back">
          
           <p>  Especie: ${staff[i].species}</p>
           <p>  Género: ${staff[i].gender}</p>
           <p>  Casa: ${staff[i].house}</p>
           <p>  Patronus: ${staff[i].patronus}</p>
         
          </div>



        </div>
      </div>
        `
    };
})

const harryEstudent = document.getElementById('Personajes');
harryType.addEventListener('change', () => {// a mi harryType le paso el evento escuchar, se lo pase como change 
       

    console.log(students); 

    harryBox.innerHTML = '';  //esto lo puse porque cuando cargo la pestaña de personajes, se cargan todos, entonces, le pido que se vacie cuando pinche opciones .

     for (let i=0; i<students.length; i++){
     
        harryBox.innerHTML += `
        <div class="card">
        <div class= "cardFull">  
        <div class="front">
          
        <div class ="imagenes"><img src=${students[i].image} ></div> 
        <h1>${students[i].name}</h1>
      </div>

          <div class="back">
          
           <p>  Especie: ${students[i].species}</p>
           <p>  Género: ${students[i].gender}</p>
           <p>  Casa: ${students[i].house}</p>
           <p>  Patronus: ${students[i].patronus}</p>
         
          </div>



        </div>
      </div>
        `
    };
})
