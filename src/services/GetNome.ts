import AxiosService from './AxiosService';

export interface IGetNome {
  name: string;
  results: IGetNome[];
}

const GetNome = async () => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get<IGetNome>('pokemon');
  const nome = response.data.results.map(result => result.name);
  return nome;
};

export default {GetNome};
