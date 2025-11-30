import axios from 'axios';

// You would replace this with your actual backend URL
const API_URL = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// --- Public Routes ---
export const getActiveProjects = () => api.get('/projects');
export const getProjectById = (id) => api.get(`/projects/${id}`);

// --- Auth Routes ---
export const googleLogin = (tokenData) => api.post('/auth/google', tokenData);

// --- Protected Routes ---
export const getMyProjects = () => api.get('/projects/my-projects');
export const createProject = (projectData) => api.post('/projects', projectData);
export const updateProject = (id, projectData) => api.put(`/projects/${id}`, projectData);
export const deleteProject = (id) => api.delete(`/projects/${id}`);


const apis = {
    getActiveProjects,
    getProjectById,
    googleLogin,
    getMyProjects,
    createProject,
    updateProject,
    deleteProject
}

export default apis;
