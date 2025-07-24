import { Link } from 'react-router-dom';

const IntroBlogSection = () => (
  <div className="mb-10 flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl font-normal text-gray-600 md:text-3xl">
      مقالات ما
    </h2>
    <h3 className="mt-2 text-3xl font-bold text-gray-800 md:text-4xl">
      مجله <span className="text-[#d79c10]">خودرو</span>
    </h3>

    <Link
      to="/blogs/all_blogs"
      className="mt-6 inline-block rounded-lg bg-transparent px-6 py-2 text-sm font-semibold text-[#194BF0] ring-1 ring-[#194BF0] transition hover:bg-[#194BF0] hover:text-white md:text-base"
    >
      مشاهده همه مقالات
    </Link>
  </div>
);

export default IntroBlogSection;
