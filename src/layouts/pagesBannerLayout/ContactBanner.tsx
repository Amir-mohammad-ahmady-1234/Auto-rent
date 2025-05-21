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
    <div className="relative flex min-h-[400px] flex-col items-center justify-center px-20 py-40 text-center font-['Estedad-FD',_-apple-system,_Roboto,_Helvetica,_sans-serif] shadow-md md:px-20 md:py-40 lg:px-20 lg:py-[158px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d2e8edb3ff95e16c1d0f1f74409a589e2281162?placeholderIfAbsent=true"
        alt="Contact Banner Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative mt-16 flex flex-col items-center gap-3">
        <h1 className="max-w-full text-5xl leading-[1.3] font-extrabold text-[#FDB713] md:text-6xl">
          {title}
        </h1>
        <p className="max-w-md text-lg font-medium text-white md:text-xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
