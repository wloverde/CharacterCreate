const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

// Created character information
Character.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    class: {
      type: DataTypes.STRING, // 'Wizard', 'Barbarian', 'Fighter', etc.
      allowNull: false,
    },
    race: {
      type: DataTypes.STRING, // 'Human', 'Orc', 'Elf', etc.
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: true, // Could be updated later
    },
    max_health: {
      type: DataTypes.INTEGER,
      allowNull: true, // Could be altered by items, abilities, or leveling up
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character',
  }
);

module.exports = Character;
