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
        // const response = await api.getProjectById(id);
        // setProject(response.data);
        
        // --- MOCK DATA ---
         const mockProjects = {
          1: { id: 1, projectName: 'Robotic Arm', projectHandler: 'Dr. XYZ', requirements: 'Experience with Arduino, C++, and mechanical design. Familiarity with ROS is a plus.', peopleNeeded: 3, startDate: '2025-08-01', endDate: '2026-05-30', image: 'https://placehold.co/800x400/1e40af/FFFFFF?text=RoboArm' },
          2: { id: 2, projectName: 'AI Chatbot for Campus', projectHandler: 'Dr. ABC', requirements: 'Strong Python skills, experience with TensorFlow or PyTorch, and knowledge of natural language processing techniques.', peopleNeeded: 4, startDate: '2025-09-01', endDate: '2026-04-15', image: 'https://placehold.co/800x400/7c2d12/FFFFFF?text=AI+Bot' },
          3: { id: 3, projectName: 'IoT Weather Station', projectHandler: 'Dr. PQR', requirements: 'Hands-on experience with Raspberry Pi, various sensors (temperature, humidity, etc.), and data transmission protocols like MQTT.', peopleNeeded: 2, startDate: '2025-07-15', endDate: '2025-12-20', image: 'https://placehold.co/800x400/166534/FFFFFF?text=Weather' },
          4: { id: 4, projectName: 'Drone Delivery System', projectHandler: 'Dr. LMN', requirements: 'Proficiency in drone assembly, PX4/ArduPilot, and embedded systems programming. Experience with computer vision is highly desirable.', peopleNeeded: 5, startDate: '2025-08-15', endDate: '2026-06-30', image: 'https://placehold.co/800x400/581c87/FFFFFF?text=Drone' },
        };
        setProject(mockProjects[id]);
        // --- END MOCK DATA ---

      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
    };
    fetchProject();
  }, [id]);

  return <ProjectDetails project={project} />;
};

export default ProjectDetailPage;
