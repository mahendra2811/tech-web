import { useState } from 'react';
import { type Project } from '@/constant/projects';
import { ProjectModal } from './ProjectModal';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <div
        className="group relative overflow-hidden rounded-lg border border-white/20 bg-transparent shadow-sm transition-all hover:shadow-md h-[420px] cursor-pointer"
        
      >
        <div className="relative h-48 w-full bg-muted overflow-hidden">
          {project.image ? (
            <Image src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl font-bold text-primary/30">
              Project Image
            </div>
          )}
        </div>
        <div className="p-6 backdrop-blur-md bg-white/10">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-white rounded-full">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white" onClick={openModal} >{project.title}</h3>
          <p className="text-white/80 mb-4 line-clamp-2 h-12 overflow-hidden">
            {project.description}
          </p>
          <div className="flex overflow-hidden whitespace-nowrap gap-2 mb-4 h-8">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-block px-2 py-1 text-xs font-medium bg-white/20 text-white rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <button 
            onClick={openModal}
            className="text-sm font-medium  text-white hover:text-primary hover:underline"
          >
            View Case Study →
          </button>
        </div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal 
        project={project}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
