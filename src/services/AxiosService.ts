import Axios, {AxiosRequestConfig} from 'axios';
import enviroment from '../enviroments/hmg';

const createAxiosInstance = () => {
  let config: AxiosRequestConfig = {
    baseURL: enviroment.API_URL,
    timeout: 10000,
  };

  const instance = Axios.create(config);

  instance.interceptors.response.use(
    (value: any) => {
      if (value.data?.errors && value.data?.errors.length) {
        throw {
          message: value.data?.errors[0],
        };
      } else {
        return value;
      }
    },
    async (error: any) => {
      if (error?.message === 'Network Error') {
        throw new Error(
          'Sem conexão com a internet, tente novamente mais tarde',
        );
      }
      if (error.code === 'ECONNABORTED') {
        throw {
          message:
            'Nosso servidor demorou muito tempo para responder, tente novamente mais tarde',
        };
      }
      if (error?.response?.status === 401) {
        // store.dispatch(setUser({token: false}));
      }
      if (error?.response?.status === 400) {
        throw new Error(error?.response?.data?.errors);
      }
      if (error?.response?.status === 415) {
        throw new Error(error?.response?.data?.errors);
      }
      if (error?.response?.data?.errors?.length) {
        throw {
          message: error.response.data.errors[0],
        };
      }
      return error;
    },
  );

  return instance;
};

export default {
  createAxiosInstance,
};
