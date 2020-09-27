const router = require("express").Router();
const sneakerApiController = require("../../controllers/sneakerApiController");


router
    .route("/")
    .get(sneakerApiController.findAll);

module.exports = router;