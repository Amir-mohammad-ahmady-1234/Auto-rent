import React from 'react';
import ReviewHeader from './ReviewHeader';
import MainReview from './MainReview';
import ReviewCard from './ReviewCard';

const reviewsData = {
  mainReview: {
    name: 'اولدوز بهاور',
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/95a83c6fafab9828a542a2f0337664ecd3cc5992?placeholderIfAbsent=true',
    review:
      'اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن می‌گشتم! بدون هیچ شکی می‌گم، اتو رنت تو کار خودش بهترینه! پشتیبانی عالی، هزینه بسیار مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم! حتماً دفعه بعد هم برای اجاره ماشین به سراغشون میام.',
  },
  reviewCards: [
    {
      name: 'فاطمه ابراهیمی‌فر',
      date: '27 دی ماه 1380',
      avatar:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d695215b8f29bc96b9fec302bc70fb5a57ebaaf2?placeholderIfAbsent=true',
    },
    {
      name: 'فرزانه حیدری',
      date: '27 دی ماه 1380',
      avatar:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/bb77c204054c70f00fa38010cdf7b8aaa0dc7df7?placeholderIfAbsent=true',
    },
    {
      name: 'محمدجواد امینی',
      date: '27 دی ماه 1399',
      avatar:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ced30fba420b1b9fa6e41748241566fd92530d0e?placeholderIfAbsent=true',
    },
    {
      name: 'اولدوز بهاور',
      date: '27 دی ماه 1380',
      avatar:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/71487b5ca058a83b90733ca72e91ffe90f1bbc34?placeholderIfAbsent=true',
      isHighlighted: true,
    },
  ],
};

const CustomerReviews: React.FC = () => (
  <section className="font-iransans mx-auto mt-12 w-full max-w-4xl px-4 md:px-0">
    <ReviewHeader />

    {/* Main Review */}
    <div className="mt-6 rounded-2xl bg-white px-6 py-8 shadow-lg">
      <MainReview
        name={reviewsData.mainReview.name}
        avatar={reviewsData.mainReview.avatar}
        review={reviewsData.mainReview.review}
      />
    </div>

    {/* Other Reviews */}
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {reviewsData.reviewCards.map((r, i) => (
        <ReviewCard
          key={i}
          name={r.name}
          date={r.date}
          avatar={r.avatar}
          isHighlighted={r.isHighlighted}
        />
      ))}
    </div>
  </section>
);

export default CustomerReviews;
