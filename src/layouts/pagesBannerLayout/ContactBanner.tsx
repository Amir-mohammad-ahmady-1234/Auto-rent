import React from 'react';

interface ContactBannerProps {
  title: React.ReactNode; // تغییر برای پشتیبانی از JSX آیکون
  subtitle: React.ReactNode;
}

const ContactBanner: React.FC<ContactBannerProps> = ({ title, subtitle }) => {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center bg-cover bg-center text-center font-['IranYekan',_-apple-system,_Roboto,_Helvetica,_sans-serif] shadow-md"
      style={{
        backgroundImage:
          "url('https://cdn.builder.io/api/v1/image/assets/TEMP/8d2e8edb3ff95e16c1d0f1f74409a589e2281162?placeholderIfAbsent=true')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

      <div className="animate-fadeIn relative flex w-full max-w-4xl flex-col items-center gap-3 px-4 py-20 sm:py-24 md:py-32 lg:py-40">
        <h1 className="w-full text-3xl font-extrabold text-[#FDB713] drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="w-full text-base font-medium text-white drop-shadow-sm sm:text-lg md:text-xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
