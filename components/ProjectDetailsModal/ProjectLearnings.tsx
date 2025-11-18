import React from 'react';
import { motion } from 'motion/react';

interface Learning {
  title: string;
  description: string;
}

interface ProjectLearningsProps {
  learnings: Learning[];
}

const ProjectLearnings: React.FC<ProjectLearningsProps> = ({ learnings }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}>
      <p className='text-xs uppercase tracking-widest text-white/50 mb-6 font-semibold'>
        Key Learnings
      </p>
      <div className='space-y-5'>
        {learnings.map((learning, idx) => (
          <motion.div
            key={learning.title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.37 + idx * 0.04 }}
            className='p-5 rounded-xl bg-white/[0.02] border border-white/10'>
            <p className='font-semibold text-white/95 text-sm md:text-base mb-2'>
              {learning.title}
            </p>
            <p className='text-white/60 text-sm leading-relaxed'>
              {learning.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectLearnings;
