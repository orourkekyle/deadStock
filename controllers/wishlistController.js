const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("req.query - inside wishlistController: ", req.query);
        db.Wishlist.find(req.query)
            .then(dbWishlist => {
                console.log("dbWishlist - inside wishlistController findAll: ", dbWishlist);
                return res.json(dbWishlist)
            })
            .catch(err => res.status(422).json(err));
    },

    create: function({ body }, res) {
        console.log("body - inside wishlistController create: ", body)
        db.Wishlist
            .create(body)
            .then(({ googleId }) => db.GoogleUser.findOneAndUpdate({}, { $push: { sneakers: googleId } }, { new: true }))
            .then(dbGoogleUser => {
                res.json(dbGoogleUser);
            })
            .catch(err => res.status(422).json(err))
    },

    findById: function(req, res) {
        db.Wishlist
            .findById(req.params.sneakerId)
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err))
    },

    find: function(req, res) {
        db.GoogleUser.find({})
            .populate("sneakers")
            .then(dbGoogleUser => {
                res.json(dbGoogleUser);
            })
            .catch(err => res.status(422).json(err));
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