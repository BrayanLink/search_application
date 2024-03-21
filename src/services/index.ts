import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.mercadolibre.com',
});

export default API;
