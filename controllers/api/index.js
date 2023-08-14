const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const abilitiesRouter = require('./abilitiesRouter');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/abilities', abilitiesRouter);

module.exports = router;
