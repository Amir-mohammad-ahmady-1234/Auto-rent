import React, { useState } from 'react';
import { useAuth } from '../../../../context/Auth/useAuth';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  useGetComments,
  useSendComment,
} from '../../../../hooks/useCommentReq';
import FullPageLoading from '../../../../ui/FullPageLoading';
import SendComment from './SendComment';
import Comment from './Comments';

export interface Comment {
  mainCar_id: string;
  avatar: string;
  text: string;
  id?: string;
  created_at?: string;
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

  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center justify-between border-b pb-2">
        <h3 className="text-xl font-semibold text-yellow-600">نظرات</h3>
        {/* <span className="text-sm text-yellow-500">4.7 ★</span>s */}
      </div>

      <SendComment
        commentText={commentText}
        isAddCommenting={isAddCommenting}
        setCommentText={setCommentText}
        mainCar_id={mainCar_id}
        mutate={mutate}
        phone={phone ?? ''}
      />

      <Comment comments={comments ?? []} phone={phone ?? ''} />
    </div>
  );
};

export default CommentForSelectedCar;
