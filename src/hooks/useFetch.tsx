import {AxiosResponse} from 'axios';
import {useCallback, useEffect, useState} from 'react';
import API from '../services';

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<any>([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const {data}: AxiosResponse = await API.get(url);
      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('error catched', error);
      return error;
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [apiData, isLoading];
};
