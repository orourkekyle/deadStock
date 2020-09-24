<<<<<<< HEAD
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

=======
const routes = require('express').Router();

routes.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../deadstock/build/index.html"));
  });

  router.get("/login",(req, res) => {
    res.render("../deadstock")
})

module.exports = routes;
>>>>>>> b36a3ef0df00a632b890d60c23aa69e6eb89e81c
