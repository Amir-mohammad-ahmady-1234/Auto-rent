import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div className="rtl flex flex-col gap-10 rounded-2xl border border-[#EDEDED] bg-white p-12 sm:p-6 md:p-8">
      {/* Header */}
      <div className="w-full border-b border-[#C2C2C2] pb-4">
        <h2 className="text-right text-2xl font-normal text-[#494949] md:text-xl">
          ارتباط با دفتر مرکزی اتورنت
        </h2>
      </div>

      {/* Content: Map and Details */}
      <div className="flex flex-col-reverse gap-10 md:flex-row md:gap-12">
        {/* Contact Details */}
        <div className="flex w-full flex-col items-start gap-8 md:w-1/2">
          {/* Address */}
          <div className="flex flex-row-reverse items-center gap-2">
            <div className="text-right font-['Estedad',sans-serif]">
              <span className="text-xl font-normal text-[#494949] md:text-lg">
                آدرس:
              </span>
              <span className="text-xl font-normal text-[#9A9A9A] md:text-lg">
                تهران، میدان آزادی، خیابان آزادی، خیابان شادمان، پلاک 23
              </span>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-5 md:w-5"
            >
              {/* SVG paths */}
            </svg>
          </div>

          {/* Phone Number */}
          <div className="flex flex-row-reverse items-center gap-2">
            <div className="text-right font-['Estedad',sans-serif]">
              <span className="text-xl font-normal text-[#494949] md:text-lg">
                شماره تماس:
              </span>
              <span className="text-xl font-normal text-[#9A9A9A] md:text-lg">
                02166552589
              </span>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-5 md:w-5"
            >
              {/* SVG paths */}
            </svg>
          </div>

          {/* Email */}
          <div className="flex flex-row-reverse items-center gap-2">
            <div className="text-right font-['Estedad',sans-serif]">
              <span className="text-xl font-normal text-[#494949] md:text-lg">
                ایمیل:
              </span>
              <span className="text-xl font-normal text-[#9A9A9A] md:text-lg">
                info@AutoRent.com
              </span>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-5 md:w-5"
            >
              {/* SVG paths */}
            </svg>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full flex-shrink-0 md:w-1/2 h-[250px] sm:h-[200px] lg:h-[330px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cff15f32a1e9285ac40a748fc5a1759c4f47d9a"
            alt="Location map"
            className="h-full w-full rounded border border-[#CBCBCB] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
