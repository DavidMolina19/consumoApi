// Consumiendo APIS

import {URI,PETICION} from '../../helpers/datosPeticionGET.js'
import {consultarCanciones}  from './servicioConsultarCanciones.js'
import {pintarCanciones} from '../controllers/controladorPintarCanciones.js'

// consumo API (consumir servicio)

let canciones = await consultarCanciones(URI,PETICION)
console.log(canciones)

pintarCanciones(canciones.tracks)



