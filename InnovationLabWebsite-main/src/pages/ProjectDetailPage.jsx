import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/projects/ProjectDetails';
import api from '../services/api';

const ProjectDetailPage = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await api.getProjectById(id);
        setProject(response.data);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
    };
    fetchProject();
  }, [id]);

  return <ProjectDetails project={project} />;
};

export default ProjectDetailPage;
