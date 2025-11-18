'use client';

import { projects } from '@/lib/data/projects';
import { projectDetails } from '@/lib/data/project-details';
import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = selectedProjectId
    ? projectDetails[selectedProjectId as keyof typeof projectDetails]
    : null;

  return (
    <>
      <section id='projects' className='pb-16 lg:py-24'>
        <div className='container'>
          <SectionHeader
            eyebrow='Proven Impact'
            title='Featured Work'
            description='Bringing ideas to life with scalable, high-performance applications.'
          />
          <div className='flex flex-col mt-10 md:mt-20 gap-20'>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                onViewDetails={setSelectedProjectId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </>
  );
};

export default Projects;
