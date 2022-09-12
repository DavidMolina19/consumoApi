import { generarURI } from "../../helpers/generarURI.js"

import {PETICION} from "../../helpers/datosPeticionGET.js"

import {consultarCanciones} from "../services/servicioConsultarCanciones.js"
import { pintarCanciones } from "./controladorPintarCanciones.js"

let botonArtista=document.getElementById("botonBuscar")

botonArtista.addEventListener("click",   function(evento){
   let artista=document.getElementById("artista")

  
  const URI= generarURI(artista.value)
  console.log(URI)
  console.log(PETICION)
 

  async function activarServicio(){
  let  canciones=  await consultarCanciones(URI,PETICION)
  console.log(canciones)
  pintarCanciones(canciones.tracks)

  
   
  }
   activarServicio()



})