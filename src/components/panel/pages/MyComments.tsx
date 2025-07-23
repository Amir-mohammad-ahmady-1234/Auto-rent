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
    <div className="mt-10 flex flex-col space-y-8 px-4 sm:px-10 md:px-20 lg:px-32">
      <HeaderComments />

      {!comments?.length && (
        <div className="flex items-center justify-center rounded-xl bg-gradient-to-r from-gray-500 to-gray-700 p-6 text-center text-white shadow-lg">
          <h2 className="text-lg font-semibold">
            نظری از شما ثبت نشده است! با ثبت نظری جدید زیر هر خودرو، نظر جدیدی
            را ثبت کنید
          </h2>
        </div>
      )}

      {comments?.length && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {comments
            .map((comment) => (
              <div
                key={comment.id}
                className="flex w-full flex-col space-y-3 rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:shadow-xl"
              >
                <p className="text-justify text-gray-700">{comment.text}</p>
                <p className="text-left text-sm text-gray-500">
                  {convertDateToPersian(new Date(comment.created_at ?? ''))}
                </p>
              </div>
            ))
            .reverse()}
        </div>
      )}
    </div>
  );
};

export default MyComments;
