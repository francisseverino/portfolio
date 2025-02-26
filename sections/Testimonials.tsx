import SectionHeader from '@/components/SectionHeader';
import { testimonials } from '@/lib/data/testimonials';
import Image from 'next/image';
import React, { Fragment } from 'react';
import Card from '@/components/Card';

const Testimonials = () => {
  return (
    <div className='py-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='What Others Say'
          title='Recognized for Impact'
          description="Beyond just writing code, I create solutions that scale. Here's what colleagues and collaborators say about working with me"
        />
        <div className='mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4'>
          <div className='flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]'>
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className='max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300'>
                    <div className='flex gap-4 items-center'>
                      <div className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className='max-h-full'
                        />
                      </div>
                      <div>
                        <div className='font-semibold'>{testimonial.name}</div>
                        <div className='text-sm text-white/40'>
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className='mt-4 md:mt-6 text-sm md:text-base'>
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
