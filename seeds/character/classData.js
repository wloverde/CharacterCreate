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
    "name": "Fighter",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  },
  {
    "name": "Monk",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  },
  {
    "name": "Paladin",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  },
  {
    "name": "Ranger",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  },
  {
    "name": "Rogue",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  },
  {
    "name": "Sorcerer",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  },
  {
    "name": "Warlock",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  },
  {
    "name": "Wizard",
    "ability1" : "swing axe",
    "ability2" : "get mad",
    "ability3" : "bonus attack"
  }
]
const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;