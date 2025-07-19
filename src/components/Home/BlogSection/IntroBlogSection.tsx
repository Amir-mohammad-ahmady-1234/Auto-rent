import { Link } from 'react-router-dom';

const IntroBlogSection = () => {
  return (
    <div className="mt-12 ml-[23px] flex w-full max-w-[1034px] flex-wrap items-stretch gap-[5px] self-start text-center font-[Estedad-FD] md:mt-10 md:max-w-full">
      <div className="mt-[47px] flex min-h-12 items-center justify-center gap-2 self-end overflow-hidden rounded-lg px-4 py-2 text-lg leading-8 font-semibold text-[#194BF0] capitalize md:mt-10">
        <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>
        <Link to="/blogs/all_blogs">
          <div className="my-auto self-stretch text-[#194BF0]">مشاهده همه</div>
        </Link>
      </div>
      <div className="flex-basis-0 flex w-fit flex-shrink-0 flex-grow flex-col items-center justify-center md:max-w-full">
        <div className="flex w-[845px] max-w-full flex-col items-center justify-center">
          <div className="text-2xl font-normal text-[#5E5E5E]">مقالات ما</div>
          <div className="mt-2 text-[32px] leading-[1.4] font-bold text-[#353535] md:max-w-full">
            مجله <span className="text-[#d79c10]">خودرو</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBlogSection;
