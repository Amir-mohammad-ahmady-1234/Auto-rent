import { Link } from 'react-router-dom';
import Header from '../ui/Header';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="px-4 pt-10 font-['Estedad'] text-[#353535] sm:px-6 lg:px-0">
        <div className="relative mt-10 flex min-h-[789px] w-full flex-col items-start justify-center rounded-2xl bg-white">
          {/* Background image */}
          <img
            src="/images/Frame 1430102901.png"
            className="absolute top-2/8 left-1/2 z-0 h-[810px] w-[1222px] max-w-full -translate-x-1/2 -translate-y-1/2 object-contain"
            alt="404 background"
          />

          {/* Not found text */}
          <div className="absolute bottom-[380px] left-1/2 z-0 flex w-[1222px] max-w-full -translate-x-1/2 items-center justify-center text-xl font-medium">
            صفحه مورد نظر یافت نشد
          </div>

          {/* Home page button */}
          <Link
            to="/"
            className="absolute bottom-[328px] left-1/2 z-0 h-9 w-[208px] max-w-full -translate-x-1/2 overflow-hidden rounded-lg border border-[#194BF0] px-4 py-[6px] text-center text-sm text-[#194BF0]"
          >
            رفتن به صفحه اصلی
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
