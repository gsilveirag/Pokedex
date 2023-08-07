import {useEffect, useState} from 'react';

export default function useAxios(configRequest) {
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
