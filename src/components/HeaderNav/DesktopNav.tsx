import { motion } from 'framer-motion';
import getPageRouteName from '../../hooks/getPageRouteName';
import { Link } from 'react-router-dom';

interface DesktopNavProps {
  links: string[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {links.map((link) => {
        const page = getPageRouteName(link);

        return (
          <motion.div
            key={link}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer font-medium text-gray-700"
          >
            <Link to={`/${page?.route}`}>{link}</Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
