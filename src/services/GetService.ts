import AxiosService from './AxiosService';

export interface IGetNome {
  name: string;
  results: IGetNome[];
}

export interface IGetTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const GetNome = async () => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get<IGetNome>('pokemon');
  const nome = response.data.results.map(result => result.name);
  console.log(JSON.stringify(nome));
  return nome;
};

const GetTypes = async () => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get<{types: IGetTypes[]}>(`pokemon/1`);
  const type = response.data.types.map(typeData => typeData.type.name);
  console.log('Teste' + JSON.stringify(type));
  return type;
};

export default {GetNome, GetTypes};
