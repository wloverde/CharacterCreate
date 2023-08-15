const { Class } = require('../../models');

const classData =
[
  {
    "name": "Barbarian",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  },
  {
    "name": "Bard",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  },
  {
    "name": "Cleric",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  },
  {
    "name": "Druid",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
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