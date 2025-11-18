import React from 'react';
import Image from 'next/image';
import { Project } from '@/lib/data/projects';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import CardContainer from './CardContainer';
import TechnologyList from './ProjectTechnologies';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (projectId: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onViewDetails,
}) => {
  return (
    <CardContainer
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
          <button
            onClick={() => onViewDetails(project.name.toLowerCase())}
            className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-white/90 transition-colors'>
            <span>View Details</span>
            <ArrowUpRightIcon className='size-4' />
          </button>
        </div>
        <div className='relative'>
          <Image
            src={project.images[0]}
            alt={project.title}
            className='mt-8 -mb-1 md:-mb-0 rounded-md md:rounded-lg lg:rounded-xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default ProjectCard;
