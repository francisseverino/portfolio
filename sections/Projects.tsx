import { projects } from '@/lib/data/projects';
import Image from 'next/image';
import React from 'react';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import TechnologyList from '@/components/ProjectTechnologies';

const Projects = () => {
  return (
    <section id='projects' className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Proven Impact'
          title='Featured Work'
          description='Bringing ideas to life with scalable, high-performance applications.'
        />
        <div className='flex flex-col mt-10 md:mt-20 gap-20'>
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className='pb-0 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}>
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='flex justify-between'>
                    <div className='gradient-primary inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                      <span>{project.name}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <div>
                      <TechnologyList technologies={project.technologies} />
                    </div>
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
                        <CheckCircleIcon className='size-5 md:size-6 flex-shrink-0' />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='relative'>
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    className='mt-8 -mb-1 md:-mb-0 rounded-md md:rounded-lg lg:rounded-xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
