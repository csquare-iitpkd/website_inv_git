import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src={project.image || 'https://placehold.co/600x400/171717/FFFFFF?text=Project'} 
          alt={project.projectName} 
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-orange-500 mb-2 truncate">{project.projectName}</h3>
        <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden">{project.requirements}</p>
        <div className="text-right">
            <span className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                View Details &rarr;
            </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
