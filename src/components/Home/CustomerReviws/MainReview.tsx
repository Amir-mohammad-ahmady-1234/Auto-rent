interface MainReviewProps {
  name: string;
  avatar: string;
  review: string;
}

const MainReview = ({ name, avatar, review }: MainReviewProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-start rounded-2xl border border-[#D7D7D7] bg-white py-4 text-center">
      <div className="flex w-[136px] max-w-full flex-col items-center justify-center py-4 text-base font-medium text-[#0C0C0C] sm:w-[100px]">
        <img
          src={avatar}
          className="aspect-square w-full object-contain object-center"
          alt={`${name}'s avatar`}
        />
        <div className="mt-1 text-[#0C0C0C] sm:text-sm">{name}</div>
        <div className="mt-1 flex min-h-6 w-full"></div>
      </div>
      <div className="mt-6 px-4 text-sm leading-[25px] font-normal text-[#727272] capitalize sm:text-xs sm:leading-6 md:max-w-full">
        {review}
      </div>
    </div>
  );
};

export default MainReview;
