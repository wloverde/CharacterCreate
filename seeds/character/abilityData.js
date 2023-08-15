const { Ability } = require('../../models');

const abilityData =
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
  },
  {
    "ability_name": "Eldritch Blast",
    "description": "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage."
  },
  {
    "ability_name": "Sneak Attack",
    "description": "Once per turn, you can deal extra damage to one creature you hit with an attack if you have advantage on the attack roll. The extra damage is 2d6 for a rogue at level 1 and increases as you gain levels."
  },
  {
    "ability_name": "Divine Smite",
    "description": "When you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage."
  },
  {
    "ability_name": "Wild Shape",
    "description": "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice, and you regain expended uses when you finish a short or long rest."
  },
  {
    "ability_name": "Rage",
    "description": "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain bonuses to damage rolls, resistance to bludgeoning, piercing, and slashing damage, and more."
  },
  {
    "ability_name": "Channel Divinity: Turn Undead",
    "description": "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage."
  },
  {
    "ability_name": "Arcane Recovery",
    "description": "Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level equal to or less than half your wizard level."
  },
  {
    "ability_name": "Cunning Action",
    "description": "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat."
  },
  {
    "ability_name": "Divine Sense",
    "description": "As an action, you can open your awareness to detect the presence of celestial, fiendish, or undead creatures within 60 feet of you."
  },
  {
    "ability_name": "Fey Ancestry",
    "description": "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
  }
]

const seedAbility = () => Ability.bulkCreate(abilityData);

module.exports = seedAbility;