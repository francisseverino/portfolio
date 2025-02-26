import React from 'react';
import { Tech, techIcons } from '@/lib/data/techIcons';

interface TechnologyListProps {
  technologies: Tech[];
}

const TechnologyList: React.FC<TechnologyListProps> = ({ technologies }) => {
  return (
    <div className='flex flex-wrap gap-1.5 md:gap-2'>
      {technologies.map((tech) => {
        const IconComponent = techIcons[tech];
        return (
          <IconComponent className='size-4 md:size-5 fill-[url(#tech-icon-gradient)]' />
        );
      })}
      <svg className='size-0 absolute'>
        <linearGradient id='tech-icon-gradient'>
          <stop offset='0%' stopColor='rgb(110 231 183)' />
          <stop offset='100%' stopColor='rgb(56 189 248)' />
        </linearGradient>
      </svg>
    </div>
  );
};

export default TechnologyList;
