const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("req.data: ", req.data);
        db.Wishlist.find(req.data)
            .then(dbWishlist => {
                console.log("dbWishlist - inside wishlistController findAll: ", dbWishlist);
                return res.json(dbWishlist)
            })
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        console.log("req.body - inside wishlistController create: ", req.body)
        db.Wishlist
            .create(req.body)
            .then(dbWishlist => {
                console.log("dbWishlist - inside wishlistController create: ", dbWishlist);
                return res.json(dbWishlist)
            })
            .catch(err => res.status(422).json(err))
    },

    remove: function(req, res) {
        db.Wishlist
            .findById({sneakerId: req.params.sneakerId})
            .then(dbWishlist => dbWishlist.remove())
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },
};