import { FaBox, FaClock, FaTags } from 'react-icons/fa';

const BannerSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-black md:max-w-full">
      <img
        src="/images/image 52.png"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
        alt="بنر"
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-6 text-white md:py-10">
        <h2 className="mb-3 text-base font-bold text-amber-400 md:text-xl">
          چرا اتو رنت؟
        </h2>

        <p className="mb-6 max-w-2xl text-center text-xs leading-relaxed md:text-sm">
          اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک می‌کند تا در
          مسافرت‌ها، قرار ملاقات‌های مهم، مجالس و مراسم‌های خانوادگی ماشین مناسب
          خود را در اختیار داشته باشید. اگر شما اصلا خودرویی در اختیار ندارید یا
          خودروی شما مطمئن نیست، می‌توانید از سوئیچ، خودروی مناسب خود را کرایه
          کرده و با آسودگی به سفر بروید.
        </p>

        {/* باکس‌ها */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-3 md:grid-cols-3">
          {/* باکس اول */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-3 text-center shadow transition hover:shadow-md md:p-4">
            <FaTags className="mb-1 text-2xl text-blue-600" />
            <h3 className="text-sm font-semibold text-gray-800">قیمت مناسب</h3>
            <p className="mt-1 text-xs text-gray-600">
              هدف ما ارائه بهترین خدمات با مناسب ترین قیمت ممکن است.
            </p>
          </div>

          {/* باکس دوم */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-3 text-center shadow transition hover:shadow-md md:p-4">
            <FaClock className="mb-1 text-2xl text-blue-600" />
            <h3 className="text-sm font-semibold text-gray-800">
              پشتیبانی 24 ساعته
            </h3>
            <p className="mt-1 text-xs text-gray-600">
              کارشناسان ما همیشه پاسخگوی سوالات شما خواهند بود.
            </p>
          </div>

          {/* باکس سوم */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-3 text-center shadow transition hover:shadow-md md:p-4">
            <FaBox className="mb-1 text-2xl text-blue-600" />
            <h3 className="text-sm font-semibold text-gray-800">
              تحویل در محل
            </h3>
            <p className="mt-1 text-xs text-gray-600">
              خودرو در زمان و مکان انتخابی شما تحویل خواهد شد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
