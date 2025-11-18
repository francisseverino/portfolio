import React from 'react';
import { motion } from 'motion/react';

interface ProjectOverviewProps {
  problem: string;
  solution: string;
  impact: string;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  problem,
  solution,
  impact,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className='space-y-8 mb-16'>
      {/* Problem & Solution in cards */}
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='p-6 rounded-2xl bg-white/[0.02] border border-white/10'>
          <p className='text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold'>
            Problem
          </p>
          <p className='text-white/70 leading-relaxed text-sm md:text-base'>
            {problem}
          </p>
        </div>

        <div className='p-6 rounded-2xl bg-white/[0.02] border border-white/10'>
          <p className='text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold'>
            Solution
          </p>
          <p className='text-white/70 leading-relaxed text-sm md:text-base'>
            {solution}
          </p>
        </div>
      </div>

      {/* Impact - Full width */}
      <div className='p-6 rounded-2xl bg-white/[0.02] border border-white/10'>
        <p className='text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold'>
          Impact
        </p>
        <p className='text-white/70 leading-relaxed text-sm md:text-base'>
          {impact}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectOverview;
