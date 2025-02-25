import { TechStack } from '@/lib/data/techStack';
import React from 'react';
import TechIcon from './TechIcon';
import { twMerge } from 'tailwind-merge';

interface TechStackItem {
  items: TechStack[];
  className?: string;
  itemsWrapClassName?: string;
}

const TechStackItems: React.FC<TechStackItem> = ({
  items,
  className,
  itemsWrapClassName,
}) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className,
      )}>
      <div
        className={twMerge(
          'flex flex-none py-0.5 gap-6 pr-6',
          itemsWrapClassName,
        )}>
        {items.map((tech) => (
          <div
            key={tech.title}
            className='inline-flex items-center gap-2 py-2 px-3 outline outline-2 outline-white/10 rounded-lg'>
            <TechIcon component={tech.icon} />
            <span className='font-semibold'>{tech.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackItems;
