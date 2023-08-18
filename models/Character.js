const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    character_name: {
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
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'class',
        key: 'id',
      },
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT, // Image URL or filepath
      allowNull: true, // Image may be optional
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 20,
      },
    },
    armor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
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
