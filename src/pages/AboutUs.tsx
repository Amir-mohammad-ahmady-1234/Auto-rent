import React, { useEffect } from 'react';
import { AboutFeatures } from '../components/AboutUs/AboutFeatures';
import { AboutNetwork } from '../components/AboutUs/AboutNetwork';
import { AboutEmergency } from '../components/AboutUs/AboutEmergency';
import { scrollToTop } from '../utils/ScrollToTop';

const AboutUs: React.FC = () => {
  useEffect(function () {
    scrollToTop();
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden bg-[#F3F3F3] pb-16">
      <AboutFeatures />
      <AboutNetwork />
      <AboutEmergency />
    </div>
  );
};

export default AboutUs;
