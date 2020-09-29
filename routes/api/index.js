const path = require("path");
const router = require("express").Router();
<<<<<<< HEAD
// const createUserRoutes = require("./create-user-routes");
const sneakerSearchRoutes = require("./sneaker-search-routes");
// const oauthRoutes = require("./oauth-routes");
=======
const oauthRoutes = require("./oauth-routes");
// const sneakerSearchRoutes = require("./sneaker-search-routes");


// oauth routes
router.use(oauthRoutes);
>>>>>>> 8cb2c03f768fb7837917e04c7ab0cf51218ad2a4

// sneaker search routes
// router.use("/sneakers", sneakerSearchRoutes);

// // google oauth routes
// router.use("/oauth", oauthRoutes)

// // local auth routes
// router.use("/local", createUserRoutes);

// for *, render html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"))
})

module.exports = router;