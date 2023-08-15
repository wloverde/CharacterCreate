const express = require('express');
const router = express.Router();
const { Class } = require('../../models');

// POST create new class
router.post('/', async (req, res) => {
    const { name, ability1, ability2, ability3 } = req.body;
  
    try {
      const newClass = await Class.create({
        name,
        ability1,
        ability2,
        ability3
      });
  
      res.status(201).json(newClass);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// GET all classes
router.get('/', async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET class by ID
router.get('/:classId', async (req, res) => {
  const { classId } = req.params;

  try {
    const classInstance = await Class.findByPk(classId);
    
    if (!classInstance) {
      return res.status(404).json({ message: 'Class not found' });
    }

    res.json(classInstance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update class abilities
router.put('/:classId', async (req, res) => {
  const { classId } = req.params;
  const { ability1, ability2, ability3 } = req.body;

  try {
    const classInstance = await Class.findByPk(classId);

    if (!classInstance) {
      return res.status(404).json({ message: 'Class not found' });
    }

    // Update abilities if provided
    if (ability1) classInstance.ability1 = ability1;
    if (ability2) classInstance.ability2 = ability2;
    if (ability3) classInstance.ability3 = ability3;

    await classInstance.save();

    res.json(classInstance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE class by ID
router.delete('/:classId', async (req, res) => {
  const { classId } = req.params;

  try {
    const classInstance = await Class.findByPk(classId);

    if (!classInstance) {
      return res.status(404).json({ message: 'Class not found' });
    }

    await classInstance.destroy();

    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;