import React from 'react';

interface MainReviewProps {
  name: string;
  avatar: string;
  review: string;
}

const MainReview: React.FC<MainReviewProps> = ({ name, avatar, review }) => (
  <div className="flex w-full flex-col items-center text-center">
    <div className="flex w-full flex-col items-center">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="h-20 w-20 rounded-full object-cover shadow-md"
      />
      <div className="mt-3 text-lg font-bold text-gray-800">{name}</div>
    </div>

    <p className="mt-6 w-full max-w-xl text-base leading-relaxed text-gray-600">
      {review}
    </p>
  </div>
);

export default MainReview;
