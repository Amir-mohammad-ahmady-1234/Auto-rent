interface ReviewCardProps {
  name: string;
  date: string;
  avatar: string;
  isHighlighted?: boolean;
}

const ReviewCard = ({
  name,
  date,
  avatar,
  isHighlighted = false,
}: ReviewCardProps) => {
  return (
    <div
      className={`flex flex-col items-stretch justify-center self-stretch rounded-2xl border border-[#D7D7D7] ${isHighlighted ? 'bg-[#FDB713]' : 'bg-white'} font-iransans p-4 text-center`}
    >
      <div className="flex w-full items-center justify-center gap-4">
        <div className="my-auto flex flex-col items-stretch justify-start self-stretch">
          <div className="self-end text-base font-medium text-[#212121] sm:text-sm">
            {name}
          </div>
          <div className="mt-2 text-sm leading-[25px] font-normal text-[#494949] sm:text-xs">
            {date}
          </div>
        </div>
        <img
          src={avatar}
          className="my-auto aspect-square w-16 flex-shrink-0 self-stretch rounded-[70px] object-contain object-center sm:w-12"
          alt={`${name}'s avatar`}
        />
      </div>
    </div>
  );
};

export default ReviewCard;
