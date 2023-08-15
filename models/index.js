const User = require('./User');
const Character = require('./Character');
const Class = require('./Class');

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

Class.hasOne(Character, {
  foreignKey: 'class_id',
});

module.exports = { User, Character, Class };
