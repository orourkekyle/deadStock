const path = require('path');
const router = require('express').Router();


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../deadstock/build/index.html"));
  });

// maybe set up profile authCheck and .get("/profile")


module.exports = router;