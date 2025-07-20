import { useAuth } from '../../../../context/Auth/useAuth';
import { convertDateToPersian } from '../../../../utils/converDateToPersian';
import type { Comment } from './CommentForSelectedCar';

const Comments = ({ comments }: { comments: Comment[] }) => {
  const { phone } = useAuth();

  return (
    <div className="max-h-80 space-y-4 overflow-y-auto pr-2">
      {comments?.map((comment) => (
        <div
          key={comment.id}
          className="flex items-start gap-3 border-b pb-3 last:border-none"
        >
          <img
            src={comment.avatar}
            alt={comment.phone ?? 'ناشناس'}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm text-gray-700">{comment.text}</p>
            <p className="mt-1 text-xs text-gray-500">
              {comment.phone === phone ? '' : 'شماره'}{' '}
              {(comment.phone === phone ? 'شما' : comment.phone) ?? 'ناشناس'} -{' '}
              {convertDateToPersian(new Date(comment.created_at ?? ''))}
            </p>
          </div>
        </div>
      )).reverse()}
    </div>
  );
};

export default Comments;
