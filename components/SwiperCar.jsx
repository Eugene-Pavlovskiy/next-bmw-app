import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
// import HeroSm from '@/components/HeroSm';

const SwiperCar = () => {
  SwiperCore.use([Autoplay]);
  return (
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
                src={'/assets/bmw1-960_720.png'}
                alt="/"
                width={800}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/'}>
              <Image
                src={'/assets/bmw2-960_720.png'}
                alt="/"
                width={800}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/'}>
              <Image
                src={'/assets/bmw3-960_720.png'}
                alt="/"
                width={800}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/'}>
              <Image
                src={'/assets/bmw4-960_720.png'}
                alt="/"
                width={800}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/'}>
              <Image
                src={'/assets/bmw5-960_720.png'}
                alt="/"
                width={800}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/'}>
              <Image
                src={'/assets/bmw6-960_720.png'}
                alt="/"
                width={800}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/'}>
              <Image
                src={'/assets/bmw8-960_720.png'}
                alt="/"
                width={800}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/'}>
              <Image
                src={'/assets/bmw9-960_720.png'}
                alt="/"
                width={800}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/'}>
              <Image
                src={'/assets/bmw10-960_720.png'}
                alt="/"
                width={800}
                height={400}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'/'}>
              <Image
                src={'/assets/bmw11-960_720.png'}
                alt="/"
                width={800}
                height={400}
              />
            </Link>
          </SwiperSlide>

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
  );
};

export default SwiperCar;
