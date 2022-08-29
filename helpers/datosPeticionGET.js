const ID_ARTISTA="6Unmr1mmDxRqZY7jkSQOcg"





export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN="Bearer BQDrLjmFzPgQcvqab2XD_xKfTXfxvPUHFsDZ20BySEr6xZ2FOO8e_9jLEtVSdAbYIv0HiKO9i9uOq1FuFzxxl8tB0S8fjScVQXznvawTAWk_-0oN5TqW5sKF74K79p6iIgsqEoqor6UyILtzd__208mkIZddvRG4JF8TY0NSKSHbCyfV1iu6wfNi6nH8GJc"


export  const PETICION={
    method:"GET",
    headers:{
      Authorization:TOKEN
    },
  
  }