const router = require('express').Router();
const path = require('path');


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../deadstock/public/index.html"));
  });

  routes.get("/login",(req, res) => {
    res.render("../deadstock")
})

module.exports = routes;
