import React from 'react';

const ProjectDetails = ({ project }) => {
  if (!project) {
    return <div className="text-center text-white py-10">Loading project details...</div>;
  }

  return (
    <div className="text-white min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        <img
          className="w-full h-64 sm:h-80 object-cover bg-gray-900"
          src={project.image || 'https://placehold.co/800x400/171717/FFFFFF?text=Project'}
          alt={project.projectName}
        />
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-4">{project.projectName}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-300 mb-2">Project Handler</h2>
              <p className="text-gray-400">{project.projectHandler}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-300 mb-2">People Needed</h2>
              <p className="text-gray-400">{project.peopleNeeded}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-300 mb-2">Start Date</h2>
              <p className="text-gray-400">{new Date(project.startDate).toLocaleDateString()}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-300 mb-2">End Date</h2>
              <p className="text-gray-400">{new Date(project.endDate).toLocaleDateString()}</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-2">Requirements</h2>
            <p className="text-gray-400 whitespace-pre-wrap">{project.requirements}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
