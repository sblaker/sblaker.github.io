import Link from 'next/link';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { myProjects } from '../../data/projects';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-transparent text-white p-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <Link href="/" className="text-[#00C2E8] hover:text-cyan-400 transition-colors duration-300">
          ← Back to Home
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <Link href={`/portfolio/${project.slug}`} key={project.slug}>
            <div className="h-full">
              <ProjectCard 
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl} // <-- Ecco la riga che passa l'URL dell'immagine
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}