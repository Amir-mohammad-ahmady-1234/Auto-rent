// components/ConfirmDialog.tsx
import { motion, AnimatePresence } from 'framer-motion';

interface ConfirmDialogProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title = 'آیا مطمئنی ؟',
  description = 'این عملیات قابل بازگشت نیست.',
  onConfirm,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="w-80 rounded-lg bg-white p-6 text-center shadow-xl"
          >
            <h2 className="mb-2 text-lg font-bold">{title}</h2>
            <p className="mb-4 text-sm text-gray-600">{description}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="rounded bg-gray-200 px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-300"
              >
                لغو
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className="rounded bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
              >
                تایید
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmDialog;
