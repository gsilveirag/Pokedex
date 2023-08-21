import AxiosService from './AxiosService';

const GetNome = async () => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get('pokemon');
  return response.data;
};

const GetPokemonData = async (id: number) => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get(`pokemon/${id}`);
  return response.data;
};

export default {GetNome, GetPokemonData};
