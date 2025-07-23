import { useMutation, useQueryClient } from '@tanstack/react-query';
import { insertReservation } from '../services/apiReservePosts';

export const useReservedPost = () => {
  const queryClient = useQueryClient();

  const { data, mutateAsync, error, status } = useMutation({
    mutationFn: insertReservation,
    onSuccess: () => {
      // Invalidate queries to refetch data after successful mutation
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
      console.log('Item created successfully!');
    },
    onError: (error) => {
      console.error('Error creating item:', error);
    },
  });

  return { data, mutateAsync, error, status };
};
