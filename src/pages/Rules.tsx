const Rules = () => {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 leading-loose text-gray-700">
      <div>
        <h2 className="mb-3 text-lg font-bold">مدارک لازم</h2>
        <ul className="list-disc space-y-1 pr-5">
          <li>ارائه گواهینامه رانندگی با اعتبار حداقل 6 ماه</li>
          <li>ارائه کارت ملی (برای خانم‌ها، کارت ملی همسر قابل قبول باشد)</li>
          <li>
            ارائه یک فقره چک یا سفته به ارزش خودرو به‌عنوان ضمانت (چک مسافرتی
            قابل قبول نمی‌باشد)
          </li>
          <li>پرداخت مبلغ اجاره به‌طور کامل جهت تحویل خودرو</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-bold">
          مدارک لازم برای اجاره خودرو افراد خارجی
        </h2>
        <ul className="list-disc space-y-1 pr-5">
          <li>گواهینامه بین‌المللی معتبر (International Driving Permit)</li>
          <li>پاسپورت معتبر</li>
          <li>پرداخت مبلغ اجاره به‌طور کامل جهت تحویل خودرو</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-bold">
          مدارک اجاره خودرو برای شرکت‌ها
        </h2>
        <ul className="list-disc space-y-1 pr-5">
          <li>کپی اساسنامه شرکت</li>
          <li>معرفی‌نامه شرکت</li>
          <li>پرداخت مبلغ اجاره به‌طور کامل جهت تحویل خودرو</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-bold">انواع بیمه برای انواع خودرو</h2>
        <p className="text-sm leading-relaxed">
          شرکت ما اولین شرکت در ایران است که تمامی خودروهای خود را با انواع
          بیمه‌های معتبر، به‌طور کامل ارائه می‌دهد. هدف از این بیمه‌ها تامین
          آسایش و رفاه حال مشتریان است. تمامی مشتریان گرامی می‌توانند از انواع
          بیمه‌ها برای خودرو اجاره‌ای خود استفاده کنند.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-md mb-2 font-bold">بیمه پایه</h3>
          <ul className="list-disc space-y-1 pr-5 text-sm">
            <li>شامل بیمه شخص ثالث</li>
            <li>شامل بیمه بدنه</li>
            <li>پرداخت خسارات ناشی از تصادفات، مشروط به فرانشیز</li>
          </ul>
        </div>

        <div>
          <h3 className="text-md mb-2 font-bold">بیمه کامل</h3>
          <ul className="list-disc space-y-1 pr-5 text-sm">
            <li>امداد جاده‌ای شبانه‌روزی (ERA)</li>
            <li>بیمه سرقت خودرو (ALL)</li>
            <li>بیمه خسارات شیشه و بدنه (GSP)</li>
            <li>پوشش تمامی خسارات تصادف حتی در شرایط سخت</li>
            <li>بیمه لاستیک، شیشه و چراغ‌ها (LLW)</li>
            <li>
              پرداخت خسارت بدون نیاز به ارائه مدرک کامل بیمه به‌صورت روزانه با
              مبلغ 235 تا 325 هزار تومان
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rules;
