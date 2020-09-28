const path = require("path");
const router = require("express").Router();
const createUserRoutes = require("./create-user-routes");
const sneakerSearchRoutes = require("./sneaker-search-routes");
const oauthRoutes = require("./oauth-routes");

// sneaker search routes
router.use("/sneakers", sneakerSearchRoutes);

// google oauth routes
router.use("/oauth", oauthRoutes)

// local auth routes
router.use("/local", createUserRoutes);

// for *, render html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"))
})

module.exports = router;