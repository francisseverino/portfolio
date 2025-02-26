import React from 'react';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/grain.jpg';

const Contact = () => {
  return (
    <div id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='gradient-primary text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
          <div
            className='absolute inset-0 opacity-5 -z-10'
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          />
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div className=''>
              <h2 className='font-serif text-2xl md:text-3xl'>Let's Connect</h2>
              <p className='text-sm md:text-base mt-2'>
                Whether you want to talk tech, collaborate, or discuss new
                opportunities, I'd love to connect. Let's make something amazing
                together.
              </p>
            </div>
            <div>
              <a
                href='mailto:francisjsg02@gmail.com'
                className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max'>
                <span className='font-semibold'>Reach Out</span>
                <ArrowUpRightIcon className='size-4 ' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
