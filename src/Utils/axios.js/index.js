import axios from 'axios';

const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTI3NGU5MzRiOTE5MmM3NzZlNjYyNzI4ZTcxMGM3ZiIsInN1YiI6IjY1ZTI1ZmFiZGFmNTdjMDE4NTllYmE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-AVcvMd2CGXIbCmwRhPFYiV1sfKlXxeQAfk6MKxGbw';

axios.get('https://example.com/api', { 
    headers: {
      'Authorization': 'Bearer ' + token
    } 
  })
  .then(response => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  });
