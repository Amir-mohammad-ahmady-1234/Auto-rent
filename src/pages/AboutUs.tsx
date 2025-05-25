import { AboutFeatures } from '../components/AboutUs/AboutFeatures';
import { AboutNetwork } from '../components/AboutUs/AboutNetwork';
import { AboutEmergency } from '../components/AboutUs/AboutEmergency';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden bg-[#F3F3F3] pb-16">
      <AboutFeatures />
      <AboutNetwork />
      <AboutEmergency />
    </div>
  );
};

export default AboutUs;
