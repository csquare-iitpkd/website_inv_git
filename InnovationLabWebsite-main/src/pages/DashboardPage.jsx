import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ProjectForm from '../components/projects/ProjectForm';
import Logout from '../components/auth/Logout';

const DashboardPage = () => {
    const [myProjects, setMyProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));

    const fetchMyProjects = async () => {
        try {
            const response = await api.getMyProjects();
            setMyProjects(response.data);
        } catch (error) {
            console.error("Failed to fetch user projects:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyProjects();
    }, []);

    const handleSaveProject = async (projectData) => {
        try {
            if (editingProject) {
                await api.updateProject(editingProject.id, projectData);
                // console.log("Updating project:", projectData);
            } else {
                await api.createProject(projectData);
                // console.log("Creating project:", projectData);
            }
            fetchMyProjects(); // Refresh list
        } catch (error) {
            console.error("Failed to save project:", error);
        } finally {
            setIsFormOpen(false);
            setEditingProject(null);
        }
    };

    const handleAddNew = () => {
        setEditingProject(null);
        setIsFormOpen(true);
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setIsFormOpen(true);
    };

    const handleToggleActive = async (project) => {
        try {
            await api.updateProject(project.id, { ...project, isActive: !project.isActive });
            // console.log("Toggling active status for project:", project.id);
            fetchMyProjects(); // Refresh list
        } catch (error) {
            console.error("Failed to toggle active status:", error);
        }
    };


    return (
        <div className="text-white min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-orange-500">My Dashboard</h1>
                        <p className="text-gray-400">Welcome, {user?.name || 'Project Handler'}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={handleAddNew} className="bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                            + Add New Project
                        </button>
                        <Logout />
                    </div>
                </div>

                {loading ? <p>Loading your projects...</p> : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myProjects.map(project => (
                            <div key={project.id} className={`bg-gray-800 rounded-lg shadow-lg p-6 ${!project.isActive && 'opacity-60'}`}>
                                <h3 className="text-xl font-bold text-orange-400 mb-2">{project.projectName}</h3>
                                <img src={project.image} alt={project.projectName} className="w-full h-40 object-cover rounded-md mb-4 bg-black" />
                                <p className="text-sm text-gray-400 mb-4">{project.requirements.substring(0, 100)}...</p>
                                <div className="flex justify-between items-center">
                                    <button onClick={() => handleEdit(project)} className="text-blue-400 hover:underline">Edit</button>
                                    <button onClick={() => handleToggleActive(project)} className={`px-3 py-1 text-sm rounded-full ${project.isActive ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'}`}>
                                        {project.isActive ? 'Active' : 'Inactive'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {isFormOpen && (
                <ProjectForm
                    project={editingProject}
                    onSave={handleSaveProject}
                    onCancel={() => { setIsFormOpen(false); setEditingProject(null); }}
                />
            )}
        </div>
    );
};

export default DashboardPage;
