import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface DesktopNavProps {
  links: string[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => (
  <nav className="hidden items-center gap-8 md:flex">
    {links.map((link) => (
      <motion.div
        key={link}
        whileHover={{ scale: 1.1 }}
        className="cursor-pointer font-medium text-gray-700"
      >
        <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</Link>
      </motion.div>
    ))}
  </nav>
);

export default DesktopNav;
