import { Link } from 'react-router-dom';

interface MobileNavProps {
  links: string[];
  onLinkClick?: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onLinkClick, links }) => (
  <div className="flex flex-col space-y-6">
    {links.map((link) => (
      <Link
        key={link}
        to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={onLinkClick}
        className="text-lg font-medium text-gray-800"
      >
        {link}
      </Link>
    ))}
  </div>
);

export default MobileNav;
