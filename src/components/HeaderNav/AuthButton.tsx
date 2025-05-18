import { motion } from 'framer-motion';

const AuthButton: React.FC = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="h-10 cursor-pointer rounded-lg bg-blue-600 px-4 font-medium text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
  >
    ورود / ثبت‌نام
  </motion.button>
);

export default AuthButton