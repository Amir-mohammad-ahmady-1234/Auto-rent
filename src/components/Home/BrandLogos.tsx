const logos = [
  'https://cdn.builder.io/api/v1/image/assets/TEMP/3995753ade53ffeacb8b1db7227f94d425298491?placeholderIfAbsent=true',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/43fb8f57007b24fcd5fc7d59217001ea55b194b2?placeholderIfAbsent=true',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/be1287f6db9a0c9667f3a864c18630241dd3da46?placeholderIfAbsent=true',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/29fa396474a6485aa1f5d48680f8a467d0fce33f?placeholderIfAbsent=true',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/20a53b55709151234d74c88ec31939ba20915563?placeholderIfAbsent=true',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/83a35b12f81b80977870af1dd743a7cd5b66a3b4?placeholderIfAbsent=true',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/bfaf2f1d21854b01976a4efc7cd0d423d202192e?placeholderIfAbsent=true',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/a5affed2a3d59f42eeb1beba956871e070ea49c9?placeholderIfAbsent=true',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/948906afda0d345ac5ca6149235bdd1ac60b8fe4?placeholderIfAbsent=true',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/053808d45be97a26e3a77fce6e0a5a804a6531ae?placeholderIfAbsent=true',
];

const BrandLogos = () => (
  <section className="bg-white px-4 py-12">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-6 text-center text-xl font-bold text-gray-800 md:text-2xl">
        برندهای همراه ما
      </h2>

      {/* موبایل: اسکرول افقی / دسکتاپ: گرید */}
      <div className="flex snap-x snap-mandatory space-x-6 overflow-x-auto md:grid md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:gap-8 md:space-x-0 md:overflow-visible">
        {logos.map((src, i) => (
          <div
            key={i}
            className="flex h-20 w-32 flex-shrink-0 transform snap-center items-center justify-center rounded-lg border border-gray-200 bg-gray-50 transition-transform hover:scale-105 md:h-auto md:w-auto"
          >
            <img
              src={src}
              alt={`Brand ${i}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandLogos;
