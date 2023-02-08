import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import HeroSm from '@/components/HeroSm';
// import { shopData } from '@/components/ShopData';

export default function Shop() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="bg-gradient-to-b from-black/30 to-white/80">
        <HeroSm />
      </div>
      <div>
        <div class="cursor-pointer  mt-5 mx-auto px-5 md:px-10">
          <Swiper
            spaceBetween={10}
            slidesPerView="auto"
            speed={5000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
          >
            <SwiperSlide>
              <Link href={'/'}>
                <Image
                  src={'/assets/bmw1.png'}
                  alt="/"
                  width={800}
                  height={400}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={'/'}>
                <Image
                  src={'/assets/bmw2.png'}
                  alt="/"
                  width={800}
                  height={400}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={'/'}>
                <Image
                  src={'/assets/bmw3.png'}
                  alt="/"
                  width={800}
                  height={400}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={'/'}>
                <Image
                  src={'/assets/bmw4.png'}
                  alt="/"
                  width={800}
                  height={400}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={'/'}>
                <Image
                  src={'/assets/bmw5.png'}
                  alt="/"
                  width={800}
                  height={400}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={'/'}>
                <Image
                  src={'/assets/bmw6.png'}
                  alt="/"
                  width={800}
                  height={400}
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

// function Slide() {
//   return (
//     <div className="grid md:grid-cols-2">
//       <div className="p-0">
//         <Link href={'/'}>
//           <Image src={'/assets/bmw1.png'} alt="/" width={600} height={600} />
//         </Link>
//       </div>
//     </div>
//   );
// }
