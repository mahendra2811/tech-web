'use client';

import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Globe } from 'lucide-react';
import { Project } from '@/constant/projects';
import { useClickOutside } from '@/hooks/useClickOutside';
import Image from 'next/image';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useClickOutside(modalRef, onClose);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Dynamically import Lucide icons
  const renderTechIcon = (iconName: string) => {
    // This is a simplified approach - in a real app, you might want to use dynamic imports
    // or a more sophisticated approach to handle icons
    switch (iconName.toLowerCase()) {
      case 'react':
      case 'reactjs':
      case 'react.js':
        return <div className="w-5 h-5 text-[#61DAFB]">⚛️</div>;
      case 'node':
      case 'nodejs':
      case 'node.js':
        return <div className="w-5 h-5 text-[#339933]">🟢</div>;
      case 'python':
        return <div className="w-5 h-5 text-[#3776AB]">🐍</div>;
      case 'javascript':
      case 'js':
        return <div className="w-5 h-5 text-[#F7DF1E]">JS</div>;
      case 'typescript':
      case 'ts':
        return <div className="w-5 h-5 text-[#3178C6]">TS</div>;
      default:
        return <div className="w-5 h-5">•</div>;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-16 bg-black/70 backdrop-blur-sm">
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-background rounded-lg shadow-xl mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 text-foreground hover:bg-background/90 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main image */}
            <div className="relative w-full h-64 md:h-80 bg-muted">
              {project.image ? (
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl font-bold text-primary/30">
                  {project.title}
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              {/* Project title and status */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                {project.status && (
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'active'
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-red-500/20 text-red-500'
                    }`}
                  >
                    {project.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                )}
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary/30 text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">About this project</h3>
                <p className="text-muted-foreground">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack
                    ? // Use detailed tech stack if available
                      project.techStack.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/20 rounded-md"
                        >
                          {tech.icon ? renderTechIcon(tech.icon) : null}
                          <span>{tech.name}</span>
                        </div>
                      ))
                    : // Fall back to simple technologies array
                      project.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/20 rounded-md"
                        >
                          {renderTechIcon(tech)}
                          <span>{tech}</span>
                        </div>
                      ))}
                </div>
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {project.gallery.slice(0, 6).map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-video bg-muted rounded-md overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0072FF] text-white px-4 py-2 rounded-lg hover:bg-[#0072FF]/90 transition-colors"
                  >
                    <Globe className="w-4 h-4" /> Live Demo
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#333] text-white px-4 py-2 rounded-lg hover:bg-[#333]/90 transition-colors"
                  >
                    <Github className="w-4 h-4" /> View Code
                  </a>
                )}
              </div>

              {/* Open Source CTA */}
              {project.isOpenSource && (
                <div className="mt-6 border-t pt-4">
                  <h3 className="font-bold">Want to contribute?</h3>
                  <p className="text-sm text-muted-foreground">
                    This project is open-source! Fork it on GitHub and submit your pull requests.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
