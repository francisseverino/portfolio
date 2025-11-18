'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  direction,
  onClick,
  icon: Icon,
}) => {
  const positionClass = direction === 'left' ? '-left-8' : '-right-8';

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all shadow-lg`}
      aria-label={
        direction === 'left' ? 'Previous screenshots' : 'Next screenshots'
      }>
      <Icon className='w-6 h-6' />
    </motion.button>
  );
};

interface ProjectScreenshotsProps {
  screenshots: StaticImageData[];
  projectName: string;
}

const ProjectScreenshots: React.FC<ProjectScreenshotsProps> = ({
  screenshots,
  projectName,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 240; // 166px image + ~half
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      // Check scroll state after animation
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className='mb-16'>
      <p className='text-xs uppercase tracking-widest text-white/50 mb-5 font-semibold'>
        Screenshots
      </p>

      <div className='relative group'>
        {/* Navigation buttons */}
        {canScrollLeft && (
          <ScrollButton
            direction='left'
            onClick={() => scroll('left')}
            icon={ChevronLeftIcon}
          />
        )}

        {canScrollRight && (
          <ScrollButton
            direction='right'
            onClick={() => scroll('right')}
            icon={ChevronRightIcon}
          />
        )}

        {/* Screenshots scroll container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          onLoad={checkScroll}
          className='overflow-x-auto scrollbar-hide'>
          <div className='flex gap-2'>
            {screenshots.map((screenshot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + idx * 0.05 }}
                className='flex-shrink-0'
                style={{ width: '166px' }}>
                <div
                  className='relative rounded-xl overflow-hidden bg-white/5 border border-white/10'
                  style={{ aspectRatio: '1284/2778' }}>
                  <Image
                    src={screenshot}
                    alt={`${projectName} screenshot ${idx + 1}`}
                    fill
                    className='object-cover'
                    sizes='166px'
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollbar hide CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectScreenshots;
