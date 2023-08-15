const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CharacterAbility extends Model {}

CharacterAbility.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        character_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'character',
                key: 'id',
            },
        },
        ability_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ability',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character_ability',
    }
);

module.exports = CharacterAbility;