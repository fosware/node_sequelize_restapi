import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Tasks } from './Tasks.js';

export const Projects = sequelize.define('projects', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
});

Projects.hasMany(Tasks, {
    foreignKey: 'id_project',
    sourceKey: 'id'
})

Tasks.belongsTo(Projects, {
    foreignKey:'id_project',
    targetKey: 'id'
})