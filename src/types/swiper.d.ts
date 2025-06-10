declare module 'swiper/css' {
  const content: string;
  export default content;
}

declare module 'swiper/css/navigation' {
  const content: string;
  export default content;
}

declare module 'swiper/css/pagination' {
  const content: string;
  export default content;
}

declare module 'swiper/css/thumbs' {
  const content: string;
  export default content;
}

declare module 'swiper/react' {
  import { Swiper as SwiperClass } from 'swiper';
  import { ReactNode } from 'react';

  export interface SwiperProps {
    modules?: any[];
    navigation?: boolean;
    pagination?: { clickable: boolean };
    autoplay?: { delay: number };
    loop?: boolean;
    thumbs?: { swiper: SwiperClass | null };
    onSwiper?: (swiper: SwiperClass) => void;
    className?: string;
    children?: ReactNode;
    slidesPerView?: number;
    spaceBetween?: number;
    watchSlidesProgress?: boolean;
  }

  export interface SwiperSlideProps {
    key?: string | number;
    children?: ReactNode;
  }

  export const Swiper: React.FC<SwiperProps>;
  export const SwiperSlide: React.FC<SwiperSlideProps>;
}

declare module 'swiper/modules' {
  export const Navigation: any;
  export const Pagination: any;
  export const Autoplay: any;
  export const Thumbs: any;
}

declare module 'swiper' {
  export interface Swiper {
    thumbs?: {
      swiper: Swiper | null;
    };
  }
}
