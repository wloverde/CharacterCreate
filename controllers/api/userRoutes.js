const router = require('express').Router();
const { User } = require('../../models');

// POST create a new user
router.post('/', async (req, res) => {
  const newUser = req.body;

  try {
    const createdUser = await User.create(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET user by ID
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// PUT update user by ID
router.put('/:userId', async (req, res) => {
  const { userId } = req.params;
  const updatedData = req.body;

  try {
    const [updatedRowsCount, updatedUsers] = await User.update(updatedData, {
      where: {
        id: userId
      },
      returning: true // Returns the updated rows
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUsers[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE user by ID
router.delete('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedRowsCount = await User.destroy({
      where: {
        id: userId
      }
    });

    if (deletedRowsCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
