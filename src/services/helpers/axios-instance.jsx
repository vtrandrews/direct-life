import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backend.directd.com.br/api/',
  headers: {
    'Token': 'C7E4C7D8-6FBE-4BB0-BBAA-31813EBDD076'
  }
});

export default axiosInstance;