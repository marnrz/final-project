import axios from "axios";

// export const api = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/'
//   });
export const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTI3NGU5MzRiOTE5MmM3NzZlNjYyNzI4ZTcxMGM3ZiIsInN1YiI6IjY1ZTI1ZmFiZGFmNTdjMDE4NTllYmE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-AVcvMd2CGXIbCmwRhPFYiV1sfKlXxeQAfk6MKxGbw';
export const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export default api