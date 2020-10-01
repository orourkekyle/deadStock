const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("req.query: ", req.query);
        db.Wishlist.find(req.query)
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

    findById: function(req, res) {
        db.Wishlist
            .findById(req.params.sneakerId)
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err))
    },

    remove: function(req, res) {
        console.log("req.params - inside wishlistController remove: ", req.params);
        db.Wishlist
            .findById({_id: req.params.id})
            .then(dbWishlist => dbWishlist.remove())
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },
};