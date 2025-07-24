const carTypes = [
  {
    title: 'اسپرت',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bdf5461d92fbd22cba01df8f16fa4dc7e1cdfff0?placeholderIfAbsent=true',
  },
  {
    title: 'شاسی‌بلند',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/af9c8d1c83fb3db53edc0b19040fe3777cc41c29?placeholderIfAbsent=true',
  },
  {
    title: 'کروک',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ddd9b5ee2f30c3faa88fef10eb9a8c9178d8d1b8?placeholderIfAbsent=true',
  },
  {
    title: 'سدان',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/929c6818451bb7d3e27f4601c975e7357a67b058?placeholderIfAbsent=true',
  },
  {
    title: 'کوپه',
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/60efd4d07ed1c030ff6711bcc5b2e3cfb43e71f3?placeholderIfAbsent=true',
  },
];

const CarTypesSection = () => {
  return (
    <section className="font-iranyekan bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-3xl">
          انواع خودروها
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {carTypes.map(({ title, src }) => (
            <div
              key={title}
              className="group flex transform flex-col items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mt-4 flex h-28 w-full items-center justify-center bg-gray-100 md:h-32">
                <img
                  src={src}
                  alt={title}
                  className="max-h-full object-contain"
                />
              </div>

              <div className="p-3 text-center">
                <h3 className="text-base font-semibold text-gray-700 group-hover:text-blue-600 md:text-lg">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarTypesSection;
