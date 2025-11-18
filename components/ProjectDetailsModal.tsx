'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectDetail } from '@/lib/data/project-details';
import XIcon from '@/assets/icons/x.svg';
import ProjectScreenshots from './ProjectScreenshots';
import CardContainer from './CardContainer';
import ProjectHeader from './ProjectDetailsModal/ProjectHeader';
import ProjectOverview from './ProjectDetailsModal/ProjectOverview';
import ProjectTechStack from './ProjectDetailsModal/ProjectTechStack';
import ProjectLearnings from './ProjectDetailsModal/ProjectLearnings';
import ProjectDetails from './ProjectDetailsModal/ProjectDetails';

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
              <CardContainer className='p-8 md:p-14 lg:p-16'>
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
                  <ProjectHeader
                    name={project.name}
                    year={project.year}
                    title={project.title}
                    tagline={project.tagline}
                  />

                  {/* Screenshots Carousel */}
                  <ProjectScreenshots
                    screenshots={project.screenshots}
                    projectName={project.name}
                  />

                  {/* Overview - Single column, readable */}
                  <ProjectOverview
                    problem={project.overview.problem}
                    solution={project.overview.solution}
                    impact={project.overview.impact}
                  />

                  {/* Tech Stack */}
                  <ProjectTechStack technologies={project.technologies} />

                  {/* Key Learnings */}
                  <ProjectLearnings learnings={project.learnings} />

                  {/* Details section - if available */}
                  <ProjectDetails details={project.details} />
                </CardContainer>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
