const Ability = require('./Ability');
const CharacterAbility = require('./CharacterAbility');
const User = require('./User');
const Character = require('./Character');
const Class = require('./Class');

// Associations
Character.hasMany(CharacterAbility, {
  foreignKey: 'character_id',
});

CharacterAbility.belongsTo(Character, {
  foreignKey: 'character_id',
});

CharacterAbility.belongsTo(Ability, {
  foreignKey: 'ability_id',
});

Ability.hasMany(CharacterAbility, {
  foreignKey: 'ability_id',
});

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

module.exports = { Ability, User, Character, Class, CharacterAbility };
