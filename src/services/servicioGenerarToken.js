// generar toquen automatico 

// URI
const URI="https://accounts.spotify.com/api/token"

//datos envio
const DATO1="grant_type=client_credentials"
const DATO2="client_id=e109e578342e4724b71a61f4a81b853a"
const DATO3="client_secret=851ccd383b15470083b4c51e2a438827"


//PETICION

const PETICION={
  method:'POST',
  headers: {"Content-Type" : "application/x-www-form-urlencoded"},
  body: DATO1+"&"+DATO2+"&"+DATO3
}


//FECTH

//promesa 

fetch(URI,PETICION)
.then(function(respuesta){
 return respuesta.json()
})
.then(function(respuesta){
   console.log(respuesta)
})
.catch(function(respuesta){
  console.log(respuesta)
})

//async await


 async function obtenerToken(){
  let respuesta = await fetch(URI,PETICION)

  return await respuesta.json()
}

console.log( await obtenerToken())