import {useEffect, useState} from 'react';
import axios from 'axios';
import AxiosService from '../services/AxiosService';

interface ConfigRequest {
  AxiosService: any; // Coloque o tipo correto para o AxiosService, se possível
  method: string;
  url: string;
  othersConfig?: any; // Coloque o tipo correto para othersConfig, se possível
}
export default function useAxios((AxiosService, method,): ConfigRequest) {
  const {AxiosService, method, url, othersConfig = {}} = configRequest;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosService[method.toLowerCase()](url, {
          ...othersConfig,
        });
        console.log(response.data);
        setData(response);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, loading, error];
}
