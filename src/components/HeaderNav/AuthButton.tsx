import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/Auth/useAuth';
import { useMutation } from '@tanstack/react-query';
import { delteUserAcc } from '../../services/apiLogout';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ConfirmDialog from './ConfirmDialog';

const AuthButton: React.FC = () => {
  const { phone, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { error, isPending, mutate } = useMutation({
    mutationFn: () => delteUserAcc(phone),
    onSuccess: () => {
      logout();
    },
    onError: () => {
      console.error('Error deleting user:', error);
      alert('مشکلی در حذف حساب رخ داد.');
    },
  });

  const name = localStorage.getItem('name');

  function handleLogout() {
    setShowConfirm(true);
  }

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  const ButtonContent = (
    <>
      {isPending
        ? 'در حال خروج ...'
        : error
          ? 'خطا در خروج'
          : !phone
            ? 'ورود / ثبت نام'
            : name !== 'بدون نام' && name
              ? name
              : phone}

      {phone &&
        (isOpen ? (
          <FiChevronUp className="mr-2 scale-180" />
        ) : (
          <FiChevronDown className="mr-2 scale-180" />
        ))}
    </>
  );

  const Button = (
    <motion.button
      onClick={phone ? toggleDropdown : undefined}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`font-iranyekan flex h-10 w-40 cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-4 text-center font-medium text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
    >
      {ButtonContent}
    </motion.button>
  );

  return (
    <div className="relative inline-block text-left">
      {!phone ? <Link to="/login">{Button}</Link> : Button}

      <AnimatePresence>
        {isOpen && phone && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="ring-opacity-5 absolute left-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black"
          >
            <div className="py-1">
              <Link to="/panel">
                <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:font-bold">
                  رفتن به پنل
                </button>
              </Link>

              <button
                className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:font-bold"
                onClick={handleLogout}
              >
                خروج
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ConfirmDialog
        isOpen={showConfirm}
        title="خروج از حساب"
        description="آیا مطمئنی می‌خواهی از حسابت خارج شی و اطلاعاتت رو پاک کنی ؟"
        onConfirm={() => mutate()}
        onClose={() => setShowConfirm(false)}
      />
    </div>
  );
};

export default AuthButton;
