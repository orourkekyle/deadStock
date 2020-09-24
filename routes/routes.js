const path = require('path');
const routes = require('express').Router();
const { Router } = require('express');

// const apiRoutes = require('./api');




routes.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../deadstock/public/index.html"));
  });



// router.get("/login",(req, res) => {
//     res.render("../deadstock")
// })

module.exports = routes;

