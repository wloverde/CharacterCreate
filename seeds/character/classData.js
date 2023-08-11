const { Classes} = require('../../models');

const classdata =
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
const seedClass = () => Classes.bulkCreate(classdata);

module.exports = seedClass;