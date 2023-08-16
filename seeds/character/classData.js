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
    "ability1" : "spellcasting",
    "ability2" : "song of rest",
    "ability3" : "countercharm"
  },
  {
    "name": "Cleric",
    "ability1" : "spellcasting",
    "ability2" : "Divine Domain",
    "ability3" : "channel Divinity"
  },
  {
    "name": "Druid",
    "ability1" : "wild shape",
    "ability2" : "druid circle",
    "ability3" : "circle of the moon"
  },
  {
    "name": "Fighter",
    "ability1" : "second wind",
    "ability2" : "action surge",
    "ability3" : "indomitable"
  },
  {
    "name": "Monk",
    "ability1" : "monastic tradition",
    "ability2" : "slow fall",
    "ability3" : "evasion"
  },
  {
    "name": "Paladin",
    "ability1" : "divine smite",
    "ability2" : "sacred oath",
    "ability3" : "spellcasting"
  },
  {
    "name": "Ranger",
    "ability1" : "vanish",
    "ability2" : "lands stride",
    "ability3" : "primeval awareness"
  },
  {
    "name": "Rogue",
    "ability1" : "uncanny dodge",
    "ability2" : "slippery mind",
    "ability3" : "cunning action"
  },
  {
    "name": "Sorcerer",
    "ability1" : "spellcasting",
    "ability2" : "wild magic",
    "ability3" : "metamagic"
  },
  {
    "name": "Warlock",
    "ability1" : "pact magic",
    "ability2" : "eldritch invocations",
    "ability3" : "pact boon"
  },
  {
    "name": "Wizard",
    "ability1" : "spell mastery",
    "ability2" : "signature spells",
    "ability3" : "hipnotic gaze"
  }
]
const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;