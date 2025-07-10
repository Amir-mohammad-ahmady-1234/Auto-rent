import type { TCar } from '../types/CarType';

export const carsData: TCar[] = [
  {
    id: '1',
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/f1037e973ebe648dc07b71753ab7369b8f69641e?placeholderIfAbsent=true',
    title: 'اجاره جنسیس کوپه',
    type: ['با راننده', 'لوکس'],
    brand: 'جنسیس',
    model: '2016',
    dailyPrice: '9000000',
    monthlyPrice: '8500000',
    maxPassenger: 4,
    minDriverAge: 25,
    maxBag: 2,
    rate: 4.5,
    images: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/f1037e973ebe648dc07b71753ab7369b8f69641e?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6cae8afd917916381bfeaaa1dda381a68fba179a?placeholderIfAbsent=true',
    ],
    details: [
      {
        title: 'مصرف سوخت',
        icon: '⛽️',
        descriptionWithIcon: '12 لیتر در 100 کیلومتر ⛽️',
      },
      { title: 'نوع بدنه', icon: '🚗', descriptionWithIcon: 'کوپه 🚗' },
      { title: 'گیربکس', icon: '⚙️', descriptionWithIcon: 'اتوماتیک ⚙️' },
      { title: 'پشتیبانی', icon: '📞', descriptionWithIcon: '24/7 ☎️' },
    ],
    features: [
      { title: 'گرم‌کن صندلی', icon: '🔥' },
      { title: 'استارت بدون کلید', icon: '🔑' },
      { title: 'تعلیق الکترونیکی', icon: '🛞' },
      { title: 'هوش مصنوعی رانندگی', icon: '🤖' },
    ],
    about:
      'این خودرو ترکیبی از قدرت، زیبایی و فناوری است. طراحی دینامیک بدنه و امکانات رفاهی مدرن، آن را به انتخابی محبوب برای کسانی تبدیل کرده که به‌دنبال تجربه‌ای لذت‌بخش از رانندگی هستند. از سفرهای درون‌شهری گرفته تا جاده‌های طولانی، همیشه همراه مطمئن شماست.',
  },
  {
    id: '2',
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6cae8afd917916381bfeaaa1dda381a68fba179a?placeholderIfAbsent=true',
    title: 'اجاره تویوتا لندکروز در تهران',
    type: ['بدون راننده', 'ایرانی'],
    brand: 'تویوتا',
    model: '2016',
    dailyPrice: '8500000',
    monthlyPrice: '8500000',
    maxPassenger: 4,
    minDriverAge: 25,
    maxBag: 2,
    rate: 4.5,
    images: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6cae8afd917916381bfeaaa1dda381a68fba179a?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/731eb47892c68cbe0f98db2a99f3e70dbce3c849?placeholderIfAbsent=true',
    ],
    details: [
      {
        title: 'مصرف سوخت',
        icon: '⛽️',
        descriptionWithIcon: '15 لیتر در 100 کیلومتر ⛽️',
      },
      { title: 'نوع بدنه', icon: '🚙', descriptionWithIcon: 'شاسی‌بلند 🚙' },
      { title: 'گیربکس', icon: '🕹️', descriptionWithIcon: 'دستی 🕹️' },
      {
        title: 'پشتیبانی',
        icon: '📞',
        descriptionWithIcon: '8 صبح تا 8 شب ☎️',
      },
    ],
    features: [
      { title: 'سقف پانوراما', icon: '🌌' },
      { title: 'صندلی برقی', icon: '💺' },
      { title: 'هشدار نقطه کور', icon: '🚨' },
      { title: 'کروز کنترل تطبیقی', icon: '🧭' },
    ],
    about:
      'با این خودرو، هر سفر به یک ماجراجویی لوکس تبدیل می‌شود. سیستم‌های ایمنی پیشرفته، مصرف سوخت بهینه و عملکرد قدرتمند موتور، تعادلی عالی میان کارایی و راحتی ایجاد کرده‌اند. طراحی جذاب آن در نگاه اول همه را مجذوب خود می‌کند.',
  },
  {
    id: '3',
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/731eb47892c68cbe0f98db2a99f3e70dbce3c849?placeholderIfAbsent=true',
    title: 'اجاره بنز E350 سدان',
    type: ['با راننده', 'لوکس'],
    brand: 'بنز',
    model: '2020',
    dailyPrice: '12000000',
    monthlyPrice: '8500000',
    maxPassenger: 4,
    minDriverAge: 25,
    maxBag: 2,
    rate: 4.5,
    images: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/731eb47892c68cbe0f98db2a99f3e70dbce3c849?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ffba8986276e49fc0ae371097249c9e82bfb81d4?placeholderIfAbsent=true',
    ],
    details: [
      {
        title: 'مصرف سوخت',
        icon: '⛽️',
        descriptionWithIcon: '10 لیتر در 100 کیلومتر ⛽️',
      },
      { title: 'نوع بدنه', icon: '🚗', descriptionWithIcon: 'سدان 🚗' },
      { title: 'گیربکس', icon: '⚙️', descriptionWithIcon: 'اتوماتیک ⚙️' },
      { title: 'پشتیبانی', icon: '📞', descriptionWithIcon: '24/7 ☎️' },
    ],
    features: [
      { title: 'پارک خودکار', icon: '🅿️' },
      { title: 'نمایشگر لمسی', icon: '🖥️' },
      { title: 'سیستم صوتی حرفه‌ای', icon: '🎵' },
      { title: 'نورپردازی کابین', icon: '💡' },
    ],
    about:
      'این ماشین فقط یک وسیله‌ی حمل‌ونقل نیست؛ ترکیبی از هنر مهندسی و طراحی است. فضای داخلی با کیفیت بالا، سیستم صوتی حرفه‌ای و کنترل هوشمند امکانات رفاهی، تجربه‌ای متفاوت از رانندگی را برای شما فراهم می‌کند.',
  },
  {
    id: '4',
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ffba8986276e49fc0ae371097249c9e82bfb81d4?placeholderIfAbsent=true',
    title: 'اجاره بنز sl کروک',
    type: ['بدون راننده', 'لوکس'],
    brand: 'بنز',
    model: '2023',
    dailyPrice: '15000000',
    monthlyPrice: '8500000',
    maxPassenger: 4,
    minDriverAge: 25,
    maxBag: 2,
    rate: 4.5,
    images: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ffba8986276e49fc0ae371097249c9e82bfb81d4?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8cc4239ad44c5478d4813729c8021c52b6820cc9?placeholderIfAbsent=true',
    ],
    details: [
      {
        title: 'مصرف سوخت',
        icon: '⛽️',
        descriptionWithIcon: '11 لیتر در 100 کیلومتر ⛽️',
      },
      { title: 'نوع بدنه', icon: '🏎️', descriptionWithIcon: 'کروک 🏎️' },
      { title: 'گیربکس', icon: '⚙️', descriptionWithIcon: 'اتوماتیک ⚙️' },
      { title: 'پشتیبانی', icon: '📞', descriptionWithIcon: '24 ساعته ☎️' },
    ],
    features: [
      { title: 'سقف جمع‌شو برقی', icon: '🧰' },
      { title: 'سیستم تهویه خودکار', icon: '❄️' },
      { title: 'دوربین 360 درجه', icon: '📸' },
      { title: 'ردیاب ماهواره‌ای', icon: '🛰️' },
    ],
    about:
      'خودرویی که طراحی آینده‌نگر و عملکرد بی‌نقص را در هم آمیخته است. مناسب برای کسانی که علاوه بر ظاهر، به کارایی و راحتی اهمیت می‌دهند. چه در جاده‌های پرپیچ‌وخم و چه در بزرگراه‌ها، همیشه عملکردی قابل‌اعتماد دارد.',
  },
  {
    id: '5',
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8cc4239ad44c5478d4813729c8021c52b6820cc9?placeholderIfAbsent=true',
    title: 'اجاره هیوندای توسان 2014',
    type: ['با راننده', 'تشریفات'],
    brand: 'هیوندای',
    model: '2000',
    dailyPrice: '8500000',
    monthlyPrice: '8500000',
    maxPassenger: 4,
    minDriverAge: 25,
    maxBag: 2,
    rate: 4.5,
    images: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8cc4239ad44c5478d4813729c8021c52b6820cc9?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/3c56450bb8c48444d02b6ce9e8b7913720447eb9?placeholderIfAbsent=true',
    ],
    details: [
      {
        title: 'مصرف سوخت',
        icon: '⛽️',
        descriptionWithIcon: '13 لیتر در 100 کیلومتر ⛽️',
      },
      { title: 'نوع بدنه', icon: '🚙', descriptionWithIcon: 'شاسی‌بلند 🚙' },
      { title: 'گیربکس', icon: '🕹️', descriptionWithIcon: 'دستی 🕹️' },
      {
        title: 'پشتیبانی',
        icon: '📞',
        descriptionWithIcon: '9 صبح تا 9 شب ☎️',
      },
    ],
    features: [
      { title: 'سنسور باران', icon: '🌧️' },
      { title: 'تشخیص خواب‌آلودگی', icon: '😴' },
      { title: 'یخ‌زدایی شیشه', icon: '❄️' },
      { title: 'صندلی کودک', icon: '👶' },
    ],
    about:
      'این خودرو با ترکیب ظرافت در طراحی و قدرت در عملکرد، برای رانندگانی طراحی شده که به جزئیات اهمیت می‌دهند. فرمان‌پذیری دقیق، سواری نرم و تجهیزات هوشمند، رانندگی با آن را به تجربه‌ای لذت‌بخش تبدیل کرده است.',
  },
  {
    id: '6',
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/3c56450bb8c48444d02b6ce9e8b7913720447eb9?placeholderIfAbsent=true',
    title: 'اجاره بی ام و 528',
    type: ['ماشین عروس', 'لوکس'],
    brand: 'بی ام و',
    model: '2002',
    dailyPrice: '4000000',
    monthlyPrice: '8500000',
    maxPassenger: 4,
    minDriverAge: 25,
    maxBag: 2,
    rate: 4.5,
    images: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/3c56450bb8c48444d02b6ce9e8b7913720447eb9?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/3c56450bb8c48444d02b6ce9e8b7913720447eb9?placeholderIfAbsent=true',
    ],
    details: [
      {
        title: 'مصرف سوخت',
        icon: '⛽️',
        descriptionWithIcon: '14 لیتر در 100 کیلومتر ⛽️',
      },
      { title: 'نوع بدنه', icon: '🚗', descriptionWithIcon: 'سدان 🚗' },
      { title: 'گیربکس', icon: '⚙️', descriptionWithIcon: 'اتوماتیک ⚙️' },
      { title: 'پشتیبانی', icon: '📞', descriptionWithIcon: '24 ساعته ☎️' },
    ],
    features: [
      { title: 'نور بالا خودکار', icon: '🔦' },
      { title: 'تشخیص علائم راه', icon: '🚧' },
      { title: 'کروز کنترل', icon: '🧭' },
      { title: 'پشتی صندلی ماساژور', icon: '💆‍♂️' },
    ],
    about:
      'برای کسانی که خواهان کیفیت، ایمنی و جذابیت هستند، این خودرو انتخابی بی‌نقص است. طراحی آیرودینامیک، مصرف سوخت مناسب و سیستم‌های کمکی رانندگی، همه برای آرامش خاطر شما در هر مسیر فراهم شده‌اند.',
  },
];
