import { obtenerToken } from "../src/services/servicioGenerarToken.js"





let tokenAutomatico= await obtenerToken()
 let token= tokenAutomatico.token_type+" "+ tokenAutomatico.access_token




export  const PETICION={
    method:"GET",
    headers:{
      Authorization: token
      
    },
  
  }