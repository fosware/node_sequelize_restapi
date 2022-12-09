import { Projects } from "../models/Projects.js"
import { Tasks } from "../models/Tasks.js"


export const getProjects = async (req, res) => {
    try {
        const projects = await Projects.findAll()
        res.json(projects)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getProject = async (req, res) => {
    try {
        const { id } = req.params
        const project = await Projects.findOne({
            where: {
                id,
            },
        });
        if(!project)
            return res.status(404).json({message: "Project doesn't exist"})
        res.json(project);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createProject = async (req, res) => {
    const { name, priority, description } = req.body;
    try {
        const newProject = await Projects.create({
            name,
            priority,
            description
        })
        res.json(newProject)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateProject = async (req, res) => {
    
    try {
        const {id} = req.params;
        const {name, priority, description} = req.body;
        const project = await Projects.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save();
        res.json(project)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        await Projects.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getProjectTasks = async (req, res) => {
    const { id } = req.params;
    try {
        const tasks = await Tasks.findAll({
            where: {
                id_project :id,
            }
        });
        return res.status(200).json(tasks);
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
 }