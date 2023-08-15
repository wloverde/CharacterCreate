const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');


class Ability extends Model {}

Ability.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ability_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ability',
    }
);

module.exports = Ability;