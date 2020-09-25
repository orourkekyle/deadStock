const router = require('express').Router();
const itemRoutes = require('./itemRoutes');

router.use('/user', itemRoutes);

module.exports = router;