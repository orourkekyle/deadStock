const router = require("express").Router();
const sneakerApiController = require("../../controllers/sneakerApiController");

console.log("this is sneaker-search routes");

router
    .route("/")
    .get(sneakerApiController.findall);

module.exports = router;