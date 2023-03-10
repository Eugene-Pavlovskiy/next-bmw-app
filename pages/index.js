import Head from 'next/head';
import { Inter } from '@next/font/google';
import Hero from '@/components/Hero';
import Slider from '@/components/Slider';
import { SliderData } from '@/components/SliderData';
import Instagram from '@/components/Instagram';
import Tabs from '@/components/Tabs';
import SwiperCar from '@/components/SwiperCar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BMW Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bmw-logo.png" />
      </Head>
      <main className="">
        <Hero heading="BMW" message="A racing experience for every day." />
        <Slider slides={SliderData} />
        <Instagram />
        <Tabs />
        <SwiperCar />
      </main>
    </>
  );
}
