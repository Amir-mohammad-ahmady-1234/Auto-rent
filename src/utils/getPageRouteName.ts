const getPageRouteName = (irLoc: string) => {
  const pageRoute: Record<string, { route: string }> = {
    'سوالات متداول': {
      route: 'faq',
    },
    'تماس با ما': {
      route: 'concat',
    },
    'درباره ما': {
      route: 'about',
    },
    'رزرو خودرو': {
      route: 'cars',
    },
  };

  return pageRoute[irLoc];
};

export default getPageRouteName;
