const { GoogleUser, PopularWishlist } = require("../models");

module.exports = {
    createInUser: function (req, res) {
        // console.log("req - inside wishlistController createInUser: ", req);
        console.log("NEW SAVE - inside wishlistController createInUser: ", req.body);
        // console.log("req.user - inside wishlistController createInUser: ", req.user);
        GoogleUser.findOneAndUpdate(req.user.googleId, {
            $push: { wishlist: req.body }
        }, { new: true })
            .then(dbGoogleUser => {
                res.json(dbGoogleUser);
            })
            .catch(err => console.log(err))
    },

    createInPopular: function (req, res) {
        PopularWishlist
            .create(req.body)
            .then(dbPopularWishlist => res.json(dbPopularWishlist))
    },

    updateIdsInPopular: function (req, res) {
        // console.log("req - inside wishlistController createInPopular: ", req);
        console.log("req.body - inside wishlistController createInPopular: ", req.body);
        console.log("req.user - inside wishlistController createInPopular: ", req.user);
        PopularWishlist.findOneAndUpdate(req.body.sneakerId, {
            $push: { googleIds: req.user.googleId }
        }, { new: true })
            .then(dbPopularWishlist => {
                res.json(dbPopularWishlist);
            })
            .catch(err => console.log(err))
    },

    find: function (req, res) {
        GoogleUser.find({})
            .populate("sneakers")
            .then(dbGoogleUser => {
                res.json(dbGoogleUser);
            })
            .catch(err => console.log(err));
    },

    findPopular: function (req, res) {

    },

    remove: function (req, res) {
        console.log("req.params - inside wishlistController", req.params);
        console.log("req.user - inside wishlistController", req.user);
        GoogleUser.findOneAndUpdate({
            googleId: req.user.googleId
        }, {
            $pull: {
                wishlist: {
                    sneakerId: req.params.id
                }
            }
        }, { new: true })
        .then(dbGoogleUserWishlist => res.json(dbGoogleUserWishlist))
        .catch(err => console.log(err))
    },
    
    // findAll: function (req, res) {
    //     console.log("req.query - inside wishlistController: ", req.query);
    //     Wishlist.find(req.query)
    //         .then(dbWishlist => {
    //             console.log("dbWishlist - inside wishlistController findAll: ", dbWishlist);
    //             return res.json(dbWishlist)
    //         })
    //         .catch(err => res.status(422).json(err));
    // },

    // create: function(req, res) {
    //     console.log("req - inside wishlistController create: ", req);
    //     console.log("req.body - inside wishlistController create: ", req.body);
    //     console.log("req.user - inside wishlistController create: ", req.user);
    //     Wishlist
    //         .create(req.body)
    //         .then((req) => {
    //             console.log("this is req inside .then: ", req);
    //             GoogleUser.findByIdAndUpdate(req.user.googleId, { $push: { wishlist: req.body } }, { new: true })
    //         })
    //         .then(dbGoogleUser => {
    //             res.json(dbGoogleUser);
    //         })
    //         .catch(err => res.status(422).json(err))
    // },
};