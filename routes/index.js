const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

app.use(apiRoutes);


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../deadstock/public/index.html"));
  });

// maybe set up profile authCheck and .get("/profile")


module.exports = router;