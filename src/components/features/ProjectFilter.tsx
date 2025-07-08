import React from 'react';
import { PROJECT_CATEGORIES } from '@/constant/projects';

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

export function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-2 justify-center">
        {PROJECT_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary/30 text-secondary-foreground hover:bg-secondary/50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
