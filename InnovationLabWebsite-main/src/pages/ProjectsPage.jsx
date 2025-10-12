import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import api from '../services/api';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // const response = await api.getActiveProjects();
        // setProjects(response.data);

        // --- MOCK DATA ---
        setProjects([
          { id: 1, projectName: 'Robotic Arm', requirements: 'Experience with Arduino and C++.', image: 'https://placehold.co/600x400/1e40af/FFFFFF?text=RoboArm' },
          { id: 2, projectName: 'AI Chatbot for Campus', requirements: 'Knowledge of Python and NLP.', image: 'https://placehold.co/600x400/7c2d12/FFFFFF?text=AI+Bot' },
          { id: 3, projectName: 'IoT Weather Station', requirements: 'Familiarity with Raspberry Pi and sensors.', image: 'https://placehold.co/600x400/166534/FFFFFF?text=Weather' },
          { id: 4, projectName: 'Drone Delivery System', requirements: 'Experience with drone hardware and flight control software.', image: 'https://placehold.co/600x400/581c87/FFFFFF?text=Drone' },
        ]);
        // --- END MOCK DATA ---

      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-white bg-gray-900 min-h-screen">Loading projects...</div>;
  }

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">Open Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
