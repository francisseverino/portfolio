import React from 'react';

import grainImage from '@/assets/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import HeroOrbit from '@/components/HeroOrbit';

const HeroBackground = () => {
  return (
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none'>
      <div
        className='absolute inset-0 -z-30 opacity-5'
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />

      <div className=' size-[620px] hero-ring' />
      <div className=' size-[820px] hero-ring' />
      <div className=' size-[1020px] hero-ring' />
      <div className=' size-[1220px] hero-ring' />

      <HeroOrbit
        size={430}
        rotation={-14}
        shouldOrbit
        orbitDuration={30}
        shouldSpin
        spinDuration={3}>
        <SparkleIcon className='size-8 text-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit
        size={440}
        rotation={79}
        shouldOrbit
        orbitDuration={32}
        shouldSpin
        spinDuration={3}>
        <SparkleIcon className='size-5 text-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={34}>
        <div className='size-2 rounded-full bg-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit
        size={530}
        rotation={178}
        shouldOrbit
        orbitDuration={36}
        shouldSpin
        spinDuration={3}>
        <SparkleIcon className='size-10 text-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit
        size={550}
        rotation={20}
        shouldOrbit
        orbitDuration={38}
        shouldSpin
        spinDuration={6}>
        <StarIcon className='size-12 text-emerald-300' />
      </HeroOrbit>
      <HeroOrbit
        size={590}
        rotation={98}
        shouldOrbit
        orbitDuration={40}
        shouldSpin
        spinDuration={6}>
        <StarIcon className='size-8 text-emerald-300' />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={42}>
        <div className='size-2 rounded-full bg-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit
        size={710}
        rotation={144}
        shouldOrbit
        orbitDuration={44}
        shouldSpin
        spinDuration={6}>
        <SparkleIcon className='size-14 text-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit
        size={720}
        rotation={85}
        shouldOrbit
        orbitDuration={46}
        shouldSpin
        spinDuration={6}>
        <div className='size-3 rounded-full bg-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit
        size={800}
        rotation={-72}
        shouldOrbit
        orbitDuration={48}
        shouldSpin
        spinDuration={6}>
        <StarIcon className='size-28 text-emerald-300' />
      </HeroOrbit>
    </div>
  );
};

export default HeroBackground;
