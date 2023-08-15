const Ability = require('./archive/Ability');
const CharacterAbility = require('./archive/CharacterAbility');
const User = require('./User');
const Character = require('./Character');
const Class = require('./Class');

// Associations

Ability.belongsToMany(Character, {
  through: CharacterAbility,
  foreignKey: 'ability_id',
});

Character.belongsToMany(Ability, {
  through: CharacterAbility,
  foreignKey: 'character_id',
});

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

Character.hasOne(Class, {
  foreignKey: 'class_id',
});

Class.belongsTo(Character, {
  foreignKey: 'class_id',
});


module.exports = { Ability, User, Character, Class, CharacterAbility };
