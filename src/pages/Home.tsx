import React from 'react';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import BrandLogos from '../components/Home/BrandLogos';
import BannerSection from '../components/Home/BannerSection';
import CarTypesSection from '../components/Home/CarTypesSection';
import CarsList from '../components/Home/carsList/CarsList';
import HowToRent from '../components/Home/RentalMethod/HowToRent';
import RentSteps from '../components/Home/RentalMethod/RentSteps';
import FAQContent from '../components/Home/FAQSection/FAQContent';
import CustomerReviews from '../components/Home/CustomerReviws/CustomerReviews';
import BlogSection from '../components/Home/BlogSection/BlogSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-[#F3F3F3] pb-16">
      <HeroSection />
      <BrandLogos />

      <div className="mt-[47px] flex w-full max-w-[1224px] flex-col items-stretch self-center md:mt-10 md:max-w-full">
        <BannerSection />
        <CarTypesSection />
        <CarsList />
        <HowToRent />
      </div>

      <div className="mt-[58px] flex w-full flex-col items-center px-20 md:mt-10 md:max-w-full md:px-5">
        <RentSteps />
        <FAQContent />
        <CustomerReviews />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
