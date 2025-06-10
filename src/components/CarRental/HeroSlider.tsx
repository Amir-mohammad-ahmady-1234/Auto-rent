import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import type { TCar } from '../../types/CarType';

interface IHeroSliderPropsType {
  carInfo: TCar;
}

const HeroSlider = ({ carInfo }: IHeroSliderPropsType) => {
  const { images, title } = carInfo;
  const thumbsSwiperRef = useRef<SwiperType | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSlideIndex, setInitialSlideIndex] = useState(0);

  const openModal = (index: number) => {
    setInitialSlideIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-8 relative">
      {/* تار کردن پس‌زمینه موقع باز بودن مودال */}
      <div className={isModalOpen ? 'blur-sm pointer-events-none' : ''}>
        {/* اسلایدر اصلی */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Thumbs]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          thumbs={{ swiper: thumbsSwiperRef.current }}
          onSwiper={(swiper: SwiperType) => {
            if (swiper.thumbs) swiper.thumbs.swiper = thumbsSwiperRef.current!;
          }}
          className="overflow-hidden rounded-xl"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-64 w-full md:h-96">
                <img
                  src={img}
                  alt={`${title} - ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <h2 className="text-2xl font-bold text-white md:text-4xl">
                    {title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* thumbnail زیر اسلایدر */}
        <Swiper
          onSwiper={(swiper: SwiperType) => (thumbsSwiperRef.current = swiper)}
          modules={[Thumbs]}
          slidesPerView={4}
          spaceBetween={10}
          watchSlidesProgress
          className="mt-4 cursor-pointer"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="h-20 w-full rounded-lg border border-gray-300 object-cover transition hover:border-black"
                onClick={() => openModal(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* مودال فول‌اسکرین برای عکس بزرگ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 text-white text-3xl"
          >
            ✕
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            initialSlide={initialSlideIndex}
            className="w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Fullscreen ${index + 1}`}
                  className="h-full w-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
