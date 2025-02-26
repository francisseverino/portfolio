'use client';

import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import React, { useRef } from 'react';
import atomicHabitsImage from '@/assets/atomic-habits.png';
import Image from 'next/image';
import { techStack } from '@/lib/data/techStack';
import mapImage from '@/assets/map.png';
import smileMemoji from '@/assets/smile-memoji.png';
import { hobbies } from '@/lib/data/hobbies';
import CardHeader from '@/components/CardHeader';
import TechStackItems from '@/components/TechStackItems';
import { motion } from 'framer-motion';

const About = () => {
  const hobbiesRef = useRef(null);
  return (
    <section id='about' className='py-20 lg:py-28'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description="Beyond just building software, I'm always learning, exploring, and pushing boundaries. Here's a look at what drives me"
        />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspectives.'
              />
              <div className='w-40 mx-auto mt-2 md:mt-0'>
                <Image src={atomicHabitsImage} alt='Atomic Habits Book Cover' />
              </div>
            </Card>
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Tech Stack'
                description="Technologies I've used to create real-world solutions"
              />
              <TechStackItems
                items={techStack}
                itemsWrapClassName='animate-move-left [animation-duration:30s]'
              />
              <TechStackItems
                items={techStack}
                className='mt-6'
                itemsWrapClassName='animate-move-right [animation-duration:15s]'
              />
            </Card>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] flex flex-col md:col-span-3  lg:col-span-2'>
              <CardHeader
                title='Beyond the Code'
                description="What I do when I'm not engineering software, because life is more than just code."
              />
              <div className='relative flex-1' ref={hobbiesRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className='inline-flex items-center gap-2 px-6 gradient-primary rounded-full py-1.5 absolute'
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={hobbiesRef}>
                    <span className='font-medium text-gray-950'>
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className='h-[320px] relative md:col-span-2 lg:col-span-1'>
              <Image
                src={mapImage}
                alt='map'
                className='h-full w-full object-cover object-left-top'
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content=[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className='absolute inset-0 rounded-full gradient-primary -z-20 animate-ping [animation-duration:2s]' />
                <div className='absolute inset-0 rounded-full gradient-primary -z-10' />
                <Image
                  src={smileMemoji}
                  alt='smiling memoji'
                  className='size-20'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
