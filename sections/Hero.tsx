import React from 'react';
import memojiImage from '@/assets/memoji.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import Image from 'next/image';
import HeroBackground from '@/components/HeroBackground';

const Hero = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
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
            Turning Complexity into Scalable Solutions
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            Full-Stack Engineer with 4+ years of experience building scalable,
            high-performance applications using modern technologies. Passionate
            about architecting systems that solve complex problems and deliver
            real-world impact.
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 bg-white text-gray-900 px-6 h-12 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
