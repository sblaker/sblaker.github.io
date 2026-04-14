import React from "react";
import Image from "next/image";

// Define prop types for clarity with TypeScript
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-[#1C1C1C] rounded-2xl shadow-lg h-full flex flex-col transition-transform duration-300 hover:scale-105 overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={`Preview image for project ${title}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

        {/* Technologies (positioned at the bottom) */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-gray-300 text-xs rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
