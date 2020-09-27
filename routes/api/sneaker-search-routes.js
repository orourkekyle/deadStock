const router = require("express").Router();
const sneakerApiController = require("../../controllers/sneakerApiController.js");

// Matches with "/api/google"
router
  .route("/")
  .get(sneakerApiController.findAll);

module.exports = router;