import React from 'react';

interface ContactBannerProps {
  title: string;
  subtitle: string;
}

const ContactBanner: React.FC<ContactBannerProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-cover bg-center text-center font-['Estedad-FD',_-apple-system,_Roboto,_Helvetica,_sans-serif] shadow-md"
         style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/8d2e8edb3ff95e16c1d0f1f74409a589e2281162?placeholderIfAbsent=true')" }}>
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-opacity-50" />

      <div className="relative flex w-full max-w-4xl flex-col items-center gap-3 px-4 py-20 sm:py-24 md:py-32 lg:py-40">
        <h1 className="w-full text-3xl font-extrabold text-[#FDB713] sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="w-full text-base font-medium text-white sm:text-lg md:text-xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
