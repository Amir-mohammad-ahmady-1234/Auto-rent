import { Outlet } from 'react-router-dom';
import ContactBanner from './ContactBanner';
import usePageLocation from '../../hooks/usePageLocation';

const BannerLayout = () => {
  const { title, subtitle } = usePageLocation();

  return (
    <>
      <ContactBanner title={title} subtitle={`انتورنت < ${subtitle}`} />
      <Outlet />
    </>
  );
};

export default BannerLayout;
