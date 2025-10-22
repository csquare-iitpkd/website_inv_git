import React, { useState, useEffect } from 'react';

const ProjectForm = ({ project, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        projectName: '',
        projectHandler: '',
        image: '',
        requirements: '',
        peopleNeeded: '',
        startDate: '',
        endDate: '',
        isActive: true,
    });

    useEffect(() => {
        if (project) {
            setFormData({
                ...project,
                startDate: project.startDate ? new Date(project.startDate).toISOString().split('T')[0] : '',
                endDate: project.endDate ? new Date(project.endDate).toISOString().split('T')[0] : '',
            });
        }
    }, [project]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-2xl text-white">
                <h2 className="text-2xl font-bold mb-6 text-orange-500">{project ? 'Edit Project' : 'Add New Project'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label htmlFor="projectName" className="block text-md font-bold text-white mb-1">Project Name</label>
                    <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} placeholder="Project Name" required className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <label htmlFor="projectHandler" className="block text-md font-bold text-white mb-1">Project Handler</label>
                    <input type="text" name="projectHandler" value={formData.projectHandler} onChange={handleChange} placeholder="Project Handler" required className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <label htmlFor="image" className="block text-md font-bold text-white mb-1">Image URL</label>
                    <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <label htmlFor="requirements" className="block text-md font-bold text-white mb-1">Requirements</label>
                    <textarea name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Requirements" required className="w-full p-2 bg-gray-700 rounded border border-gray-600 h-24 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="peopleNeeded" className="block text-md font-bold text-white mb-1 md:col-span-1">People Needed</label>
                            <input type="number" name="peopleNeeded" value={formData.peopleNeeded} onChange={handleChange} placeholder="People Needed" required className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="startDate" className="block text-md font-bold text-white mb-1 md:col-span-1">Start Date</label>
                            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="endDate" className="block text-md font-bold text-white mb-1 md:col-span-1">End Date</label>
                            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} id="isActive" className="mr-2 h-4 w-4 text-orange-600 bg-gray-700 border-gray-600 rounded focus:ring-orange-500" />
                        <label htmlFor="isActive" className="text-gray-300">Active (Visible on projects page)</label>
                    </div>
                    <div className="flex justify-end space-x-4 pt-4">
                        <button type="button" onClick={onCancel} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition-colors">Cancel</button>
                        <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors">{project ? 'Update' : 'Add'} Project</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
