// This component renders the main hero section of the landing page which is designed to grab the visitor's attention.
// It includes a navigation bar, a headline, a detailed subtext that explains the product briefly, and a call-to-action button.

import Navbar from '@/components/landing-pages/landing-page-7/Navbar';
import Image from 'next/image';
import HeroImage from '@/assets/landing-page-7/images/hero.png';
import Link from 'next/link';
import { Button } from './Button';
import HeroBlocksBg from '@/assets/landing-page-7/icons/HeroBlocksBg';
import ArrowRightMd from '@/assets/landing-page-7/icons/ArrowRightMd';

export default async function Hero() {
  return (
    <div className='relative'>
      <div className='max-w-7xl mx-auto'>
        {/* Navbar component: Displays the top navigation menu. */}
        <div className='absolute inset-0 -z-20 overflow-hidden max-w-[80vw] left-[12%]'>
          <HeroBlocksBg />
        </div>
        <Navbar />
        <div className='flex max-w-4xl pt-16 flex-col gap-5 px-4 items-center justify-center mx-auto'>
          <h1 className='font-semibold max-w-xl md:leading-[64px] text-lp7-secondary text-3xl sm:text-[44px] text-center'>
            Generate modular AI Apps with ease and pace
          </h1>
          <p className='text-lp7-sub text-center leading-7 max-w-2xl'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
          <Button className='flex gap-2.5 shadow-xl py-2 px-4'>
            <Link href={'/login'}>Get started</Link>
            <ArrowRightMd />
          </Button>
        </div>
        <div className='w-full px-6 mt-16 md:mt-10'>
          <Image src={HeroImage} alt='hero' />
        </div>
      </div>
    </div>
  );
}
