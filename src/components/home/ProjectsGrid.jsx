import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  { title: 'Em desenvolvimento', subtitle: 'Aguarde novidades' },
  { title: 'Em desenvolvimento', subtitle: 'Aguarde novidades' },
  { title: 'Em desenvolvimento', subtitle: 'Aguarde novidades' },
];

export default function ProjectsGrid() {
  return (
    <section className="w-full px-6 lg:px-24 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              index={i}
              title={project.title}
              subtitle={project.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}