const router = require('express').Router();
const { Character } = require('../../models');

// POST create a new character
router.post('/', async (req, res) => {
  const newCharacterData = req.body;

  try {
    const createdCharacter = await Character.create(newCharacterData);
    res.status(200).json(createdCharacter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET character data by user ID and class ID
router.get('/:userId/:characterId', async (req, res) => {
  const { userId, characterId } = req.params;

  try {
    const character = await Character.findOne({
      where: {
        user_id: userId,
        character_id: characterId
      }
    });

    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update character data by user ID and character ID
router.put('/:userId/:characterId', async (req, res) => {
  const { userId, characterId } = req.params;
  const updatedData = req.body;

  try {
    const [updatedRowsCount, updatedCharacters] = await Character.update(updatedData, {
      where: {
        user_id: userId,
        character_id: characterId
      },
      returning: true // Returns the updated rows
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'Character not found' });
    }

    res.json(updatedCharacters[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: 'No Character found with this id!' });
      return;
    }

    res.status(200).json(CharacterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
