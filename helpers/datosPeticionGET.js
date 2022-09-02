const ID_ARTISTA="6Unmr1mmDxRqZY7jkSQOcg"





export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN="Bearer BQCEqpxvRCiNpbojgLu_i0Pxu2Ys_n4YWQ6HS_V-Z7pR8ZG6q_0IDlnscozNn8jJ1SMK1SEQn4UzBX9-d2E2huWMTclujYhMmJbjJWcoQUMLWCl2eZAMzPf5VyetE-Sfuhi2QsbsE31nT8TydP4D4dgFMyG2IzHHW5zUdsT0YYMshfdFcLlnHS4hwv7Vd20"


export  const PETICION={
    method:"GET",
    headers:{
      Authorization:TOKEN
    },
  
  }