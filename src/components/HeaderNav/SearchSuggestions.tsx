import React from 'react';
import { FiSearch, FiClock, FiHeart, FiTrash2, FiX } from 'react-icons/fi';

interface SearchSuggestionsProps {
  onClose: () => void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ onClose }) => {
  // Dummy data for recent and popular searches
  const recentSearches = [
    'Tiggo 8 Pro',
    'پرشیا ELX سفید',
    'Rolls Royce Cullinan',
    'DS 3',
    'بنز S500',
  ];
  const popularSearches = [
    'بنز S500',
    'پرشیا ELX سفید',
    'S500 بنز',
    'Audi A8',
    'Peugeot 2008',
    'Ferrari Roma',
  ];

  return (
    <div className="font-iransans relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 left-3 cursor-pointer text-gray-500 hover:text-gray-700"
      >
        <FiX size={24} />
      </button>

      {/* Search Input */}
      <div className="relative mt-6 mb-6">
        <input
          type="text"
          placeholder="جستجو در اتورنت..."
          className="font-iransans w-full rounded-lg border border-gray-300 py-2 pr-10 pl-10 text-right focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <FiSearch className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400" />
      </div>

      {/* Recent Searches */}
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <FiClock className="ml-2" />
            <span>تاریخچه جستجوهای شما</span>
          </div>
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <FiTrash2 size={18} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {recentSearches.map((search, index) => (
            <span
              key={index}
              className="font-iransans cursor-pointer rounded-full bg-gray-200 px-3 py-1 text-sm"
            >
              {search}
            </span>
          ))}
        </div>
      </div>

      {/* Popular Searches */}
      <div>
        <div className="mb-3 flex items-center text-gray-600">
          <FiHeart className="ml-2" />
          <span>جستجوهای پرطرفدار</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search, index) => (
            <span
              key={index}
              className="font-iransans cursor-pointer rounded-full bg-gray-200 px-3 py-1 text-sm"
            >
              {search}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestions;
