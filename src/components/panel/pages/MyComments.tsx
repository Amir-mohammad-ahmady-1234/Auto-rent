import FullPageLoading from '../../../ui/FullPageLoading';
import { Error } from '../components/Error';
import { useGetAllUserComments } from '../../../hooks/useCommentReq';
import HeaderComments from '../components/my-comments/HeaderComments';
import { convertDateToPersian } from '../../../utils/converDateToPersian';

const MyComments = () => {
  const { data: comments, isLoading, error } = useGetAllUserComments();

  if (isLoading) return <FullPageLoading />;
  if (error)
    return (
      <Error message="خطا در دریافت نظرات ارسال شده ی شما. ابتدا اتصال خود را برسی کرده و سپس دوباره امتحان کنید." />
    );

  return (
    <div className="mt-10 flex flex-col space-y-10">
      <HeaderComments />

      {!comments?.length && (
        <div className="flex items-center justify-center bg-gray-500 text-white">
          <h2>
            نظری از شما ثبت نشده است! با ثبت نظری جدید زیر هر خودرو , نظر جدیدی
            را ثبت کنید.
          </h2>
        </div>
      )}

      {comments?.length && (
        <div className="m-5 flex flex-col items-center justify-center">
          {comments
            .map((comment) => (
              <>
                <div className="items-starts m-5 flex w-full flex-col justify-center rounded-2xl bg-gray-400 p-3 hover:bg-gray-500">
                  <p className="text-justify">{comment.text}</p>
                  <p className="text-left text-gray-600">
                    {convertDateToPersian(new Date(comment.created_at ?? ''))}
                  </p>
                </div>
              </>
            ))
            .reverse()}
        </div>
      )}
    </div>
  );
};

export default MyComments;
