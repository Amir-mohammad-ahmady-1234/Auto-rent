import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#0B2FA6] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] -top-[300px] -left-[300px] bg-[#194BF0] rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] -bottom-[400px] -right-[400px] bg-[#FDB713] rounded-full opacity-10"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* 404 Number */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[200px] md:text-[300px] font-bold text-[#FDB713] leading-none mb-8"
        >
          404
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          صفحه مورد نظر یافت نشد!
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-xl mx-auto leading-relaxed">
          متاسفانه صفحه ای که به دنبال آن هستید وجود ندارد، حذف شده یا نامعتبر است.
          <br />
          لطفاً از طریق دکمه زیر به صفحه اصلی بازگردید.
        </p>

        {/* Back Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="bg-[#FDB713] text-[#0B2FA6] inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold hover:bg-[#fdcb51] transition-colors"
          >
            <FiArrowLeft className="text-2xl" />
            بازگشت به صفحه اصلی
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;