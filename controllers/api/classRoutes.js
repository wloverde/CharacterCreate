const express = require('express');
const router = express.Router();
const { Class } = require('../../models');

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
    const singleClass = await Class.findByPk(classId);
    
    if (!singleClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    res.json(singleClass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST create new class
router.post('/', async (req, res) => {
  const classData = req.body;

  try {
    const newClass = await Class.create(classData);

    res.status(201).json(newClass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update class by ID
router.put('/:classId', async (req, res) => {
  const { classId } = req.params;
  const classData = req.body;

  try {
    const singleClass = await Class.findByPk(classId);

    if (!singleClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    // Update class properties if provided
    for (const key in classData) {
      if (classData.hasOwnProperty(key)) {
        singleClass[key] = classData[key];
      }
    }

    await singleClass.save();

    res.json(singleClass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE class by ID
router.delete('/:classId', async (req, res) => {
  const { classId } = req.params;

  try {
    const singleClass = await Class.findByPk(classId);

    if (!singleClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    await singleClass.destroy();

    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;