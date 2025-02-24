import { projects } from '@/lib/data/projects';
import Image from 'next/image';
import React from 'react';
import grainImage from '@/assets/grain.jpg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import SectionHeader from '@/components/SectionHeader';

const Projects = () => {
  return (
    <section className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />
        <div className='flex flex-col mt-10 md:mt-20 gap-20'>
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pointer-events-none">
              <div
                className='absolute inset-0 -z-10 opacity-5'
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}></div>

              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.name}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='font-serif text-2xl md:text-4xl mt-2 md:mt-5'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className='flex gap-2 text-sm md:text-base text-white/50'>
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.links['website']}>
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='relative'>
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    className='mt-8 -mb-1 md:-mb-0 rounded-md md:rounded-lg lg:rounded-xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
