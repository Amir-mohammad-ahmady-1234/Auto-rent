import { FaCommentMedical } from 'react-icons/fa';

const HeaderComments = () => {
  return (
    <>
      <div className="flex flex-col space-y-5">
        <span className="flex items-center justify-start gap-2 text-3xl text-gray-500">
          <FaCommentMedical /> نظرات من
        </span>
        <hr className="text-gray-300" />
      </div>

      <div className="flex items-start justify-around">
        <button className="rounded-full bg-gray-600 px-2 py-1 text-white hover:bg-gray-700">
          تمام نظرات
        </button>
        <button className="rounded-full bg-gray-400 px-2 py-1 text-white hover:bg-gray-500">
          نظرات تایید شده
        </button>
        <button className="rounded-full bg-gray-400 px-2 py-1 text-white hover:bg-gray-500">
          نظرات در انتظار تایید
        </button>
      </div>
    </>
  );
};

export default HeaderComments;
