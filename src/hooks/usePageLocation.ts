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
  };

  // Drived state
  const pageRoute = pathname.split('/')[1];

  const current = pageData[pageRoute] || {
    title: '',
    subtitle: '',
  };

  return current;
};

export default usePageLocation;
