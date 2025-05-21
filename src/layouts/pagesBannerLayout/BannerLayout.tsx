import { Outlet, useLocation } from 'react-router-dom';
import ContactBanner from './ContactBanner';

const pageData: Record<string, { title: string; subtitle: string }> = {
  concat: {
    title: 'تماس با ما',
    subtitle: 'تماس با ما',
  },
  faq: {
    title: 'سوالات ما',
    subtitle: 'سؤالات متداول',
  },
};

const BannerLayout = () => {
  const { pathname } = useLocation();

  // Drived state
  const pageRoute = pathname.split('/')[1];

  const current = pageData[pageRoute] || {
    title: '',
    subtitle: '',
  };

  return (
    <>
      <ContactBanner
        title={current.title}
        subtitle={`انتورنت < ${current.subtitle}`}
      />
      <Outlet />
    </>
  );
};

export default BannerLayout;
