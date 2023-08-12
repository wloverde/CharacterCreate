const { Ability } = require('../../models');

const abilitydata =
[
  {
    "ability_name": "darkvision",
    "description": "You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet."
  },
  {
    "ability_name": "acid arrow",
    "description": "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
  },  
  {
    "ability_name": "Prestidigitation",
    "description": "You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor."
  },  
  {
    "ability_name": "keen senses",
    "description": "You have proficiency in the Perception skill."
  },  
  {
    "ability_name": "action surge",
    "description": "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action."
  }
]

const seedAbility = () => Ability.bulkCreate(abilitydata);

module.exports = seedAbility;