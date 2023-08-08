const router = require('express').Router();
const { Character } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newCharacter = await Character.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
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
