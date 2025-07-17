import { useQuery } from '@tanstack/react-query';
import instance from '../hook/useAxios';

const useFetch = (endpoint, queryKey) => {
  const fetchData = async () => {
    try {
      const response = await instance.get(endpoint);
      return response?.data.data || [];
    } catch (error) {
      console.error(`Failed to fetch from ${endpoint}:`, error);
      throw new Error(`Failed to fetch data from ${endpoint}. Please try again later.`);
    }
  };

  const { data, isPending, isError, error ,refetch} = useQuery({
    queryKey: [queryKey],
    queryFn: fetchData,
    onError: (err) => {
      console.error(`Error fetching ${queryKey}:`, err);
    },
  });

  return { data, isPending, isError, error, refetch };
};

export default useFetch;
