import keyLogo from '../../../assets/stepsLogo/Frame 1430103011.png';
import CartLogo from '../../../assets/stepsLogo/Frame 427320960.png';
import MachinLogo from '../../../assets/stepsLogo/Frame 427320959.png';

const steps = [
  {
    id: 1,
    title: 'خودروی خود را انتخاب کنید.',
    desc: 'خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.',
    icon: MachinLogo,
  },
  {
    id: 2,
    title: 'تاریخ تحویل را تعیین کنید.',
    desc: 'تاریخ موردنظر خود را از تقویم، انتخاب و رزرو کنید.',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a3e67044ce820ba13de7347c6f7eea34d8906652?placeholderIfAbsent=true',
  },
  {
    id: 3,
    title: 'هزینه اجاره را پرداخت کنید.',
    desc: 'می‌توانید از طریق کیف پول آنلاین یا کارت‌های عضو شتاب هزینه را پرداخت کنید.',
    icon: CartLogo,
  },
  {
    id: 4,
    title: 'خودرو را دریافت کنید.',
    desc: 'در زمان و مکان تعیین شده، خودروی خود را دریافت کنید.',
    icon: keyLogo,
  },
];

const RentSteps = () => {
  return (
    <section
      dir="ltr"
      className="font-iranyekan mx-auto my-16 w-full max-w-6xl px-4 md:px-8"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {/* Step Items */}
        {steps.slice(0, 2).map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center md:items-start md:text-right"
          >
            <div className="text-[72px] leading-none font-bold text-[#0B2FA6] opacity-10 md:text-[40px]">
              {step.id}
            </div>
            <div className="mt-2 flex items-center gap-4">
              <img
                src={step.icon}
                alt={`Step ${step.id} icon`}
                className="h-20 w-20 rounded-2xl border border-[#D7D7D7] bg-white object-contain"
              />
              <div>
                <div className="text-xl font-bold text-[#212121]">
                  <span className="text-[#d79c10]">
                    {step.title.split(' ')[0]}
                  </span>{' '}
                  {step.title.split(' ').slice(1).join(' ')}
                </div>
                <p className="mt-2 text-base font-medium text-[#5E5E5E]">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Center Car Image */}
        <div className="flex items-center justify-center md:row-span-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a145e7f54f10e82286a963f26442504902385d?placeholderIfAbsent=true"
            alt="Rental process illustration"
            className="w-full max-w-xs md:max-w-sm"
          />
        </div>

        {steps.slice(2).map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center md:items-start md:text-right"
          >
            <div className="text-[72px] leading-none font-bold text-[#0B2FA6] opacity-10 md:text-[40px]">
              {step.id}
            </div>
            <div className="mt-2 flex items-center gap-4">
              <img
                src={step.icon}
                alt={`Step ${step.id} icon`}
                className="h-20 w-20 rounded-2xl border border-[#D7D7D7] bg-white object-contain"
              />
              <div>
                <div className="text-xl font-bold text-[#212121]">
                  <span className="text-[#d79c10]">
                    {step.title.split(' ')[0]}
                  </span>{' '}
                  {step.title.split(' ').slice(1).join(' ')}
                </div>
                <p className="mt-2 text-base font-medium text-[#5E5E5E]">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RentSteps;
