import { db } from '../db.js';

// Get all active projects (public)
export const getAllActiveProjects = async (req, res) => {
    try {
        const { rows } = await db.execute("SELECT * FROM projects WHERE isActive = 1");
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch projects", error: error.message });
    }
};

// Get a single project by ID (public)
export const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await db.execute({
            sql: "SELECT * FROM projects WHERE id = ?",
            args: [id]
        });

        if (rows.length === 0) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch project", error: error.message });
    }
};

// Get projects for the logged-in user (protected)
export const getMyProjects = async (req, res) => {
    try {
        const { email } = req.user;
        const { rows } = await db.execute({
            sql: "SELECT * FROM projects WHERE ownerEmail = ?",
            args: [email]
        });
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch user projects", error: error.message });
    }
};


// Create a new project (protected)
export const createProject = async (req, res) => {
    try {
        const { projectName, projectHandler, image, requirements, peopleNeeded, startDate, endDate, isActive } = req.body;
        const { email } = req.user;

        await db.execute({
            sql: "INSERT INTO projects (projectName, projectHandler, image, requirements, peopleNeeded, startDate, endDate, isActive, ownerEmail) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: [projectName, projectHandler, image, requirements, peopleNeeded, startDate, endDate, isActive ? 1 : 0, email]
        });

        res.status(201).json({ message: "Project created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to create project", error: error.message });
    }
};

// Update an existing project (protected)
export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { projectName, projectHandler, image, requirements, peopleNeeded, startDate, endDate, isActive } = req.body;
        const { email } = req.user;

        // Check if the user owns the project
        const { rows } = await db.execute({
            sql: "SELECT ownerEmail FROM projects WHERE id = ?",
            args: [id]
        });

        if (rows.length === 0 || rows[0].ownerEmail !== email) {
            return res.status(403).json({ message: "You are not authorized to update this project" });
        }
        
        await db.execute({
            sql: "UPDATE projects SET projectName = ?, projectHandler = ?, image = ?, requirements = ?, peopleNeeded = ?, startDate = ?, endDate = ?, isActive = ? WHERE id = ?",
            args: [projectName, projectHandler, image, requirements, peopleNeeded, startDate, endDate, isActive ? 1 : 0, id]
        });

        res.status(200).json({ message: "Project updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to update project", error: error.message });
    }
};

// Delete a project (protected)
export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.user;

        // Check if the user owns the project
        const { rows } = await db.execute({
            sql: "SELECT ownerEmail FROM projects WHERE id = ?",
            args: [id]
        });

        if (rows.length === 0 || rows[0].ownerEmail !== email) {
            return res.status(403).json({ message: "You are not authorized to delete this project" });
        }

        await db.execute({
            sql: "DELETE FROM projects WHERE id = ?",
            args: [id]
        });

        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete project", error: error.message });
    }
};
