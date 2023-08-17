const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Login information
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Username is required.',
        },
        len: {
          args: [8, 25],
          msg: 'Username must be between 8 and 25 characters.'
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "bob",
      // validate: {
      //   notEmpty: {
      //     msg: 'Name is required.',
      //   },
      // },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Email address is required.',
        },
        isEmail: {
          msg: 'Invalid email format.',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password is required.',
        },
        len: {
          args: [8, 25],
          msg: 'Password must be between 8 and 25 characters.',
        },
      },
    },
    profile_url: {
      type: DataTypes.VIRTUAL, // Not stored in database
      get() {
        return `/profile/${this.username}`; // Link to user page
      }
    }
  },
  {
    hooks: {
      // encrypts passwords
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
