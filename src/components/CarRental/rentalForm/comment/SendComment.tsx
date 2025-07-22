import type { UseMutateFunction } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import type { Comment } from './CommentForSelectedCar';
import { useAuth } from '../../../../context/Auth/useAuth';

interface PropsType {
  commentText: string;
  setCommentText: React.Dispatch<React.SetStateAction<string>>;
  isAddCommenting: boolean;
  phone: string;
  mainCar_id: string;
  mutate: UseMutateFunction<never[], Error, Comment, unknown>;
}

const SendComment = ({
  commentText,
  setCommentText,
  isAddCommenting,
  phone,
  mainCar_id,
  mutate,
}: PropsType) => {
  const navigate = useNavigate();

  const { phone: phoneNumber } = useAuth();

  const handleSendComment = async () => {
    if (!phoneNumber) {
      toast.error('ابتدا به حساب خود وارد شوید');
      navigate('/login');
      return;
    }

    if (!commentText.trim()) {
      toast.error('لطفاً نظر خود را وارد کنید');
      return;
    }

    const newComment: Comment = {
      mainCar_id,
      avatar: `https://api.dicebear.com/8.x/avataaars/svg?seed=${phoneNumber}`,
      text: commentText,
      phone,
    };

    mutate(newComment, {
      onSuccess: () => {
        setCommentText('');
      },
    });
  };

  return (
    <div className="mb-4">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="نظر خود را بنویسید..."
        className="w-full rounded border px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none"
      />
      <button
        onClick={handleSendComment}
        className="mt-2 w-full cursor-pointer rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
      >
        {isAddCommenting ? 'در حال ارسال نظر ...' : 'ارسال نظر'}
      </button>
    </div>
  );
};

export default SendComment;
