const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Class extends Model {}

Class.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ability1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ability2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ability3: {
            type: DataTypes.STRING,
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