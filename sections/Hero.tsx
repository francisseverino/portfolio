import React from 'react';
import memojiImage from '@/assets/memoji.png';
import Image from 'next/image';
import HeroBackground from '@/components/HeroBackground';

const Hero = () => {
  return (
    <section className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <HeroBackground />
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image
            src={memojiImage}
            className='size-[100px]'
            alt='Person peeking from behind laptop'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='absolute inset-0 bg-green-500 rounded-full animate-ping-large' />
            </div>
            <div className='text-sm font-medium'>Open to New Opportunities</div>
          </div>
        </div>

        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Building Software That Scales
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I design and build high-performance software that scales, turning
            ambitious ideas into real-world solutions with clean, efficient
            code.
          </p>
        </div>

        <div className='flex justify-center items-center mt-8'>
          <a
            className='inline-flex items-center gap-2 bg-white text-gray-900 px-6 h-12 rounded-xl'
            href='#contact'>
            <span>👋</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
