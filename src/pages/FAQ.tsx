import { useEffect } from 'react';
import BrandLogos from '../components/Home/BrandLogos';
import FAQContent from '../components/Home/FAQSection/FAQContent';
import { scrollToTop } from '../utils/ScrollToTop';

const FAQ = () => {
  useEffect(function () {
    scrollToTop();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <FAQContent />
      <BrandLogos />
    </div>
  );
};

export default FAQ;
