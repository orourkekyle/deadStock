const router = require("express").Router();
const sneakerApiController = require("../../controllers/sneakerApiController");

console.log("HIT: sneaker-search-routes");

router
    .route("/")
    .get(sneakerApiController.findAll);

module.exports = router;