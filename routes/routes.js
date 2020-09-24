const routes = require('express').Router();



routes.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../deadstock/build/index.html"));
  });



// router.get("/login",(req, res) => {
//     res.render("../deadstock")
// })

module.exports = routes;

