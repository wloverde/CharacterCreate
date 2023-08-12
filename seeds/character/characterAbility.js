const { CharAbility } = require('../../models');

const charabilitydata =

[
    {   
        "character_id": 1,
        "ability_id": 1
    }
]

const seedCharAbility = () => CharAbility.bulkCreate(charabilitydata);

module.exports = seedCharAbility;