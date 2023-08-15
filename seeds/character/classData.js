const { Class } = require('../../models');

const classData =
[
  {
    "name": "Barbarian"
  },
  {
    "name": "Bard"
  },
  {
    "name": "Cleric"
  },
  {
    "name": "Druid"
  },
  {
    "name": "Fighter"
  },
  {
    "name": "Monk"
  },
  {
    "name": "Paladin"
  },
  {
    "name": "Ranger"
  },
  {
    "name": "Rogue"
  },
  {
    "name": "Sorcerer"
  },
  {
    "name": "Warlock"
  },
  {
    "name": "Wizard"
  }
]
const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;