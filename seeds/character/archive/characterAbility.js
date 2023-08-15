const { CharacterAbility } = require('../../models');

const charAbilityData =

[
    {   
        "character_id": 1,
        "ability_id": 1
    }
]

const seedCharAbility = () => CharacterAbility.bulkCreate(charAbilityData);

module.exports = seedCharAbility;