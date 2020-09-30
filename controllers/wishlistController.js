const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("req.query: ", req.query);
        db.Wishlist.find(req.query)
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        console.log("req.body - inside wishlistController create: ", req.body)
        // let newSnkrObj = {
        //     shoeName: req.body.shoeName,
        //     brand: req.body.brand,
        //     colorway: req.body.colorway,
        //     gender: req.body.gender,
        //     retailPrice: req.body.retailPrice,
        //     year: req.body.year,
        //     image: req.body.image,
        //     sneakerId: req.body.sneakerId
        // }
        db.Wishlist
            .create(req.body)
            // , {
            //     $push: {Wishlist: req.body}
            // }, {new: true})
            .then(dbWishlist => {
                console.log("dbWishlist - inside wishlistController create: ", dbWishlist);
                return res.json(dbWishlist)
            })
            .catch(err => res.status(422).json(err))
    },
}