import FAQQuestion from './FAQQuestion';

const questions = [
  {
    id: 1,
    title: 'در صورت بروز نقص فنی برای خودرو چه اتفاقی می افتد؟',
    content:
      'در صورت بروز نقص فنی تیم اتورنت در کمترین زمان ممکن اماده تعمیر ماشین اجاره ای شما هست.',
  },
  {
    id: 2,
    title: 'هزینه بنزین و کارواش در خودروهای اجاره ای به عهده کیست؟',
    content: `در زمان اجاره خودرو بدون راننده خودروها کارواش شده و با باک بنزین
              پر تحویل مشتریان عزیز می گردد. در زمان استرداد خودرو در صورتی که
              خودرو به کارواش نیاز داشته و یا خودرو دارای کسر سوخت باشد هزینه آن
              بر عهده مشتری می باشد.`,
  },
  {
    id: 3,
    title: 'آیا ماشین های اتورنت دارای بیمه هستند؟',
    content:
      'بله درصورت هر گونه خرابی توسط مشتری, با کسر هزینه بیمه خسارت آن پرداخت میشود.',
  },
  {
    id: 4,
    title: 'محدودیت کیلومتر در اجاره خودرو چقدر می باشد؟',
    content:
      'حداکثر در یک ساعت مشتری نیتواند 50 کیلومتر طی کند و در صورت بیشتر شدن بابت هر کیلوتر مبلغی به هزینه شما اضافه میشود.',
  },
];

const FAQContent = () => {
  return (
    <div
      dir="ltr"
      className="font-iransans mt-14 flex w-full max-w-full flex-col items-center px-4 md:mt-10"
    >
      <div className="mt-6 flex w-full flex-wrap items-start justify-center gap-6">
        <div className="my-auto w-full min-w-[240px] self-stretch overflow-hidden rounded-2xl md:w-[392px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1aabda2c2c47ba77c8da0035cb66f5ab24fdc6a4?placeholderIfAbsent=true"
            className="aspect-[0.85] w-full object-contain object-center"
            alt="FAQ illustration"
          />
        </div>
        <div
          className="font-iransans my-auto w-full min-w-[240px] self-stretch md:flex-1"
          dir="rtl"
        >
          {questions.map((faq) => (
            <FAQQuestion faq={faq} key={faq.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQContent;
