const router = require("express").Router();
const sneakerApiController = require("../../controllers/sneakerApiController");

console.log("this is sneaker-search routes");

router
    .route("/")
    .get(() => {
        return sneakerApiController.findAll
    });

module.exports = router;