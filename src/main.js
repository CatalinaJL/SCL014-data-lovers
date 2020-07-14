import { staff,students,phoenixOrder,deathEaters} from './data.js';

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
    

// Declarar variable de select de página de personajes
const harryType = document.getElementById('roles');  ///le digo que trabajemos en roles que es el section donde tengo el menu option
 
// Evento para que cada opción de select cargue personajes filtrados
harryType.addEventListener('change', () => {// a mi harryType le paso el evento escuchar, se lo pase como change 
       console.log(staff); 
       console.log(harryType.value);
       harryBox.innerHTML = '';  //esto lo puse porque cuando cargo la pestaña de personajes, se cargan todos, entonces, le pido que se vacie cuando pinche opciones .
    // Para cargar Staff Colegio 
    if ( harryType.value === "hogwartsStaff"){
      let harryType1=staff;
      for (let i=0; i<harryType1.length; i++){
     harryBox.innerHTML += `
     <div class="card">
     <div class= "cardFull">  
     <div class="front">
          <div class ="imagenes"><img src=${harryType1[i].image} ></div> 
          <h1>${harryType1[i].name}</h1>
     </div>
     <div class="back">
          <p>  Especie: ${harryType1[i].species}</p>
          <p>  Género: ${harryType1[i].gender}</p>
          <p>  Casa: ${harryType1[i].house}</p>
          <p>  Patronus: ${harryType1[i].patronus}</p>
     </div>
        </div>
     </div>
        `
    };
    // Para cargar Estudiantes
    } else if(harryType.value === "hogwartsStudent") {
        let harryType2=students;
        for (let i=0; i<harryType2.length; i++){
      harryBox.innerHTML += `
        <div class="card">
        <div class= "cardFull">  
        <div class="front">
          
        <div class ="imagenes"><img src=${harryType2[i].image} ></div> 
        <h1>${harryType2[i].name}</h1>
      </div>

          <div class="back">
          
           <p>  Especie: ${harryType2[i].species}</p>
           <p>  Género: ${harryType2[i].gender}</p>
           <p>  Casa: ${harryType2[i].house}</p>
           <p>  Patronus: ${harryType2[i].patronus}</p>
         
          </div>



        </div>
      </div>
        `
    };



     } else if (harryType.value === 'OrderofthePhoenix') {
        let harryType3=phoenixOrder;
  
        for (let i=0; i<harryType3.length; i++){
       
          harryBox.innerHTML += `
          <div class="card">
          <div class= "cardFull">  
          <div class="front">
            
          <div class ="imagenes"><img src=${harryType3[i].image} ></div> 
          <h1>${harryType3[i].name}</h1>
        </div>
  
            <div class="back">
            
             <p>  Especie: ${harryType3[i].species}</p>
             <p>  Género: ${harryType3[i].gender}</p>
             <p>  Casa: ${harryType3[i].house}</p>
             <p>  Patronus: ${harryType3[i].patronus}</p>
           
            </div>
  
  
  
          </div>
        </div>
          `
      };
  
         
     } else { harryType.value === "Mortífagos"; {
         let harryType4= deathEaters
         for (let i=0; i<harryType4.length; i++){
       
            harryBox.innerHTML += `
            <div class="card">
            <div class= "cardFull">  
            <div class="front">
              
            <div class ="imagenes"><img src=${harryType4[i].image} ></div> 
            <h1>${harryType4[i].name}</h1>
          </div>
    
              <div class="back">
              
               <p>  Especie: ${harryType4[i].species}</p>
               <p>  Género: ${harryType4[i].gender}</p>
               <p>  Casa: ${harryType4[i].house}</p>
               <p>  Patronus: ${harryType4[i].patronus}</p>
             
              </div>
    
    
    
            </div>
          </div>
            `
        };
     }
         
     }
     

    
});


