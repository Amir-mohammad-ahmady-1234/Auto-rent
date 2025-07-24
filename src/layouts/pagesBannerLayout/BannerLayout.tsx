import { Outlet } from 'react-router-dom';
import ContactBanner from './ContactBanner';
import usePageLocation from '../../hooks/usePageLocation';
import { HiChevronLeft } from 'react-icons/hi'; // import icon

const BannerLayout = () => {
  const { title, subtitle } = usePageLocation();

  return (
    <>
      <ContactBanner
        title={title}
        subtitle={
          <>
            اتورنت <HiChevronLeft className="inline-block text-yellow-400 mx-1" /> {subtitle}
          </>
        }
      />
      <Outlet />
    </>
  );
};

export default BannerLayout;
