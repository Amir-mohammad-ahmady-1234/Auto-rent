import Logo from '../HeaderNav/Logo';

const LoginLevelOne = () => {
  return (
    <div
      dir="ltr"
      className="flex h-screen w-full flex-col items-center bg-gray-200"
    >
      <div className="m-auto flex h-6/7 w-3/5 flex-row overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Image section */}
        <div className="w-1/3">
          <img
            src="images/olav-tvedt--oVaYMgBMbs-unsplash 1.png"
            alt="car"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form section */}
        <div className="relative flex flex-1 flex-col justify-start px-10 py-6">
          {/* Logo */}
          <div className="mt-2 mb-8 self-center">
            <Logo />
          </div>

          {/* Content */}
          <div className="flex h-full flex-col justify-center gap-6">
            <h2 className="text-center text-2xl font-semibold">
              ورود / ثبت‌نام
            </h2>
            <p className="text-center text-gray-600">
              .کد تأیید به شماره موبایلی که وارد می‌کنید ارسال خواهد شد
            </p>

            <div className="flex flex-col gap-3">
              <input
                id="phone"
                type="tel"
                placeholder="شماره موبایل"
                className="rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <label className="flex items-center justify-end gap-2 text-sm">
                <span>
                  با ورود و ثبت‌نام در سایت، با{' '}
                  <span className="text-blue-500">قوانین اتورنت</span> موافقت
                  می‌کنم
                </span>
                <input type="checkbox" className="accent-blue-500" />
              </label>

              <button className="rounded-md cursor-pointer bg-blue-600 py-2 text-white transition hover:bg-blue-700">
                تأیید و ادامه
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLevelOne;
