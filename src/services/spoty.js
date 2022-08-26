// Consumiendo APIS

//1. PARA DONDE VOY 

const URI="https://api.spotify.com/v1/artists/6Unmr1mmDxRqZY7jkSQOcg/top-tracks?market=US"

//CONFIGURAR LA PETICION

const PETICION={
  method:"GET",
  headers:{
    Authorization:"Bearer BQBroqPIFbVr3rlOGmveEMCuy-7NDLQDie421EXYje3GYEaObTkcslY0WhWc-6k4zVNRbthHBrN48PT5N-_tEl2ZSRqMJrJDqfS-QKaVGwcORzZZQ_nCh2IIQyvwwG0zG4nC16MUprF-KX4kmQWonBxoWTI2Bn70YS82hNP0Ti_qygc505FMbExQTMaJYqw"
  },

}

// consumo API


fetch(URI,PETICION)
.then(function(respuesta){
  return respuesta.json()
})

.then(function(respuesta){
  console.log(respuesta)
  console.log(respuesta.tracks)
  let fila=document.getElementById("fila")
   
  
  respuesta.tracks.forEach(function(cancion){
    
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow","p3","h-100")

    let audio= document.createElement("audio")
    audio.src=cancion.preview_url
    audio.classList.add("w-100","my-5")
    audio.setAttribute("controls","controls")

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center")
    nombre.textContent=cancion.name

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid", "w-100","h-100" , "rounde-start" )
    imagen.src=cancion.album.images[0].url

    let popularidad=document.createElement("p")
    popularidad.classList.add("text-center")
    popularidad.textContent=cancion.popularity



    
    
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(audio)
    tarjeta.appendChild(popularidad)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


  })


  
 
})

.catch(function(error){
  console.log(error)
})


