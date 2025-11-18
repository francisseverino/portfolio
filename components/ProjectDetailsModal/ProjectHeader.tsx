import React from 'react';
import { motion } from 'motion/react';

interface ProjectHeaderProps {
  name: string;
  year: number;
  title: string;
  tagline: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  name,
  year,
  title,
  tagline,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className='mb-16'>
      <div className='gradient-primary inline-flex gap-2 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text w-fit mb-4'>
        <span>{name}</span>
        <span>&bull;</span>
        <span>{year}</span>
      </div>
      <h1 className='font-serif text-5xl md:text-6xl leading-tight mb-4'>
        {title}
      </h1>
      <p className='text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl'>
        {tagline}
      </p>
    </motion.div>
  );
};

export default ProjectHeader;
