import React from 'react';

interface Comment {
  id: number;
  user: string;
  avatar: string;
  text: string;
  date: string;
}

const comments: Comment[] = [
  {
    id: 1,
    user: 'کاربر نمونه',
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/bb77c204054c70f00fa38010cdf7b8aaa0dc7df7?placeholderIfAbsent=true',
    text: 'این خودرو عملکرد فوق‌العاده‌ای داره و تجربه رانندگی لذت‌بخشی رو ارائه می‌ده. پیشنهاد می‌کنم حتماً امتحانش کنید!',
    date: '2 روز پیش',
  },
];

const CommentForSelectedCar: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center justify-between border-b pb-2">
        <h3 className="text-xl font-semibold text-yellow-600">نظرات</h3>
        <span className="text-sm text-yellow-500">4.7 ★</span>
      </div>

      <div className="max-h-80 space-y-4 overflow-y-auto pr-2">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-start gap-3 border-b pb-3 last:border-none"
          >
            <img
              src={comment.avatar}
              alt={comment.user}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-700">{comment.text}</p>
              <p className="mt-1 text-xs text-gray-500">
                {comment.user} - {comment.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentForSelectedCar;
