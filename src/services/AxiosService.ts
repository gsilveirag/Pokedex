import axios from 'axios';

const AxiosService = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default AxiosService;
