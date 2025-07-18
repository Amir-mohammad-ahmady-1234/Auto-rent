import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllComments, sendComment } from '../services/apiComment';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useGetComments = () => {
  const { id: currentCarId } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ['comments', currentCarId],
    queryFn: () => getAllComments(currentCarId ?? ''),
  });

  return { data, error, isLoading };
};

export const useSendComment = () => {
  const queryClient = useQueryClient();

  const { data, isPending, error, mutate } = useMutation({
    mutationKey: ['comments'],
    mutationFn: sendComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      toast.success('نظر شما با موفقیت اضافه شد');
    },
    onError: () => {
      toast.error('خطا در ارسال نظر');
    },
  });

  return { data, isPending, error, mutate };
};
