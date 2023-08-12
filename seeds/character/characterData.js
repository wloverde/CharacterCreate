const { Character } = require('../../models');

const characterdata =
[
  {
    "user_id": 1 , 
    "class_id": 8 ,
    "character_name": "Drizt Do Urden",
    "image": "https://placebeard.it/200x400",
    "level" : 1,
    "race": "Dark Elf",

    "health" : 17,
    "armor" : 13,
    "speed" : 30,

    "strength": 12 ,
    "dexterity": 18 ,
    "constitution": 16 ,
    "intelligence": 15 ,
    "wisdom": 17 ,
    "charisma": 16
  }
]
const seedCharacter = () => Character.bulkCreate(characterdata);

module.exports = seedCharacter;
