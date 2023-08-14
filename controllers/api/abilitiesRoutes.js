const router = require('express').Router();
const { Ability, CharacterAbility } = require('../../models');
// NEED Ability and CharacterAbility models


// POST associate an ability with a character
router.post(
  '/character/:characterId/abilities/:abilityId',
  async (req, res) => {
    const { characterId, abilityId } = req.params;
    
    try {
      const characterAbility = await CharacterAbility.create({
        character_id: characterId,
        ability_id: abilityId,
      });
      
      res.status(201).json(characterAbility);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  );
  
  // GET all abilities
  router.get('/', async (req, res) => {
    try {
      const abilities = await Ability.findAll();
      res.json(abilities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // GET abilities associated with a specific character
  router.get('/character/:characterId/abilities', async (req, res) => {
    const { characterId } = req.params;
  
    try {
      const characterAbilities = await CharacterAbility.findAll({
        where: {
          character_id: characterId,
        },
        include: [Ability],
      });
  
      res.json(characterAbilities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // PUT update the list of abilities associated with a character
  router.put('/character/:characterId/abilities', async (req, res) => {
    const { characterId } = req.params;
    const newAbilityIds = req.body.abilityIds;
    // you pass an array of new ability IDs similar to characterAbility seed
    
    try {
      // Find the existing character abilities
      const existingCharacterAbilities = await CharacterAbility.findAll({
        where: {
          character_id: characterId,
      },
    });

    // Delete existing abilities associated with the character
    await CharacterAbility.destroy({
      where: {
        character_id: characterId,
      },
    });

    // Create new associations for the updated abilities
    const newCharacterAbilities = await Promise.all(
      newAbilityIds.map(async (abilityId) => {
        return CharacterAbility.create({
          character_id: characterId,
          ability_id: abilityId,
        });
      })
    );

    res.json(newCharacterAbilities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE an ability from a character
router.delete(
  '/character/:characterId/abilities/:abilityId',
  async (req, res) => {
    const { characterId, abilityId } = req.params;

    try {
      const deletedRowsCount = await CharacterAbility.destroy({
        where: {
          character_id: characterId,
          ability_id: abilityId,
        },
      });

      if (deletedRowsCount === 0) {
        return res.status(404).json({ message: 'Connection not found' });
      }

      res.json({ message: 'Connection deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

module.exports = router;
