const SelectUserInfo = () => {
  return (
    <section className="w-full bg-gray-50 py-8">
      {/* Steps */}
      <div className="mx-auto flex max-w-4xl items-center justify-between rounded-lg bg-white p-4 shadow">
        <Step icon="🚗" title="انتخاب خودرو" isActive={true} />
        <Step icon="📄" title="مشخصات" />
        <Step icon="✅" title="تایید اطلاعات" />
        <Step icon="💳" title="پرداخت" />
        <Step icon="🏁" title="تحویل خودرو" />
      </div>

      {/* Alert */}
      <div className="mx-auto mt-4 max-w-4xl rounded bg-blue-100 p-3 text-center text-sm text-blue-800">
        برای اعتبارسنجی قبل از تحویل خودرو، مستنداتی از شما درخواست می‌گردد. عدم
        ارائه این مستندات باعث لغو این رزرو خواهد شد.
      </div>

      {/* Form */}
      <div className="mx-auto mt-6 max-w-4xl rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">مشخصات کاربر</h2>

        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm">نام</label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm">نام خانوادگی</label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm">کد ملی</label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm">شماره موبایل</label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm">ایمیل</label>
            <input
              type="email"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
        </form>

        <button className="mt-6 w-full rounded bg-gray-400 py-2 text-white">
          ادامه رزرو
        </button>
      </div>

      {/* Car Image */}
      <div className="mx-auto mt-6 max-w-4xl">
        <img
          src="/path-to-your-car-image.png"
          alt="car"
          className="w-full rounded-lg"
        />
      </div>
    </section>
  );
};

const Step = ({
  icon,
  title,
  isActive = false,
}: {
  icon: string;
  title: string;
  isActive?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full text-xl ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
    >
      {icon}
    </div>
    <span className="mt-2 text-xs">{title}</span>
  </div>
);

export default SelectUserInfo;
