import { motion } from 'framer-motion';

interface DesktopNavProps {
  links: string[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => (
  <nav className="hidden items-center gap-8 md:flex">
    {links.map((link) => (
      <motion.a
        key={link}
        whileHover={{ scale: 1.1 }}
        className="cursor-pointer font-medium text-gray-700"
        href="#"
      >
        {link}
      </motion.a>
    ))}
  </nav>
);

export default DesktopNav;
