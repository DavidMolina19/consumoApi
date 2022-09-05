const ID_ARTISTA="6Unmr1mmDxRqZY7jkSQOcg"





export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN=" Bearer BQCU0ud_PkRLmIk43SGbbeYltUh2Og0KVTo3HRVTh1B73Vv081ejnkfVMf7ly88X5Ri84S6D55PMT4gd_i9jd0e5SkwwL4zJ_oUSu9_oUvk9_lIuRqL3M7lcjx4h-papQ2hgZcE9iIzZBi0mQLDoP8GNefie-Px2MZJGrhNyxnIMU5EhEwJLspiFIKv--oU"


export  const PETICION={
    method:"GET",
    headers:{
      Authorization:TOKEN
    },
  
  }