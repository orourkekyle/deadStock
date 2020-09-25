const router  = require('express').Router();
const { getSavedItems, saveItem, removeItem, getUsers, getMe} = require("../controllers/item-controller");

router
.route('/')
.get(getSavedItems)
.post(saveItem);

router.route('/:id').delete(removeItem);

router
    .route('/matched')
    .get(getUsers);

router
    .route('/me')
    .get(getMe)


    modeule.exports = router;