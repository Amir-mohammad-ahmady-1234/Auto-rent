import React from 'react';

interface ReviewCardProps {
  name: string;
  date: string;
  avatar: string;
  isHighlighted?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  date,
  avatar,
  isHighlighted = false,
}) => (
  <div
    className={`flex w-full flex-col items-center space-y-3 rounded-2xl bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-md ${
      isHighlighted ? 'scale-105 border-2 border-[#d79c10] bg-[#fff8e1]' : ''
    }`}
  >
    <img
      src={avatar}
      alt={`${name}'s avatar`}
      className="h-16 w-16 rounded-full object-cover"
    />
    <div className="text-base font-semibold text-gray-800">{name}</div>
    <div className="text-sm text-gray-500">{date}</div>
  </div>
);

export default ReviewCard;
