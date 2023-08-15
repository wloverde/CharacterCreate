const express = require('express');
const router = express.Router();
const { User, Character } = require('../../models');

// GET all characters
router.get('/', async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// GET character by ID
router.get('/:characterId', async (req, res) => {
  const { characterId } = req.params;

  try {
    const character = await Character.findByPk(characterId);
    
    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all characters for a specific user
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId, {
      include: { model: Character }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.Characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST create new character for a specific user
router.post('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const characterData = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newCharacter = await user.createCharacter(characterData);

    res.status(201).json(newCharacter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update character by ID
router.put('/:characterId', async (req, res) => {
  const { characterId } = req.params;
  const characterData = req.body;

  try {
    const character = await Character.findByPk(characterId);

    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }

    // Update character properties if provided
    for (const key in characterData) {
      if (characterData.hasOwnProperty(key)) {
        character[key] = characterData[key];
      }
    }

    await character.save();

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE character by ID
router.delete('/:characterId', async (req, res) => {
  const { characterId } = req.params;

  try {
    const character = await Character.findByPk(characterId);

    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }

    await character.destroy();

    res.json({ message: 'Character deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

