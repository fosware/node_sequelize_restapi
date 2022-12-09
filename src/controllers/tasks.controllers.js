import { Tasks } from "../models/Tasks.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.findAll();
        console.log(tasks)
        if (tasks.length < 1)
            return res.status(404).json({ message: "No Tasks yet" });
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.findOne({
            where: {
                id
            },
            attributes: ['name', 'done']
        });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const createTasks = async (req, res) => {
    try {
        const { name, done, id_project } = req.body;
        const newTask = await Tasks.create({
            name,
            done,
            id_project
        });

        res.json(newTask)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.findOne({
            where: {
                id
            },
        });
        task.set(req.body);
        await task.save();
        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
 }

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.destroy({
            where: {
                id,
            }
        });
        if(!task)
            res.status(404).json({message: 'Not task founded'})
        else 
            res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
 }
