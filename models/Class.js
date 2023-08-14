const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Class extends model {}

Class.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING, // VARCHAR
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'class',
    }
);

module.exports = Class;