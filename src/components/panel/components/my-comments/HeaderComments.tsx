import { FaCommentMedical } from 'react-icons/fa';

const HeaderComments = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-start gap-3 text-2xl font-bold text-gray-700">
        <FaCommentMedical className="text-gray-600" /> نظرات من
      </div>
      <hr className="border-t border-gray-300" />

      <div className="flex flex-wrap items-center justify-start gap-3">
        <button className="rounded-full bg-gradient-to-r from-gray-600 to-gray-800 px-4 py-2 text-sm font-medium text-white shadow hover:from-gray-700 hover:to-gray-900">
          تمام نظرات
        </button>
        <button className="rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-green-600 hover:to-green-700">
          نظرات تایید شده
        </button>
        <button className="rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-yellow-600 hover:to-yellow-700">
          نظرات در انتظار تایید
        </button>
      </div>
    </div>
  );
};

export default HeaderComments;
