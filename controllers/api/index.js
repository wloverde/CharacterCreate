const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const classRoutes = require('./classRoutes');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/classes', classRoutes);

module.exports = router;
