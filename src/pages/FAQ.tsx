import BrandLogos from '../components/Home/BrandLogos';
import FAQContent from '../components/Home/FAQSection/FAQContent';

const FAQ = () => {
  return (
    <div className="flex flex-col gap-8">
      <FAQContent />
      <BrandLogos />
    </div>
  );
};

export default FAQ;
