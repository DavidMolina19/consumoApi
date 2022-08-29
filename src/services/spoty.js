// Consumiendo APIS

import {URI,PETICION} from '../../helpers/datosPeticionGET.js'



// consumo API


fetch(URI,PETICION)
.then(function(respuesta){
  return respuesta.json()
})

.then(function(respuesta){
  console.log(respuesta)
  console.log(respuesta.tracks)
  let fila=document.getElementById("fila")
   
  
 


  
 
})

.catch(function(error){
  console.log(error)
})


