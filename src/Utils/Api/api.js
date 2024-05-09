import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 3000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTI3NGU5MzRiOTE5MmM3NzZlNjYyNzI4ZTcxMGM3ZiIsInN1YiI6IjY1ZTI1ZmFiZGFmNTdjMDE4NTllYmE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-AVcvMd2CGXIbCmwRhPFYiV1sfKlXxeQAfk6MKxGbw",
  },
});
export const moviesapi = axios.create({
  baseURL: "https://moviesapi.ir/api/v1/",
});
// export const api = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
// });

// export const key = {
//   apiKey: "21274e934b9192c776e662728e710c7f",
//   // baseURL: 'https://api.themoviedb.org/3/',
// };

export default api;
