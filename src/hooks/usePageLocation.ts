import { useLocation } from 'react-router-dom';

const usePageLocation = () => {
  const { pathname } = useLocation();

  const pageData: Record<string, { title: string; subtitle: string }> = {
    concat: {
      title: 'تماس با ما',
      subtitle: 'تماس با ما',
    },
    faq: {
      title: 'سوالات ما',
      subtitle: 'سؤالات متداول',
    },
    about: {
      title: 'درباره ما',
      subtitle: 'درباره ما',
    },
    rent: {
      title: 'اجاره خودرو',
      subtitle: 'لیست خودرو های اجاره ای',
    },
    blogs: {
      title: 'مقالات',
      subtitle: 'مقالات',
    },
  };

  // Drived state
  const pageRoute = pathname.split('/')[1];

  let current = pageData[pageRoute] || {
    title: '',
    subtitle: '',
  };

  if (pathname === '/rent/select_user_info') {
    current = { title: 'مشخصات', subtitle: 'ثبت درخواست رزرو' };
  }

  if (pathname === '/rent/payment') {
    current = { title: 'پرداخت', subtitle: 'ثبت درخواست رزرو' };
  }

  return current;
};

export default usePageLocation;
