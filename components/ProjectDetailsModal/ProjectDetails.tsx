import React from 'react';
import { motion } from 'motion/react';

interface DetailSection {
  section: string;
  content: string[];
}

interface ProjectDetailsProps {
  details: DetailSection[] | undefined;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ details }) => {
  if (!details || details.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className='mt-16 pt-16 border-t border-white/10'>
      <p className='text-xs uppercase tracking-widest text-white/50 mb-8 font-semibold'>
        Deep Dive
      </p>
      <div className='space-y-8'>
        {details.map((detail, idx) => (
          <motion.div
            key={detail.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 + idx * 0.05 }}>
            <h3 className='text-sm font-semibold text-white/90 mb-4'>
              {detail.section}
            </h3>
            <ul className='space-y-3'>
              {detail.content.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className='text-sm text-white/60 leading-relaxed flex gap-3'>
                  <span className='text-emerald-400/50 flex-shrink-0 mt-0.5'>
                    ▸
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
