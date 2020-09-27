const path = require("path");
const router = require('express').Router();
const oAuth = require('../api/oauth-routes');
const sneakerSearch = require('../api/sneaker-search-routes');

router.use('/sneakers', sneakerSearch);

router.use('/google', oAuth);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;