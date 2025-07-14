import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/Auth/useAuth';
import { useMutation } from '@tanstack/react-query';
import { delteUserAcc } from '../../services/apiLogout';

const AuthButton: React.FC = () => {
  const { phone, logout } = useAuth();
  const { pathname } = useLocation();

  const { error, isPending, mutate } = useMutation({
    mutationFn: () => delteUserAcc(phone),
    onSuccess: () => {
      logout();
    },
    onError: () => {
      throw new Error('there is problem in deleting user');
    },
  });

  function handleLogout() {
    const isLogout = confirm('قصد داری از حسابت خارج شی ؟');

    if (isLogout) mutate();
  }

  return (
    <Link to={`${phone ? pathname : 'login'}`}>
      <motion.button
        onClick={phone ? handleLogout : undefined}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="font-iranyekan h-10 cursor-pointer rounded-lg bg-blue-600 px-4 font-medium text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        {isPending
          ? 'در حال خروج ...'
          : !phone
            ? 'ورود / ثبت نام'
            : phone
              ? phone
              : error
                ? 'خطا در خروج'
                : '___'}
      </motion.button>
    </Link>
  );
};

export default AuthButton;
