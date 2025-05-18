import { Link } from 'react-router-dom';
import MainLogo from '../../assets/Logo.png';

const Logo: React.FC = () => (
  <div className="flex items-center gap-1">
    {/* SVG Logo can be inserted here */}
    <Link to="/">
      <img src={MainLogo} alt="Auto-Rent-Logo" />
    </Link>
    {/* <div className="text-2xl font-black text-yellow-500">رنت</div>
    <div className="text-2xl font-black text-blue-600">اتو</div> */}
  </div>
);

export default Logo;
