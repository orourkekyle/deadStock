const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// external api routes
router.use("/api", apiRoutes);

// default route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

module.exports = router;