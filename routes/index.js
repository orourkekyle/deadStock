const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// external api routes
router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

// maybe set up profile authCheck and .get("/profile")


module.exports = router;