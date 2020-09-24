const path = require('path');
const router = require('express').Router();


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../deadstock/build/index.html"));
  });

router.get("/login",(req, res) => {
    res.render("../deadstock")
})


module.exports = router;