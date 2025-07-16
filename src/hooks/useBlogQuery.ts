import { useQuery } from '@tanstack/react-query';
import { getAllBlogs } from '../services/apiBlog';

export const useFetchBlogs = () => {
  const {
    data: blogs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: getAllBlogs,
  });

  return { blogs, error, isLoading };
};
