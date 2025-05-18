interface MobileNavProps {
  links: string[];
  onLinkClick?: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onLinkClick, links }) => (
  <div className="flex flex-col space-y-6">
    {links.map((link) => (
      <a
        key={link}
        onClick={onLinkClick}
        className="text-lg font-medium text-gray-800"
        href="#"
      >
        {link}
      </a>
    ))}
  </div>
);

export default MobileNav;
