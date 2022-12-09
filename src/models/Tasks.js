import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Projects } from './Projects.js'


export const Tasks = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})
