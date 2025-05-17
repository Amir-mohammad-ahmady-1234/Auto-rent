import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-[#F3F3F3] pb-16">
      {/* Hero Section */}
      <div className="relative flex min-h-[681px] w-full max-w-full flex-col items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/521cd6dc024fad6f0783125d9049931bba479ed1?placeholderIfAbsent=true"
          className="absolute inset-0 h-full w-full object-cover object-center"
          alt="Background"
        />
        <div className="relative flex w-full max-w-full flex-col items-stretch self-stretch">
          {/* Hero Content Section */}
          <div className="relative mt-9 flex min-h-[479px] w-full max-w-full flex-col items-end px-20 pt-[67px] pb-[126px] bg-blend-normal md:px-5 md:pb-[100px]">
            <div className="relative mb-[-25px] flex w-[763px] max-w-full flex-col md:mb-[10px]">
              <div className="flex w-[460px] max-w-full flex-col items-stretch self-end text-right font-[Estedad-FD]">
                <div className="w-[335px] self-end text-[44px] leading-[62px] font-bold text-[#FDB713]">
                  اُتـــو رِنت؛ سریع، آسان و به صرفه
                </div>
                <div className="mt-[7px] max-w-full text-[20px] leading-9 font-normal text-[#F9F9F9]">
                  سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن!{' '}
                </div>
              </div>
              <div className="mt-[88px] flex w-[55px] flex-col items-stretch justify-center overflow-hidden bg-[#9A9A9A] px-[2px] py-[3px] text-center font-[Estedad-VF] text-sm leading-[25px] font-black whitespace-nowrap text-[#D7D7D7] capitalize md:mt-10 md:whitespace-normal">
                <div className="flex min-h-[25px] w-full items-start justify-start md:whitespace-normal">
                  <div className="self-stretch md:whitespace-normal">رِنت</div>
                  <div className="self-stretch md:whitespace-normal">
                    اُتــو
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Options */}
        <div className="relative z-10 mt-[47px] ml-[53px] flex w-full max-w-[1069px] flex-col items-start text-center font-[Estedad-FD] text-sm leading-[25px] font-normal text-[#0C0C0C] capitalize md:mt-10 md:max-w-full">
          <div className="z-10 flex items-center justify-center gap-1">
            <div className="my-auto self-stretch">ساعت بازگشت</div>
            <div className="my-auto flex h-4 w-4 flex-shrink-0 self-stretch"></div>
          </div>
          <div className="z-10 mt-[-25px] ml-[143px] flex items-center justify-center gap-1 md:ml-[10px]">
            <div className="my-auto self-stretch">تاریخ بازگشت</div>
            <div className="my-auto flex h-4 w-4 flex-shrink-0 self-stretch"></div>
          </div>
          <div className="z-10 mt-[-25px] ml-[275px] flex items-center justify-center gap-1 md:ml-[10px]">
            <div className="my-auto self-stretch">ساعت تحویل</div>
            <div className="my-auto flex h-4 w-4 flex-shrink-0 self-stretch"></div>
          </div>
          <div className="z-10 mt-[-25px] flex items-center justify-center gap-1 self-center">
            <div className="my-auto self-stretch">تاریخ تحویل</div>
            <div className="my-auto flex h-4 w-4 flex-shrink-0 self-stretch"></div>
          </div>
          <div className="mt-[-25px] flex items-center justify-center gap-1 self-end">
            <div className="my-auto self-stretch">محل تحویل خودرو</div>
            <div className="my-auto flex h-4 w-4 flex-shrink-0 self-stretch"></div>
          </div>
        </div>

        {/* Search Box */}
        <div className="relative z-10 mt-[-105px] mb-[-98px] flex w-full max-w-[1223px] flex-col items-stretch justify-start rounded-2xl border border-[#D7D7D7] bg-white px-6 py-6 backdrop-blur-[27.65px] md:mb-[10px] md:max-w-full md:px-5">
          <div className="flex w-full flex-wrap items-center justify-between gap-[40px_100px] text-center font-[Estedad-FD] text-sm md:max-w-full">
            <div className="my-auto self-stretch font-medium text-[#194BF0]">
              اطلاعات بیشتر در مورد رزرو خودرو
            </div>
            <div className="my-auto flex min-w-[240px] items-start justify-start gap-2 self-stretch leading-[25px] font-semibold text-[#0C0C0C] capitalize md:max-w-full">
              <div className="min-h-10 gap-[10px] self-stretch rounded-[20px] border border-[#D7D7D7] px-3">
                اجاره ماشین عروس
              </div>
              <div className="min-h-10 gap-[10px] self-stretch rounded-[20px] border border-[#D7D7D7] px-3">
                اجاره خودرو بی راننده
              </div>
              <div className="min-h-10 gap-[10px] self-stretch rounded-[20px] border border-[#D7D7D7] bg-[#194BF0] px-3 text-white">
                اجاره خودرو با راننده
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="relative mt-4 flex w-full max-w-[1175px] flex-wrap items-center justify-end gap-3 self-end overflow-hidden rounded-2xl border border-[#F3F3F3] bg-white px-[14px] py-3 md:max-w-full">
            <div className="z-0 my-auto flex min-h-[31px] w-[106px] items-center justify-between gap-[40px_50px] self-stretch text-center font-[Estedad-FD] text-base font-medium whitespace-nowrap text-[#0C0C0C] md:whitespace-normal">
              <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>
              <div className="my-auto self-stretch">07:00</div>
            </div>
            <div className="z-0 my-auto h-8 w-0 flex-shrink-0 self-stretch border border-solid border-[#D7D7D7] bg-[#D7D7D7]"></div>
            <div className="z-0 my-auto flex min-h-[31px] w-[111px] items-center justify-between gap-[18px] self-stretch text-center font-[Estedad-FD] text-base font-medium whitespace-nowrap text-[#0C0C0C] md:whitespace-normal">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c72bfe452f463cd5decf7b159942396a8c51f8d?placeholderIfAbsent=true"
                className="my-auto aspect-square w-5 flex-shrink-0 self-stretch object-contain object-center"
                alt="Calendar icon"
              />
              <div className="my-auto self-stretch">1403٫02٫10</div>
            </div>
            <div className="z-0 my-auto h-8 w-0 flex-shrink-0 self-stretch border border-solid border-[#D7D7D7] bg-[#D7D7D7]"></div>
            <div className="z-0 my-auto flex min-h-[31px] w-[106px] items-center justify-between gap-[40px_50px] self-stretch text-center font-[Estedad-FD] text-base font-medium whitespace-nowrap text-[#212121] md:whitespace-normal">
              <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>
              <div className="my-auto self-stretch">07:00</div>
            </div>
            <div className="z-0 my-auto h-8 w-0 flex-shrink-0 self-stretch border border-solid border-[#D7D7D7] bg-[#D7D7D7]"></div>
            <div className="z-0 my-auto flex min-h-[31px] w-[111px] items-center justify-between gap-[18px] self-stretch text-center font-[Estedad-FD] text-base font-medium whitespace-nowrap text-[#212121] md:whitespace-normal">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c72bfe452f463cd5decf7b159942396a8c51f8d?placeholderIfAbsent=true"
                className="my-auto aspect-square w-5 flex-shrink-0 self-stretch object-contain object-center"
                alt="Calendar icon"
              />
              <div className="my-auto self-stretch">1403٫02٫10</div>
            </div>
            <div className="z-0 my-auto h-8 w-0 flex-shrink-0 self-stretch border border-solid border-[#D7D7D7] bg-[#D7D7D7]"></div>
            <div className="z-0 my-auto flex w-[527px] min-w-[240px] flex-wrap items-center justify-between gap-[40px_100px] self-stretch text-center font-[Estedad-FD] text-base leading-[29px] font-normal text-[#0C0C0C] capitalize md:max-w-full">
              <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>
              <div className="my-auto self-stretch">
                تهران-فرودگاه امام خمینی
              </div>
            </div>
            <div className="absolute bottom-0 left-0 z-0 flex h-14 min-h-[56px] w-14 items-center justify-center gap-[10px] self-start rounded-2xl bg-[#FDB713]">
              <div className="my-auto flex min-h-6 w-6 self-stretch"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="mt-[147px] flex flex-wrap items-center justify-center gap-[40px_56px] md:mt-10 md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3995753ade53ffeacb8b1db7227f94d425298491?placeholderIfAbsent=true"
          className="my-auto aspect-square w-20 flex-shrink-0 self-stretch object-contain object-center"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43fb8f57007b24fcd5fc7d59217001ea55b194b2?placeholderIfAbsent=true"
          className="my-auto aspect-[1.33] w-[93px] flex-shrink-0 self-stretch object-contain object-center"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/be1287f6db9a0c9667f3a864c18630241dd3da46?placeholderIfAbsent=true"
          className="my-auto aspect-square w-20 flex-shrink-0 self-stretch object-contain object-center"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29fa396474a6485aa1f5d48680f8a467d0fce33f?placeholderIfAbsent=true"
          className="my-auto aspect-[1.23] w-[74px] flex-shrink-0 self-stretch object-contain object-center"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a53b55709151234d74c88ec31939ba20915563?placeholderIfAbsent=true"
          className="my-auto aspect-[1.83] w-[110px] flex-shrink-0 self-stretch object-contain object-center"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a35b12f81b80977870af1dd743a7cd5b66a3b4?placeholderIfAbsent=true"
          className="my-auto aspect-[1.17] w-[70px] flex-shrink-0 self-stretch object-contain object-center"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfaf2f1d21854b01976a4efc7cd0d423d202192e?placeholderIfAbsent=true"
          className="my-auto aspect-[1.43] w-[86px] flex-shrink-0 self-stretch object-contain object-center"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5affed2a3d59f42eeb1beba956871e070ea49c9?placeholderIfAbsent=true"
          className="my-auto aspect-[2] w-[100px] flex-shrink-0 self-stretch object-contain object-center"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/948906afda0d345ac5ca6149235bdd1ac60b8fe4?placeholderIfAbsent=true"
          className="my-auto aspect-[1.98] w-[99px] flex-shrink-0 self-stretch object-contain object-center"
          alt="Brand logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/053808d45be97a26e3a77fce6e0a5a804a6531ae?placeholderIfAbsent=true"
          className="my-auto aspect-[2] w-[100px] flex-shrink-0 self-stretch object-contain object-center"
          alt="Brand logo"
        />
      </div>

      {/* Main Content Section */}
      <div className="mt-[47px] flex w-full max-w-[1224px] flex-col items-stretch self-center md:mt-10 md:max-w-full">
        {/* Banner Section */}
        <div className="relative flex min-h-[396px] w-full flex-col overflow-hidden rounded-2xl pb-[104px] md:max-w-full md:pb-[100px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c2ace1309830c3dde3d54305d1dcc35fdc5b0c6?placeholderIfAbsent=true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            alt="Banner background"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/492585bc045a54ff78aa0865bdcf30f21a1368c2?placeholderIfAbsent=true"
            className="mb-[-21px] aspect-[4.18] w-full object-contain object-center md:mb-[10px] md:max-w-full"
            alt="Banner content"
          />
        </div>

        {/* Car Types Section */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-center font-[Estedad-FD] text-2xl leading-[1.4] font-bold text-[#353535] md:mt-10 md:max-w-full">
          <div className="flex-basis-0 my-auto flex flex-1 flex-shrink flex-col items-stretch self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white pt-2 pr-[6px] whitespace-nowrap md:whitespace-normal">
            <div className="self-center text-[#353535]">اسپرت</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdf5461d92fbd22cba01df8f16fa4dc7e1cdfff0?placeholderIfAbsent=true"
              className="aspect-[2.3] w-full object-contain object-center"
              alt="Sport car"
            />
          </div>
          <div className="flex-basis-0 my-auto flex-1 flex-shrink self-stretch rounded-2xl">
            <div className="z-10 flex flex-col items-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white pt-[9px] pr-[1px] pl-2">
              <div className="self-center text-[#353535]">شاسی بلند</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af9c8d1c83fb3db53edc0b19040fe3777cc41c29?placeholderIfAbsent=true"
                className="aspect-[2.27] w-full object-contain object-center"
                alt="SUV car"
              />
            </div>
          </div>
          <div className="flex-basis-0 my-auto flex flex-1 flex-shrink flex-col items-stretch self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white pt-2 pr-[6px] whitespace-nowrap md:whitespace-normal">
            <div className="self-center text-[#353535]">کروک</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddd9b5ee2f30c3faa88fef10eb9a8c9178d8d1b8?placeholderIfAbsent=true"
              className="aspect-[2.3] w-full object-contain object-center"
              alt="Convertible car"
            />
          </div>
          <div className="flex-basis-0 my-auto flex flex-1 flex-shrink flex-col items-stretch self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white pt-2 pr-[7px] whitespace-nowrap md:whitespace-normal">
            <div className="self-center text-[#353535]">سدان</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/929c6818451bb7d3e27f4601c975e7357a67b058?placeholderIfAbsent=true"
              className="aspect-[2.3] w-full object-contain object-center"
              alt="Sedan car"
            />
          </div>
          <div className="flex-basis-0 my-auto flex flex-1 flex-shrink flex-col items-stretch self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white pt-2 pr-[6px] whitespace-nowrap md:whitespace-normal">
            <div className="self-center text-[#353535]">کوپه</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60efd4d07ed1c030ff6711bcc5b2e3cfb43e71f3?placeholderIfAbsent=true"
              className="aspect-[2.3] w-full object-contain object-center"
              alt="Coupe car"
            />
          </div>
        </div>

        {/* Car Listings Section */}
        <div className="mt-12 w-full max-w-[1033px] md:mt-10 md:max-w-full">
          <div className="flex gap-5 md:flex-col md:items-stretch md:gap-0">
            <div className="ml-0 flex w-[18%] flex-col items-stretch leading-normal md:ml-0 md:w-full">
              <div className="mt-[125px] flex min-h-12 flex-grow items-center justify-center gap-2 overflow-hidden rounded-lg px-4 py-2 text-center font-[Estedad-FD] text-lg leading-8 font-semibold text-[#194BF0] capitalize md:mt-10">
                <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>
                <div className="my-auto self-stretch text-[#194BF0]">
                  مشاهده همه
                </div>
              </div>
            </div>
            <div className="ml-5 flex w-[82%] flex-col items-stretch leading-normal md:ml-0 md:w-full">
              <div className="flex w-full flex-col items-stretch text-center font-[Estedad-FD] md:mt-1 md:max-w-full">
                <div className="flex flex-col items-center justify-center capitalize md:max-w-full">
                  <div className="flex w-[845px] max-w-full flex-col items-center justify-center">
                    <div className="text-2xl leading-[43px] font-extralight text-[#5E5E5E]">
                      مشاهده موجودی خودروها{' '}
                    </div>
                    <div className="mt-2 text-[32px] leading-[58px] font-extrabold text-[#D79C10] md:max-w-full">
                      <span className="text-[#353535]">رزرو خودرو در </span>{' '}
                      اُتـــورِنت
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end gap-2 self-center text-sm font-medium whitespace-nowrap text-[#194BF0] md:whitespace-normal">
                  <div className="my-auto min-h-12 w-32 gap-2 self-stretch overflow-hidden rounded-lg border border-[#194BF0] px-4 py-3 text-[#194BF0] md:whitespace-normal">
                    اقتصادی
                  </div>
                  <div className="my-auto min-h-12 w-32 gap-2 self-stretch overflow-hidden rounded-lg border border-[#194BF0] px-4 py-3 text-[#194BF0] md:whitespace-normal">
                    لوکس
                  </div>
                  <div className="my-auto min-h-12 w-32 gap-2 self-stretch overflow-hidden rounded-lg bg-[#194BF0] px-4 py-3 text-white md:whitespace-normal">
                    پرطرفدار
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Car Cards Section */}
        <div className="mt-6 font-[Estedad-FD] md:max-w-full">
          <div className="flex flex-wrap items-start justify-start gap-6 md:max-w-full">
            {/* Car Card 1 */}
            <div className="w-[392px] min-w-[240px] rounded-2xl border border-[#D7D7D7] bg-white p-4">
              <div className="flex w-full flex-col items-stretch justify-center border-b border-[#D7D7D7] pb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1037e973ebe648dc07b71753ab7369b8f69641e?placeholderIfAbsent=true"
                  className="aspect-[1.56] min-h-[225px] w-full max-w-[350px] self-center object-contain object-center"
                  alt="Genesis Coupe"
                />
                <div className="mt-2 w-full text-right">
                  <div className="w-full">
                    <div className="-webkit-box-orient-vertical -webkit-line-clamp-1 text-overflow-ellipsis text-base leading-[1.4] font-bold text-[#0C0C0C]">
                      اجاره جنسیس کوپه
                    </div>
                    <div className="mt-2 flex w-full items-center justify-end gap-[3px] text-xs leading-[22px] font-normal whitespace-nowrap capitalize md:whitespace-normal">
                      <div className="flex-basis-0 my-auto flex-1 flex-shrink self-stretch text-[#494949]">
                        2016
                      </div>
                      <div className="my-auto gap-[3px] self-stretch text-[#868686] md:whitespace-normal">
                        مدل:
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
                  <div className="text-[#494949] capitalize">روزانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
                  <div className="text-[#494949] capitalize">ماهانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full px-[1px] text-xs text-[#212121]">
                <div className="flex w-full items-start justify-between gap-[40px_100px]">
                  <div className="font-bold text-[#212121]">
                    80 میلیون تومان
                  </div>
                  <div className="text-right font-medium text-[#212121]">
                    مبلغ ضمانت:
                  </div>
                </div>
              </div>
              <div className="mt-2 min-h-10 w-full gap-2 self-stretch overflow-hidden rounded-lg bg-[#194BF0] px-4 py-2 text-center text-sm leading-[25px] font-semibold text-white capitalize">
                درخواست رزرو
              </div>
            </div>

            {/* Car Card 2 */}
            <div className="w-[392px] min-w-[240px] rounded-2xl border border-[#D7D7D7] bg-white p-4">
              <div className="flex w-full flex-col items-stretch justify-center border-b border-[#D7D7D7] pb-3 leading-[22px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cae8afd917916381bfeaaa1dda381a68fba179a?placeholderIfAbsent=true"
                  className="aspect-[1.56] min-h-[225px] w-full max-w-[350px] self-center object-contain object-center"
                  alt="Toyota Land Cruiser"
                />
                <div className="mt-2 w-full text-right">
                  <div className="w-full">
                    <div className="-webkit-box-orient-vertical -webkit-line-clamp-1 text-overflow-ellipsis text-base font-bold text-[#0C0C0C]">
                      اجاره تویوتا لندکروز در تهران 2013
                      <br />
                    </div>
                    <div className="mt-2 flex w-full items-center justify-end gap-[3px] text-xs font-normal whitespace-nowrap capitalize md:whitespace-normal">
                      <div className="flex-basis-0 my-auto flex-1 flex-shrink self-stretch text-[#494949]">
                        2016
                      </div>
                      <div className="my-auto gap-[3px] self-stretch text-[#868686] md:whitespace-normal">
                        مدل:
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs font-normal">
                  <div className="text-[#494949] capitalize">روزانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs font-normal">
                  <div className="text-[#494949] capitalize">ماهانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full px-[1px] text-xs text-[#212121]">
                <div className="flex w-full items-start justify-between gap-[40px_100px]">
                  <div className="font-bold text-[#212121]">
                    80 میلیون تومان
                  </div>
                  <div className="text-right font-medium text-[#212121]">
                    مبلغ ضمانت:
                  </div>
                </div>
              </div>
              <div className="mt-2 min-h-10 w-full gap-2 self-stretch overflow-hidden rounded-lg bg-[#194BF0] px-4 py-2 text-center text-sm leading-[25px] font-semibold text-white capitalize">
                درخواست رزرو
              </div>
            </div>

            {/* Car Card 3 */}
            <div className="w-[392px] min-w-[240px] rounded-2xl border border-[#D7D7D7] bg-white p-4">
              <div className="flex w-full flex-col items-stretch justify-center border-b border-[#D7D7D7] pb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/731eb47892c68cbe0f98db2a99f3e70dbce3c849?placeholderIfAbsent=true"
                  className="aspect-[1.56] min-h-[225px] w-full max-w-[350px] self-center object-contain object-center"
                  alt="Mercedes E350"
                />
                <div className="mt-2 w-full text-right">
                  <div className="w-full">
                    <div className="-webkit-box-orient-vertical -webkit-line-clamp-1 text-overflow-ellipsis text-base leading-[1.4] font-bold text-[#0C0C0C]">
                      اجاره بنز E350 سدان
                    </div>
                    <div className="mt-2 flex w-full items-center justify-end gap-[3px] text-xs leading-[22px] font-normal whitespace-nowrap capitalize md:whitespace-normal">
                      <div className="flex-basis-0 my-auto flex-1 flex-shrink self-stretch text-[#494949]">
                        2016
                      </div>
                      <div className="my-auto gap-[3px] self-stretch text-[#868686] md:whitespace-normal">
                        مدل:
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
                  <div className="text-[#494949] capitalize">روزانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
                  <div className="text-[#494949] capitalize">ماهانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full px-[1px] text-xs text-[#212121]">
                <div className="flex w-full items-start justify-between gap-[40px_100px]">
                  <div className="font-bold text-[#212121]">
                    80 میلیون تومان
                  </div>
                  <div className="text-right font-medium text-[#212121]">
                    مبلغ ضمانت:
                  </div>
                </div>
              </div>
              <div className="mt-2 min-h-10 w-full gap-2 self-stretch overflow-hidden rounded-lg bg-[#194BF0] px-4 py-2 text-center text-sm leading-[25px] font-semibold text-white capitalize">
                درخواست رزرو
              </div>
            </div>
          </div>

          {/* Second Row of Car Cards */}
          <div className="mt-6 flex flex-wrap items-start justify-start gap-6 md:max-w-full">
            {/* Car Card 4 */}
            <div className="w-[392px] min-w-[240px] rounded-2xl border border-[#D7D7D7] bg-white p-4">
              <div className="flex w-full flex-col items-stretch justify-center border-b border-[#D7D7D7] pb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffba8986276e49fc0ae371097249c9e82bfb81d4?placeholderIfAbsent=true"
                  className="aspect-[1.56] min-h-[225px] w-full max-w-[350px] self-center object-contain object-center"
                  alt="Mercedes SL Convertible"
                />
                <div className="mt-2 w-full text-right">
                  <div className="w-full">
                    <div className="-webkit-box-orient-vertical -webkit-line-clamp-1 text-overflow-ellipsis text-base leading-[1.4] font-bold text-[#0C0C0C]">
                      اجاره بنز sl کروک
                    </div>
                    <div className="mt-2 flex w-full items-center justify-end gap-[3px] text-xs leading-[22px] font-normal whitespace-nowrap capitalize md:whitespace-normal">
                      <div className="flex-basis-0 my-auto flex-1 flex-shrink self-stretch text-[#494949]">
                        2016
                      </div>
                      <div className="my-auto gap-[3px] self-stretch text-[#868686] md:whitespace-normal">
                        مدل:
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
                  <div className="text-[#494949] capitalize">روزانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
                  <div className="text-[#494949] capitalize">ماهانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full px-[1px] text-xs text-[#212121]">
                <div className="flex w-full items-start justify-between gap-[40px_100px]">
                  <div className="font-bold text-[#212121]">
                    80 میلیون تومان
                  </div>
                  <div className="text-right font-medium text-[#212121]">
                    مبلغ ضمانت:
                  </div>
                </div>
              </div>
              <div className="mt-2 min-h-10 w-full gap-2 self-stretch overflow-hidden rounded-lg bg-[#194BF0] px-4 py-2 text-center text-sm leading-[25px] font-semibold text-white capitalize">
                درخواست رزرو
              </div>
            </div>

            {/* Car Card 5 */}
            <div className="w-[392px] min-w-[240px] rounded-2xl border border-[#D7D7D7] bg-white p-4">
              <div className="flex w-full flex-col items-stretch justify-center border-b border-[#D7D7D7] pb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cc4239ad44c5478d4813729c8021c52b6820cc9?placeholderIfAbsent=true"
                  className="aspect-[1.56] min-h-[225px] w-full max-w-[350px] self-center object-contain object-center"
                  alt="Hyundai Tucson"
                />
                <div className="mt-2 w-full text-right">
                  <div className="w-full">
                    <div className="-webkit-box-orient-vertical -webkit-line-clamp-1 text-overflow-ellipsis text-base leading-[1.4] font-bold text-[#0C0C0C]">
                      اجاره هیوندای توسان 2014
                    </div>
                    <div className="mt-2 flex w-full items-center justify-end gap-[3px] text-xs leading-[22px] font-normal whitespace-nowrap capitalize md:whitespace-normal">
                      <div className="flex-basis-0 my-auto flex-1 flex-shrink self-stretch text-[#494949]">
                        2016
                      </div>
                      <div className="my-auto gap-[3px] self-stretch text-[#868686] md:whitespace-normal">
                        مدل:
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
                  <div className="text-[#494949] capitalize">روزانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
                  <div className="text-[#494949] capitalize">ماهانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full px-[1px] text-xs text-[#212121]">
                <div className="flex w-full items-start justify-between gap-[40px_100px]">
                  <div className="font-bold text-[#212121]">
                    80 میلیون تومان
                  </div>
                  <div className="text-right font-medium text-[#212121]">
                    مبلغ ضمانت:
                  </div>
                </div>
              </div>
              <div className="mt-2 min-h-10 w-full gap-2 self-stretch overflow-hidden rounded-lg bg-[#194BF0] px-4 py-2 text-center text-sm leading-[25px] font-semibold text-white capitalize">
                درخواست رزرو
              </div>
            </div>

            {/* Car Card 6 */}
            <div className="w-[392px] min-w-[240px] rounded-2xl border border-[#D7D7D7] bg-white p-4">
              <div className="flex w-full flex-col items-stretch justify-center border-b border-[#D7D7D7] pb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c56450bb8c48444d02b6ce9e8b7913720447eb9?placeholderIfAbsent=true"
                  className="aspect-[1.56] min-h-[225px] w-full max-w-[350px] self-center object-contain object-center"
                  alt="BMW 528"
                />
                <div className="mt-2 w-full text-right">
                  <div className="w-full">
                    <div className="-webkit-box-orient-vertical -webkit-line-clamp-1 text-overflow-ellipsis text-base leading-[1.4] font-bold text-[#0C0C0C]">
                      اجاره بی ام و 528
                    </div>
                    <div className="mt-2 flex w-full items-center justify-end gap-[3px] text-xs leading-[22px] font-normal whitespace-nowrap capitalize md:whitespace-normal">
                      <div className="flex-basis-0 my-auto flex-1 flex-shrink self-stretch text-[#494949]">
                        2016
                      </div>
                      <div className="my-auto gap-[3px] self-stretch text-[#868686] md:whitespace-normal">
                        مدل:
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
                  <div className="text-[#494949] capitalize">روزانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
                <div className="mt-2 flex w-full items-start justify-start gap-2 overflow-hidden rounded-lg bg-[#F3F3F3] px-2 py-2 text-xs leading-[22px] font-normal">
                  <div className="text-[#494949] capitalize">ماهانه</div>
                  <div className="flex-basis-0 flex-1 flex-shrink text-right text-base font-bold text-[#194BF0]">
                    8,500,000
                  </div>
                  <div className="text-right text-[#212121] capitalize">
                    از ۱ تا 30 روز:
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full px-[1px] text-xs text-[#212121]">
                <div className="flex w-full items-start justify-between gap-[40px_100px]">
                  <div className="font-bold text-[#212121]">
                    80 میلیون تومان
                  </div>
                  <div className="text-right font-medium text-[#212121]">
                    مبلغ ضمانت:
                  </div>
                </div>
              </div>
              <div className="mt-2 min-h-10 w-full gap-2 self-stretch overflow-hidden rounded-lg bg-[#194BF0] px-4 py-2 text-center text-sm leading-[25px] font-semibold text-white capitalize">
                درخواست رزرو
              </div>
            </div>
          </div>
        </div>

        {/* How to Rent Section */}
        <div className="mt-12 flex flex-col items-center justify-center self-center text-center font-[Estedad-FD] md:mt-10">
          <div className="flex flex-col items-center justify-center">
            <div className="text-2xl font-normal text-[#5E5E5E]">
              چگونه در وبسایت
            </div>
            <div className="mt-2 text-[32px] leading-[1.4] font-bold text-[#d79c10]">
              اُتـــورِنت، <span className="text-[#353535]">خودرو</span>
              <span className="text-[#353535]"> رزرو کنیم؟</span>
            </div>
          </div>
        </div>
      </div>

      {/* How to Rent Steps Section */}
      <div className="mt-[58px] flex w-full flex-col items-center px-20 md:mt-10 md:max-w-full md:px-5">
        <div className="w-full max-w-[1256px] self-start md:max-w-full">
          <div className="flex gap-5 md:flex-col md:items-stretch md:gap-0">
            <div className="ml-0 flex w-1/3 flex-col items-stretch leading-normal md:ml-0 md:w-full">
              <div className="mt-1 flex w-full flex-col font-[Estedad-FD] md:mt-10">
                <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] self-start border border-solid border-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:text-[40px]">
                  2
                </div>
                <div className="flex items-center justify-center gap-4 self-end">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3e67044ce820ba13de7347c6f7eea34d8906652?placeholderIfAbsent=true"
                    className="my-auto aspect-square w-20 flex-shrink-0 self-stretch object-contain object-center"
                    alt="Step 2 icon"
                  />
                  <div className="my-auto min-h-[92px] w-[260px] min-w-[240px] self-stretch">
                    <div className="text-right text-2xl leading-[1.4] font-bold text-[#212121]">
                      <span className="text-[#d79c10]">تاریخ</span> تحویل را
                      تعیین کنید.
                    </div>
                    <div className="mt-2 flex-1 text-justify text-base font-medium text-[#5E5E5E]">
                      تاریخ موردنظر خود را از تقویم، انتخاب و رزرو کنید
                    </div>
                  </div>
                </div>
                <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] mt-[379px] self-start border border-solid border-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:mt-10 md:text-[40px]">
                  4
                </div>
                <div className="flex items-center justify-center gap-4 self-end md:mr-[2px]">
                  <div className="my-auto flex h-20 w-20 flex-shrink-0 self-stretch rounded-2xl border border-[#D7D7D7] bg-white"></div>
                  <div className="my-auto min-h-[92px] w-[258px] min-w-[240px] self-stretch">
                    <div className="text-right text-2xl leading-[1.4] font-bold text-[#212121]">
                      <span className="text-[#d79c10]">خودرو</span> را دریافت
                      کنید.
                    </div>
                    <div className="mt-2 flex-1 text-justify text-base font-medium text-[#5E5E5E]">
                      در زمان و مکان تعیین شده، خودروی خود را دریافت کنید.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-5 flex w-1/3 flex-col items-stretch leading-normal md:ml-0 md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a145e7f54f10e82286a963f26442504902385d?placeholderIfAbsent=true"
                className="mt-[31px] aspect-[0.43] w-full flex-grow object-contain object-center md:mt-10"
                alt="Rental process illustration"
              />
            </div>
            <div className="ml-5 flex w-1/3 flex-col items-stretch leading-normal md:ml-0 md:w-full">
              <div className="flex w-full flex-col items-stretch font-[Estedad-FD] md:mt-10">
                <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] mr-[58px] self-end border border-solid border-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:mr-[10px] md:text-[40px]">
                  1
                </div>
                <div className="flex items-center justify-center gap-4 md:mr-[9px]">
                  <div className="my-auto flex min-h-[92px] w-[270px] min-w-[240px] flex-col items-stretch justify-start self-stretch">
                    <div className="text-center text-2xl leading-[1.4] font-bold text-[#212121]">
                      <span className="text-[#d79c10]">خودروی</span> خود را
                      انتخاب کنید.
                    </div>
                    <div className="mt-2 flex-1 self-end text-justify text-base font-medium text-[#5E5E5E]">
                      خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.
                    </div>
                  </div>
                  <div className="my-auto flex h-20 w-20 flex-shrink-0 self-stretch rounded-2xl border border-[#D7D7D7] bg-white"></div>
                </div>
                <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] mt-[392px] self-end border border-solid border-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:mt-10 md:text-[40px]">
                  3
                </div>
                <div className="flex items-center justify-center gap-4 md:mr-[9px] md:ml-[3px]">
                  <div className="my-auto flex min-h-[117px] w-[267px] min-w-[240px] flex-col items-stretch justify-start self-stretch">
                    <div className="text-right text-2xl leading-[1.4] font-bold text-[#212121]">
                      <span className="text-[#d79c10]">هزینه</span> اجاره را
                      پرداخت کنید.
                    </div>
                    <div className="mt-2 flex-1 self-end text-justify text-base font-medium text-[#5E5E5E]">
                      می توانید از طریق کیف پول آنلاین یا کارت های عضو شبکه شتاب
                      هزینه اجاره را پرداخت کنید.
                    </div>
                  </div>
                  <div className="my-auto flex h-20 w-20 flex-shrink-0 self-stretch rounded-2xl border border-[#D7D7D7] bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-14 flex w-[845px] max-w-full flex-col items-center justify-center text-center font-[Estedad-FD] md:mt-10">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="text-2xl font-normal text-[#5E5E5E]">
              پر تکرارترین سؤالاتی که پرسیدید
            </div>
            <div className="mt-2 text-[32px] leading-[1.4] font-bold text-[#353535] md:max-w-full">
              سؤالات <span className="text-[#d79c10]">متداول</span>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="mt-6 flex flex-wrap items-center justify-start gap-6 md:max-w-full">
          <div className="my-auto w-[392px] min-w-[240px] self-stretch overflow-hidden rounded-2xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1aabda2c2c47ba77c8da0035cb66f5ab24fdc6a4?placeholderIfAbsent=true"
              className="aspect-[0.85] w-full object-contain object-center"
              alt="FAQ illustration"
            />
          </div>
          <div className="my-auto w-[808px] min-w-[240px] self-stretch font-[Estedad-FD] md:max-w-full">
            <div className="flex w-[808px] max-w-full flex-wrap items-center justify-end gap-2 overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-6 text-right text-base font-medium text-[#353535]">
              <div className="my-auto self-stretch text-[#353535]">
                در صورت بروز نقص فنی برای خودرو چه اتفاقی می افتد؟
              </div>
              <div className="my-auto flex h-6 w-6 flex-shrink-0 self-stretch"></div>
            </div>
            <div className="mt-4 flex w-[808px] max-w-full flex-wrap content-center items-center justify-end gap-[16px_8px] overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-4">
              <div className="my-auto self-stretch text-right text-base font-medium text-[#353535]">
                هزینه بنزین و کارواش در خودروهای اجاره ای به عهده کیست؟
              </div>
              <div className="my-auto flex h-6 w-[19px] flex-shrink flex-grow self-stretch"></div>
              <div className="my-auto w-[771px] flex-shrink flex-grow self-stretch text-justify text-sm leading-[25px] font-normal text-[#727272] capitalize md:max-w-full">
                در زمان اجاره خودرو بدون راننده خودروها کارواش شده و با باک
                بنزین پر تحویل مشتریان عزیز می گردد. در زمان استرداد خودرو در
                صورتی که خودرو به کارواش نیاز داشته و یا خودرو دارای کسر سوخت
                باشد هزینه آن بر عهده مشتری می باشد.
              </div>
            </div>
            <div className="mt-4 flex w-[808px] max-w-full flex-wrap items-center justify-end gap-2 overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-6 text-right text-base font-medium text-[#353535]">
              <div className="my-auto self-stretch text-[#353535]">
                آیا ماشین های اتورنت دارای بیمه هستند؟
              </div>
              <div className="my-auto flex h-6 w-6 flex-shrink-0 self-stretch"></div>
            </div>
            <div className="mt-4 flex w-[808px] max-w-full flex-wrap items-center justify-end gap-2 overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-6 text-right text-base font-medium text-[#353535]">
              <div className="my-auto self-stretch text-[#353535]">
                محدودیت کیلومتر در اجاره خودرو چقدر می باشد؟
              </div>
              <div className="my-auto flex h-6 w-6 flex-shrink-0 self-stretch"></div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12 flex w-[845px] max-w-full flex-col items-center justify-center text-center font-[Estedad-FD] md:mt-10">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="text-2xl font-normal text-[#5E5E5E]">
              آنچه مشتریان ما درموردمان گفته‌اند.
            </div>
            <div className="mt-2 text-[32px] leading-[1.4] font-bold text-[#353535] md:max-w-full">
              نظرات <span className="text-[#d79c10]">مشتریان</span>
            </div>
          </div>
        </div>

        {/* Reviews Content */}
        <div className="mt-6 flex w-full max-w-[1225px] flex-col items-center justify-start font-[Estedad-FD] md:max-w-full">
          <div className="flex w-full flex-col items-center justify-start rounded-2xl border border-[#D7D7D7] bg-white py-4 text-center">
            <div className="flex w-[136px] max-w-full flex-col items-center justify-center py-4 text-base font-medium text-[#0C0C0C]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/95a83c6fafab9828a542a2f0337664ecd3cc5992?placeholderIfAbsent=true"
                className="aspect-square w-full object-contain object-center"
                alt="Customer avatar"
              />
              <div className="mt-1 text-[#0C0C0C]">اولدوز بهاور</div>
              <div className="mt-1 flex min-h-6 w-full"></div>
            </div>
            <div className="mt-6 text-sm leading-[25px] font-normal text-[#727272] capitalize md:max-w-full">
              اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک
              شرکت با سابقه و مطمئن می‌گشتم!بدون هیچ شکی میگم، اتو رنت تو کار
              خودش بهترینه!پشتیبانی عالی، هزینه بسیار مناسب، آسان بودن روند
              اجاره و رزرو؛ هرچی بگم کم گفتم!حتماً دفعه بعد هم برای اجاره ماشین
              به سراغشون میام.
            </div>
          </div>
          <div className="mt-6 flex w-full flex-wrap items-center justify-start gap-6">
            <div className="my-auto flex w-[230px] min-w-[240px] flex-shrink flex-grow flex-col items-stretch justify-center self-stretch rounded-2xl border border-[#D7D7D7] bg-white p-4 text-center">
              <div className="flex w-full items-center justify-center gap-4">
                <div className="my-auto flex w-[118px] flex-col items-stretch justify-start self-stretch">
                  <div className="self-end text-base font-medium text-[#212121]">
                    فاطمه ابراهیمی‌فر
                  </div>
                  <div className="mt-2 text-sm leading-[25px] font-normal text-[#494949] capitalize">
                    27 دی ماه 1380
                  </div>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d695215b8f29bc96b9fec302bc70fb5a57ebaaf2?placeholderIfAbsent=true"
                  className="my-auto aspect-square w-16 flex-shrink-0 self-stretch rounded-[97px] object-contain object-center"
                  alt="Customer avatar"
                />
              </div>
            </div>
            <div className="my-auto flex w-[230px] min-w-[240px] flex-shrink flex-grow flex-col items-stretch justify-center self-stretch rounded-2xl border border-[#D7D7D7] bg-white p-4 text-center">
              <div className="flex w-full items-center justify-center gap-4">
                <div className="my-auto w-[89px] self-stretch">
                  <div className="text-base font-medium text-[#212121]">
                    فرزانه حیدری
                  </div>
                  <div className="mt-2 text-sm leading-[25px] font-normal text-[#494949] capitalize">
                    27 دی ماه 1380
                  </div>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb77c204054c70f00fa38010cdf7b8aaa0dc7df7?placeholderIfAbsent=true"
                  className="my-auto aspect-square w-16 flex-shrink-0 self-stretch rounded-[70px] object-contain object-center"
                  alt="Customer avatar"
                />
              </div>
            </div>
            <div className="my-auto flex w-[230px] min-w-[240px] flex-shrink flex-grow flex-col items-stretch justify-center self-stretch rounded-2xl border border-[#D7D7D7] bg-white p-4 text-center">
              <div className="flex w-full items-center justify-center gap-4">
                <div className="my-auto flex w-[111px] flex-col items-stretch justify-start self-stretch">
                  <div className="self-end text-base font-medium text-[#212121]">
                    محمدجواد امینی
                  </div>
                  <div className="mt-2 text-sm leading-[25px] font-normal text-[#494949] capitalize">
                    27 دی ماه 1399
                  </div>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ced30fba420b1b9fa6e41748241566fd92530d0e?placeholderIfAbsent=true"
                  className="my-auto aspect-square w-16 flex-shrink-0 self-stretch rounded-[32px] object-contain object-center"
                  alt="Customer avatar"
                />
              </div>
            </div>
            <div className="my-auto flex w-[230px] min-w-[240px] flex-shrink flex-grow flex-col items-stretch justify-center self-stretch rounded-2xl border border-[#D7D7D7] bg-[#FDB713] p-4">
              <div className="flex w-full items-center justify-center gap-4">
                <div className="my-auto w-[89px] self-stretch">
                  <div className="text-right text-base font-medium text-[#212121]">
                    اولدوز بهاور
                  </div>
                  <div className="mt-2 text-center text-sm leading-[25px] font-normal text-[#494949] capitalize">
                    27 دی ماه 1380
                  </div>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/71487b5ca058a83b90733ca72e91ffe90f1bbc34?placeholderIfAbsent=true"
                  className="my-auto aspect-square w-16 flex-shrink-0 self-stretch rounded-[70px] object-contain object-center"
                  alt="Customer avatar"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-12 ml-[23px] flex w-full max-w-[1034px] flex-wrap items-stretch gap-[5px] self-start text-center font-[Estedad-FD] md:mt-10 md:max-w-full">
          <div className="mt-[47px] flex min-h-12 items-center justify-center gap-2 self-end overflow-hidden rounded-lg px-4 py-2 text-lg leading-8 font-semibold text-[#194BF0] capitalize md:mt-10">
            <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>
            <div className="my-auto self-stretch text-[#194BF0]">
              مشاهده همه
            </div>
          </div>
          <div className="flex-basis-0 flex w-fit flex-shrink-0 flex-grow flex-col items-center justify-center md:max-w-full">
            <div className="flex w-[845px] max-w-full flex-col items-center justify-center">
              <div className="text-2xl font-normal text-[#5E5E5E]">
                مقالات ما
              </div>
              <div className="mt-2 text-[32px] leading-[1.4] font-bold text-[#353535] md:max-w-full">
                مجله <span className="text-[#d79c10]">خودرو</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="mt-6 flex w-full max-w-[1221px] flex-wrap items-center justify-start gap-6 font-[Estedad-FD] md:max-w-full">
          {/* Blog Card 1 */}
          <div className="flex-basis-0 my-auto flex min-w-[240px] flex-1 flex-shrink items-start justify-start gap-2 self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-4">
            <div className="flex-basis-0 flex w-full min-w-[240px] flex-1 flex-shrink flex-col items-stretch justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04b4015d98131e3f6771d20b82fb2ae566c4f258?placeholderIfAbsent=true"
                className="aspect-[1.84] w-full rounded-xl object-contain object-center"
                alt="Blog post"
              />
              <div className="mt-4 flex w-full flex-col items-stretch justify-center px-1">
                <div className="flex w-full flex-col items-stretch justify-center">
                  <div className="flex w-full flex-col items-stretch justify-center">
                    <div className="text-right text-base font-medium text-[#414141]">
                      روش های مختلف برای اجاره خودرو{' '}
                    </div>
                    <div className="-webkit-box-orient-vertical -webkit-line-clamp-2 text-overflow-ellipsis mt-4 text-justify text-xs font-normal text-[#757575]">
                      امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی
                      جوامع به وجود آمده است نیازهای افراد و نحوه دسترسی به آنها
                      نیز دچار تحولاتی شده است.
                    </div>
                  </div>
                  <div className="mt-4 flex w-full items-center justify-end gap-4 text-right text-sm font-normal whitespace-nowrap text-[#757575] md:whitespace-normal">
                    <div className="my-auto flex items-center justify-center gap-2 self-stretch md:whitespace-normal">
                      <div className="my-auto self-stretch text-[#757575]">
                        1,213
                      </div>
                      <div className="my-auto flex h-[18px] w-[18px] flex-shrink-0 self-stretch"></div>
                    </div>
                    <div className="my-auto flex items-center justify-center gap-2 self-stretch md:whitespace-normal">
                      <div className="my-auto self-stretch text-[#757575]">
                        3دقیقه
                      </div>
                      <div className="my-auto flex h-[18px] w-[18px] flex-shrink-0 self-stretch"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="flex-basis-0 my-auto flex min-w-[240px] flex-1 flex-shrink items-start justify-start gap-2 self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-4">
            <div className="flex-basis-0 flex w-full min-w-[240px] flex-1 flex-shrink flex-col items-stretch justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc7bee1dd87106d4caaa98bd3f15e0ce977f7429?placeholderIfAbsent=true"
                className="aspect-[1.84] w-full rounded-xl object-contain object-center"
                alt="Blog post"
              />
              <div className="mt-4 flex w-full flex-col items-stretch justify-center px-1">
                <div className="flex w-full flex-col items-stretch justify-center">
                  <div className="flex w-full flex-col items-stretch justify-center">
                    <div className="text-right text-base font-medium text-[#414141]">
                      روش های مختلف برای اجاره خودرو{' '}
                    </div>
                    <div className="-webkit-box-orient-vertical -webkit-line-clamp-2 text-overflow-ellipsis mt-4 text-justify text-xs font-normal text-[#757575]">
                      امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی
                      جوامع به وجود آمده است نیازهای افراد و نحوه دسترسی به آنها
                      نیز دچار تحولاتی شده است.
                    </div>
                  </div>
                  <div className="mt-4 flex w-full items-center justify-end gap-4 text-right text-sm font-normal whitespace-nowrap text-[#757575] md:whitespace-normal">
                    <div className="my-auto flex items-center justify-center gap-2 self-stretch md:whitespace-normal">
                      <div className="my-auto self-stretch text-[#757575]">
                        1,213
                      </div>
                      <div className="my-auto flex h-[18px] w-[18px] flex-shrink-0 self-stretch"></div>
                    </div>
                    <div className="my-auto flex items-center justify-center gap-2 self-stretch md:whitespace-normal">
                      <div className="my-auto self-stretch text-[#757575]">
                        3دقیقه
                      </div>
                      <div className="my-auto flex h-[18px] w-[18px] flex-shrink-0 self-stretch"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="flex-basis-0 my-auto flex min-w-[240px] flex-1 flex-shrink items-start justify-start gap-2 self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-4">
            <div className="flex-basis-0 flex w-full min-w-[240px] flex-1 flex-shrink flex-col items-stretch justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b773999bd11d8aebdb36643c3a16c57ed4aa880?placeholderIfAbsent=true"
                className="aspect-[1.84] w-full rounded-xl object-contain object-center"
                alt="Blog post"
              />
              <div className="mt-4 flex w-full flex-col items-stretch justify-center px-1">
                <div className="flex w-full flex-col items-stretch justify-center">
                  <div className="flex w-full flex-col items-stretch justify-center">
                    <div className="text-right text-base font-medium text-[#414141]">
                      روش های مختلف برای اجاره خودرو{' '}
                    </div>
                    <div className="-webkit-box-orient-vertical -webkit-line-clamp-2 text-overflow-ellipsis mt-4 text-justify text-xs font-normal text-[#757575]">
                      امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی
                      جوامع به وجود آمده است نیازهای افراد و نحوه دسترسی به آنها
                      نیز دچار تحولاتی شده است.
                    </div>
                  </div>
                  <div className="mt-4 flex w-full items-center justify-end gap-4 text-right text-sm font-normal whitespace-nowrap text-[#757575] md:whitespace-normal">
                    <div className="my-auto flex items-center justify-center gap-2 self-stretch md:whitespace-normal">
                      <div className="my-auto self-stretch text-[#757575]">
                        1,213
                      </div>
                      <div className="my-auto flex h-[18px] w-[18px] flex-shrink-0 self-stretch"></div>
                    </div>
                    <div className="my-auto flex items-center justify-center gap-2 self-stretch md:whitespace-normal">
                      <div className="my-auto self-stretch text-[#757575]">
                        3دقیقه
                      </div>
                      <div className="my-auto flex h-[18px] w-[18px] flex-shrink-0 self-stretch"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
