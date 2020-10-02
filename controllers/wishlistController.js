const { Wishlist, GoogleUser } = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("req.query - inside wishlistController: ", req.query);
        Wishlist.find(req.query)
            .then(dbWishlist => {
                console.log("dbWishlist - inside wishlistController findAll: ", dbWishlist);
                return res.json(dbWishlist)
            })
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        console.log("req.body - inside wishlistController create: ", req.body);
        console.log("req.user - inside wishlistController create: ", req.user);
        Wishlist
            .create(req.body)
            .then((req) => GoogleUser.findByIdAndUpdate(req.user.googleId, { $push: { wishlist: req.body } }, { new: true }))
            .then(dbGoogleUser => {
                res.json(dbGoogleUser);
            })
            .catch(err => res.status(422).json(err))
    },

    // findById: function(req, res) {
    //     Wishlist
    //         .findById(req.params.sneakerId)
    //         .then(dbWishlist => res.json(dbWishlist))
    //         .catch(err => res.status(422).json(err))
    // },
    // create: function(req, res) {
    //     console.log("req - inside wishlistController create: ", req)
    //         GoogleUser.findByIdAndUpdate(req.user.googleId, {
    //             $push: { sneakers: req.body }
    //         }, { new: true })
    //         .then(dbGoogleUser => {
    //             res.json(dbGoogleUser);
    //         })
    //         .catch(err => res.status(422).json(err))
    // },


    find: function(req, res) {
        GoogleUser.find({})
            .populate("sneakers")
            .then(dbGoogleUser => {
                res.json(dbGoogleUser);
            })
            .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        console.log("req.params - inside wishlistController remove: ", req.params);
        Wishlist
            .findById({_id: req.params.id})
            .then(dbWishlist => dbWishlist.remove())
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },
};