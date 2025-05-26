import keyLogo from '../../../assets/stepsLogo/Frame 1430103011.png';
import CartLogo from '../../../assets/stepsLogo/Frame 427320960.png';
import MachinLogo from '../../../assets/stepsLogo/Frame 427320959.png';

const RentSteps = () => {
  return (
    <div
      dir="ltr"
      className="font-iranyekan w-full max-w-[1256px] self-start px-4 md:max-w-full md:px-0"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center md:gap-y-16">
        {/* Step 1 (Top Right on Desktop) */}
        <div className="flex flex-col items-center text-center md:col-start-3 md:items-end md:text-right">
          <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:text-[40px]">
            1
          </div>
          <div className="flex items-center justify-center gap-4 md:flex-row-reverse">
            <div className="my-auto flex min-h-[92px] w-[270px] min-w-[240px] flex-col items-stretch justify-start self-stretch text-right">
              <div className="text-2xl leading-[1.4] font-bold text-[#212121]">
                <span className="text-[#d79c10]">خودروی</span> خود را انتخاب
                کنید.
              </div>
              <div className="mt-2 flex-1 text-base font-medium text-[#5E5E5E]">
                خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.
              </div>
            </div>
            <div className="my-auto flex h-20 w-20 flex-none flex-shrink-0 self-stretch rounded-2xl border border-[#D7D7D7] bg-white">
              <img src={MachinLogo} alt="MachineLogo" />
            </div>
          </div>
        </div>

        {/* Step 2 (Top Left on Desktop) */}
        <div className="flex flex-col items-center text-center md:items-start md:text-right">
          <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:text-[40px]">
            2
          </div>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3e67044ce820ba13de7347c6f7eea34d8906652?placeholderIfAbsent=true"
              className="my-auto aspect-square w-20 flex-none flex-shrink-0 self-stretch object-contain object-center"
              alt="Step 2 icon"
            />
            <div className="my-auto min-h-[92px] w-[260px] min-w-[240px] self-stretch text-right">
              <div className="text-2xl leading-[1.4] font-bold text-[#212121]">
                <span className="text-[#d79c10]">تاریخ</span> تحویل را تعیین
                کنید.
              </div>
              <div className="mt-2 flex-1 text-base font-medium text-[#5E5E5E]">
                تاریخ موردنظر خود را از تقویم، انتخاب و رزرو کنید
              </div>
            </div>
          </div>
        </div>

        {/* Car Image (Center on Desktop) */}
        <div className="flex items-center justify-center md:col-start-2 md:row-span-2 md:row-start-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a145e7f54f10e82286a963f26442504902385d?placeholderIfAbsent=true"
            className="aspect-[0.43] w-full max-w-[300px] object-contain object-center md:max-w-full"
            alt="Rental process illustration"
          />
        </div>

        {/* Step 3 (Bottom Right on Desktop) */}
        <div className="flex flex-col items-center text-center md:col-start-3 md:items-end md:text-right">
          <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:text-[40px]">
            3
          </div>
          <div className="flex items-center justify-center gap-4 md:flex-row-reverse">
            <div className="my-auto flex min-h-[117px] w-[267px] min-w-[240px] flex-col items-stretch justify-start self-stretch text-right">
              <div className="text-2xl leading-[1.4] font-bold text-[#212121]">
                <span className="text-[#d79c10]">هزینه</span> اجاره را پرداخت
                کنید.
              </div>
              <div className="mt-2 flex-1 text-base font-medium text-[#5E5E5E]">
                می توانید از طریق کیف پول آنلاین یا کارت های عضو شبکه شتاب هزینه
                اجاره را پرداخت کنید.
              </div>
            </div>
            <div className="my-auto flex h-20 w-20 flex-none flex-shrink-0 self-stretch rounded-2xl border border-[#D7D7D7] bg-white">
              <img src={CartLogo} alt="CartLogo" />
            </div>
          </div>
        </div>

        {/* Step 4 (Bottom Left on Desktop) */}
        <div className="flex flex-col items-center text-center md:items-start md:text-right">
          <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:text-[40px]">
            4
          </div>
          <div className="flex items-center justify-center gap-4">
            <img
              src={keyLogo}
              className="my-auto aspect-square w-20 flex-none flex-shrink-0 self-stretch object-contain object-center"
              alt="Step 4 icon"
            />
            <div className="my-auto min-h-[92px] w-[258px] min-w-[240px] self-stretch text-right">
              <div className="text-2xl leading-[1.4] font-bold text-[#212121]">
                <span className="text-[#d79c10]">خودرو</span> را دریافت کنید.
              </div>
              <div className="mt-2 flex-1 text-base font-medium text-[#5E5E5E]">
                در زمان و مکان تعیین شده، خودروی خود را دریافت کنید.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentSteps;
