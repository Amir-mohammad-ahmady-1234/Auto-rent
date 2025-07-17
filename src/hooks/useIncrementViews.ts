import { useMutation, useQueryClient } from '@tanstack/react-query';
import { incrementArticleViews } from '../services/apiIncrementArticleViews';

export function useIncrementViews(postId: string) {
  const queryClient = useQueryClient();

  const { data, isPending, error, mutate } = useMutation({
    mutationFn: () => incrementArticleViews(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs', postId] });
    },
    onError: (error: Error) => {
      console.error('خطا در افزایش ویو:', error);
    },
  });

  return { data, error, isPending, mutate };
}
