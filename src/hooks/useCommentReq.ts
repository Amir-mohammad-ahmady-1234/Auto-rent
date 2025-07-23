import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getAllComments,
  getAllUserCommenteds,
  sendComment,
} from '../services/apiComment';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import type { Comment } from '../components/CarRental/rentalForm/comment/CommentForSelectedCar';

export const useGetComments = () => {
  const { id: currentCarId } = useParams();

  const { data, error, isLoading } = useQuery<Comment[]>({
    queryKey: ['comments', currentCarId],
    queryFn: () => getAllComments(currentCarId ?? ''),
  });

  return { data, error, isLoading };
};

export const useGetAllUserComments = () => {
  const phoneNumber = localStorage.getItem('phoneNumber');
  const name = localStorage.getItem('name');

  const { data, error, isLoading } = useQuery<Comment[]>({
    queryKey: ['comments', phoneNumber],
    queryFn: () => getAllUserCommenteds(phoneNumber ?? '', name ?? ''),
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
