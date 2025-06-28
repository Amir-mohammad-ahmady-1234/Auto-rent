import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/Auth/useAuth';
import { supabase } from '../../services/supabase';

const AuthButton: React.FC = () => {
  const { phone, logout } = useAuth();
  const { pathname } = useLocation();

  async function handleLogout() {
    const isLogout = confirm('قصد داری از حسابت خارج شی ؟');

    if (isLogout) {
      await supabase.from('test_otps').delete().eq('phone', phone);
      logout();
    }
  }

  return (
    <Link to={`${phone ? pathname : 'login'}`}>
      <motion.button
        onClick={phone ? handleLogout : undefined}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="font-iranyekan h-10 cursor-pointer rounded-lg bg-blue-600 px-4 font-medium text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        {phone ? phone : 'ورود / ثبت‌نام'}
      </motion.button>
    </Link>
  );
};

export default AuthButton;
