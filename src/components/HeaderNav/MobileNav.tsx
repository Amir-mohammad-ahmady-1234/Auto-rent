import { Link } from 'react-router-dom';
import getPageRouteName from '../../utils/getPageRouteName';

interface MobileNavProps {
  links: string[];
  onLinkClick?: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onLinkClick, links }) => (
  <div className="flex flex-col space-y-6">
    {links.map((link) => {
      const page = getPageRouteName(link);

      return (
        <Link
          key={link}
          to={`/${page?.route}`}
          onClick={onLinkClick}
          className="font-iranyekan text-lg font-medium text-gray-800"
        >
          {link}
        </Link>
      );
    })}
  </div>
);

export default MobileNav;
