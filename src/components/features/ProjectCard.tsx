import Link from 'next/link';
import { type Project } from '@/constant/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full bg-muted overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl font-bold text-primary/30">
            Project Image
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/portfolio/${project.id}`} className="text-sm font-medium text-primary hover:underline">
          View Case Study →
        </Link>
      </div>
    </div>
  );
}