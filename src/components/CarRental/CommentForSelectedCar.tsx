import React, { useState } from 'react';
import { useAuth } from '../../context/Auth/useAuth';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useGetComments, useSendComment } from '../../hooks/useCommentReq';
import FullPageLoading from '../../ui/FullPageLoading';
import { convertDateToPersian } from '../../utils/converDateToPersian';

interface Comment {
  mainCar_id: string;
  avatar: string;
  text: string;
}

const CommentForSelectedCar: React.FC = () => {
  const { phone } = useAuth();
  const navigate = useNavigate();
  const { id: mainCar_id } = useParams();

  const [commentText, setCommentText] = useState('');

  const {
    data: comments,
    error: getCommentErr,
    isLoading: isLoadingComments,
  } = useGetComments();

  const {
    error: sendCoomentError,
    isPending: isAddCommenting,
    mutate,
  } = useSendComment();

  if (isLoadingComments || !mainCar_id) return <FullPageLoading />;
  if (getCommentErr) {
    toast.error('خطا در دریافت نظرات');
    navigate(-1);
    return;
  }
  if (sendCoomentError) toast.error('خطا در ارسال نظر');

  const handleSendComment = async () => {
    if (!phone) {
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
      avatar: `https://api.dicebear.com/8.x/avataaars/svg?seed=${phone}`,
      text: commentText,
    };

    mutate(newComment, {
      onSuccess: () => {
        setCommentText('');
      },
    });
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center justify-between border-b pb-2">
        <h3 className="text-xl font-semibold text-yellow-600">نظرات</h3>
        <span className="text-sm text-yellow-500">4.7 ★</span>
      </div>

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

      <div className="max-h-80 space-y-4 overflow-y-auto pr-2">
        {comments
          ?.map((comment) => (
            <div
              key={comment.id}
              className="flex items-start gap-3 border-b pb-3 last:border-none"
            >
              <img
                src={comment.avatar}
                alt={phone ?? 'مهمان'}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm text-gray-700">{comment.text}</p>
                <p className="mt-1 text-xs text-gray-500">
                  شماره {phone ?? 'مهمان'} -{' '}
                  {convertDateToPersian(new Date(comment.created_at))}
                </p>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default CommentForSelectedCar;
