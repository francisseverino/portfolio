import React from 'react';
import { motion } from 'motion/react';

interface ProjectTechStackProps {
  technologies: string[];
}

const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ technologies }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className='mb-16 pb-16 border-b border-white/10'>
      <p className='text-xs uppercase tracking-widest text-white/50 mb-5 font-semibold'>
        Tech Stack
      </p>
      <div className='flex flex-wrap gap-3'>
        {technologies.map((tech) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className='px-4 py-2 text-sm font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all'>
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectTechStack;
