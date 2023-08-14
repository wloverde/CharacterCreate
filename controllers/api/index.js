const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const abilitiesRoutes = require('./abilitiesRoutes');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/abilities', abilitiesRoutes);

module.exports = router;
