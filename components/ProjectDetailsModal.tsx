'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectDetail } from '@/lib/data/project-details';
import XIcon from '@/assets/icons/x.svg';
import grainImage from '@/assets/grain.jpg';
import ProjectScreenshots from './ProjectScreenshots';

interface ProjectDetailsModalProps {
  project: ProjectDetail;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <>
          {/* Backdrop with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
          />

          {/* Modal with expanding border animation */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
            }}
            className='fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8 overflow-y-auto'>
            <div className='relative w-full max-w-4xl my-auto'>
              {/* Main modal card */}
              <div className='bg-gray-800 rounded-3xl relative z-0 overflow-hidden'>
                {/* Grain texture */}
                <div
                  className='absolute inset-0 -z-10 opacity-5 pointer-events-none'
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                />

                {/* Border outline */}
                <div className='absolute inset-0 outline-2 outline outline--outline-offset-2 rounded-3xl outline-white/20 pointer-events-none' />

                <div className='p-8 md:p-14 lg:p-16'>
                  {/* Close button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    onClick={onClose}
                    className='absolute top-8 right-8 md:top-14 md:right-14 text-white/40 hover:text-white transition-colors z-10'
                    aria-label='Close modal'>
                    <XIcon className='w-6 h-6' />
                  </motion.button>

                  {/* Header - Title and tagline */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className='mb-16'>
                    <div className='gradient-primary inline-flex gap-2 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text w-fit mb-4'>
                      <span>{project.name}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h1 className='font-serif text-5xl md:text-6xl leading-tight mb-4'>
                      {project.title}
                    </h1>
                    <p className='text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl'>
                      {project.tagline}
                    </p>
                  </motion.div>

                  {/* Screenshots Carousel */}
                  <ProjectScreenshots
                    screenshots={project.screenshots}
                    projectName={project.name}
                  />

                  {/* Overview - Single column, readable */}
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
                          {project.overview.problem}
                        </p>
                      </div>

                      <div className='p-6 rounded-2xl bg-white/[0.02] border border-white/10'>
                        <p className='text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold'>
                          Solution
                        </p>
                        <p className='text-white/70 leading-relaxed text-sm md:text-base'>
                          {project.overview.solution}
                        </p>
                      </div>
                    </div>

                    {/* Impact - Full width */}
                    <div className='p-6 rounded-2xl bg-white/[0.02] border border-white/10'>
                      <p className='text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold'>
                        Impact
                      </p>
                      <p className='text-white/70 leading-relaxed text-sm md:text-base'>
                        {project.overview.impact}
                      </p>
                    </div>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className='mb-16 pb-16 border-b border-white/10'>
                    <p className='text-xs uppercase tracking-widest text-white/50 mb-5 font-semibold'>
                      Tech Stack
                    </p>
                    <div className='flex flex-wrap gap-3'>
                      {project.technologies.map((tech) => (
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

                  {/* Key Learnings */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}>
                    <p className='text-xs uppercase tracking-widest text-white/50 mb-6 font-semibold'>
                      Key Learnings
                    </p>
                    <div className='space-y-5'>
                      {project.learnings.map((learning, idx) => (
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

                  {/* Details section - if available */}
                  {project.details && project.details.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className='mt-16 pt-16 border-t border-white/10'>
                      <p className='text-xs uppercase tracking-widest text-white/50 mb-8 font-semibold'>
                        Deep Dive
                      </p>
                      <div className='space-y-8'>
                        {project.details.map((detail, idx) => (
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
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
