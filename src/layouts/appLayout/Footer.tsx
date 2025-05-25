import { FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import MainLogo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <div className="relative mt-20 flex w-full justify-center px-4 sm:px-6 lg:px-0">
      <div className="relative aspect-[2.83] min-h-[500px] w-full max-w-[1224px] overflow-hidden rounded-2xl shadow-[0_0_12px_rgba(0,0,0,0.35)]">
        {/* تصویر پس‌زمینه با گرادینت */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/95f36560f03793b2f7142786f04a8e885df56511?placeholderIfAbsent=true"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Footer banner"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

        {/* فوتر روی تصویر */}
        <footer className="absolute inset-0 flex items-end pt-16 pb-8 text-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* شبکه اصلی */}
            <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* لوگو */}
              <div className="lg:col-span-2">
                <div className="max-w-xs">
                  <img
                    src={MainLogo}
                    alt="Auto Rent Logo"
                    className="mb-6 h-10 sm:h-12"
                  />
                  <p className="text-sm leading-relaxed opacity-90 sm:text-base">
                    اتورنت اولین سامانه اجاره خودرو آنلاین در ایران با بیش از
                    ۱۰۰۰ خودروی لوکس و اقتصادی در سراسر کشور.
                  </p>
                </div>
              </div>

              {/* لینک‌ها */}
              <div>
                <h3 className="mb-4 text-base font-bold sm:text-lg">
                  دسترسی سریع
                </h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  {['سوالات متداول', 'تماس با ما', 'درباره ما'].map((item) => (
                    <li key={item}>
                      <Link
                        to={`${item === 'سوالات متداول' ? 'faq' : item === 'تماس با ما' ? 'concat' : item === 'درباره ما' ? 'about' : ''}`}
                        className="opacity-80 transition-opacity hover:opacity-100"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* اطلاعات تماس */}
              <div>
                <h3 className="mb-4 text-base font-bold sm:text-lg">
                  ارتباط با ما
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <FaPhoneAlt className="text-lg text-[#FDB713]" />
                    <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <MdEmail className="text-xl text-[#FDB713]" />
                    <span>info@autorent.com</span>
                  </div>
                  <div className="mt-4 flex gap-3">
                    {[FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
                      <button
                        key={index}
                        className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                      >
                        <Icon className="text-xl" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* خط جداکننده */}
            <div className="mb-6 border-t border-white/20" />

            {/* پایین فوتر */}
            <div className="flex flex-col items-center justify-between gap-4 text-center text-sm sm:text-base md:flex-row">
              <span className="opacity-90">
                © {new Date().getFullYear()} AutoRent. تمامی حقوق محفوظ است.
              </span>
              <div className="flex gap-6">
                <Link to="#" className="opacity-90 hover:underline">
                  قوانین و مقررات
                </Link>
                <Link to="#" className="opacity-90 hover:underline">
                  حریم خصوصی
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
