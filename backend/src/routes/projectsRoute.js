import express from 'express';
import { 
    getAllActiveProjects, 
    getProjectById, 
    getMyProjects,
    createProject, 
    updateProject, 
    deleteProject 
} from '../controllers/projectController.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllActiveProjects);
router.get('/my-projects', requireAuth, getMyProjects);
router.get('/:id', getProjectById);

// Protected routes
router.post('/', requireAuth, createProject);
router.put('/:id', requireAuth, updateProject);
router.delete('/:id', requireAuth, deleteProject);


export default router;
